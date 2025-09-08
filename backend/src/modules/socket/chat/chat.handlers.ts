import { Socket } from "socket.io";
import { FastifyInstance } from "fastify";
import { Server as IOServer } from "socket.io";
import { AuthenticatedSocket } from "../pong/interfaces";
// import { console } from "inspector/promises";

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

export const userSockets = new Map<number, string>(); 

export default function handleChatEvents({ fastify, io, socket }: handleChatEventsProps) {
    const db = fastify.db;

    console.log

      const userData = socket.user;
      if (userData) {
        userSockets.set(userData.userid, socket.id);
        console.log(`Socket mapped: ${userData.userid} -> ${socket.id}`);
      }
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
      // console.log("data---> : ", data)
        db.get(
            "SELECT 1 FROM blocked_users WHERE (blocker = ? AND blocked = ?) OR (blocker = ? AND blocked = ?)",
            [senderId, recipientId, recipientId, senderId],
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
                        console.log("1--->",senderSocketId)
                        console.log("2--->",recipientSocketId)

                        if (senderSocketId) {
                          io.to(senderSocketId).emit("chat:message", messageData);
                          // io.to(senderSocketId).emit("notification", {messageData});
                        }
                        if (recipientSocketId) {
                          io.to(recipientSocketId).emit("chat:message", messageData);
                          io.to(recipientSocketId).emit("notification", {messageData});
                        }
                    }
                );
            }
        );
          
    });


  socket.on("notification:insert", (notif) => {
    const { messageData } = notif;

    if (!messageData)
      return;

    const { senderId, recipientId, text, timestamp } = messageData;

    const data = JSON.stringify({ text, timestamp });
    const senderSocketId = userSockets.get(senderId);
    const recipientSocketId = userSockets.get(recipientId);
    db.run(
      "INSERT INTO notification (id_sender, id_receiver, data) VALUES (?, ?, ?)",
      [senderId, recipientId, data],
      (err) => {
        if (err) {
          return;
        }

        console.log(" Notification inserted successsfully");
      }
    );
  });

  socket.on("notification:get", (userId: number) => {
    console.log("------------------> in the notification:get")
    db.all(
      "SELECT * FROM notification WHERE id_receiver = ? ORDER BY timestamp DESC LIMIT 50",
      [userId],
      (err, rows: any) => {
        if (err) {
          console.error("DB error in notification:get:", err.message);
          return;
        }
        
        const parsedRows = rows.map((row: any) => ({
          ...row,
          data: JSON.parse(row.data),
        }));
        // console.log("parseRows : ", parsedRows)
        socket.emit("notification:list", parsedRows);
      }
    );
  });
  
socket.on("notificatio:clear", (userId:Number) => {
  // console.log("======> id : ", userId)
  db.run('DELETE  FROM notification WHERE id_receiver = ?  ', [userId])
})

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
                // console.log("Roows :")
                // console.log(rows)
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



// useEffect(() => {

//   const handleNotification = (notif: any) => {
//     const currentUserId = Number(currentUserRef.current);
//     const { senderId } = notif.messageData;
    
//     console.log("Received notification:", notif);

//     if (senderId !== currentUserId ) {

//       socket.emit("notification:insert", notif);
      

//       socket.emit("notification:get", currentUserId);
      
      
//       toast.success("New message received!", {
//         duration: 3000,
//         position: 'top-center',
//       });
      
//     }
//   };
  
//   const handleNotificationList = (data: any[]) => {
//     console.log("Notifications list received:", data);
//     setNotifications(data);
    
//     setUnreadCount((data.length));
//   };
  
  
//   socket.on("notification", handleNotification);
//   socket.on("notification:list", handleNotificationList);
  
//   return () => {
//     socket.off("notification", handleNotification);
//     socket.off("notification:list", handleNotificationList);
//   };

// }, [currentUserRef.current]);
