/// <reference types="../types/fastify" />

import fastify from "fastify";
import dbPlugin from './plugins/database.plugin'
import Modules from "./plugins/modules.plugin";
import jwtplugin from "./plugins/jwt.plugin";
import cookiePlugin from "./plugins/cookie.plugin";
import auth02 from "./plugins/oauth2.plugin"
import cors from '@fastify/cors';
import ajvErrors from 'ajv-errors';
import { Server as IOServer, Socket } from "socket.io";
import http from "http";
import setupSocketIO from './plugins/socket.plugin';


const app = fastify({
    ajv: {
        customOptions: {
            allErrors: true,
            $data: true
        }, 
        plugins : [ajvErrors]
    }
});

app.register(cors, {
    origin: true, // React app origin
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true, // if you want cookies/auth headers
});

app.register(dbPlugin);

app.register(cookiePlugin);

app.register(jwtplugin);


app.register(auth02);


app.register(Modules);

app.ready();

app.addHook("onRequest", async (request, reply) => {
    try {
        const publicPaths = ["/login", "/register"];
        const isPublic = publicPaths.some(path => (request.raw.url || "").startsWith(path));

        if (!isPublic) {
            const token = request.cookies.accessToken;
            if (!token) {
                return reply.code(401).send({ message: "No access token in cookies" , accesstoken : false, refreshtoken : true});
            }
            await app.jwt.verify(token);
        }
    } catch (err) {
        return reply.code(401).send({ message: "Unauthorized", error: err , accesstoken : false, refreshtoken : true});
    }
});

app.get("/hello", (request, reply) => {
    return reply.send({ refreshtoken: true, accesstoken: true });
});

app.get('/logout',  (request, reply) => {
	reply.clearCookie('accessToken', {path:'/'});
	reply.clearCookie('refreshtoken', {path: '/login/refreshtoken'});
	return 'logout';
})

app.setErrorHandler((error, request, reply) => {
    if (error.validation && error.validation.length > 0) {
        const firstError = error.validation[0];
        const field = firstError.instancePath.replace(/\//, '') || 'field';
        return reply.status(400).send({type: field, message: firstError.message});
    }
});


const server: http.Server = app.server;


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

app.listen({port: 3000, host: '0.0.0.0'}, (addree) => {
    console.log("127.0.0.1:3000");
});

