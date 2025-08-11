

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

  interface MessageRow {
    sender: string;
    recipient: string;
  }

// A map to store the username to socket.id relationship
const userSockets = new Map<string, string>();

export default function handleChatEvents({fastify, io, socket} : handleChatEventsProps){
    const db = fastify.db;

    // When a user's profile data is sent, store their username and socket ID
    socket.on("profile-data", (socket_data: { user: string }) => {
        userSockets.set(socket_data.user, socket.id);
    });

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

                // Get the socket IDs for the sender and recipient
                const senderSocketId = userSockets.get(username);
                const recipientSocketId = userSockets.get(recipient);

                // Emit the message to both the sender and the recipient
                if (senderSocketId) {
                  io.to(senderSocketId).emit("chat:message", messageData);
                }
                if (recipientSocketId) {
                  io.to(recipientSocketId).emit("chat:message", messageData);
                }
              }
            );
          }
        );
    });
          
    socket.on("chat:delete", ({id, username}) => {
        if (!id || !username)
          return ;
        db.get("SELECT sender, recipient FROM messages WHERE id = ?", [id], (err, row: MessageRow) => {
          if (err){
            return ;
          }

          if (!row)
            return ;
            
          const { sender, recipient } = row;
          db.run("DELETE FROM messages WHERE id = ?", [id], (err) => {
            if (err){
              console.error("failed to delete msg!!!");
              return
            }
            // Get the socket IDs for both users in the conversation
            const senderSocketId = userSockets.get(sender);
            const recipientSocketId = userSockets.get(recipient);

            // Emit the deletion event to both sockets
            if (senderSocketId) {
              io.to(senderSocketId).emit("chat:deleted", { id });
            }
            if (recipientSocketId) {
              io.to(recipientSocketId).emit("chat:deleted", { id });
            }
          }); 
        });
    });

    socket.on("request:history", ({ username, recipient }: { username: string, recipient: string }) => {
        // Query the database for messages between the two users
        db.all(
            "SELECT id, sender, recipient, text, timestamp FROM messages WHERE (sender = ? AND recipient = ?) OR (sender = ? AND recipient = ?) ORDER BY timestamp ASC",
            [username, recipient, recipient, username],
            (err, rows) => {
                if (err) {
                    console.error("Error fetching chat history:", err);
                    return;
                }
                // Send the history back to the requesting socket only
                socket.emit("chat:history", rows);
            }
        );
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