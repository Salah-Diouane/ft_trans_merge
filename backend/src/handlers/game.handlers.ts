import { ExtendedError, Socket } from "socket.io";
import { FastifyInstance } from "fastify";
import { IncomingMessage } from "http";
import { parse as parseCookie } from "cookie";
import { Server as IOServer } from "socket.io";

interface AuthenticatedSocket extends Socket {
  user?: any;
}

interface handleGameEventsProps {
    fastify: FastifyInstance
    io: IOServer
    socket: AuthenticatedSocket
}

interface User {
    id: number;
    username: string;
    first_name: string;
    family_name: string;
    image_url: string;
    cover_url: string;
}

interface Message {
    username: string;
    recipient: string;
    text: string;
    timestamp: string;
    blocked: boolean;
}

interface GameState {
  squares: (string | null)[];
  xIsNext: boolean;
  playerX: string;
  playerO: string;
  players: string[];
}

const gameState: GameState = {
  squares: Array(9).fill(null),
  xIsNext: true,
  playerX: "",
  playerO: "",
  players: []
};

const rooms = {};
const gameRoom = "tic-tac-toe";
const playersInRoom = new Map<string, string>();
const activePlayers = new Map<string, string>();


function calculateWinner(squares: (string | null)[]) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (
      squares[a] &&
      squares[a] === squares[b] &&
      squares[a] === squares[c]
    ) {
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
}

export default function handleGameEvents({fastify, io, socket} : handleGameEventsProps){


    const userData = (socket as AuthenticatedSocket).user;
    socket.on("join:game", () => {

      if (!userData?.username)
        return;
      const isUsernameTaken = Array.from(playersInRoom.values()).includes(userData.username);
      if (isUsernameTaken) {

        socket.emit("game:error", {
          message: "Username already taken in this game."
        });
        console.log("user is alraedy in the room !!!")
        return;
      }

      socket.join(gameRoom);
      playersInRoom.set(socket.id, userData.username);

      const numPlayers = playersInRoom.size;
      console.log(`${userData.username} joined game room. Total: ${numPlayers}`);

      if (numPlayers === 2) {
        const players = Array.from(playersInRoom.values());
        console.log("starting with players:", players);


        gameState.playerX = players[0];
        gameState.playerO = players[1];
        gameState.players = players;
        gameState.squares = Array(9).fill(null);
        gameState.xIsNext = true;

    
        io.to(gameRoom).emit("game:start", {
          playerX: gameState.playerX,
          playerO: gameState.playerO,
        });

      } else {

        socket.emit("game:waiting");
      }
    });

    socket.on("player:join", ({ username }) => {
      activePlayers.set(socket.id, username);
    })



    socket.on("game:move", ({ index, player }) => {
 
      if (!gameState.players.includes(player)) {
        console.log(" Player not in game:", player);
        return;
      }

      if (gameState.squares[index] !== null) {
        console.log(" Square already occupied:", index);
        return;
      }

  
      const isPlayerX = player === gameState.playerX;
      const isPlayersTurn = (isPlayerX && gameState.xIsNext) || (!isPlayerX && !gameState.xIsNext);

      if (!isPlayersTurn) {
        console.log(" Not player's turn:", player);
        return;
      }


      if (calculateWinner(gameState.squares)) {
        console.log(" already over");
        return;
      }

      gameState.squares[index] = isPlayerX ? "X" : "O";
      gameState.xIsNext = !gameState.xIsNext;


      io.to(gameRoom).emit("game:move", {
        squares: gameState.squares,
        xIsNext: gameState.xIsNext,
      });

      const winner = calculateWinner(gameState.squares);
      if (winner) {
        console.log(` Game won by: ${winner}`);
      } else if (gameState.squares.every(square => square !== null)) {
        console.log("🤝 Game ended in draw");
      }
    });

    socket.on("game:restart", () => {
      if (!userData?.username || !gameState.players.includes(userData.username)) {
        return;
      }

      gameState.squares = Array(9).fill(null);
      gameState.xIsNext = true;

      console.log(" Game restarted");
      io.to(gameRoom).emit("game:restart");
    });

    socket.on("player:left", ({ username }) => {
      playersInRoom.delete(username)
      console.log(`${username} is left the game !!!!!!`);
    });

    socket.on("leave:game", () => {

      if (playersInRoom.has(socket.id)) {

        const username = playersInRoom.get(socket.id);
        playersInRoom.delete(socket.id);
        socket.leave(gameRoom);

        console.log(`${username} left the game`);


        if (playersInRoom.size === 1) {
          const [remainingSocketId] = playersInRoom.keys();
          const remainingUsername = playersInRoom.get(remainingSocketId);

          let winner = null;

          if (gameState.playerX === remainingUsername || gameState.playerO === remainingUsername) {
            winner = remainingUsername;
          }

          if (winner) {
            io.to(remainingSocketId).emit("game:win-by-disconnect", {
              winner,
              message: `You win! ${username} left the game.`,
            });
          }

          const remainingSocket = io.sockets.sockets.get(remainingSocketId);
          if (remainingSocket) {
            remainingSocket.leave(gameRoom);
            playersInRoom.delete(remainingSocketId);
            console.log(`${remainingUsername} (the winner) was forcefully removed from the room after win-by-disconnect.`);
          }

          resetGameState();
        }


        if (playersInRoom.size > 0) {
          socket.to(gameRoom).emit("player:disconnected", {
            message: `${username} has left the game.`
          });
        }

        if (playersInRoom.size === 0) {
          resetGameState();
        }
      }
    });
}
