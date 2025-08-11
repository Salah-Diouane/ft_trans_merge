

// import { ExtendedError, Socket } from "socket.io";
// import { FastifyInstance } from "fastify";
// import { IncomingMessage } from "http";
// import { parse as parseCookie } from "cookie";
// import { Server as IOServer } from "socket.io";

// interface AuthenticatedSocket extends Socket {
//   user?: any;
// }

// interface handleGameEventsProps {
//   fastify: FastifyInstance;
//   io: IOServer;
//   socket: AuthenticatedSocket;
// }

// interface GameState {
//   squares: (string | null)[];
//   xIsNext: boolean;
//   playerX: string;
//   playerO: string;
//   players: string[];
//   gameEnded: boolean; 
// }

// const gameState: GameState = {
//   squares: Array(9).fill(null),
//   xIsNext: true,
//   playerX: "",
//   playerO: "",
//   players: [],
//   gameEnded: false, 
// };

// const gameRoom = "tic-tac-toe";
// const playersInRoom = new Map<string, string>();
// const moveTimers = new Map<string, NodeJS.Timeout>();

// function calculateWinner(squares: (string | null)[]) {
//   const lines = [
//     [0, 1, 2], [3, 4, 5], [6, 7, 8],
//     [0, 3, 6], [1, 4, 7], [2, 5, 8],
//     [0, 4, 8], [2, 4, 6],
//   ];
//   for (let [a, b, c] of lines) {
//     if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
//       return squares[a];
//     }
//   }
//   return null;
// }

// function resetGameState() {
//   gameState.squares = Array(9).fill(null);
//   gameState.xIsNext = true;
//   gameState.playerX = "";
//   gameState.playerO = "";
//   gameState.players = [];
//   gameState.gameEnded = false; 
  

//   moveTimers.forEach(timer => clearTimeout(timer));
//   moveTimers.clear();
// }

// function startTurnTimer(io: IOServer, currentPlayer: string) {

//   if (gameState.gameEnded)
//     return;

//   moveTimers.forEach(clearTimeout);
//   moveTimers.clear();

//   const timeout = setTimeout(() => {

//     if (gameState.gameEnded)
//       return;
    
//     const loser = currentPlayer;
//     const winner = loser === gameState.playerX ? gameState.playerO : gameState.playerX;

//     gameState.gameEnded = true;
    
//     io.to(gameRoom).emit("game:timeout", { loser, winner });
//     resetGameState();
//     playersInRoom.clear();
//   }, 10000);

//   moveTimers.set(currentPlayer, timeout);
// }

// export default function handleGameEvents({ fastify, io, socket }: handleGameEventsProps) {
//   const userData = socket.user;

//   socket.on("join:game", () => {
//     if (!userData?.username) return;

//     const isUsernameTaken = Array.from(playersInRoom.values()).includes(userData.username);
//     if (isUsernameTaken) {
//       socket.emit("game:error", { message: "Username already taken in this game." });
//       return;
//     }

//     socket.join(gameRoom);
//     playersInRoom.set(socket.id, userData.username);

//     const numPlayers = playersInRoom.size;

//     if (numPlayers === 2) {
//       const players = Array.from(playersInRoom.values());
//       gameState.playerX = players[0];
//       gameState.playerO = players[1];
//       gameState.players = players;
//       gameState.squares = Array(9).fill(null);
//       gameState.xIsNext = true;
//       gameState.gameEnded = false; 

//       io.to(gameRoom).emit("game:start", {
//         playerX: gameState.playerX,
//         playerO: gameState.playerO,
//       });

//       startTurnTimer(io, gameState.playerX);
//     } else {
//       socket.emit("game:waiting");
//     }
//   });

//   socket.on("game:move", ({ index, player }) => {

//     if (gameState.gameEnded)
//       return;

//     const currentTimer = moveTimers.get(player);
//     if (currentTimer) {
//       clearTimeout(currentTimer);
//       moveTimers.delete(player);
//     }

//     if (!gameState.players.includes(player)) return;
//     if (gameState.squares[index] !== null) return;

//     const isPlayerX = player === gameState.playerX;
//     const isPlayersTurn = (isPlayerX && gameState.xIsNext) || (!isPlayerX && !gameState.xIsNext);

//     if (!isPlayersTurn) return;
//     if (calculateWinner(gameState.squares)) return;

//     gameState.squares[index] = isPlayerX ? "X" : "O";
//     gameState.xIsNext = !gameState.xIsNext;

//     io.to(gameRoom).emit("game:move", {
//       squares: gameState.squares,
//       xIsNext: gameState.xIsNext,
//     });

//     const winner = calculateWinner(gameState.squares);
//     const isDraw = gameState.squares.every(sq => sq !== null);
    
//     if (winner || isDraw) {

//       gameState.gameEnded = true;
//       moveTimers.forEach(timer => clearTimeout(timer));
//       moveTimers.clear();


//       return;
//     }

//     const nextPlayer = gameState.xIsNext ? gameState.playerX : gameState.playerO;
//     startTurnTimer(io, nextPlayer);
//   });

//   socket.on("game:restart", () => {


//     if (!userData?.username || !gameState.players.includes(userData.username))
//       return;

//     moveTimers.forEach(timer => clearTimeout(timer));
//     moveTimers.clear();

//     gameState.squares = Array(9).fill(null);
//     gameState.xIsNext = true;
//     gameState.gameEnded = false; 

//     io.to(gameRoom).emit("game:restart");

//     startTurnTimer(io, gameState.playerX);
//   });

//   socket.on("game:draw", () => {
//     resetGameState();
//     playersInRoom.clear();
//     socket.leave(gameRoom);
//   });

//   socket.on("leave:game", () => {
//     if (playersInRoom.has(socket.id)) {
//       const username = playersInRoom.get(socket.id);
//       playersInRoom.delete(socket.id);
//       socket.leave(gameRoom);

//       moveTimers.forEach((timer, player) => {
//         if (player === username) {
//           clearTimeout(timer);
//           moveTimers.delete(player);
//         }
//       });

//       if (playersInRoom.size === 1) {
//         const [remainingSocketId] = playersInRoom.keys();
//         const remainingUsername = playersInRoom.get(remainingSocketId);
//         io.to(remainingSocketId).emit("game:win-by-disconnect", {
//           winner: remainingUsername,
//           message: `You win! ${username} left the game.`,
//         });
//         const remainingSocket = io.sockets.sockets.get(remainingSocketId);
//         if (remainingSocket) {
//           remainingSocket.leave(gameRoom);
//           playersInRoom.delete(remainingSocketId);
//         }
//         resetGameState();
//       }

//       if (playersInRoom.size === 0) resetGameState();
//     }
//   });

//   socket.on("disconnect", () => {
//     console.group("---->      lllllll")
//     if (playersInRoom.has(socket.id)) {
//       const username = playersInRoom.get(socket.id);
//       playersInRoom.delete(socket.id);
//       socket.leave(gameRoom);

//       moveTimers.forEach((timer, player) => {
//         if (player === username) {
//           clearTimeout(timer);
//           moveTimers.delete(player);
//         }
//       });

//       if (playersInRoom.size === 1) {
//         const [remainingSocketId] = playersInRoom.keys();
//         const remainingUsername = playersInRoom.get(remainingSocketId);
//         io.to(remainingSocketId).emit("game:win-by-disconnect", {
//           winner: remainingUsername,
//           message: `You win! ${username} disconnected.`,
//         });
//         const remainingSocket = io.sockets.sockets.get(remainingSocketId);
//         if (remainingSocket) {
//           remainingSocket.leave(gameRoom);
//           playersInRoom.delete(remainingSocketId);
//         }
//         resetGameState();
//       }

//       if (playersInRoom.size === 0)
//         resetGameState();
//     }
//   });
// }



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
  gameId: string;
}

interface GameSession {
  gameState: GameState;
  playersInRoom: Map<string, string>;
  moveTimers: Map<string, NodeJS.Timeout>;
}

// Store multiple game sessions
const gameSessions = new Map<string, GameSession>();
const waitingPlayers = new Set<string>();
const playerToGameMap = new Map<string, string>();

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

function createGameSession(gameId: string): GameSession {
  return {
    gameState: {
      squares: Array(9).fill(null),
      xIsNext: true,
      playerX: "",
      playerO: "",
      players: [],
      gameEnded: false,
      gameId
    },
    playersInRoom: new Map<string, string>(),
    moveTimers: new Map<string, NodeJS.Timeout>()
  };
}

function resetGameState(session: GameSession) {
  session.gameState.squares = Array(9).fill(null);
  session.gameState.xIsNext = true;
  session.gameState.playerX = "";
  session.gameState.playerO = "";
  session.gameState.players = [];
  session.gameState.gameEnded = false;

  session.moveTimers.forEach(timer => clearTimeout(timer));
  session.moveTimers.clear();
}

function startTurnTimer(io: IOServer, session: GameSession, currentPlayer: string) {
  if (session.gameState.gameEnded) return;

  session.moveTimers.forEach(clearTimeout);
  session.moveTimers.clear();

  const timeout = setTimeout(() => {
    if (session.gameState.gameEnded) return;
    
    const loser = currentPlayer;
    const winner = loser === session.gameState.playerX ? session.gameState.playerO : session.gameState.playerX;

    session.gameState.gameEnded = true;
    
    io.to(session.gameState.gameId).emit("game:timeout", { loser, winner });
    cleanupGameSession(session.gameState.gameId);
  }, 10000);

  session.moveTimers.set(currentPlayer, timeout);
}

function cleanupGameSession(gameId: string) {
  const session = gameSessions.get(gameId);
  if (session) {
    // Clear all timers
    session.moveTimers.forEach(timer => clearTimeout(timer));
    
    // Remove players from maps
    session.playersInRoom.forEach((username, socketId) => {
      playerToGameMap.delete(socketId);
      waitingPlayers.delete(socketId);
    });
    
    // Remove the game session
    gameSessions.delete(gameId);
  }
}

function findOrCreateGame(socketId: string, username: string): string {
  // Check if player is already in a game
  const existingGameId = playerToGameMap.get(socketId);
  if (existingGameId && gameSessions.has(existingGameId)) {
    return existingGameId;
  }

  // Look for a waiting game with one player
  for (const [gameId, session] of gameSessions) {
    if (session.playersInRoom.size === 1 && !session.playersInRoom.has(socketId)) {
      // Check if username is already taken in this game
      const usernames = Array.from(session.playersInRoom.values());
      if (!usernames.includes(username)) {
        return gameId;
      }
    }
  }

  // Create new game
  const gameId = `game_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  gameSessions.set(gameId, createGameSession(gameId));
  return gameId;
}

export default function handleGameEvents({ fastify, io, socket }: handleGameEventsProps) {
  const userData = socket.user;

  socket.on("join:game", () => {
    if (!userData?.username) return;

    // Remove from waiting if they were waiting
    waitingPlayers.delete(socket.id);

    const gameId = findOrCreateGame(socket.id, userData.username);
    const session = gameSessions.get(gameId);
    
    if (!session) return;

    // Check if username is already taken in this specific game
    const existingUsernames = Array.from(session.playersInRoom.values());
    if (existingUsernames.includes(userData.username)) {
      socket.emit("game:error", { message: "Username already taken in this game." });
      return;
    }

    // Join the specific game room
    socket.join(gameId);
    session.playersInRoom.set(socket.id, userData.username);
    playerToGameMap.set(socket.id, gameId);

    const numPlayers = session.playersInRoom.size;

    if (numPlayers === 2) {
      // Start the game
      const players = Array.from(session.playersInRoom.values());
      session.gameState.playerX = players[0];
      session.gameState.playerO = players[1];
      session.gameState.players = players;
      session.gameState.squares = Array(9).fill(null);
      session.gameState.xIsNext = true;
      session.gameState.gameEnded = false;

      io.to(gameId).emit("game:start", {
        playerX: session.gameState.playerX,
        playerO: session.gameState.playerO,
      });

      startTurnTimer(io, session, session.gameState.playerX);
    } else {
      // Wait for another player
      waitingPlayers.add(socket.id);
      socket.emit("game:waiting");
    }
  });

  socket.on("game:move", ({ index, player }) => {
    const gameId = playerToGameMap.get(socket.id);
    if (!gameId) return;

    const session = gameSessions.get(gameId);
    if (!session || session.gameState.gameEnded) return;

    const currentTimer = session.moveTimers.get(player);
    if (currentTimer) {
      clearTimeout(currentTimer);
      session.moveTimers.delete(player);
    }

    if (!session.gameState.players.includes(player)) return;
    if (session.gameState.squares[index] !== null) return;

    const isPlayerX = player === session.gameState.playerX;
    const isPlayersTurn = (isPlayerX && session.gameState.xIsNext) || (!isPlayerX && !session.gameState.xIsNext);

    if (!isPlayersTurn) return;
    if (calculateWinner(session.gameState.squares)) return;

    session.gameState.squares[index] = isPlayerX ? "X" : "O";
    session.gameState.xIsNext = !session.gameState.xIsNext;

    io.to(gameId).emit("game:move", {
      squares: session.gameState.squares,
      xIsNext: session.gameState.xIsNext,
    });

    const winner = calculateWinner(session.gameState.squares);
    const isDraw = session.gameState.squares.every(sq => sq !== null);
    
    if (winner || isDraw) {
      session.gameState.gameEnded = true;
      session.moveTimers.forEach(timer => clearTimeout(timer));
      session.moveTimers.clear();
      return;
    }

    const nextPlayer = session.gameState.xIsNext ? session.gameState.playerX : session.gameState.playerO;
    startTurnTimer(io, session, nextPlayer);
  });

  socket.on("game:restart", () => {
    const gameId = playerToGameMap.get(socket.id);
    if (!gameId) return;

    const session = gameSessions.get(gameId);
    if (!session || !userData?.username || !session.gameState.players.includes(userData.username)) return;

    session.moveTimers.forEach(timer => clearTimeout(timer));
    session.moveTimers.clear();

    session.gameState.squares = Array(9).fill(null);
    session.gameState.xIsNext = true;
    session.gameState.gameEnded = false;

    io.to(gameId).emit("game:restart");
    startTurnTimer(io, session, session.gameState.playerX);
  });

  socket.on("game:draw", () => {
    const gameId = playerToGameMap.get(socket.id);
    if (!gameId) return;

    cleanupGameSession(gameId);
    socket.leave(gameId);
  });

  socket.on("leave:game", () => {
    const gameId = playerToGameMap.get(socket.id);
    if (!gameId) return;

    const session = gameSessions.get(gameId);
    if (!session || !session.playersInRoom.has(socket.id)) return;

    const username = session.playersInRoom.get(socket.id);
    session.playersInRoom.delete(socket.id);
    playerToGameMap.delete(socket.id);
    waitingPlayers.delete(socket.id);
    socket.leave(gameId);

    // Clear timers for this player
    session.moveTimers.forEach((timer, player) => {
      if (player === username) {
        clearTimeout(timer);
        session.moveTimers.delete(player);
      }
    });

    if (session.playersInRoom.size === 1) {
      // One player remaining - they win by disconnect
      const [remainingSocketId] = session.playersInRoom.keys();
      const remainingUsername = session.playersInRoom.get(remainingSocketId);
      
      io.to(remainingSocketId).emit("game:win-by-disconnect", {
        winner: remainingUsername,
        message: `You win! ${username} left the game.`,
      });

      const remainingSocket = io.sockets.sockets.get(remainingSocketId);
      if (remainingSocket) {
        remainingSocket.leave(gameId);
        playerToGameMap.delete(remainingSocketId);
        waitingPlayers.delete(remainingSocketId);
      }
      
      cleanupGameSession(gameId);
    } else if (session.playersInRoom.size === 0) {
      // No players left
      cleanupGameSession(gameId);
    }
  });

  socket.on("disconnect", () => {
    console.log("Player disconnected:", socket.id);
    
    const gameId = playerToGameMap.get(socket.id);
    if (!gameId) return;

    const session = gameSessions.get(gameId);
    if (!session || !session.playersInRoom.has(socket.id)) return;

    const username = session.playersInRoom.get(socket.id);
    session.playersInRoom.delete(socket.id);
    playerToGameMap.delete(socket.id);
    waitingPlayers.delete(socket.id);
    socket.leave(gameId);

    // Clear timers for this player
    session.moveTimers.forEach((timer, player) => {
      if (player === username) {
        clearTimeout(timer);
        session.moveTimers.delete(player);
      }
    });

    if (session.playersInRoom.size === 1) {
      // One player remaining - they win by disconnect
      const [remainingSocketId] = session.playersInRoom.keys();
      const remainingUsername = session.playersInRoom.get(remainingSocketId);
      
      io.to(remainingSocketId).emit("game:win-by-disconnect", {
        winner: remainingUsername,
        message: `You win! ${username} disconnected.`,
      });

      const remainingSocket = io.sockets.sockets.get(remainingSocketId);
      if (remainingSocket) {
        remainingSocket.leave(gameId);
        playerToGameMap.delete(remainingSocketId);
        waitingPlayers.delete(remainingSocketId);
      }
      
      cleanupGameSession(gameId);
    } else if (session.playersInRoom.size === 0) {
      // No players left
      cleanupGameSession(gameId);
    }
  });
}