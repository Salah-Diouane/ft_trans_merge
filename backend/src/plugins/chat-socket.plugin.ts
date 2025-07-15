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

export default function setupSocketIO(fastify: FastifyInstance, io: IOServer) {
  const db = fastify.db;

  io.on("connection", (socket: Socket) => {
    console.log("A user connected:", socket.id);

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

    socket.on("disconnect", () => {
      console.log("Disconnected:", socket.id);
    });
  });
}
