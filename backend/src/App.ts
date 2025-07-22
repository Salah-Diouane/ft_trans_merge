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



// /// <reference types="../types/fastify" />

// import fastify from "fastify";
// import dbPlugin from './plugins/database.plugin'
// import Modules from "./plugins/modules.plugin";
// import jwtplugin from "./plugins/jwt.plugin";
// import cookiePlugin from "./plugins/cookie.plugin";
// import auth02 from "./plugins/oauth2.plugin"
// import cors from '@fastify/cors';
// import { RefreshToken } from "./modules/userauth/userauth.routes";
// import { request } from "http";
// import setupSocketIO from './plugins/chat-socket.plugin';

// import { createServer } from "http";
// import { Server as IOServer } from "socket.io";

// const app = fastify();

// app.register(cors, {
//     origin: true, // React app origin
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     credentials: true, // if you want cookies/auth headers
// });

// app.register(dbPlugin);

// app.register(cookiePlugin);

// app.register(jwtplugin);


// app.register(auth02);


// app.register(Modules);

// app.ready();

// // app.addHook("onRequest", async (request, reply) => {
// //     try {
// //         const publicPaths = ["/login", "/register", "/logout"];
// //         const isPublic = publicPaths.some(path => (request.raw.url || "").startsWith(path));
        
// //         if (!isPublic) {
// //             const token = request.cookies.accessToken;
// //             console.log("@@@@@@@@ token : ", token);
// //             if (!token) {
// //                 console.log("######################token : ", token);
// //                 return reply.code(401).send({ message: "No access token in cookies" , accesstoken : false, refreshtoken : true});
// //             }
// //             await app.jwt.verify(token);
// //         }
// //     } catch (err) {
// //         return reply.code(401).send({ message: "Unauthorized", error: err , accesstoken : false, refreshtoken : true});
// //     }
// // });

// app.addHook("onRequest", async (request, reply) => {
//     try {
//       const url = request.raw.url || "";
      
//       // Skip auth for public routes and socket.io connection
//       const publicPaths = ["/login", "/register", "/logout"];
//       const isPublic = publicPaths.some(path => url.startsWith(path));
//       const isSocketIO = url.startsWith("/socket.io");
  
//       if (!isPublic && !isSocketIO) {
//         const token = request.cookies.accessToken;
  
//         if (!token) {
//           return reply.code(401).send({ message: "No access token in cookies", accesstoken: false, refreshtoken: true });
//         }
//         await app.jwt.verify(token);
//       }
//     } catch (err) {
//       return reply.code(401).send({ message: "Unauthorized", error: err, accesstoken: false, refreshtoken: true });
//     }
//   });
  

// app.get("/hello", (request, reply) => {
//     return reply.send({ refreshtoken: true, accesstoken: true });
// });

// app.get('/logout',  (request, reply) => {
// 	reply.clearCookie('accessToken', {path:'/'});
// 	reply.clearCookie('refreshtoken', {path: '/'});
// 	return 'logout';

// })

// const server = createServer(app.server);

// const io = new IOServer(server, {

//   cors: {
//     origin: ["http://localhost:5173"],
//     methods: ["GET", "POST"],
//     credentials: true,

//   },

// });

// app.ready().then(() => {

//   setupSocketIO(app, io);

// });

// // app.listen({port: 3000, host: '0.0.0.0'}, (addree) => {
// //     console.log("127.0.0.1:3000");
// // });


// server.listen(3000, '0.0.0.0', () => {
//     console.log("✅ Server with Socket.IO running on http://localhost:3000");
//   });