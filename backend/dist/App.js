"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const cors_1 = __importDefault(require("@fastify/cors"));
const cookie_plugin_1 = __importDefault(require("./plugins/cookie.plugin"));
const database_plugin_1 = __importDefault(require("./plugins/database.plugin"));
const jwt_plugin_1 = __importDefault(require("./plugins/jwt.plugin"));
const oauth2_plugin_1 = __importDefault(require("./plugins/oauth2.plugin"));
const modules_plugin_1 = __importDefault(require("./plugins/modules.plugin"));
const socket_io_1 = require("socket.io");
const http_1 = require("http");
const chat_socket_plugin_1 = require("./plugins/chat-socket.plugin");
(async () => {
    const app = (0, fastify_1.default)();
    //   Register CORS for Fastify
    await app.register(cors_1.default, {
        origin: ["http://localhost:5173"],
        credentials: true,
    });
    // Register plugins
    app.register(cookie_plugin_1.default);
    app.register(database_plugin_1.default);
    app.register(jwt_plugin_1.default);
    app.register(oauth2_plugin_1.default);
    app.register(modules_plugin_1.default);
    const server = (0, http_1.createServer)(app.server);
    const io = new socket_io_1.Server(server, {
        cors: {
            origin: ["http://localhost:5173"],
            methods: ["GET", "POST"],
            credentials: true,
        },
    });
    app.get("/hello", async () => "hello");
    app.addHook("onRequest", async (request, reply) => {
        try {
            const publicPaths = ["/login", "/register", "/verify"];
            const isPublic = publicPaths.some((path) => (request.raw.url || "").startsWith(path));
            if (!isPublic) {
                const token = request.cookies.accessToken;
                if (!token) {
                    return reply.code(401).send({ message: "No access token in cookies" });
                }
                const decoded = await app.jwt.verify(token);
                request.user = decoded;
                console.log("✅ Authenticated user:", decoded);
            }
        }
        catch (err) {
            console.error("❌ JWT verification failed:", err);
            return reply.code(401).send({ message: "Unauthorized", error: err });
        }
    });
    // Wait for Fastify to be ready before setting up socket
    await app.ready();
    (0, chat_socket_plugin_1.setupSocketIO)(app, io);
    server.listen(3001, "0.0.0.0", () => {
        console.log("🚀 Server running at http://localhost:3001");
    });
})();
