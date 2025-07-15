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
}

export function setupSocketIO(fastify: FastifyInstance, io: IOServer) {
  const db = fastify.db;

  io.on("connection", (socket: Socket) => {
    console.log("🟢 A user connected:", socket.id);

    socket.on("request:init", () => {
      db.all("SELECT * FROM users ORDER BY id ASC", (err, users: User[]) => {
        if (!err) socket.emit("user:list", users);
      });

      db.all("SELECT * FROM messages ORDER BY timestamp ASC", (err, history: Message[]) => {
        if (!err) socket.emit("chat:history", history);
      });
    });

    socket.on("chat:message", (data: Partial<Message>) => {
      const { username, recipient, text } = data;
      if (!username || !recipient || !text) return;

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

    socket.on("disconnect", () => {
      console.log("🔴 Disconnected:", socket.id);
    });
  });
}
