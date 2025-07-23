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

export default function setupSocketIO( fastify: FastifyInstance, io: IOServer) {
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

      // If fastify.jwt.verify returns a promise, await it
      // Otherwise, use the synchronous version as shown above
      const decodedToken = await fastify.jwt.verify(token);
      
      socket.user = decodedToken;
      console.log("User authenticated:", decodedToken);
      
      next(); // Success - continue connection
      
    } catch (error) {
      console.log("Authentication failed:");
      next(new Error("Authentication failed"));
    }
  });



  io.on("connection", (socket: Socket) => {
    console.log("A user connected:", socket.id);
    // const token = request.cookies.accessToken;

    socket.on("get-my-profile", () => {
      const userData = (socket as AuthenticatedSocket).user;
      console.log("🔵 Sending profile-data for:", userData?.username);
      
      socket.emit("get-my-profile", {
        user: userData?.username,
      });
    });
    

    socket.on("request:init", () => {
      db.all("SELECT * FROM user_authentication ORDER BY id ASC", (err, user_authentication: User[]) => {
        if (!err)
          socket.emit("user:list", user_authentication);
      });

      db.all("SELECT * FROM messages ORDER BY timestamp ASC", (err, history: Message[]) => {
        if (!err)
          socket.emit("chat:history", history);
      });
    });

    socket.on("chat:message", (data: Partial<Message>) => {
      const { username, recipient, text } = data;
      if (!username || !recipient || !text)
        return;
      console.log("username");
      console.log(username);
      console.log("recipient");
      console.log(recipient);
      console.log("text");
      console.log(text);
      db.run(
        "INSERT INTO messages (sender, recipient, text) VALUES (?, ?, ?)",
        [username, recipient, text],
        (err) => {
          if (!err) {
            io.emit("chat:message", {
              username,
              recipient,
              text,
              timestamp: new Date().toISOString(),
            });
          }
        }
      );
    });

    // socket.on("get-my-profile", (socket: AuthenticatedSocket) => {
    //   const userData = socket.user;
    //   // const originalToken = socket.originalToken;
      
    //   socket.emit("profile-data", {
    //     user: userData,
    //     // token: originalToken // If you need to send the original token back
    //   });
    // });

    

    socket.on("disconnect", () => {
      console.log("Disconnected:", socket.id);
    });
  });
}

// io.use((socket, next) => {
//   const cookies = socket.request.headers.cookie;
//   if (!cookies) {
//     return next(new Error("No cookie transmitted."));
//   }
// // 
//   const parsedCookies = cookie.parse(cookies);
//   const token = parsedCookies.accessToken;

//   if (!token) {
//     return next(new Error("No access token."));
//   }

//   // Verify your token (e.g., with JWT)
//   // jwt.verify(token, "your-secret", (err, decoded) => {
//   //   if (err) return next(new Error("Invalid token."));
//   //   socket.user = decoded; // store decoded user info
//   //   next();
//   // });
//   const decodedToken = fastify.jwt.decode(token)
//   console.log("-----------------------> : decodedToken")
//   console.log(decodedToken)
// });


// import { Server as IOServer, Socket } from "socket.io";
// import { FastifyInstance } from "fastify";
// import cookie from "cookie";

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

// export default function setupSocketIO(fastify: FastifyInstance, io: IOServer) {
//   const db = fastify.db;

//   // io.use(async (socket, next) => {
//   //   console.log("kvhvcbdfhvcdcivdejklc")
//   //   try {
//   //     const cookiesHeader = socket.request.headers.cookie;
//   //     if (!cookiesHeader) {
//   //       return next(new Error("No cookie transmitted."));
//   //     }
//   //     const cookies = cookie.parse(cookiesHeader);
//   //     const token = cookies.accessToken;
//   //     if (!token) {
//   //       return next(new Error("No access token."));
//   //     }

//   //     // Verify token properly:
//   //     const decoded = await fastify.jwt.verify(token);
//   //     socket.data.user = decoded; // store user info in socket.data
//   //     next();
//   //   } catch (err) {
//   //     next(new Error("Authentication error: "));
//   //   }
//   // });


//   io.on("connection", (socket: Socket) => {
//     console.log("A user connected:", socket.id, "user:", socket.data.user);

//     socket.on("request:init", () => {
//       db.all("SELECT * FROM user_authentication ORDER BY id ASC", (err, user_authentication: User[]) => {
//         if (!err) socket.emit("user:list", user_authentication);
//       });

//       db.all("SELECT * FROM messages ORDER BY timestamp ASC", (err, history: Message[]) => {
//         if (!err) socket.emit("chat:history", history);
//       });
//     });

//     socket.on("chat:message", (data: Partial<Message>) => {
//       const { recipient, text } = data;
//       const username = socket.data.user?.username;
//       if (!username || !recipient || !text) return;

//       db.run(
//         "INSERT INTO messages (sender, recipient, text) VALUES (?, ?, ?)",
//         [username, recipient, text],
//         (err) => {
//           if (!err) {
//             io.emit("chat:message", {
//               username,
//               recipient,
//               text,
//               timestamp: new Date().toISOString(),
//             });
//           }
//         }
//       );
//     });

//     socket.on("disconnect", () => {
//       console.log("Disconnected:", socket.id);
//     });
//   });
// }


// import { Server as IOServer, Socket } from "socket.io";
// import { FastifyInstance } from "fastify";

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

// export default function setupSocketIO(
//   fastify: FastifyInstance,
//   io: IOServer
// ) {
//   const db = fastify.db;
//   const cookie = require("cookie");

//   // Async middleware approach
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

//   io.on("connection", (socket: AuthenticatedSocket) => {
//     console.log(`User ${socket.user?.username || 'Unknown'} connected with socket ${socket.id}`);

//     socket.on("request:init", () => {
//       db.all("SELECT * FROM user_authentication ORDER BY id ASC", (err: any, user_authentication: unknown[]) => {
//         if (!err)
//           socket.emit("user:list", user_authentication as User[]);
//       });
    
//       db.all("SELECT * FROM messages ORDER BY timestamp ASC", (err: any, history: unknown[]) => {
//         if (!err)
//           socket.emit("chat:history", history as Message[]);
//       });
//     });

//     socket.on("chat:message", async (data: Partial<Message>) => {
//       try {
//         const { username, recipient, text } = data;
        
//         if (!username || !recipient || !text) {
//           socket.emit("error", { message: "Missing required message data" });
//           return;
//         }

//         // Optionally verify the username matches the authenticated user
//         if (socket.user && socket.user.username !== username) {
//           socket.emit("error", { message: "Username mismatch" });
//           return;
//         }

//         await new Promise<void>((resolve, reject) => {
//           db.run(
//             "INSERT INTO messages (sender, recipient, text) VALUES (?, ?, ?)",
//             [username, recipient, text],
//             function(err) {
//               if (err) reject(err);
//               else resolve();
//             }
//           );
//         });

//         const messageData = {
//           username,
//           recipient,
//           text,
//           timestamp: new Date().toISOString(),
//         };
        
//         io.emit("chat:message", messageData);
        
//       } catch (error) {
//         console.error("Error saving message:", error);
//         socket.emit("error", { message: "Failed to save message" });
//       }
//     });

//     socket.on("disconnect", (reason) => {
//       console.log(`User ${socket.user?.username || 'Unknown'} disconnected: ${reason}`);
//     });
//   });
// }