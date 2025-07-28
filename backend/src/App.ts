

/// <reference types="../types/fastify" />

import fastify from "fastify";
import dbPlugin from './plugins/database.plugin'
import Modules from "./plugins/modules.plugin";
import jwtplugin from "./plugins/jwt.plugin";
import cookiePlugin from "./plugins/cookie.plugin";
import auth02 from "./plugins/oauth2.plugin"
import cors from '@fastify/cors';
import { Server as IOServer, Socket } from "socket.io";
import http, { request } from "http";
import setupSocketIO from './plugins/socket.plugin';



const app = fastify();

app.register(cors, {
  origin: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
});

app.register(dbPlugin);
app.register(cookiePlugin);
app.register(jwtplugin);
app.register(auth02);
app.register(Modules);

// Security hook for JWT access tokens
app.addHook("onRequest", async (request, reply) => {
  try {
    const publicPaths = ["/login", "/register", "/logout"];
    const isPublic = publicPaths.some(path => (request.raw.url || "").startsWith(path));
    if (!isPublic) {
      const token = request.cookies.accessToken;
    //   const decodedToken = app.jwt.decode(token)
      if (!token) {
        return reply.code(401).send({ message: "No access token in cookies", accesstoken: false, refreshtoken: true });
      }
      await app.jwt.verify(token);
    }
  } catch (err) {
    return reply.code(401).send({ message: "Unauthorized", error: err, accesstoken: false, refreshtoken: true });
  }
});

app.get("/hello", (request, reply) => {
  return reply.send({ refreshtoken: true, accesstoken: true });
});

app.get('/logout', (request, reply) => {
  reply.clearCookie('accessToken', { path: '/' });
  reply.clearCookie('refreshtoken', { path: '/' });
  return 'logout';
});

// Create a native HTTP server from Fastify instance
const server: http.Server = app.server;

// Create Socket.IO server using the native HTTP server
const io = new IOServer(server, {
  cors: {
    origin: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  },
});

app.ready().then( () => {
    setupSocketIO(app, io);
});

// Start Fastify server normally — this will also serve Socket.IO on the same port
const PORT = 3000;
const HOST = "0.0.0.0";

app.listen({ port: PORT, host: HOST }).then(() => {
  console.log(`Server listening at http://${HOST}:${PORT}`);
});
