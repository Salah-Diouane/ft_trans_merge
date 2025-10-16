import { FastifyInstance } from "fastify";
import { Server as IOServer, Socket } from "socket.io";
import { tournaments } from "./tournamentStore"; // Adjust path accordingly
import { games } from "./gameManager";

interface AuthenticatedSocket extends Socket {
  user?: any;
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
  
  socket.on("leave-tournament-room", ({ userId, tournamentId }: { userId: string; tournamentId: string }) => {
    const tournament = tournaments[tournamentId];
    if (tournament) {
      socket.leave(`tournament:${tournamentId}`);
      console.log(`Socket ${socket.id} left tournament room ${tournamentId}`);
    }
  });

  socket.on('addToRoom', (playerName) => {
    console.log('Socket ID in addToRoom event:', socket.id, games.size);
    // for (const [roomId, game] of games.entries()) {
    //   console.log(`addToRoom event triggered for player: ${playerName} game, RoomID:`, game, roomId);
    //   if (game?.players.includes(playerName)) {
    //     socket.join(roomId);
    //     game.readyPlayers.push(playerName);
    //     break;
    //   }
    // }
    // Loop through all games to find the player without using the games.entries() method
    for (const roomId of games.keys()) {
      const game = games.get(roomId);
      console.log(`addToRoom event triggered for player: ${playerName} game, RoomID:`, game, roomId);
      if (game?.players.includes(playerName)) {
        socket.join(roomId);
        if (!game.readyPlayers.includes(playerName)) {
          game.readyPlayers.push(playerName);
        }
        break;
      }
    }
  });

  socket.on('game:over', (roomId) => {
    const tournament = tournaments[roomId];
    console.log('Game over for room:', roomId, 'Tournament:', tournament);
    if (tournament) {
      if (tournament.winners.length === 1) {
        let completionCountdown = 60;
        tournament.countdown = completionCountdown;
        
        const countdownInterval = setInterval(() => {
          completionCountdown--;
          tournament.countdown = completionCountdown;
          
          console.log("here", tournaments, roomId);
          if (completionCountdown <= 0) {
            clearInterval(countdownInterval);
            tournament.status = 'completed';
            tournament.countdown = null;
            
            // Add a delay before removing the tournament
            setTimeout(() => {
                delete tournaments[tournament.id];
                io.emit('tournaments_updated', Object.values(tournaments));
              }, 2000);
              
              io.to(`tournament:${tournament.id}`).emit('tournament:state', tournament);
            } else {
              io.to(`tournament:${tournament.id}`).emit('tournament:state', tournament);
            }
          }, 2000);
        }
      }
  });
}

