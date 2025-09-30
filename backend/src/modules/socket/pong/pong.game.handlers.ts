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
export const userSockets = new Map<number, string>();

export default function pongGameHandlers({ fastify, io, socket }: pongGameHandlersProps) {
  const userData = socket.user;

  // Add user to socket mapping when they connect
  if (userData?.id) {
    userSockets.set(userData.id, socket.id);
    console.log('👤 User connected:', userData.id, 'Socket:', socket.id);
  }

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
      console.log("Index, Game:", idx, game);
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

    // Remove from userSockets
    if (userData?.id) {
      userSockets.delete(userData.id);
    }

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

  socket.on('invite-game', ({ opponent, playerName }) => {
    console.log('🎮 Invite game received:', { opponent, playerName });

    const opponentId = typeof opponent === 'string' ? parseInt(opponent) : opponent;
    const senderId = typeof playerName === 'string' ? parseInt(playerName) : playerName;

    // Create game room immediately
    let roomId = uuidv4();
    createGame(roomId);
    
    // Add both players to the game
    addPlayerToGame({
      roomId,
      playerName: String(opponentId),
      socketId: '',
    });

    addPlayerToGame({
      roomId,
      playerName: String(senderId),
      socketId: socket.id,
    });

    // Join the room immediately
    socket.join(roomId);
    const game = getGame(roomId);
    const playerIndex = game?.players.indexOf(String(senderId));
    socket.emit('init', { player: playerIndex });
    socket.emit('roomId', roomId);
    
    // Get user info and send notification
    fastify.db.get(
      'SELECT id, username FROM user_authentication WHERE id = ?',
      [opponentId],
      (err: Error | null, opponentUser: { id: number, username: string }) => {
        if (err || !opponentUser) {
          console.log('❌ Opponent not found:', opponent);
          socket.emit('error', { message: 'Opponent not found' });
          games.delete(roomId);
          return;
        }

        fastify.db.get(
          'SELECT id, username FROM user_authentication WHERE id = ?',
          [senderId],
          (err: Error | null, senderUser: { id: number, username: string }) => {
            if (err || !senderUser) {
              console.log('❌ Sender not found:', playerName);
              socket.emit('error', { message: 'Authentication required' });
              games.delete(roomId);
              return;
            }

            // Send only real-time notification (no database storage)
            io.emit('pong-invite-notification', {
              recipientId: opponentId,
              senderId: senderId,
              sender: senderUser.username,
              receiver: opponentUser.username,
              type: 'pong_invite',
              text: `${roomId}:${senderUser.username}`,
              timestamp: new Date().toISOString(),
              gameRoomId: roomId
            });

            // Confirm to sender
            socket.emit('invite-sent', { 
              message: `Pong invite sent to ${opponentUser.username}`,
              roomId 
            });

            // Set timeout to clean up expired game room
            setTimeout(() => {
              const currentGame = getGame(roomId);
              if (currentGame?.ready === false) {
                games.delete(roomId);
                console.log(`🧹 Cleaned up expired game room: ${roomId}`);
              }
            }, 60000); // 60 seconds timeout
          }
        );
      }
    );
  });

  socket.on('accept-invite', ({ roomId, playerName }) => {
    console.log('🎮 Accept invite received:', { roomId, playerName });
    
    const playerId = typeof playerName === 'string' ? parseInt(playerName) : playerName;
    const playerIdString = String(playerId);
    
    const game = getGame(roomId);
    if (!game) {
      console.log('❌ Game not found for room:', roomId);
      socket.emit('error', { message: 'Game room not found or expired' });
      return;
    }

    // Check if player is part of this game
    const playerIndex = game.players.indexOf(playerIdString);
    if (playerIndex === -1) {
      console.log('❌ Player not in game:', playerIdString);
      socket.emit('error', { message: 'You are not part of this game' });
      return;
    }

    // Update socket ID for accepting player
    const player = game.playerNamesAndsockId.find(p => p.name === playerIdString);
    if (player) {
      player.sockId = socket.id;
      console.log('🔄 Updated socket ID for player:', playerIdString);
    }

    // Join the room
    socket.join(roomId);
    socket.emit('init', { player: playerIndex });
    socket.emit('roomId', roomId);

    // Check if both players are now connected
    const connectedSockets = io.sockets.adapter.rooms.get(roomId);
    console.log('🔌 Connected sockets in room:', connectedSockets?.size);

    if (connectedSockets && connectedSockets.size === 2) {
      console.log('🚀 Both players connected! Starting game...');
      
      // Notify both players that the game is starting
      io.to(roomId).emit('game-starting', {
        message: 'Both players connected! Redirecting to game...',
        roomId: roomId
      });
      
      // Start countdown after a short delay to allow for navigation
      setTimeout(() => {
        game.gameType = "remote";
        game.ready = false;
        let countdown = 3;

        const countdownInterval = setInterval(() => {
          io.to(roomId).emit('countdown', countdown);
          console.log(`⏰ Countdown: ${countdown} for room: ${roomId}`);
          countdown--;

          if (countdown < 0) {
            clearInterval(countdownInterval);
            io.to(roomId).emit('ready');
            game.ready = true;
            console.log('🎮 Game ready for room:', roomId);
          }
        }, 1000);
      }, 2000); // 2 second delay for navigation
      
    } else {
      console.log('⏳ Waiting for both players to connect...');
    }
  });

  socket.on('refuse-invite', ({ roomId, playerName }) => {
    const game = getGame(roomId);
    if (game !== undefined && game.ready === false) {
      games.delete(roomId);
      io.emit('user-refused-game', playerName);
      console.log("here", roomId, playerName);
    }
  });
}
