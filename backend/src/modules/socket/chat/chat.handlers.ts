import { Socket } from "socket.io";
import { FastifyInstance } from "fastify";
import { Server as IOServer } from "socket.io";
import { AuthenticatedSocket } from "../pong/interfaces";

interface handleChatEventsProps {
  fastify: FastifyInstance;
  io: IOServer;
  socket: AuthenticatedSocket;
}

interface Message {
  id?: number;
  senderId: number;
  recipientId: number;
  text: string;
  timestamp?: string;
  blocked?: boolean;
}

interface Notification {
  id: number,
  id_sender: number;
  id_receiver: number;
  sender: string;
  receiver: string;
  type: string;
  text: string;
  seen: boolean;
  timestamp: string;
}

export const userSockets = new Map<number, string>();

export function getNameById(
  fastify: FastifyInstance,
  id: number
): Promise<string> {
  return new Promise((resolve, reject) => {
    fastify.db.get(
      "SELECT username FROM user_authentication WHERE id = ?",
      [id],
      (err, row: string) => {
        if (err) reject(err);
        else resolve(row);
      }
    );
  });
}

export default function handleChatEvents({
  fastify,
  io,
  socket,
}: handleChatEventsProps) {
  const db = fastify.db;
  
  console.log;
  
  const userData = socket.user;
  if (userData) {
    userSockets.set(userData.userid, socket.id);
    console.log(`Socket mapped: ${userData.userid} -> ${socket.id}`);
  }
  socket.on("disconnect", () => {
    const userData = socket.user;
    if (userData) {
      userSockets.delete(userData.userid);
      console.log(`Socket unmapped: ${userData.username}`);
    }
  });
  
  socket.on("chat:message", (data: Message) => {
    const { senderId, recipientId, text } = data;
    
    if (!senderId || !recipientId || !text) return;
    
    db.get(
      "SELECT 1 FROM blocked_users WHERE (blocker = ? AND blocked = ?) OR (blocker = ? AND blocked = ?)",
      [senderId, recipientId, recipientId, senderId],
      (err, row) => {
        if (err || row) {
          console.log("row : ", row);
          return;
        }
        
        console.log(
          "before inserting : ",
          senderId,
          recipientId,
          text,
          new Date().toISOString()
        );
        db.run(
          "INSERT INTO messages (id_sender, id_recipient, text, timestamp) VALUES (?, ?, ?, ?)",
          [senderId, recipientId, text, new Date().toISOString()],
          async function (err) {
            if (err) {
              console.log(
                "error in the inserting of the messages, and the error is : ",
                err
              );
              return;
            }
            
            const messageData: Message = {
              id: this.lastID,
              senderId,
              recipientId,
              text,
              timestamp: new Date().toISOString(),
            };
            
            const senderRow: any = await getNameById(fastify, senderId);
            const receiverRow: any = await getNameById(fastify, recipientId);
            
            const sender = senderRow?.username;
            const receiver = receiverRow?.username;
            
            const notification: Notification = {
              id: this.lastID,
              type: "New message",
              id_sender: senderId,
              id_receiver: recipientId,
              sender,
              receiver,
              seen: false,
              text: text,
              timestamp: new Date().toISOString(),
            };

            db.run(
              "INSERT INTO notification (id_sender, id_receiver, sender, receiver, type, text, timestamp) VALUES (?, ?, ?, ?, ?, ?, ?)",
              [senderId, recipientId, sender, receiver, "message", text, new Date().toISOString()],
              function (err: Error | null) { 
                if (err) {
                  console.error("Error inserting message notification:", err.message);
                  return;
                }
            
                const notification = {
                  id: this.lastID,
                  id_sender: senderId,
                  id_receiver: recipientId,
                  sender,
                  receiver,
                  type: "message",
                  text,
                  seen: false,
                  timestamp: new Date().toISOString(),
                };
            
                const recipientSocketId = userSockets.get(recipientId);
                if (recipientSocketId)
                  io.to(recipientSocketId).emit("notification", notification);
            
                console.log(" Message notification emitted:", notification);
              }
            );
            

            const senderSocketId = userSockets.get(senderId);
            const recipientSocketId = userSockets.get(recipientId);
            
            if (senderSocketId) {
              io.to(senderSocketId).emit("chat:message", messageData);
            }
            if (recipientSocketId) {
              io.to(recipientSocketId).emit("chat:message", messageData);
              // io.to(recipientSocketId).emit("notification", notification);
            }
          }
        );
      }
    );
  });

  socket.on("notif:seen", (notifications) => {
    console.log("Received notif:seen", notifications);
  
    if (!notifications?.length)
      return;
  
    notifications.forEach((notif: any) => {
      if (!notif.id) {
        console.log("⚠️ Notification has no ID:", notif);
        return;
      }
  
      db.run(
        `UPDATE notification SET seen = 1 WHERE id = ?`,
        [notif.id],
        (err) => {
          if (err)
            console.error(` Error updating notif ${notif.id}:`, err.message);
          else
          console.log(` Notification ${notif.id} marked as seen`);
        }
      );
    });
  });

  socket.on("notification:count", (userId) => {
    db.get(
      `SELECT COUNT(*) AS unseenCount FROM notification WHERE id_receiver = ? AND seen = 0`,
      [userId],
      (err, row: any) => {
        if (err) {
          console.error("Error counting unseen notifications:", err.message);
          return;
        }
  
        const count = row?.unseenCount || 0;
        console.log("count :", count)
        socket.emit("notification:getcount", count);  
      }
    );
  });

  socket.on("notification:insert", (notif) => {
    console.log("heeey im in the notification:insert", notif);
    
    if (!notif) {
      console.log("Err : notif id empty");
      return;
    }

    const textValue =
      notif.message ||
      `${notif.type || "Notification"} from ${notif.sender || "Unknown"}`;
    const senderValue = notif.sender || "Unknown";
    const receiverValue = notif.receiver || "Unknown";
    const typeValue = notif.type || "General";
    const timestampValue = notif.timestamp || new Date().toISOString();

    db.run(
      `INSERT INTO notification (id_sender, id_receiver, sender, receiver, type, text, timestamp)
   VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [
        notif.senderId,
        notif.recipientId,
        senderValue,
        receiverValue,
        typeValue,
        textValue,
        timestampValue,
      ],
      (err) => {
        if (err) {
          console.log("Err inserting notification:", err.message);
          return;
        }
        console.log("✅ Notification inserted successfully");
      }
    );
  });

  socket.on("notification:get", (userId: number) => {
    db.all(
      "SELECT * FROM notification WHERE id_receiver = ? ORDER BY timestamp DESC LIMIT 50",
      [userId],
      (err, rows: any) => {
        if (err) {
          console.error("DB error in notification:get:", err.message);
          return;
        }

        socket.emit("notification:list", rows);
      }
    );
  });

  socket.on("notification:clear", (userId: Number) => {
    // console.log("======> id : ", userId)
    db.run("DELETE  FROM notification WHERE id_receiver = ?  ", [userId]);
  });

  socket.on("chat:delete", ({ id, userId }: { id: number; userId: number }) => {
    console.log("id:=>", id);
    console.log("userId:=>", userId);
    if (!id || !userId) return;

    db.get(
      "SELECT id_sender, id_recipient FROM messages WHERE id = ?",
      [id],
      (err, row: any) => {
        if (err || !row) return;

        const { id_sender, id_recipient } = row;
        if (id_sender !== userId) return;

        db.run("DELETE FROM messages WHERE id = ?", [id], (err) => {
          if (err) return;

          const senderSocketId = userSockets.get(id_sender);
          const recipientSocketId = userSockets.get(id_recipient);

          if (senderSocketId)
            io.to(senderSocketId).emit("chat:deleted", { id });
          if (recipientSocketId)
            io.to(recipientSocketId).emit("chat:deleted", { id });
        });
      }
    );
  });

  socket.on(
    "request:history",
    ({ senderId, recipientId }: { senderId: number; recipientId: number }) => {
      db.all(
        "SELECT id, id_sender AS senderId, id_recipient AS recipientId, text, timestamp FROM messages WHERE (id_sender = ? AND id_recipient = ?) OR (id_sender = ? AND id_recipient = ?) ORDER BY timestamp ASC",
        [senderId, recipientId, recipientId, senderId],
        (err, rows: Message[]) => {
          if (err) return;
          socket.emit("chat:history", rows);
        }
      );
    }
  );

  socket.on(
    "block:user",
    ({ blockerId, blockedId }: { blockerId: number; blockedId: number }) => {
      db.run(
        "INSERT OR IGNORE INTO blocked_users (blocker, blocked) VALUES (?, ?)",
        [blockerId, blockedId]
      );
    }
  );

  socket.on(
    "unblock:user",
    ({ blockerId, blockedId }: { blockerId: number; blockedId: number }) => {
      db.run("DELETE FROM blocked_users WHERE blocker = ? AND blocked = ?", [
        blockerId,
        blockedId,
      ]);
    }
  );
}
