import { ExtendedError, Socket } from "socket.io";
import { FastifyInstance } from "fastify";
import { IncomingMessage } from "http";
import { parse as parseCookie } from "cookie";
import { Server as IOServer } from "socket.io";

interface AuthenticatedSocket extends Socket {
  user?: any;
}

interface handleGameEventsProps {
  fastify: FastifyInstance;
  io: IOServer;
  socket: AuthenticatedSocket;
}

interface GameState {
  squares: (string | null)[];
  xIsNext: boolean;
  playerX: string;
  playerO: string;
  players: string[];
  gameEnded: boolean; 
}

const gameState: GameState = {
  squares: Array(9).fill(null),
  xIsNext: true,
  playerX: "",
  playerO: "",
  players: [],
  gameEnded: false, 
};

const gameRoom = "tic-tac-toe";
const playersInRoom = new Map<string, string>();
const moveTimers = new Map<string, NodeJS.Timeout>();

function calculateWinner(squares: (string | null)[]) {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6],
  ];
  for (let [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

function resetGameState() {
  gameState.squares = Array(9).fill(null);
  gameState.xIsNext = true;
  gameState.playerX = "";
  gameState.playerO = "";
  gameState.players = [];
  gameState.gameEnded = false; 
  

  moveTimers.forEach(timer => clearTimeout(timer));
  moveTimers.clear();
}

function startTurnTimer(io: IOServer, currentPlayer: string) {

  if (gameState.gameEnded)
    return;

  moveTimers.forEach(clearTimeout);
  moveTimers.clear();

  const timeout = setTimeout(() => {

    if (gameState.gameEnded)
      return;
    
    const loser = currentPlayer;
    const winner = loser === gameState.playerX ? gameState.playerO : gameState.playerX;

    gameState.gameEnded = true;
    
    io.to(gameRoom).emit("game:timeout", { loser, winner });
    resetGameState();
    playersInRoom.clear();
  }, 10000);

  moveTimers.set(currentPlayer, timeout);
}

export default function handleGameEvents({ fastify, io, socket }: handleGameEventsProps) {
  const userData = socket.user;

  socket.on("join:game", () => {
    if (!userData?.username) return;

    const isUsernameTaken = Array.from(playersInRoom.values()).includes(userData.username);
    if (isUsernameTaken) {
      socket.emit("game:error", { message: "Username already taken in this game." });
      return;
    }

    socket.join(gameRoom);
    playersInRoom.set(socket.id, userData.username);

    const numPlayers = playersInRoom.size;

    if (numPlayers === 2) {
      const players = Array.from(playersInRoom.values());
      gameState.playerX = players[0];
      gameState.playerO = players[1];
      gameState.players = players;
      gameState.squares = Array(9).fill(null);
      gameState.xIsNext = true;
      gameState.gameEnded = false; 

      io.to(gameRoom).emit("game:start", {
        playerX: gameState.playerX,
        playerO: gameState.playerO,
      });

      startTurnTimer(io, gameState.playerX);
    } else {
      socket.emit("game:waiting");
    }
  });

  socket.on("game:move", ({ index, player }) => {

    if (gameState.gameEnded)
      return;

    const currentTimer = moveTimers.get(player);
    if (currentTimer) {
      clearTimeout(currentTimer);
      moveTimers.delete(player);
    }

    if (!gameState.players.includes(player)) return;
    if (gameState.squares[index] !== null) return;

    const isPlayerX = player === gameState.playerX;
    const isPlayersTurn = (isPlayerX && gameState.xIsNext) || (!isPlayerX && !gameState.xIsNext);

    if (!isPlayersTurn) return;
    if (calculateWinner(gameState.squares)) return;

    gameState.squares[index] = isPlayerX ? "X" : "O";
    gameState.xIsNext = !gameState.xIsNext;

    io.to(gameRoom).emit("game:move", {
      squares: gameState.squares,
      xIsNext: gameState.xIsNext,
    });

    const winner = calculateWinner(gameState.squares);
    const isDraw = gameState.squares.every(sq => sq !== null);
    
    if (winner || isDraw) {

      gameState.gameEnded = true;
      moveTimers.forEach(timer => clearTimeout(timer));
      moveTimers.clear();


      return;
    }

    const nextPlayer = gameState.xIsNext ? gameState.playerX : gameState.playerO;
    startTurnTimer(io, nextPlayer);
  });

  socket.on("game:restart", () => {


    if (!userData?.username || !gameState.players.includes(userData.username))
      return;

    moveTimers.forEach(timer => clearTimeout(timer));
    moveTimers.clear();

    gameState.squares = Array(9).fill(null);
    gameState.xIsNext = true;
    gameState.gameEnded = false; 

    io.to(gameRoom).emit("game:restart");

    startTurnTimer(io, gameState.playerX);
  });

  socket.on("game:draw", () => {
    resetGameState();
    playersInRoom.clear();
    socket.leave(gameRoom);
  });

  socket.on("leave:game", () => {
    if (playersInRoom.has(socket.id)) {
      const username = playersInRoom.get(socket.id);
      playersInRoom.delete(socket.id);
      socket.leave(gameRoom);

      moveTimers.forEach((timer, player) => {
        if (player === username) {
          clearTimeout(timer);
          moveTimers.delete(player);
        }
      });

      if (playersInRoom.size === 1) {
        const [remainingSocketId] = playersInRoom.keys();
        const remainingUsername = playersInRoom.get(remainingSocketId);
        io.to(remainingSocketId).emit("game:win-by-disconnect", {
          winner: remainingUsername,
          message: `You win! ${username} left the game.`,
        });
        const remainingSocket = io.sockets.sockets.get(remainingSocketId);
        if (remainingSocket) {
          remainingSocket.leave(gameRoom);
          playersInRoom.delete(remainingSocketId);
        }
        resetGameState();
      }

      if (playersInRoom.size === 0) resetGameState();
    }
  });

  socket.on("disconnect", () => {
    if (playersInRoom.has(socket.id)) {
      const username = playersInRoom.get(socket.id);
      playersInRoom.delete(socket.id);
      socket.leave(gameRoom);

      moveTimers.forEach((timer, player) => {
        if (player === username) {
          clearTimeout(timer);
          moveTimers.delete(player);
        }
      });

      if (playersInRoom.size === 1) {
        const [remainingSocketId] = playersInRoom.keys();
        const remainingUsername = playersInRoom.get(remainingSocketId);
        io.to(remainingSocketId).emit("game:win-by-disconnect", {
          winner: remainingUsername,
          message: `You win! ${username} disconnected.`,
        });
        const remainingSocket = io.sockets.sockets.get(remainingSocketId);
        if (remainingSocket) {
          remainingSocket.leave(gameRoom);
          playersInRoom.delete(remainingSocketId);
        }
        resetGameState();
      }

      if (playersInRoom.size === 0) resetGameState();
    }
  });
}