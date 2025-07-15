"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupSocketIO = setupSocketIO;
function setupSocketIO(fastify, io) {
    const db = fastify.db;
    io.on("connection", (socket) => {
        console.log("🟢 A user connected:", socket.id);
        socket.on("request:init", () => {
            db.all("SELECT * FROM users ORDER BY id ASC", (err, users) => {
                if (!err)
                    socket.emit("user:list", users);
            });
            db.all("SELECT * FROM messages ORDER BY timestamp ASC", (err, history) => {
                if (!err)
                    socket.emit("chat:history", history);
            });
        });
        socket.on("chat:message", (data) => {
            const { username, recipient, text } = data;
            if (!username || !recipient || !text)
                return;
            db.run("INSERT INTO messages (sender, recipient, text) VALUES (?, ?, ?)", [username, recipient, text], (err) => {
                if (!err) {
                    io.emit("chat:message", {
                        username,
                        recipient,
                        text,
                        timestamp: new Date().toISOString(),
                    });
                }
            });
        });
        socket.on("disconnect", () => {
            console.log("🔴 Disconnected:", socket.id);
        });
    });
}
