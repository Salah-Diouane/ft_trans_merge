import Fastify from "fastify";
import cors from "@fastify/cors";
import { createServer } from "http";
import { Server } from "socket.io";
import { prepare } from "./db.js"; // Assuming db.js returns prepared SQLite statements
const fastify = Fastify();
const httpServer = createServer(fastify.server);
const io = new Server(httpServer, {
    cors: {
        origin: ["http://localhost:5173", "http://localhost:3000"],
        methods: ["GET", "POST"],
    },
});
// Register CORS plugin
await fastify.register(cors, {
    origin: ["http://localhost:5173", "http://localhost:3000"],
});
// Health check route
fastify.get("/", async () => {
    return { message: "Server is running!" };
});
// Prepare database statements
const insertMessage = prepare(`
  INSERT INTO messages (username, recipient, text)
  VALUES (?, ?, ?)
`);
const selectMessages = prepare(`
  SELECT * FROM messages ORDER BY timestamp ASC
`);
const selectUsers = prepare(`
  SELECT * FROM users ORDER BY id ASC
`);
// Socket.IO events
io.on("connection", (socket) => {
    console.log("🟢 A user connected:", socket.id);
    socket.on("request:init", () => {
        const users = selectUsers.all();
        const history = selectMessages.all();
        socket.emit("user:list", users);
        socket.emit("chat:history", history);
    });
    socket.on("chat:message", (data) => {
        const { username, recipient, text } = data;
        if (!username || !recipient || !text)
            return;
        insertMessage.run(username, recipient, text);
        io.emit("chat:message", {
            username,
            recipient,
            text,
            timestamp: new Date().toISOString(),
        });
    });
    socket.on("disconnect", () => {
        console.log("🔴 Disconnected:", socket.id);
    });
});
// Start the server
const PORT = 3001;
httpServer.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
});
