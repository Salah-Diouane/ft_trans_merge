import fastify from "fastify";
import { createServer } from "http";
import { Server as IOServer } from "socket.io";
import dbPlugin from "./plugins/database.plugin";
import Modules from "./plugins/modules.plugin";
import jwtplugin from "./plugins/jwt.plugin";
import cookiePlugin from "./plugins/cookie.plugin";
import auth02 from "./plugins/oauth2.plugin";
import { setupSocketIO } from "./plugins/chat-socket.plugin"; 

const app = fastify();
const server = createServer(app.server);
const io = new IOServer(server, {
  cors: {
    origin: ["http://localhost:5173", "http://localhost:3000"],
    methods: ["GET", "POST"]
  }
});

app.register(dbPlugin);

app.register(Modules);

app.register(jwtplugin);

app.register(cookiePlugin);

app.register(auth02);

app.get("/hello", () => "hello");


app.addHook("onRequest", async (request, reply) => {
    
  try {
    const publicPaths = ["/login", "/register", "/verify"];
    const isPublic = publicPaths.some(path =>
      (request.raw.url || "").startsWith(path)
    );

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

// app.ready().then(() => {
//   setupSocketIO(app, io); 
// });


server.listen(3000, '0.0.0.0', () => {
  console.log("🚀 Server listening at http://127.0.0.1:3000");
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
