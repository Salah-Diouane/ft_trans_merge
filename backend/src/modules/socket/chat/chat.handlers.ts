import { Socket } from "socket.io";
import { FastifyInstance } from "fastify";
import { Server as IOServer } from "socket.io";
import { AuthenticatedSocket } from "../pong/interfaces";
import { console } from "inspector/promises";

interface handleChatEventsProps {
    fastify: FastifyInstance
    io: IOServer
    socket: AuthenticatedSocket
}

interface Message {
    id?: number;
    senderId: number;
    recipientId: number;
    text: string;
    timestamp?: string;
    blocked?: boolean;
}

const userSockets = new Map<number, string>(); 

export default function handleChatEvents({ fastify, io, socket }: handleChatEventsProps) {
    const db = fastify.db;

    // socket.on("connect", () => {
    //     const userData = socket.user;
    //     if (userData) {
    //         userSockets.set(userData.id, socket.id);
    //         console.log(`Socket mapped: ${userData.username} -> ${socket.id}`);
    //     }
    // });
    // socket.on("connect", () => {
      const userData = socket.user;
      if (userData) {
        userSockets.set(userData.userid, socket.id);
        console.log(`Socket mapped: ${userData.userid} -> ${socket.id}`);
      }
    // });
    socket.on("disconnect", () => {
        const userData = socket.user;
        if (userData) {
            userSockets.delete(userData.userid,);
            console.log(`Socket unmapped: ${userData.username}`);
        }
    });

    socket.on("chat:message", (data: Message) => {
        const { senderId, recipientId, text } = data;
        if (!senderId || !recipientId || !text)
            return;

        db.get(
            "SELECT 1 FROM blocked_users WHERE blocker = ? AND blocked = ?",
            [senderId, recipientId],
            (err, row) => {
                if (err || row){
                    console.log("row : ", row)
                    return;
                }
                  console.log("before inserting : ", senderId, recipientId, text, new Date().toISOString())
                db.run(
                    "INSERT INTO messages (id_sender, id_recipient, text, timestamp) VALUES (?, ?, ?, ?)",
                    [senderId, recipientId, text, new Date().toISOString()],
                    function (err) {
                        if (err)
                          return;

                        const messageData: Message = {
                            id: this.lastID,
                            senderId,
                            recipientId,
                            text,
                            timestamp: new Date().toISOString(),
                        };

                        const senderSocketId = userSockets.get(senderId);
                        const recipientSocketId = userSockets.get(recipientId);
                        
                        console.log(senderId, "senderSocketId ==> ", senderSocketId)
                        console.log(recipientId, "recipientSocketId ==> ", recipientSocketId)
                        // if (senderSocketId)
                        //   io.to(senderSocketId).emit("chat:message", messageData);
                        // if (recipientSocketId)
                        //   io.to(recipientSocketId).emit("chat:message", messageData);

                        if (senderSocketId) {
                          io.to(senderSocketId).emit("chat:message", messageData);
                          io.to(senderSocketId).emit("notification", {messageData});
                          console.log("===> messageData : ", messageData)
                        }
                        if (recipientSocketId) {
                          io.to(recipientSocketId).emit("chat:message", messageData);
                          io.to(recipientSocketId).emit("notification", {messageData});
                          console.log("===> messageData : ", messageData)
                        }
                    }
                );
            }
        );
          
    });

    socket.on("chat:delete", ({ id, userId }: { id: number; userId: number }) => {
      console.log("id:=>", id)
      console.log("userId:=>", userId)
        if (!id || !userId)
          return;


        db.get("SELECT id_sender, id_recipient FROM messages WHERE id = ?", [id], (err, row: any) => {
            if (err || !row) return;

            const { id_sender, id_recipient } = row;
            if (id_sender !== userId) return; 

            db.run("DELETE FROM messages WHERE id = ?", [id], (err) => {
                if (err) return;

                const senderSocketId = userSockets.get(id_sender);
                const recipientSocketId = userSockets.get(id_recipient);

                if (senderSocketId) io.to(senderSocketId).emit("chat:deleted", { id });
                if (recipientSocketId) io.to(recipientSocketId).emit("chat:deleted", { id });
            });
        });
    });

    socket.on("request:history", ({ senderId, recipientId }: { senderId: number; recipientId: number }) => {
        db.all(
            "SELECT id, id_sender AS senderId, id_recipient AS recipientId, text, timestamp FROM messages WHERE (id_sender = ? AND id_recipient = ?) OR (id_sender = ? AND id_recipient = ?) ORDER BY timestamp ASC",
            [senderId, recipientId, recipientId, senderId],
            (err, rows: Message[]) => {
                if (err)
                  return;
                console.log("Roows :")
                console.log(rows)
                socket.emit("chat:history", rows);
            }
        );
    });

    socket.on("block:user", ({ blockerId, blockedId }: { blockerId: number; blockedId: number }) => {
        db.run("INSERT OR IGNORE INTO blocked_users (blocker, blocked) VALUES (?, ?)", [blockerId, blockedId]);
    });

    socket.on("unblock:user", ({ blockerId, blockedId }: { blockerId: number; blockedId: number }) => {
        db.run("DELETE FROM blocked_users WHERE blocker = ? AND blocked = ?", [blockerId, blockedId]);
    });
}
