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
          
          // 3. Finally send chat history after a small delay to ensure profile and users are processed
          // setTimeout(() => {
            db.all("SELECT * FROM messages ORDER BY timestamp ASC", (err, history: Message[]) => {
              if (!err) {
                console.log("Sending chat history:", history.length, "messages");
                socket.emit("chat:history", history);
              }
            });
          // }, 100); // Small delay to ensure order
        }
      });
    });

    // socket.on("chat:message", (data: Partial<Message>) => {
    //   const { username, recipient, text, blocked } = data;
      
    //   if (!username || !recipient || !text || !blocked) {
    //     console.log("Missing required fields in message");
    //     return;
    //   }

    //   console.log("New message:", { username, recipient, text });

    //   db.run(
    //     "INSERT INTO messages (sender, recipient, text, blocked) VALUES (?, ?, ?, ?)",
    //     [username, recipient, text, blocked],
    //     function(err) {
    //       if (!err) {
    //         const messageData = {
    //           sender: username,
    //           recipient,
    //           text,
    //           timestamp: new Date().toISOString(),
    //           blocked,
    //         };
            
    //         console.log("Broadcasting message:", messageData);
    //         io.emit("chat:message", messageData);
    //       } else {
    //         console.error("Error saving message:", err);
    //       }
    //     }
    //   );
    // });

    socket.on("chat:message", (data: Partial<Message>) => {
      const { username, recipient, text } = data;

      if (!username || !recipient || !text) {
        console.log("Missing required fields in message");
        return;
      }

      // Check if recipient has blocked the sender
      db.get(
        "SELECT 1 FROM blocked_users WHERE blocker = ? AND blocked = ?",
        [recipient, username],
        (err, row) => {
          if (err) {
            console.error("Error checking block status:", err);
            return;
          }

          if (row) {
            console.log(`❌ Message from ${username} to ${recipient} is blocked.`);
            return;
          }

          // Insert the message
          db.run(
            "INSERT INTO messages (sender, recipient, text) VALUES (?, ?, ?)",
            [username, recipient, text],
            function (err) {
              if (err) {
                console.error("Error saving message:", err);
                return;
              }

              const messageData = {
                sender: username,
                recipient,
                text,
                timestamp: new Date().toISOString(),
              };

              console.log("✅ Broadcasting message:", messageData);
              io.emit("chat:message", messageData);
            }
          );
        }
      );
    });

// Block user
socket.on("block:user", ({ blocker, blocked }) => {
  console.log("blocker")
  console.log(blocker)
  console.log("blocked")
  console.log(blocked)
  db.run(
    "INSERT OR IGNORE INTO blocked_users (blocker, blocked) VALUES (?, ?)",
    [blocker, blocked],
    (err) => {
      if (err) console.error("Failed to block user:", err);
      else console.log(`🚫 ${blocker} blocked ${blocked}`);
    }
  );
});

// Unblock user
socket.on("unblock:user", ({ blocker, blocked }) => {
  db.run(
    "DELETE FROM blocked_users WHERE blocker = ? AND blocked = ?",
    [blocker, blocked],
    (err) => {
      if (err) console.error("Failed to unblock user:", err);
      else console.log(`✅ ${blocker} unblocked ${blocked}`);
    }
  );
});


    socket.on("disconnect", () => {
      console.log("User disconnected:", socket.id);
    });
  });
}