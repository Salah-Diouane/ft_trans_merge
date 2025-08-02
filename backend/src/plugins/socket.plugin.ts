import { Server as IOServer, Socket } from "socket.io";
import { FastifyInstance } from "fastify";
import createAuthMiddleware from "../modules/socket/userdata/auth.middleware";
import  handleChatEvents  from "../modules/socket/chat/chat.handlers"
import  handleGameEvents  from "../modules/socket/tictactoe/game.handlers";
import handleUserEvents from "../modules/socket/userdata/user.handlers"
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
        console.log("---------------> User disconnected:", socket.id);
      });
    });
}

