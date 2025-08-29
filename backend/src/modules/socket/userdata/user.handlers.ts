// import { ExtendedError, Socket } from "socket.io";
// import { FastifyInstance } from "fastify";
// import { IncomingMessage } from "http";
// import { parse as parseCookie } from "cookie";
// import { Server as IOServer } from "socket.io";

// interface AuthenticatedSocket extends Socket {
//   user?: any;
//   online?: boolean
// }

// interface handleUserEventsProps {
//     fastify: FastifyInstance
//     io: IOServer
//     socket: AuthenticatedSocket
// }

// interface User {
//     id: number;
//     online: boolean
//     username: string;
//     first_name: string;
//     family_name: string;
//     image_url: string;
//     cover_url: string;
// }

// interface Message {
//     username: string;
//     recipient: string;
//     text: string;
//     timestamp: string;
//     blocked: boolean;
// }

// export default function handleUserEvents({ fastify, io, socket }: handleUserEventsProps) {
//     const db = fastify.db;
//     const userData = socket.user;
  
//     if (userData) {
//       socket.online = true;
  
//       // Track user’s socket
//       socket.join(`user:${userData.username}`);
  
//       // Broadcast to everyone: this user is now online
//       io.emit("user:status", { username: userData.username, online: true });
  
//       // Send self profile immediately
//       socket.emit("profile-data", {
//         user: userData.username,
//         online: true,
//       });
//     }
  
//     // When disconnected
//     socket.on("disconnect", () => {
//         console.log("loooooooog ouuuuuuut")
//     //   if (userData) {
//         socket.online = false;
  
//         // Broadcast offline status
//         io.emit("user:status", { username: userData.username, online: false });
//     //   }
//     });
  
//     socket.on("get-my-profile", () => {
//       const userData = socket.user;
//       socket.emit("profile-data", {
//         user: userData?.username,
//         online: socket.online ?? false,
//       });
//     });
  
//     socket.on("request:init", () => {
//       db.all("SELECT * FROM user_authentication ORDER BY id ASC", (err, user_authentication: User[]) => {
//         if (!err) {
//           // enrich DB users with online state
//           const enrichedUsers = user_authentication.map((u) => ({
//             ...u,
//             online: io.sockets.sockets.size > 0 &&
//                     Array.from(io.sockets.sockets.values())
//                       .some((s: any) => s.user?.username === u.username && s.online),
//           }));
  
//           socket.emit("user:list", enrichedUsers);
//           console.log("============> enrichedUsers")
//           console.log(enrichedUsers)
  
//         //   db.all("SELECT * FROM messages ORDER BY timestamp ASC", (err, history: Message[]) => {
//           db.all("SELECT * FROM messages WHERE sender = ? OR recipient = ? ORDER BY timestamp ASC", (err, history: Message[]) => {
//             if (!err) {
//               socket.emit("chat:history", history);
//             }
//           });
//         }
//       });
//     });
//   }
  

// // export default function handleUserEvents({fastify, io, socket} : handleUserEventsProps){
// //     const db = fastify.db;
// //     const userData = (socket as AuthenticatedSocket).user;
// //     if (userData) {
// //         console.log("🔵 Sending immediate profile-data for:", userData?.username);
// //         socket.emit("profile-data", {
// //             user: userData?.username,
// //             online: true,
// //         });
// //     }

// //     socket.on("get-my-profile", () => {
// //         const userData = (socket as AuthenticatedSocket).user;
// //         console.log("Sending profile-data for:", userData?.username);

// //         socket.emit("profile-data", {
// //         user: userData?.username,
// //         online: true,
// //         });
// //     });

// //     socket.on("request:init", () => {

// //         db.all("SELECT * FROM user_authentication ORDER BY id ASC", (err, user_authentication: User[]) => {

// //         if (!err) {
// //             socket.emit("user:list", user_authentication);

// //             db.all("SELECT * FROM messages ORDER BY timestamp ASC", (err, history: Message[]) => {
// //             if (!err) {
// //                 // console.log("Sending chat history:", history.length, "messages");
// //                 socket.emit("chat:history", history);
// //             }
// //             });
// //         }
// //         });
// //     });
// // }



import { ExtendedError, Socket } from "socket.io";
import { FastifyInstance } from "fastify";
import { IncomingMessage } from "http";
import { parse as parseCookie } from "cookie";
import { Server as IOServer } from "socket.io";

interface AuthenticatedSocket extends Socket {
  user?: any;
  online?: boolean
}

interface handleUserEventsProps {
    fastify: FastifyInstance
    io: IOServer
    socket: AuthenticatedSocket
}

interface User {
    id: number;
    online: boolean
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

export default function handleUserEvents({ fastify, io, socket }: handleUserEventsProps) {
    const db = fastify.db;
    const userData = socket.user;
  
    if (userData) {
      socket.online = true;
  
      // Track user's socket
      socket.join(`user:${userData.username}`);
  
      // Broadcast to everyone: this user is now online
      io.emit("user:status", { username: userData.username, online: true });
  
      // Send self profile immediately
      socket.emit("profile-data", {
        user: userData.username,
        online: true,
      });

      console.log(`User ${userData.username} connected and set online`);
    }
  
    // When disconnected - ONLY run if userData exists
    socket.on("disconnect", () => {
      console.log("User disconnecting...");
      if (userData && socket.online) {
        socket.online = false;
  
        // Broadcast offline status
        io.emit("user:status", { username: userData.username, online: false });
        console.log(`User ${userData.username} disconnected and set offline`);
      }
    });
  
    socket.on("get-my-profile", () => {
      if (userData) {
        socket.emit("profile-data", {
          user: userData.username,
          online: socket.online ?? true,
        });
      }
    });
  
    socket.on("request:init", () => {
      db.all("SELECT * FROM user_authentication ORDER BY id ASC", (err, user_authentication: User[]) => {
        if (!err) {
          // More reliable online status check
          const enrichedUsers = user_authentication.map((u) => {
            // Check if this user has any connected sockets
            const userSockets = Array.from(io.sockets.sockets.values())
              .filter((s: any) => s.user?.username === u.username && s.online === true);
            
            return {
              ...u,
              online: userSockets.length > 0,
            };
          });
  
          socket.emit("user:list", enrichedUsers);
          console.log("============> enrichedUsers", enrichedUsers);
  
          // Only send messages that involve the current user
          if (userData) {
            db.all(
              "SELECT * FROM messages WHERE sender = ? OR recipient = ? ORDER BY timestamp ASC", 
              [userData.username, userData.username],
              (err, history: Message[]) => {
                if (!err) {
                  socket.emit("chat:history", history);
                }
              }
            );
          }
        }
      });
    });
}