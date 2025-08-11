import React, { useRef, useEffect, useState } from 'react';

const baseWidth = 600;
const baseHeight = 400;

const basePaddleWidth = 12;
const basePaddleHeight = 70;
const baseBallRadius = 10;
const baseInitialBallSpeed = 3;

const GameWrapper: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const [canvasSize, setCanvasSize] = useState({ width: baseWidth, height: baseHeight });
  const scaleRef = useRef(1);

  const paddleWidthRef = useRef(basePaddleWidth);
  const paddleHeightRef = useRef(basePaddleHeight);
  const ballRadiusRef = useRef(baseBallRadius);
  const initialBallSpeedRef = useRef(baseInitialBallSpeed); 

  const ballRef = useRef({ x: baseWidth / 2, y: baseHeight / 2, dx: baseInitialBallSpeed, dy: baseInitialBallSpeed });
  const leftPaddleRef = useRef({ y: baseHeight / 2 - basePaddleHeight / 2 });
  const rightPaddleRef = useRef({ y: baseHeight / 2 - basePaddleHeight / 2 });

  const [score, setScore] = useState({ left: 0, right: 0 });
  const [gameOver, setGameOver] = useState(false);
  const [gameInProgress, setGameInProgress] = useState(false);

  const keysRef = useRef({
    w: false,
    s: false,
    up: false,
    down: false,
  });

  const updateCanvasSize = () => {
    const maxWidth = window.innerWidth * 0.9;
    const maxHeight = window.innerHeight * 0.7;

    let scale = Math.min(maxWidth / baseWidth, maxHeight / baseHeight);
    scale = Math.max(scale, 0.5);

    scaleRef.current = scale;

    const newWidth = Math.floor(baseWidth * scale);
    const newHeight = Math.floor(baseHeight * scale);

    setCanvasSize({ width: newWidth, height: newHeight });

    paddleWidthRef.current = basePaddleWidth * scale;
    paddleHeightRef.current = basePaddleHeight * scale;
    ballRadiusRef.current = baseBallRadius * scale;
    initialBallSpeedRef.current = baseInitialBallSpeed * scale;

    leftPaddleRef.current.y = newHeight / 2 - paddleHeightRef.current / 2;
    rightPaddleRef.current.y = newHeight / 2 - paddleHeightRef.current / 2;

    ballRef.current.x = newWidth / 2;
    ballRef.current.y = newHeight / 2;
  };

  const draw = (ctx: CanvasRenderingContext2D) => {
    const { x, y } = ballRef.current;
    const leftY = leftPaddleRef.current.y;
    const rightY = rightPaddleRef.current.y;

    const cw = canvasSize.width;
    const ch = canvasSize.height;
    const paddleW = paddleWidthRef.current;
    const paddleH = paddleHeightRef.current;
    const ballR = ballRadiusRef.current;

    const gradient = ctx.createRadialGradient(
      cw / 2,
      ch / 2,
      10 * scaleRef.current,
      cw / 2,
      ch / 2,
      400 * scaleRef.current
    );
    gradient.addColorStop(0, '#0f0f0f');
    gradient.addColorStop(1, '#1a1a1a');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, cw, ch);

    ctx.setLineDash([6, 6]);
    ctx.strokeStyle = '#444';
    ctx.beginPath();
    ctx.moveTo(cw / 2, 0);
    ctx.lineTo(cw / 2, ch);
    ctx.stroke();
    ctx.setLineDash([]);

    ctx.fillStyle = '#0ff';
    ctx.shadowBlur = 10 * scaleRef.current;
    ctx.shadowColor = '#0ff';
    ctx.fillRect(20 * scaleRef.current, leftY, paddleW, paddleH);
    ctx.fillRect(cw - 20 * scaleRef.current - paddleW, rightY, paddleW, paddleH);

    ctx.beginPath();
    ctx.arc(x, y, ballR, 0, Math.PI * 2);
    ctx.fillStyle = '#ff0';
    ctx.shadowColor = '#ff0';
    ctx.fill();
    ctx.closePath();

    ctx.shadowBlur = 0;
  };

  const update = () => {
    if (!gameInProgress || gameOver) return; // Stop if game not started or over
  
    const ball = ballRef.current;
    const left = leftPaddleRef.current;
    const right = rightPaddleRef.current;
    const keys = keysRef.current;
  
    const cw = canvasSize.width;
    const ch = canvasSize.height;
    const paddleW = paddleWidthRef.current;
    const paddleH = paddleHeightRef.current;
    const ballR = ballRadiusRef.current;
    const paddleOffset = 20 * scaleRef.current;
    const maxBallSpeed = 20 * scaleRef.current;
    const paddleSpeed = 10 * scaleRef.current;
  
    // Paddle movement
    if (keys.w) left.y -= paddleSpeed;
    if (keys.s) left.y += paddleSpeed;
    if (keys.up) right.y -= paddleSpeed;
    if (keys.down) right.y += paddleSpeed;
  
    left.y = Math.max(0, Math.min(ch - paddleH, left.y));
    right.y = Math.max(0, Math.min(ch - paddleH, right.y));
  
    const prevBallX = ball.x;
    const prevBallY = ball.y;
  
    // Update ball position
    ball.x += ball.dx;
    ball.y += ball.dy;
  
    // Bounce on top and bottom walls
    if (ball.y - ballR <= 0 || ball.y + ballR >= ch) {
      ball.dy *= -1;
      ball.y = Math.max(ballR, Math.min(ch - ballR, ball.y));
    }
  
    // Paddle rectangles
    const leftPaddleRect = {
      top: left.y,
      bottom: left.y + paddleH,
      left: paddleOffset,
      right: paddleOffset + paddleW,
    };
  
    const rightPaddleRect = {
      top: right.y,
      bottom: right.y + paddleH,
      left: cw - paddleOffset - paddleW,
      right: cw - paddleOffset,
    };
  
    // Helper to check paddle collision (horizontal pass + vertical overlap)
    const checkPaddleCollision = (
      prevX: number,
      currX: number,
      ballY: number,
      ballR: number,
      paddleRect: { top: number; bottom: number; left: number; right: number },
      goingLeft: boolean
    ) => {
      const passedFront = goingLeft
        ? prevX - ballR >= paddleRect.right && currX - ballR <= paddleRect.right
        : prevX + ballR <= paddleRect.left && currX + ballR >= paddleRect.left;
  
      const withinY =
        ballY + ballR >= paddleRect.top && ballY - ballR <= paddleRect.bottom;
  
      return passedFront && withinY;
    };
  
    // Left paddle collision
    if (
      ball.dx < 0 &&
      checkPaddleCollision(prevBallX, ball.x, ball.y, ballR, leftPaddleRect, true)
    ) {
      ball.x = leftPaddleRect.right + ballR;
      const relativeIntersectY = (ball.y - leftPaddleRect.top) / paddleH - 0.5;
      ball.dy = relativeIntersectY * 8 * scaleRef.current;
      ball.dx = Math.min(Math.abs(ball.dx) * 1.1, maxBallSpeed);
    }
  
    // Right paddle collision
    else if (
      ball.dx > 0 &&
      checkPaddleCollision(prevBallX, ball.x, ball.y, ballR, rightPaddleRect, false)
    ) {
      ball.x = rightPaddleRect.left - ballR;
      const relativeIntersectY = (ball.y - rightPaddleRect.top) / paddleH - 0.5;
      ball.dy = relativeIntersectY * 8 * scaleRef.current;
      ball.dx = -Math.min(Math.abs(ball.dx) * 1.1, maxBallSpeed);
    }
  
    // Vertical bounce on paddle edges (if paddle not moving)
    const hitLeftEdgeVertically =
      ball.x + ballR >= leftPaddleRect.left &&
      ball.x - ballR <= leftPaddleRect.right &&
      ((prevBallY + ballR <= leftPaddleRect.top && ball.y + ballR >= leftPaddleRect.top) ||
       (prevBallY - ballR >= leftPaddleRect.bottom && ball.y - ballR <= leftPaddleRect.bottom));
  
    if (!keys.w && !keys.s && hitLeftEdgeVertically) {
      ball.dy *= -1;
      ball.y = ball.y < leftPaddleRect.top ? leftPaddleRect.top - ballR : leftPaddleRect.bottom + ballR;
    }
  
    const hitRightEdgeVertically =
      ball.x + ballR >= rightPaddleRect.left &&
      ball.x - ballR <= rightPaddleRect.right &&
      ((prevBallY + ballR <= rightPaddleRect.top && ball.y + ballR >= rightPaddleRect.top) ||
       (prevBallY - ballR >= rightPaddleRect.bottom && ball.y - ballR <= rightPaddleRect.bottom));
  
    if (!keys.up && !keys.down && hitRightEdgeVertically) {
      ball.dy *= -1;
      ball.y = ball.y < rightPaddleRect.top ? rightPaddleRect.top - ballR : rightPaddleRect.bottom + ballR;
    }
  
    // Fallback: Ball stuck inside paddle (edge case)
    const ballInsideLeft =
      ball.x + ballR > leftPaddleRect.left &&
      ball.x - ballR < leftPaddleRect.right &&
      ball.y + ballR > leftPaddleRect.top &&
      ball.y - ballR < leftPaddleRect.bottom;
  
    if (ball.dx < 0 && ballInsideLeft) {
      ball.dx = Math.min(Math.abs(ball.dx), maxBallSpeed);
      ball.x = leftPaddleRect.right + ballR;
    }
  
    const ballInsideRight =
      ball.x + ballR > rightPaddleRect.left &&
      ball.x - ballR < rightPaddleRect.right &&
      ball.y + ballR > rightPaddleRect.top &&
      ball.y - ballR < rightPaddleRect.bottom;
  
    if (ball.dx > 0 && ballInsideRight) {
      ball.dx = -Math.min(Math.abs(ball.dx), maxBallSpeed);
      ball.x = rightPaddleRect.left - ballR;
    }
  
    // Scoring
    if (ball.x < 0) {
      setScore((prev) => {
        const newRight = prev.right + 1;
        if (newRight === 7) setGameOver(true);
        return { ...prev, right: newRight };
      });
      resetBall(1);
    } else if (ball.x > cw) {
      setScore((prev) => {
        const newLeft = prev.left + 1;
        if (newLeft === 7) setGameOver(true);
        return { ...prev, left: newLeft };
      });
      resetBall(-1);
    }
  };
  

const resetBall = (direction: number) => {
  const cw = canvasSize.width;
  const ch = canvasSize.height;
  ballRef.current = {
    x: cw / 2,
    y: ch / 2,
    dx: direction * initialBallSpeedRef.current,
    dy: 2 * scaleRef.current * (Math.random() > 0.5 ? 1 : -1), // a bit more vertical speed like the example
  };
};


  const handleStart = () => {
    setGameOver(false);
    setScore({ left: 0, right: 0 });
    setGameInProgress(true);
    resetBall(1);
  };

  const handleRematch = () => {
    handleStart();
  };

  useEffect(() => {
    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);
    return () => window.removeEventListener('resize', updateCanvasSize);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    let animationFrameId: number;

    const render = () => {
      if (ctx) {
        update();
        draw(ctx);
      }
      animationFrameId = requestAnimationFrame(render);
    };
    render();

    return () => cancelAnimationFrame(animationFrameId);
  }, [canvasSize, gameOver, gameInProgress, score]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();
      if (key === 'w') keysRef.current.w = true;
      if (key === 's') keysRef.current.s = true;
      if (key === 'arrowup') keysRef.current.up = true;
      if (key === 'arrowdown') keysRef.current.down = true;
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();
      if (key === 'w') keysRef.current.w = false;
      if (key === 's') keysRef.current.s = false;
      if (key === 'arrowup') keysRef.current.up = false;
      if (key === 'arrowdown') keysRef.current.down = false;
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-32 xl:px-72 w-full flex flex-col justify-center items-center h-full">
      <h1 className="text-3xl text-white mb-4 font-bold font-mono tracking-wide">Pong</h1>

      {gameOver && (
        <div className="text-2xl font-bold text-yellow-400 mb-4">
          Game Over! {score.left === 7 ? 'Left Player Wins!' : 'Right Player Wins!'}
        </div>
      )}

      <div className="mb-2 text-xl font-mono">
        <span className="text-cyan-400">{score.left}</span>
        <span className="mx-4 text-gray-500">|</span>
        <span className="text-pink-400">{score.right}</span>
      </div>

      <canvas
        ref={canvasRef}
        width={canvasSize.width}
        height={canvasSize.height}
        className="rounded-lg border-2 border-white shadow-xl"
        style={{ maxWidth: '100%', height: 'auto' }}
      />

      <p className="mt-4 text-sm text-gray-400 font-mono">W/S and ↑/↓ to move</p>

      {!gameInProgress && !gameOver && (
        <button
          onClick={handleStart}
          className="mt-6 px-6 py-2 text-lg font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition duration-200"
        >
          Start Game
        </button>
      )}

      {gameOver && (
        <button
          onClick={handleRematch}
          className="mt-6 px-6 py-2 text-lg font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition duration-200"
        >
          Rematch
        </button>
      )}
    </div>
  );
};

export default GameWrapper;
