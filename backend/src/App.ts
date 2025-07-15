// import fastify from "fastify";
// import dbPlugin from './plugins/database.plugin'
// import Modules from "./plugins/modules.plugin";
// import jwtplugin from "./plugins/jwt.plugin";
// import cookiePlugin from "./plugins/cookie.plugin";
// import auth02 from "./plugins/oauth2.plugin"
// import { setupSocketIO } from "./plugins/chat-socket.plugin";
// import { Server as IOServer } from "socket.io";

// const app = fastify();

// app.get("/hello", () => "hello");

// app.register(dbPlugin);
// app.register(Modules);
// app.register(jwtplugin);
// app.register(cookiePlugin);
// app.register(auth02);

// app.addHook("onRequest", async (request, reply) => {
//     try {
//         const publicPaths = ["/login", "/register", "/verify", "/hello"];
//         const isPublic = publicPaths.some(path => (request.raw.url || "").startsWith(path));

//         if (!isPublic) {
//             const token = request.cookies.accessToken;

//             if (!token) {
//                 return reply.code(401).send({ message: "No access token in cookies" });
//             }
//             const decoded = await app.jwt.verify(token);
//             request.user = decoded;
//             console.log("✅ Authenticated user:", decoded);
//         }
//     } catch (err) {
//         console.error("❌ JWT verification failed:", err);
//         return reply.code(401).send({ message: "Unauthorized", error: err });
//     }
// });

// // Wait for Fastify to be ready
// app.ready().then(() => {
//     // Create Socket.IO server attached to Fastify's HTTP server
//     const io = new IOServer(app.server, {
//         cors: {
//             origin: ["http://localhost:5173"],
//             methods: ["GET", "POST"],
//             credentials: true,
//         },
//     });

//     // Setup Socket.IO with your custom function
//     setupSocketIO(app, io);

//     // Start the server
//     app.listen({ port: 3001, host: '0.0.0.0' }, (err, address) => {
//         if (err) {
//             console.error("❌ Server failed to start:", err);
//             process.exit(1);
//         }
//         console.log(`🚀 Server running at ${address}`);
//         console.log("📡 Socket.IO server ready");
//     });
// });

// // Handle graceful shutdown
// process.on('SIGTERM', () => {
//     app.close(() => {
//         console.log('Server closed');
//         process.exit(0);
//     });
// });

// process.on('SIGINT', () => {
//     app.close(() => {
//         console.log('Server closed');
//         process.exit(0);
//     });
// });


import fastify from "fastify";
import { createServer } from "http";
import { Server as IOServer } from "socket.io";

import dbPlugin from './plugins/database.plugin';
import Modules from "./plugins/modules.plugin";
import jwtplugin from "./plugins/jwt.plugin";
import cookiePlugin from "./plugins/cookie.plugin";
import auth02 from "./plugins/oauth2.plugin";
import setupSocketIO from './plugins/chat-socket.plugin';

const app = fastify();


app.get("/hello", () => "hello");

app.register(dbPlugin);
app.register(Modules);
app.register(jwtplugin);
app.register(cookiePlugin);
app.register(auth02);

app.get("/user/me", async (request, reply) => {
    try {
      const token = request.cookies.accessToken;
      if (!token) return reply.code(401).send({ message: "Not authenticated" });
  
      const decoded = await app.jwt.verify(token);
      reply.send(decoded);
    } catch (err) {
      reply.code(401).send({ message: "Invalid token" });
    }
  });
  
app.addHook("onRequest", async (request, reply) => {

  try {

    const publicPaths = ["/login", "/register", "/verify", "/hello"];
    const isPublic = publicPaths.some(path => (request.raw.url || "").startsWith(path));

    if (!isPublic) {

      const token = request.cookies.accessToken;
      if (!token) return reply.code(401).send({ message: "No access token in cookies" });

      const decoded = await app.jwt.verify(token);
      request.user = decoded;
      console.log("✅ Authenticated user:", decoded);

    }
  } catch (err) {

    console.error("❌ JWT verification failed:", err);
    return reply.code(401).send({ message: "Unauthorized", error: err });

  }

});

const server = createServer(app.server);

const io = new IOServer(server, {

  cors: {

    origin: ["http://localhost:5173"],
    methods: ["GET", "POST"],
    credentials: true,

  },

});

app.ready().then(() => {

  setupSocketIO(app, io);

});

server.listen(3001, '0.0.0.0', () => {

  console.log("🚀 Server running at http://localhost:3001");

});

