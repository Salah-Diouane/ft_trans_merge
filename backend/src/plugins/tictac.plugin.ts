
import { Server as IOServer, Socket } from "socket.io";
import { FastifyInstance } from "fastify";

interface Message {
  username: string;
  recipient: string;
  text: string;
  timestamp: string;
  blocked: boolean;
}

interface User {
  id: number;
  username: string;
  first_name: string;
  family_name: string;
  image_url: string;
  cover_url: string;
}

interface AuthenticatedSocket extends Socket {
  user?: any;
}

interface GameState {
  squares: (string | null)[];
  xIsNext: boolean;
  playerX: string;
  playerO: string;
  players: string[];
}

const rooms = {};
const gameRoom = "tic-tac-toe";
const playersInRoom = new Map<string, string>();
const activePlayers = new Map<string, string>();
const gameState: GameState = {
  squares: Array(9).fill(null),
  xIsNext: true,
  playerX: "",
  playerO: "",
  players: []
};

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

export default function setupSocketIO(
  fastify: FastifyInstance,
  io: IOServer
) {
  const db = fastify.db;
  const cookie = require("cookie");

  io.use(async (socket: AuthenticatedSocket, next) => {
    try {
      const cookies = socket.request.headers.cookie;

      if (!cookies) {
        throw new Error("No cookie transmitted.");
      }

      const parsedCookies = cookie.parse(cookies);
      const token = parsedCookies.accessToken;

      if (!token) {
        throw new Error("No access token.");
      }

      const decodedToken = await fastify.jwt.verify(token);

      socket.user = decodedToken;
      console.log("User authenticated:", decodedToken);

      next();
    } catch (error) {
      console.log("Authentication failed:", error);
      next(new Error("Authentication failed"));
    }
  });

  io.on("connection", (socket: Socket) => {
    console.log("A user connected:", socket.id);

    // Send profile immediately on connection
    const userData = (socket as AuthenticatedSocket).user;
    if (userData) {
      console.log("🔵 Sending immediate profile-data for:", userData?.username);
      socket.emit("profile-data", {
        user: userData?.username,
      });
    }

    socket.on("get-my-profile", () => {
      const userData = (socket as AuthenticatedSocket).user;
      console.log("🔵 Sending profile-data for:", userData?.username);

      socket.emit("profile-data", {
        user: userData?.username,
      });
    });

    socket.on("request:init", () => {
      // Send profile first, then users, then history
      const userData = (socket as AuthenticatedSocket).user;

      // 1. Send profile data first
      socket.emit("profile-data", {
        user: userData?.username,
      });

      // 2. Then send users list
      db.all("SELECT * FROM user_authentication ORDER BY id ASC", (err, user_authentication: User[]) => {
        if (!err) {
          socket.emit("user:list", user_authentication);

          // 3. Finally send chat history
          db.all("SELECT * FROM messages ORDER BY timestamp ASC", (err, history: Message[]) => {
            if (!err) {
              console.log("Sending chat history:", history.length, "messages");
              socket.emit("chat:history", history);
            }
          });
        }
      });
    });

 

    // Game-related socket events
    socket.on("join:game", () => {
      if (!userData?.username) return;

      socket.join(gameRoom);
      playersInRoom.set(socket.id, userData.username);

      const numPlayers = playersInRoom.size;
      console.log(`${userData.username} joined game room. Total: ${numPlayers}`);

      if (numPlayers === 2) {
        const players = Array.from(playersInRoom.values());
        console.log("✅ Game starting with players:", players);

        // Reset game state and assign players
        gameState.playerX = players[0];
        gameState.playerO = players[1];
        gameState.players = players;
        gameState.squares = Array(9).fill(null);
        gameState.xIsNext = true;

        // Tell both players to start game and assign X / O
        io.to(gameRoom).emit("game:start", {
          playerX: gameState.playerX,
          playerO: gameState.playerO,
        });
      } else {
        // Inform the joining user they are waiting for someone
        socket.emit("game:waiting");
      }
    });

    socket.on("player:join", ({username})=> {
      activePlayers.set(socket.id, username);
    }) 

    socket.on("player:left", ({username}) => {
      playersInRoom.delete(username)
      console.log(`${username} is left the game !!!!!!`);
    });

    socket.on("game:move", ({ index, player }) => {
      // Validate the move
      if (!gameState.players.includes(player)) {
        console.log(" Player not in game:", player);
        return;
      }

      if (gameState.squares[index] !== null) {
        console.log(" Square already occupied:", index);
        return;
      }

      // Check if it's the player's turn
      const isPlayerX = player === gameState.playerX;
      const isPlayersTurn = (isPlayerX && gameState.xIsNext) || (!isPlayerX && !gameState.xIsNext);

      if (!isPlayersTurn) {
        console.log(" Not player's turn:", player);
        return;
      }

      // Check if game is already over
      if (calculateWinner(gameState.squares)) {
        console.log(" Game already over");
        return;
      }

      // Make the move
      gameState.squares[index] = isPlayerX ? "X" : "O";
      gameState.xIsNext = !gameState.xIsNext;

      console.log(` Move made by ${player} at position ${index}`);

      // Broadcast the updated game state
      io.to(gameRoom).emit("game:move", {
        squares: gameState.squares,
        xIsNext: gameState.xIsNext,
      });

      // Check for winner
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

      // Reset only the board, keep the same players
      gameState.squares = Array(9).fill(null);
      gameState.xIsNext = true;

      console.log(" Game restarted");
      io.to(gameRoom).emit("game:restart");
    });

    socket.on("leave:game", () => {
      if (playersInRoom.has(socket.id)) {
        const username = playersInRoom.get(socket.id);
        playersInRoom.delete(socket.id);
        socket.leave(gameRoom);
        
        console.log(`${username} left the game`);
        
        // If there was another player, notify them
        if (playersInRoom.size > 0) {
          socket.to(gameRoom).emit("player:disconnected", {
            message: `${username} has left the game.`
          });
        }
        
        // Reset game state if no players left
        if (playersInRoom.size === 0) {
          resetGameState();
        }
      }
    });

    socket.on("disconnect", () => {
      console.log("User disconnected:", socket.id);
      activePlayers.delete(socket.id)

      if (playersInRoom.has(socket.id)) {
        const username = playersInRoom.get(socket.id);
        playersInRoom.delete(socket.id);
        
        console.log("Removed player from room:", socket.id);
        
        // Notify the remaining player
        if (playersInRoom.size != 2) {
          socket.to(gameRoom).emit("player:disconnected", {
            message: `${username} has disconnected.`
          });
          // resetGameState();
        }
        
        // Reset game state if no players left
        if (playersInRoom.size === 0) {
          resetGameState();
        }
      }
    });
  });
}


