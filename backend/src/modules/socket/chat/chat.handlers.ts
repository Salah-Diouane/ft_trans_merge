import { ExtendedError, Socket } from "socket.io";
import { FastifyInstance } from "fastify";
import { IncomingMessage } from "http";
import { parse as parseCookie } from "cookie";
import { Server as IOServer } from "socket.io";

interface AuthenticatedSocket extends Socket {
  user?: any;
}

interface handleChatEventsProps {
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
    id: string | number
    username: string;
    recipient: string;
    text: string;
    // timestamp: string;
    blocked: boolean;
}

export default function handleChatEvents({fastify, io, socket} : handleChatEventsProps){

    const db = fastify.db;
    socket.on("chat:message", (data: Partial<Message>) => {
        const { username, recipient, text } = data;
  
        if (!username || !recipient || !text) {
          console.log("Missing required fields in message");
          return;
        }

        db.get("SELECT 1 FROM blocked_users WHERE blocker = ? AND blocked = ?",
          [recipient, username],
          (err, row) => {
            if (err) {
              console.error("Error checking block status:", err);
              return;
            }
  
            if (row) {
              console.log(` Message from ${username} to ${recipient} is blocked.`);
              return;
            }

            db.run(
              "INSERT INTO messages (sender, recipient, text) VALUES (?, ?, ?)",
              [username, recipient, text],
              function (err) {
                if (err) {
                  console.error("Error saving message:", err);
                  return;
                }
  
                const messageData = {
                  id: this.lastID,
                  sender: username,
                  recipient,
                  text,
                  timestamp: new Date().toISOString(),
                };
  
                console.log(" Broadcasting message:", messageData);
                console.log(" messageData.id :", messageData.id);
                io.emit("chat:message", messageData);
              }
            );
          }
        );
      });
      
      socket.on("chat:delete", ({id, username}) => {
        if (!id || !username)
          return ;
        db.get("SELECT sender FROM messages WHERE id = ?", [id], (err, row) => {
          if (err){
            return ;
          }

          if (!row)
            return ;

          db.run("DELETE FROM messages WHERE id = ?", [id], (err) => {
            if (err){
              console.error("failed to delete msg!!!");
              return
            }

            io.emit("chat:deleted", { id });
          }); 
        });
      });

      socket.on("block:user", ({ blocker, blocked }) => {
        db.run(
          "INSERT OR IGNORE INTO blocked_users (blocker, blocked) VALUES (?, ?)",
          [blocker, blocked],
          (err) => {
            if (err)
                console.error("Failed to block user:", err);
            else
                console.log(` ${blocker} blocked ${blocked}`);
          }
        );
      });
  
      socket.on("unblock:user", ({ blocker, blocked }) => {
        db.run(
          "DELETE FROM blocked_users WHERE blocker = ? AND blocked = ?",
          [blocker, blocked],
          (err) => {
            if (err) console.error("Failed to unblock user:", err);
            else console.log(` ${blocker} unblocked ${blocked}`);
          }
        );
      });
}
