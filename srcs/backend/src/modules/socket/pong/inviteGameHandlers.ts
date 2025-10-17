import { Socket } from "socket.io";
import { FastifyInstance } from "fastify";
import { Server as IOServer } from "socket.io";
import { v4 as uuidv4 } from 'uuid';
import { createGame, getGame, addPlayerToGame } from './gameManager';
import { cleanupGame } from './gameUtils';

interface AuthenticatedSocket extends Socket {
	user?: any;
  }
  
  interface pongGameHandlersProps {
	fastify: FastifyInstance;
	io: IOServer;
	socket: AuthenticatedSocket;
  }
  
export const userSockets = new Map<number, string>();
  
export default function inviteGameHandlers({ fastify, io, socket }: pongGameHandlersProps) {
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
			  socket.emit('error', { message: 'Opponent not found' });
			  cleanupGame(roomId);
			  return;
			}
	
			fastify.db.get(
			  'SELECT id, username FROM user_authentication WHERE id = ?',
			  [senderId],
			  (err: Error | null, senderUser: { id: number, username: string }) => {
				if (err || !senderUser) {
				  socket.emit('error', { message: 'Authentication required' });
				  cleanupGame(roomId);
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
				  if (currentGame?.ready === false)
					cleanupGame(roomId);
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
		  cleanupGame(roomId);
		  io.emit('user-refused-game', playerName);
		  console.log("here", roomId, playerName);
		}
	  });
}