import { Socket } from "socket.io";
import { FastifyInstance } from "fastify";
import { Server as IOServer } from "socket.io";
import { v4 as uuidv4 } from 'uuid';
import { createGame, getGame, addPlayerToGame, games } from './gameManager';
import { Tournament, tournaments } from "./tournamentStore";

interface AuthenticatedSocket extends Socket {
  user?: any;
}

interface pongGameHandlersProps {
  fastify: FastifyInstance;
  io: IOServer;
  socket: AuthenticatedSocket;
}

export const paddleDirections = new Map();

export default function pongGameHandlers({ fastify, io, socket }: pongGameHandlersProps) {
  const userData = socket.user;

  socket.on('join', (playerName) => {
    let roomId: string | null = null;
    let isReconnecting = false;

    console.log('joined player name', playerName);

    for (const [id, game] of games.entries()) {
      const playerIndex = game.players.indexOf(playerName);

      if (playerIndex !== -1) {
        // Reconnect: update socket ID
        const existingPlayer = game.playerNamesAndsockId.find(p => p.name === playerName);
        if (existingPlayer) {
          existingPlayer.sockId = socket.id;
        }

        roomId = id;
        isReconnecting = true;
        break;
      }

      if (!roomId && game.players.length < 2) {
        roomId = id;
      }
    }

    if (isReconnecting) {
      socket.join(roomId!);
      const game = getGame(roomId!);
      const playerIndex = game?.players.indexOf(playerName);
      socket.emit('init', { player: playerIndex });
      socket.emit('roomId', roomId);

      if (game?.players.length === 2 && game.ready) {
        socket.emit('ready');
      }
      return;
    }

    // New game or join open room
    if (!roomId) {
      roomId = uuidv4();
      createGame(roomId);
    }

    const success = addPlayerToGame({
      roomId,
      playerName,
      socketId: socket.id,
    });

    if (!success) {
      socket.emit('full');
      return;
    }

    socket.join(roomId);
    const game = getGame(roomId);
    const playerIndex = game?.players.indexOf(playerName);
    socket.emit('init', { player: playerIndex });
    socket.emit('roomId', roomId);

    if (game?.players.length === 2) {
      game.gameType = "remote"
      const allConnected = game.playerNamesAndsockId.every(p =>
        io.sockets.sockets.get(p.sockId)
      );

      if (allConnected) {
        game.ready = false; // lock game until countdown finishes
        let countdown = 3;

        const countdownInterval = setInterval(() => {
          io.to(roomId!).emit('countdown', countdown);
          countdown--;

          if (countdown < 0) {
            clearInterval(countdownInterval);
            io.to(roomId!).emit('ready');
            game.ready = true;
          }
        }, 1000);
      }
    }
  });

  socket.on('paddleMove', ({ side, direction, state, roomId, playerName }) => {
    const game = getGame(roomId);
    if (!game || !game.players.includes(playerName) || !game.ready) return; // prevent movement until ready

    if (!paddleDirections.has(roomId)) {
      paddleDirections.set(roomId, new Map());
    }

    const inputs = paddleDirections.get(roomId);
    if (!inputs.has(playerName)) {
      inputs.set(playerName, { side, direction: 0 });
    }

    const input = inputs.get(playerName);
    input.direction = state === 'start' ? direction : 0;
    console.log(`[paddleMove] ${playerName} moved ${direction} on ${side}`);
  });

  socket.on('scoreUpdate', ({ roomId, score }) => {
    const game = getGame(roomId);
    if (game) {
      game.state.score = score;
      io.to(roomId).emit('gameState', game.state);
    }
  });

  socket.on('playerLeft', (playerName) => {
    console.log('playerLeft', playerName);

    for (const [roomId, game] of games.entries()) {
      const idx = game.players.indexOf(playerName);
      if (idx !== -1) {
        // Remove from active game state but keep in tournament.participants
        game.players.splice(idx, 1);
        game.playerNamesAndsockId = game.playerNamesAndsockId.filter(p => p.name !== playerName);
        game.ready = false;

        socket.to(roomId).emit('playerLeft', { id: playerName });
        
        if (game.gameType === "tournament") {
          const tours: Tournament[] = Object.values(tournaments);
          tours.map((tournament: Tournament) => {
            if (tournament.winners.includes(playerName)) {
              const index = tournament.winners.findIndex((player) => player === playerName);
              if (index !== -1) {
                tournament.winners.splice(index, 1);
                tournament.losers.push(playerName);
                // Don't remove from participants array
              }
            }
          });
          socket.to(roomId).emit("gameOverTournament", { 
            roomId, 
            winner: game.players[0] || 'left', 
            loser: playerName 
          });
        }

        // Clean up empty game rooms
        if (game.players.length === 0) {
          games.delete(roomId);
          paddleDirections.delete(roomId);
        }

        break;
      }
    }
  });

  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);

    // Clean paddle input state
    for (const [roomId, inputs] of paddleDirections.entries()) {
      for (const [playerName] of inputs.entries()) {
        const player = games.get(roomId)?.playerNamesAndsockId.find(p => p.name === playerName);
        if (player?.sockId === socket.id) {
          inputs.delete(playerName);
        }
      }
      if (inputs.size === 0) {
        paddleDirections.delete(roomId);
      }
    }

    // Handle game cleanup
    for (const [roomId, game] of games.entries()) {
      const idx = game.playerNamesAndsockId.findIndex(p => p.sockId === socket.id);

      if (idx !== -1) {
        const playerName = game.playerNamesAndsockId[idx].name;
        game.players.splice(idx, 1);
        game.playerNamesAndsockId.splice(idx, 1);
        game.ready = false;

        io.to(roomId).emit('playerLeft', { id: playerName });
        io.to(roomId).emit('gameOver', { winner: game.players[0] });

        if (game.gameType == "tournament") {
          const tours: Tournament[] = Object.values(tournaments);
          tours.map((tournament:Tournament) => {
            if (tournament.winners.includes(playerName)) {
              const index = tournament.winners.findIndex((player) => player === playerName);
              if (index !== -1) {
                tournament.winners.splice(index, 1);
                tournament.losers.push(playerName);
              }
            }
          });
          socket.to(roomId).emit("gameOverTournament", { roomId, winner: game.players[0] || 'left', loser: playerName });
        }

        if (game.players.length === 0) {
          games.delete(roomId);
          paddleDirections.delete(roomId);
          console.log(`Room ${roomId} deleted`);
        }

        break;
      }
    }
  });

  socket.on('game:over', (roomId) => {
    const tournament = tournaments[roomId];
    
    if (tournament) {
      // Check if tournament is completed
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
              // Remove the tournament
              delete tournaments[tournament.id];
                // Emit updated tournaments list to all clients
                io.emit('tournaments_updated', Object.values(tournaments));
              }, 2000); // 2 second delay after countdown ends
              
              io.to(`tournament:${tournament.id}`).emit('tournament:state', tournament);
            } else {
              io.to(`tournament:${tournament.id}`).emit('tournament:state', tournament);
            }
          }, 2000);
        }

        // Emit tournament update
        // io.to(`tournament:${tournament.id}`).emit('tournament:state', tournament);
      }
  });
}
