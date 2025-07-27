// src/socket/handlers/game.handler.ts
import { FastifyInstance } from "fastify";
import { Server as IOServer, Socket } from "socket.io";
import { GameState, checkWinner, resetGame } from "../utils/game.utils";

const games = new Map<string, GameState>();

export function handleGameEvents(fastify: FastifyInstance, io: IOServer, socket: Socket) {
  socket.on("joinGame", (room: string, player: string) => {
    socket.join(room);
    let game = games.get(room);

    if (!game) {
      game = {
        squares: Array(9).fill(null),
        xIsNext: true,
        playerX: player,
        playerO: "",
        players: [player],
      };
      games.set(room, game);
    } else if (game.players.length < 2 && !game.players.includes(player)) {
      game.playerO = player;
      game.players.push(player);
    }

    io.to(room).emit("gameState", game);
  });

  socket.on("makeMove", (room: string, index: number, player: string) => {
    const game = games.get(room);
    if (!game || game.squares[index] || checkWinner(game.squares)) return;

    const currentPlayer = game.xIsNext ? game.playerX : game.playerO;
    if (player !== currentPlayer) return;

    game.squares[index] = game.xIsNext ? "X" : "O";
    game.xIsNext = !game.xIsNext;
    io.to(room).emit("gameState", game);

    const winner = checkWinner(game.squares);
    if (winner) io.to(room).emit("winner", winner);
  });

  socket.on("resetGame", (room: string) => {
    const game = games.get(room);
    if (game) {
      games.set(room, resetGame(game));
      io.to(room).emit("gameState", games.get(room));
    }
  });
}