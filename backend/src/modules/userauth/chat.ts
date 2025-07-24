import { Server, Socket } from "socket.io";
import { FastifyInstance } from "fastify";

// Type for your messages and users
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

// 👇 Accept Fastify instance to access fastify.db
export function setupChat(io: Server, fastify: FastifyInstance) {
  io.on("connection", (socket: Socket) => {
    console.log("🟢 A user connected:", socket.id);

    socket.on("request:init", () => {
      const db = fastify.db;

      db.all("SELECT * FROM users ORDER BY id ASC", (err, users: User[]) => {
        if (err) return console.error("DB Error:", err);
        socket.emit("user:list", users);
      });

      db.all("SELECT * FROM messages ORDER BY timestamp ASC", (err, messages: Message[]) => {
        if (err) return console.error("DB Error:", err);
        socket.emit("chat:history", messages);
      });
    });

    socket.on("chat:message", (data: Partial<Message>) => {
      const { username, recipient, text } = data;

      if (!username || !recipient || !text) return;

      const db = fastify.db;
      db.run(
        `INSERT INTO messages (sender, recipient, text) VALUES (?, ?, ?)`,
        [username, recipient, text],
        function (err) {
          if (err) return console.error("Insert error:", err);

          io.emit("chat:message", {
            username,
            recipient,
            text,
            timestamp: new Date().toISOString(),
          });
        }
      );
    });

    socket.on("disconnect", () => {
      console.log("🔴 Disconn
