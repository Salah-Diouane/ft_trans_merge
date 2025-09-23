import { Socket } from "socket.io";
import { FastifyInstance } from "fastify";
import { Server as IOServer } from "socket.io";
import { tournaments, Tournament } from "./tournamentStore"; // Adjust path accordingly
import { v4 as uuidv4 } from 'uuid';
import { Game, games } from "./gameManager";
import { paddleDirections } from "./pong.game.handlers";

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
  // 🔹 Handle joining a tournament room
  socket.on("join-tournament-room", (tournamentId: string) => {
    const tournament = tournaments[tournamentId];
    
    if (tournament) {
      socket.join(`tournament:${tournamentId}`);
      console.log(`Socket ${socket.id} joined tournament room ${tournamentId}`);
    } else {
      console.error(`Tournament with ID ${tournamentId} does not exist.`);
    }
  });

  // 🔹 Handle leaving a tournament room
  socket.on("leave-tournament-room", (tournamentId: string) => {
    const tournament = tournaments[tournamentId];
    
    if (tournament) {
      socket.leave(`tournament:${tournamentId}`);
      console.log(`Socket ${socket.id} left tournament room ${tournamentId}`);
    } else {
      console.error(`Tournament with ID ${tournamentId} does not exist.`);
    }
  });

  // 🔹 Handle joining a tournament
  socket.on("join-tournament", (tournamentId: string, user: string) => {
    const tournament = tournaments[tournamentId];
    if (!tournament) {
      socket.emit("error", { message: "Tournament not found." });
      return;
    }

    if (tournament.players.includes(user)) {
      socket.emit("error", { message: "Player already joined." });
      return;
    }

    if (tournament.players.length >= tournament.maxPlayers) {
      socket.emit("error", { message: "Tournament is full." });
      return;
    }

    // Add the player to both players and participants arrays
    tournament.players.push(user);
    // if (!tournament.participants.includes(user)) {
    //   tournament.participants.push(user);
    // }
    tournament.currentPlayers = tournament.players.length;

    // 🔒 Emit the update only to the specific tournament room
    io.to(`tournament:${tournamentId}`).emit("tournament-updated", tournament);
    console.log(`Player ${user} joined tournament ${tournamentId}`);

    // Send the updated tournament data to the user
    socket.emit("tournament-updated", tournament);
  });

  // 🔹 Handle tournament updates (like a player leaving, etc.)
  socket.on("update-tournament", (tournamentId: string, updatedTournament: Tournament) => {
    const tournament = tournaments[tournamentId];

    if (tournament) {
      // Update the tournament in the store
      tournaments[tournamentId] = { ...tournament, ...updatedTournament };

      // Broadcast the update to the specific room
      io.to(`tournament:${tournamentId}`).emit("tournament-updated", tournaments[tournamentId]);
      console.log(`Tournament ${tournamentId} updated`);
    } else {
      socket.emit("error", { message: "Tournament not found." });
    }
  });

  // 🔹 Handle player leaving a tournament
  socket.on("leave-tournament", (tournamentId: string, user: string) => {
    const tournament = tournaments[tournamentId];

    if (!tournament) {
      socket.emit("error", { message: "Tournament not found." });
      return;
    }

    const playerIndex = tournament.players.indexOf(user);
    if (playerIndex === -1) {
      socket.emit("error", { message: "Player not in the tournament." });
      return;
    }

    // Remove player from the tournament
    // tournament.players.splice(playerIndex, 1);
    tournament.currentPlayers = tournament.players.length;

    // Broadcast the update to the specific tournament room
    io.to(`tournament:${tournamentId}`).emit("tournament-updated", tournament);
    console.log(`Player ${user} left tournament ${tournamentId}`);

    // Send the updated tournament data back to the user
    socket.emit("tournament-updated", tournament);
  });

  // 🔹 Handle new tournament creation
  socket.on("create-tournament", (name: string, maxPlayers: number, ownerName: string, ownerPlays: boolean) => {
    const id = uuidv4();
    const players: string[] = ownerPlays ? [ownerName] : [];

    const games = new Map<string, Game>();

    const tournament: Tournament = {
      id,
      name,
      owner: ownerName || "unknown",
      ownerPlays: false,
      maxPlayers,
      players: [],
      participants: [], // Add the participants array
      winners: [],
      losers: [],
      currentPlayers: 0,
      countdown: null,
      roundes: 0,
      matches: [],
      status: "waiting",
    };

    tournaments[id] = tournament;

    // Broadcast the list of all tournaments to all clients
    io.emit("tournaments-updated", Object.values(tournaments));
    console.log(`Tournament created: ${name} with ID ${id}`);

    // Emit the new tournament details to the client who created it
    socket.emit("tournament-created", tournament);
  });

  socket.on('addToRoom', (playerName) => {
    console.log('Socket ID in addToRoom event:', socket.id);
      for (const [roomId, game] of games.entries()) {
        if (game?.players.includes(playerName)) {
          socket.join(roomId);
          game.readyPlayers.push(playerName);
          console.log(game);
          break;
        }
      }
  });

  socket.on('playerLeft', (playerName) => {
    console.log('playerLeft', playerName);

    for (const [roomId, inputs] of paddleDirections.entries()) {
      if (inputs.has(playerName)) {
        inputs.delete(playerName);
        if (inputs.size === 0) {
          paddleDirections.delete(roomId);
        }
      }
    }

    for (const [roomId, game] of games.entries()) {
      const idx = game.players.indexOf(playerName);
      if (idx !== -1) {
        game.players.splice(idx, 1);
        game.playerNamesAndsockId = game.playerNamesAndsockId.filter(p => p.name !== playerName);
        game.ready = false;

        socket.to(roomId).emit('playerLeft', { id: playerName });
        
        if (game.gameType === "tournament") {
          const tours: Tournament[] = Object.values(tournaments);
          tours.map((tournament: Tournament) => {
            // Ensure player is in participants array
            // if (!tournament.participants.includes(playerName)) {
            //   tournament.participants.push(playerName);
            // }

            // Update winners/losers status
            if (tournament.winners.includes(playerName)) {
              const index = tournament.winners.findIndex((player) => player === playerName);
              if (index !== -1) {
                tournament.winners.splice(index, 1);
                if (!tournament.losers.includes(playerName)) {
                  tournament.losers.push(playerName);
                }
              }
            }

            // Remove from active players but keep in participants
            // tournament.players = tournament.players.filter(p => p !== playerName);

            // Emit tournament update
            io.to(`tournament:${tournament.id}`).emit('tournament-updated', tournament);
          });
        }

        if (game.players.length === 0) {
          games.delete(roomId);
          paddleDirections.delete(roomId);
          console.log(`Room ${roomId} deleted`);
        } else {
          io.to(roomId).emit('gameOver', { winner: game.players[0] });
        }

        break;
      }
    }
  });

  // On Game Over the tournament match is updated
  socket.on('gameOverTournament', ({ roomId, winner, loser }) => {
    const tournament = Object.values(tournaments).find(t =>
      t.matches.some(m => m.roomId === roomId)
    );

    if (tournament) {
      const match = tournament.matches.find(m => m.roomId === roomId);
      if (match) {
        match.winner = winner;
        match.loser = loser;
        match.progress = 'completed';
        
        // Update winners and losers arrays
        if (!tournament.losers.includes(loser)) {
          tournament.losers.push(loser);
        }
        if (!tournament.winners.includes(winner)) {
          tournament.winners.push(winner);
        }

        // Check tournament completion
        const allCompleted = tournament.matches.every(m => m.progress === 'completed');
        if (allCompleted || tournament.winners.length === 1) {
          // Add 60 second delay before marking tournament as completed
          setTimeout(() => {
            tournament.status = 'completed';
            // Emit tournament update after status change
            io.to(`tournament:${tournament.id}`).emit('tournament-updated', tournament);
          }, 60000); // 60 seconds delay
        }

        // Emit immediate update for match result
        io.to(`tournament:${tournament.id}`).emit('tournament-updated', tournament);
      }
    }
  });

  // 🔹 Handle the client disconnecting
  socket.on("disconnect", () => {
    console.log(`Socket ${socket.id} disconnected`);
  });
}
