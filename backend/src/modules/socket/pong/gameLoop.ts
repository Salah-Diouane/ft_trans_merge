import { games } from './gameManager';
import { paddleDirections } from './pong.game.handlers';
import { resetBall, handleScoring, clamp, checkPaddleCollision } from './gameUtils';
import { pongGameEventProps } from './interfaces';
import { tournaments } from './tournamentStore';

export function startGameLoop(pongGameEvent: pongGameEventProps) {
  const io = pongGameEvent.io;
  const baseWidth = 600;
  const baseHeight = 400;
  const paddleW = 12;
  const paddleH = 70;
  const ballR = 10;
  const paddleOffset = 20;
  const maxBallSpeed = 20;
  const initialBallSpeed = 3;



  setInterval(() => {
    for (const [roomId, game] of games.entries()) {
      if (game.players.length !== 2) continue;
      if (!game.ready) continue;
      
      const state = game.state;
      const inputs = paddleDirections.get(roomId) || new Map();
      const speed = 10;

      const paddleMovement = { left: 0, right: 0 };

      // Handle paddle movement
      for (const [, input] of inputs.entries()) {
        const dir = input.direction;
        const side = input.side;
        if (side === 'left') {
          paddleMovement.left = dir;
          state.paddles.left = clamp(
            state.paddles.left + dir * speed,
            0,
            baseHeight - paddleH
          );
        } else {
          paddleMovement.right = dir;
          state.paddles.right = clamp(
            state.paddles.right + dir * speed,
            0,
            baseHeight - paddleH
          );
        }
      }

      const ball = state.ball;
      const prevBallX = ball.x;
      const prevBallY = ball.y;

      // Move ball
      ball.x += ball.dx;
      ball.y += ball.dy;

      // Ball collision with top/bottom walls
      if (ball.y - ballR <= 0 || ball.y + ballR >= baseHeight) {
        ball.dy *= -1;
        ball.y = clamp(ball.y, ballR, baseHeight - ballR);
      }

      // Paddle positions
      const paddleLeftX = paddleOffset;
      const paddleLeftY = state.paddles.left;
      const paddleRightX = baseWidth - paddleOffset - paddleW;
      const paddleRightY = state.paddles.right;

      const leftPaddleRect = {
        top: paddleLeftY,
        bottom: paddleLeftY + paddleH,
        left: paddleLeftX,
        right: paddleLeftX + paddleW,
      };

      const rightPaddleRect = {
        top: paddleRightY,
        bottom: paddleRightY + paddleH,
        left: paddleRightX,
        right: paddleRightX + paddleW,
      };

      // Paddle collisions
      if (
        ball.dx < 0 &&
        checkPaddleCollision(prevBallX, ball.x, ball.y, ballR, leftPaddleRect, true)
      ) {
        ball.x = leftPaddleRect.right + ballR;
        const relativeIntersectY = (ball.y - paddleLeftY) / paddleH - 0.5;
        ball.dy = relativeIntersectY * 8;
        ball.dx = Math.min(Math.abs(ball.dx) * 1.1, maxBallSpeed);
      }
      else if (
        ball.dx > 0 &&
        checkPaddleCollision(prevBallX, ball.x, ball.y, ballR, rightPaddleRect, false)
      ) {
        ball.x = rightPaddleRect.left - ballR;
        const relativeIntersectY = (ball.y - paddleRightY) / paddleH - 0.5;
        ball.dy = relativeIntersectY * 8;
        ball.dx = -Math.min(Math.abs(ball.dx) * 1.1, maxBallSpeed);
      }

      // Vertical paddle collisions (top/bottom edges)
      const hitLeftEdgeVertically =
        ball.x + ballR >= leftPaddleRect.left &&
        ball.x - ballR <= leftPaddleRect.right &&
        (
          (prevBallY + ballR <= leftPaddleRect.top && ball.y + ballR >= leftPaddleRect.top) ||
          (prevBallY - ballR >= leftPaddleRect.bottom && ball.y - ballR <= leftPaddleRect.bottom)
        );

      if (paddleMovement.left === 0 && hitLeftEdgeVertically) {
        ball.dy *= -1;
        ball.y = ball.y < leftPaddleRect.top
          ? leftPaddleRect.top - ballR
          : leftPaddleRect.bottom + ballR;
      }

      const hitRightEdgeVertically =
        ball.x + ballR >= rightPaddleRect.left &&
        ball.x - ballR <= rightPaddleRect.right &&
        (
          (prevBallY + ballR <= rightPaddleRect.top && ball.y + ballR >= rightPaddleRect.top) ||
          (prevBallY - ballR >= rightPaddleRect.bottom && ball.y - ballR <= rightPaddleRect.bottom)
        );

      if (paddleMovement.right === 0 && hitRightEdgeVertically) {
        ball.dy *= -1;
        ball.y = ball.y < rightPaddleRect.top
          ? rightPaddleRect.top - ballR
          : rightPaddleRect.bottom + ballR;
      }

      // Fallback: Ball inside paddle protection
      const ballInsideLeft =
        ball.x + ballR > leftPaddleRect.left &&
        ball.x - ballR < leftPaddleRect.right &&
        ball.y + ballR > leftPaddleRect.top &&
        ball.y - ballR < leftPaddleRect.bottom;

      const ballInsideRight =
        ball.x + ballR > rightPaddleRect.left &&
        ball.x - ballR < rightPaddleRect.right &&
        ball.y + ballR > rightPaddleRect.top &&
        ball.y - ballR < rightPaddleRect.bottom;

      if (ball.dx < 0 && ballInsideLeft) {
        ball.dx = Math.min(Math.abs(ball.dx), maxBallSpeed);
        ball.x = leftPaddleRect.right + ballR;
      }

      if (ball.dx > 0 && ballInsideRight) {
        ball.dx = -Math.min(Math.abs(ball.dx), maxBallSpeed);
        ball.x = rightPaddleRect.left - ballR;
      }

      // Handle scoring with single function
      const gameEnded = handleScoring(
        ball,
        state,
        game,
        roomId,
        baseWidth,
        baseHeight,
        initialBallSpeed,
        io,
        tournaments,
        games,
        paddleDirections
      );

      if (gameEnded) {
        continue;
      }

      io.to(roomId).emit('gameState', {
        ball,
        paddles: state.paddles,
        score: state.score,
        players: game.players,
        roomId,
      });
    }
  }, 1000 / 60);
}
