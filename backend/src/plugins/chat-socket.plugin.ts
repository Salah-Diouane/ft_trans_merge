// import { Server as IOServer, Socket } from "socket.io";
// import { FastifyInstance } from "fastify";
// import { Console } from "console";

// interface Message {
//   username: string;
//   recipient: string;
//   text: string;
//   timestamp: string;
// }

// interface User {  
//   id: number;
//   username: string;
//   first_name: string;
//   family_name: string;
//   image_url: string;
//   cover_url: string;
// }

// interface AuthenticatedSocket extends Socket {
//   user?: any;
// }

// export default function setupSocketIO( fastify: FastifyInstance, io: IOServer) {
//   const db = fastify.db;

//   const cookie = require("cookie");

//   io.use(async (socket: AuthenticatedSocket, next) => {
//     try {
//       const cookies = socket.request.headers.cookie;
      
//       if (!cookies) {
//         throw new Error("No cookie transmitted.");
//       }

//       const parsedCookies = cookie.parse(cookies);
//       const token = parsedCookies.accessToken;

//       if (!token) {
//         throw new Error("No access token.");
//       }

//       // If fastify.jwt.verify returns a promise, await it
//       // Otherwise, use the synchronous version as shown above
//       const decodedToken = await fastify.jwt.verify(token);
      
//       socket.user = decodedToken;
//       console.log("User authenticated:", decodedToken);
      
//       next(); // Success - continue connection
      
//     } catch (error) {
//       console.log("Authentication failed:");
//       next(new Error("Authentication failed"));
//     }
//   });



//   io.on("connection", (socket: Socket) => {
//     console.log("A user connected:", socket.id);
//     // const token = request.cookies.accessToken;

//     socket.on("get-my-profile", () => {
//       const userData = (socket as AuthenticatedSocket).user;
//       console.log("🔵 Sending profile-data for:", userData?.username);
      
//       socket.emit("profile-data", {
//         user: userData?.username,
//       });
//     });
    

//     socket.on("request:init", () => {
//       db.all("SELECT * FROM user_authentication ORDER BY id ASC", (err, user_authentication: User[]) => {
//         if (!err)
//           socket.emit("user:list", user_authentication);
//       });

//       db.all("SELECT * FROM messages ORDER BY timestamp ASC", (err, history: Message[]) => {
//         if (!err)
//           socket.emit("chat:history", history);
//       });
//     });

//     socket.on("chat:message", (data: Partial<Message>) => {
//       // console.log("is NOT empty in backend")
//       const { username, recipient, text } = data;
//       if (!username || !recipient || !text){
//         console.log("is empty in backend")
//         return;
//       }
//       console.log("username");
//       console.log(username);
//       console.log("recipient");
//       console.log(recipient);
//       console.log("text");
//       console.log(text);
//       db.run(
//         "INSERT INTO messages (sender, recipient, text) VALUES (?, ?, ?)",
//         [username, recipient, text],
//         (err) => {
//           if (!err) {
//             io.emit("chat:message", {
//               sender: username,
//               recipient,
//               text,
//               timestamp: new Date().toISOString(),
//             });
//           }
//         }
//       );
//     });

//     // socket.on("get-my-profile", (socket: AuthenticatedSocket) => {
//     //   const userData = socket.user;
//     //   // const originalToken = socket.originalToken;
      
//     //   socket.emit("profile-data", {
//     //     user: userData,
//     //     // token: originalToken // If you need to send the original token back
//     //   });
//     // });

    

//     socket.on("disconnect", () => {
//       console.log("Disconnected:", socket.id);
//     });
//   });
// }



// Fixed backend socket handler

import { Server as IOServer, Socket } from "socket.io";
import { FastifyInstance } from "fastify";

interface Message {
  username: string;
  recipient: string;
  text: string;
  timestamp: string;
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

    socket.on("chat:message", (data: Partial<Message>) => {
      const { username, recipient, text } = data;
      
      if (!username || !recipient || !text) {
        console.log("Missing required fields in message");
        return;
      }

      console.log("New message:", { username, recipient, text });

      db.run(
        "INSERT INTO messages (sender, recipient, text) VALUES (?, ?, ?)",
        [username, recipient, text],
        function(err) {
          if (!err) {
            const messageData = {
              sender: username,
              recipient,
              text,
              timestamp: new Date().toISOString(),
            };
            
            console.log("Broadcasting message:", messageData);
            io.emit("chat:message", messageData);
          } else {
            console.error("Error saving message:", err);
          }
        }
      );
    });

    socket.on("disconnect", () => {
      console.log("User disconnected:", socket.id);
    });
  });
}