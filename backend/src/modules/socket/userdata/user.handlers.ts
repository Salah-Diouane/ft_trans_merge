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
 
      socket.join(`user:${userData.username}`);
      io.emit("user:status", { 
        username: userData.username,
        online: true
      });

      socket.emit("profile-data", {
        user: userData.username,
        online: true,
      });

      console.log(`User ${userData.username} connected and set online`);
    }

    socket.on("disconnect", () => {

      console.log("User disconnecting");

      if (userData && socket.online) {
        socket.online = false;

        io.emit("user:status", {
          username: userData.username,
          online: false
        });

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

          const enrichedUsers = user_authentication.map((u) => {

            const userSockets = Array.from(io.sockets.sockets.values())
              .filter((s: any) => s.user?.username === u.username && s.online === true);
            
            return {
              ...u,
              online: userSockets.length > 0,
            };
          });
  
          socket.emit("user:list", enrichedUsers);
          console.log("============> enrichedUsers", enrichedUsers);

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