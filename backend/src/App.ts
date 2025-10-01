/// <reference types="../types/fastify" />

import fastify from "fastify";
import dbPlugin from './plugins/database.plugin'
import Modules from "./plugins/modules.plugin";
import jwtplugin from "./plugins/jwt.plugin";
import cookiePlugin from "./plugins/cookie.plugin";
import auth02 from "./plugins/oauth2.plugin"
import cors from '@fastify/cors';
import ajvErrors from 'ajv-errors';
import { Server as IOServer } from "socket.io";
import http from "http";
import setupSocketIO from './plugins/socket.plugin';
import { getuser } from "./utils/userauth.utils";
import cloudinaryPlugin from "./plugins/cloudinary.plugin";
import tournamentRoutes from "./modules/socket/pong/tournamentRoutes";

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
    origin: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
});

app.register(dbPlugin);
app.register(cookiePlugin);
app.register(jwtplugin);
app.register(auth02);
app.register(cloudinaryPlugin);

app.addHook("onRequest", async (request, reply) => {
    try {
        // const publicPaths = ["/api/login", "/api/register"]; 
        const publicPaths = [
            "/api/login", 
            "/api/register",
            "/api/profile/UserPlayerStats",
            "/api/profile/GameStats",
            "/api/profile/userinfo",
            "/api/profile/PlayerHistory",
            "/api/profile/CountGames"
        ];
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

app.setErrorHandler((error, request, reply) => {
    if (error.validation && error.validation.length > 0) {
        const firstError = error.validation[0];
        const field = firstError.instancePath.replace(/\//, '') || 'field';
        return reply.status(400).send({type: field, message: firstError.message});
    }
});

app.register(async (api) => {

    api.register(Modules, { io: app.io });
    api.register(tournamentRoutes); 


    api.get("/hello", (request, reply) => {
        return reply.send({ refreshtoken: true, accesstoken: true });
    });

    api.get('/userinfo', async (request, reply) => {

        try {
            const token = request.cookies.accessToken;
            if (!token) {
                return reply.code(401).send({ userinfo: false, message: "No access token in cookies", accesstoken: false, refreshtoken: true });
            }
            const decodetoken = app.jwt.decode(token) as { username: string };
            const user = await getuser(app, decodetoken.username);
            return reply.send({
                userinfo: true,
                data: {
                    username: user?.username,
                    first_name: user?.first_name,
                    family_name: user?.family_name,
                    Language: user?.Language,
                    image_url: user?.image_url,
                    cover_url: user?.cover_url,
                    email: user?.email,
                    twofa: user?.twoFA
                }
            });
        } catch (err) {
            reply.code(400).send({ userinfo: false, error: err });
        }
        
    });

    app.get('/logout', (request, reply) => {
        reply.clearCookie('accessToken', {
            path: '/',
            secure: false,
            httpOnly: true,
            sameSite: 'strict'
        });
    
        reply.clearCookie('refreshtoken', {
            path: '/login/refreshtoken',
            secure: false,
            httpOnly: true,
            sameSite: 'strict'
        });
    
        return reply.send({ message: 'Logged out' });
    });

}, { prefix: '/api' });

const server: http.Server = app.server;
const io = new IOServer(server, {
  cors: {
    origin: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  },
});

app.decorate('io', io);

app.ready().then(() => {
    setupSocketIO(app, io);
});

app.listen({ port: 3000, host: '0.0.0.0' }, () => {
    console.log("127.0.0.1:3000");
});
