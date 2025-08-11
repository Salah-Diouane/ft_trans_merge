import { games } from './gameManager';
import { paddleDirections } from './pong.game.handlers';
import { resetBall } from './gameUtils';
import { pongGameEventProps } from './interfaces';

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

  const clamp = (value: number, min: number, max: number) =>
    Math.max(min, Math.min(max, value));

  function checkPaddleCollision(
    prevX: number,
    currX: number,
    ballY: number,
    ballR: number,
    paddleRect: { top: number; bottom: number; left: number; right: number },
    goingLeft: boolean
  ) {
    const passedFront = goingLeft
      ? prevX - ballR >= paddleRect.right && currX - ballR <= paddleRect.right
      : prevX + ballR <= paddleRect.left && currX + ballR >= paddleRect.left;

    const withinY =
      ballY + ballR >= paddleRect.top && ballY - ballR <= paddleRect.bottom;

    return passedFront && withinY;
  }

  setInterval(() => {
    for (const [roomId, game] of games.entries()) {
      if (game.players.length !== 2) continue;

      if (!game.ready) continue;
      
      const state = game.state;
      const inputs = paddleDirections.get(roomId) || new Map();
      const speed = 10;

      const paddleMovement = { left: 0, right: 0 };

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

      ball.x += ball.dx;
      ball.y += ball.dy;

      if (ball.y - ballR <= 0 || ball.y + ballR >= baseHeight) {
        ball.dy *= -1;
        ball.y = clamp(ball.y, ballR, baseHeight - ballR);
      }

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

      // Left paddle collision
      if (
        ball.dx < 0 &&
        checkPaddleCollision(prevBallX, ball.x, ball.y, ballR, leftPaddleRect, true)
      ) {
        ball.x = leftPaddleRect.right + ballR;
        const relativeIntersectY = (ball.y - paddleLeftY) / paddleH - 0.5;
        ball.dy = relativeIntersectY * 8;
        ball.dx = Math.min(Math.abs(ball.dx) * 1.1, maxBallSpeed);
      }

      // Right paddle collision
      else if (
        ball.dx > 0 &&
        checkPaddleCollision(prevBallX, ball.x, ball.y, ballR, rightPaddleRect, false)
      ) {
        ball.x = rightPaddleRect.left - ballR;
        const relativeIntersectY = (ball.y - paddleRightY) / paddleH - 0.5;
        ball.dy = relativeIntersectY * 8;
        ball.dx = -Math.min(Math.abs(ball.dx) * 1.1, maxBallSpeed);
      }

      // Left paddle top/bottom vertical bounce
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

      // Right paddle top/bottom vertical bounce
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

      // Fallback: Ball fully inside paddle (edge case protection)
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

      // Scoring
      if (ball.x < 0) {
        state.score.right++;
        if (state.score.right === 7) {
          io.to(roomId).emit('gameOver', { winner: game.players[1] || 'right' });
          games.delete(roomId);
          paddleDirections.delete(roomId);
          continue;
        }
        resetBall({
          state,
          leftScored: false,
          baseWidth,
          baseHeight,
          ballSpeed: initialBallSpeed,
        });
      }

      if (ball.x > baseWidth) {
        state.score.left++;
        if (state.score.left === 7) {
          io.to(roomId).emit('gameOver', { winner: game.players[0] || 'left' });
          games.delete(roomId);
          paddleDirections.delete(roomId);
          continue;
        }
        resetBall({
          state,
          leftScored: true,
          baseWidth,
          baseHeight,
          ballSpeed: initialBallSpeed,
        });
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
