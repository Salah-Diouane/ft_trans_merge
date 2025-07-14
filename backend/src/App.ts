/// <reference types="../types/fastify" />

import fastify from "fastify";
import dbPlugin from './plugins/database.plugin'
import Modules from "./plugins/modules.plugin";
import jwtplugin from "./plugins/jwt.plugin";
import cookiePlugin from "./plugins/cookie.plugin";
import auth02 from "./plugins/oauth2.plugin"

const app = fastify();

app.get("/hello", () => "hello");

app.register(dbPlugin);

app.register(Modules);

app.register(jwtplugin);

app.register(cookiePlugin);

app.register(auth02);

app.ready();
// jwt verf
app.addHook("onRequest", async (request, reply) => {
    try {
        const publicPaths = ["/login", "/register", "/verify"];
        const isPublic = publicPaths.some(path => (request.raw.url || "").startsWith(path));

        if (!isPublic) {
            const token = request.cookies.accessToken;

            if (!token) {
                return reply.code(401).send({ message: "No access token in cookies" });
            }
            const decoded = await app.jwt.verify(token);
            request.user = decoded;
            console.log("✅ Authenticated user:", decoded);
        }
    } catch (err) {
        console.error("❌ JWT verification failed:", err);
        return reply.code(401).send({ message: "Unauthorized", error: err });
    }
});

app.listen({port: 3000, host: '0.0.0.0'}, (addree) => {
    console.log("127.0.0.1:3001");
});

/*
types : { FastifyInstance, FastifyRequest, FastifyReply, FastifyPluginAsync }

JWT 

AUTH02

my-fastify-app/
├── src/
│   ├── modules/
│   │   ├── chat/
│   │   │   ├── chat.controller.js
│   │   │   ├── chat.routes.js
│   │   │   ├── chat.service.js
│   │   │   └── chat.model.js
│   │   ├── game/
│   │   │   ├── game.controller.js
│   │   │   ├── game.routes.js
│   │   │   ├── game.service.js
│   │   │   └── game.model.js
│   │   ├── user/
│   │   │   ├── user.controller.js
│   │   │   ├── user.routes.js
│   │   │   ├── user.service.js
│   │   │   └── user.model.js
│   │   └── profile/
│   │       ├── profile.controller.js
│   │       ├── profile.routes.js
│   │       ├── profile.service.js
│   │       └── profile.model.js
│   ├── plugins/
│   ├── utils/
│   ├── config/
│   ├── app.js
│   └── server.js
├── test/
└── package.json

*/