import { Socket } from "socket.io";
import { FastifyInstance } from "fastify";
import { Server as IOServer } from "socket.io";
import { tournaments } from "./tournamentStore"; // Adjust path accordingly
import { games } from "./gameManager";

interface AuthenticatedSocket extends Socket {
  user?: any; // Optional user data, assuming it can be attached
}

export default function tournamentHandlers({
  fastify,
  io,
  socket,
}: {
  fastify: FastifyInstance;
  io: IOServer;
  socket: AuthenticatedSocket;
}) {
  socket.on("join-tournament-room", (tournamentId: string) => {
    const tournament = tournaments[tournamentId];
    if (tournament) {
      socket.join(`tournament:${tournamentId}`);
      console.log(`Socket ${socket.id} joined tournament room ${tournamentId}`);
    }
  });
  
  socket.on("leave-tournament-room", (tournamentId: string) => {
    const tournament = tournaments[tournamentId];
    if (tournament) {
      socket.leave(`tournament:${tournamentId}`);
      console.log(`Socket ${socket.id} left tournament room ${tournamentId}`);
    }
  });

  socket.on('addToRoom', (playerName) => {
    console.log('Socket ID in addToRoom event:', socket.id);
    for (const [roomId, game] of games.entries()) {
      if (game?.players.includes(playerName)) {
        socket.join(roomId);
        game.readyPlayers.push(playerName);
        break;
      }
    }
  });

  socket.on("disconnect", () => {
    console.log(`Socket ${socket.id} disconnected`);
  });
}
