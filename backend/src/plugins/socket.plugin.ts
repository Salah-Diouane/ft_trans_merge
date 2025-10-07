import { Server as IOServer, Socket } from "socket.io";
import { FastifyInstance } from "fastify";
import createAuthMiddleware from "../modules/socket/userdata/auth.middleware";
import handleChatEvents from "../modules/socket/chat/chat.handlers";
import handleGameEvents from "../modules/socket/tictactoe/game.handlers";
import handleUserEvents from "../modules/socket/userdata/user.handlers";
import pongGameHandlers from "../modules/socket/pong/pong.game.handlers";
import tournamentHandlers from "../modules/socket/pong/tournamentHandlers";

import { startGameLoop } from "../modules/socket/pong/gameLoop";
interface AuthenticatedSocket extends Socket {
  user?: any;
  online?: boolean;
}

export default function setupSocketIO(fastify: FastifyInstance, io: IOServer) {
  const db = fastify.db;
  const authMiddleware = createAuthMiddleware(fastify);
  io.use(authMiddleware);

  io.on("connection", (socket: AuthenticatedSocket) => {
    const userData = socket.user;

    handleUserEvents({ fastify, io, socket });
    handleChatEvents({ fastify, io, socket });
    handleGameEvents({ fastify, io, socket });
    pongGameHandlers({ fastify, io, socket });
    tournamentHandlers({ fastify, io, socket });

    socket.on("disconnect", () => {
      io.emit("user:status", {
        username: userData.username,
        id: userData.userid,
        online: false,
      });
    });
  });
  startGameLoop({ fastify, io });
}
