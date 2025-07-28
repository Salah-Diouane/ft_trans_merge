import { Server as IOServer, Socket } from "socket.io";
import { FastifyInstance } from "fastify";
import createAuthMiddleware from "../middlewares/auth.middleware";
import  handleChatEvents  from "../handlers/chat.handlers";
import  handleGameEvents  from "../handlers/game.handlers";
import handleUserEvents from "../handlers/user.handlers"
import SocketIO from "../modules/socket/SocketIO"
interface AuthenticatedSocket extends Socket {
    user?: any;
}

export default function setupSocketIO(fastify: FastifyInstance, io: IOServer) {
    const db = fastify.db;
    const authMiddleware = createAuthMiddleware(fastify);
    io.use(authMiddleware);

    io.on("connection", (socket) => {
      console.log(" User connected:", socket.id);

      handleUserEvents({fastify, io, socket});
      handleChatEvents({fastify, io, socket});
      handleGameEvents({fastify, io, socket});

      socket.on("disconnect", () => {
        console.log(" User disconnected:", socket.id);
      });
    });
}


// const setupSocketIO = (fastify: FastifyInstance) => {

// 	fastify.register(SocketIO);
// };

// export default fp(setupSocketIO);

