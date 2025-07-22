import React, { useRef, useEffect, useState } from 'react';

const PingPongGame: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const [ballColor, setBallColor] = useState("#FF0000");
  const [paddleColor, setPaddleColor] = useState("#FFFFFF");
  const [tableColor, setTableColor] = useState("#000000");

  const canvasWidth = 700;
  const canvasHeight = 400;

  // Paddle
  const paddleHeight = 100;
  const paddleWidth = 10;
  const paddleSpeed = 5;

  const leftPaddle = useRef({ x: 10, y: 150 });
  const rightPaddle = useRef({ x: canvasWidth - 20, y: 150 });

  // Ball
  const ball = useRef({
    x: canvasWidth / 2,
    y: canvasHeight / 2,
    radius: 10,
    vx: 4,
    vy: 4,
  });

  // Input
  const keys = useRef<{ [key: string]: boolean }>({});

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!ctx) return;
  
    const handleKeyDown = (e: KeyboardEvent) => (keys.current[e.key] = true);
    const handleKeyUp = (e: KeyboardEvent) => (keys.current[e.key] = false);
  
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
  
    let lastTime = performance.now();
  
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
  
    const update = (dt: number) => {
      const paddleTargetSpeed = 300; // px/sec
      const paddleLerpFactor = 0.2;
  
      // Move right paddle
      let rightTargetY = rightPaddle.current.y;
      if (keys.current["ArrowUp"]) rightTargetY -= paddleTargetSpeed * dt;
      if (keys.current["ArrowDown"]) rightTargetY += paddleTargetSpeed * dt;
  
      rightPaddle.current.y = lerp(rightPaddle.current.y, rightTargetY, paddleLerpFactor);
  
      // Move left paddle
      let leftTargetY = leftPaddle.current.y;
      if (keys.current["w"]) leftTargetY -= paddleTargetSpeed * dt;
      if (keys.current["s"]) leftTargetY += paddleTargetSpeed * dt;
  
      leftPaddle.current.y = lerp(leftPaddle.current.y, leftTargetY, paddleLerpFactor);
  
      // Clamp paddles
      leftPaddle.current.y = Math.max(0, Math.min(canvasHeight - paddleHeight, leftPaddle.current.y));
      rightPaddle.current.y = Math.max(0, Math.min(canvasHeight - paddleHeight, rightPaddle.current.y));
  
      // Move ball
      ball.current.x += ball.current.vx * dt * 60;
      ball.current.y += ball.current.vy * dt * 60;
  
      // Bounce off top and bottom
      if (ball.current.y < 0 || ball.current.y > canvasHeight) {
        ball.current.vy *= -1;
      }
  
      // Left paddle collision
      if (
        ball.current.x - ball.current.radius < leftPaddle.current.x + paddleWidth &&
        ball.current.y > leftPaddle.current.y &&
        ball.current.y < leftPaddle.current.y + paddleHeight
      ) {
        ball.current.vx *= -1;
        ball.current.x = leftPaddle.current.x + paddleWidth + ball.current.radius;
      }
  
      // Right paddle collision
      if (
        ball.current.x + ball.current.radius > rightPaddle.current.x &&
        ball.current.y > rightPaddle.current.y &&
        ball.current.y < rightPaddle.current.y + paddleHeight
      ) {
        ball.current.vx *= -1;
        ball.current.x = rightPaddle.current.x - ball.current.radius;
      }
  
      // Reset ball if out
      if (ball.current.x < 0 || ball.current.x > canvasWidth) {
        ball.current.x = canvasWidth / 2;
        ball.current.y = canvasHeight / 2;
      }
    };
  
    const draw = () => {
      ctx.fillStyle = tableColor;
      ctx.fillRect(0, 0, canvasWidth, canvasHeight);
  
      // Paddles
      ctx.fillStyle = paddleColor;
      ctx.fillRect(leftPaddle.current.x, leftPaddle.current.y, paddleWidth, paddleHeight);
      ctx.fillRect(rightPaddle.current.x, rightPaddle.current.y, paddleWidth, paddleHeight);
  
      // Ball
      ctx.beginPath();
      ctx.arc(ball.current.x, ball.current.y, ball.current.radius, 0, Math.PI * 2);
      ctx.fillStyle = ballColor;
      ctx.fill();
    };
  
    const gameLoop = (now: number) => {
      const deltaTime = (now - lastTime) / 1000;
      lastTime = now;
  
      update(deltaTime);
      draw();
  
      requestAnimationFrame(gameLoop);
    };
  
    requestAnimationFrame(gameLoop);
  
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [ballColor, paddleColor, tableColor]);
  
  return (
    <div className="space-y-4">
      <canvas
        ref={canvasRef}
        width={canvasWidth}
        height={canvasHeight}
        style={{ border: "2px solid gray" }}
      />

      <div className="flex gap-4 items-center">
        <label>Ball:</label>
        <input type="color" value={ballColor} onChange={(e) => setBallColor(e.target.value)} />

        <label>Paddle:</label>
        <input type="color" value={paddleColor} onChange={(e) => setPaddleColor(e.target.value)} />

        <label>Table:</label>
        <input type="color" value={tableColor} onChange={(e) => setTableColor(e.target.value)} />
      </div>

      <p className="text-sm text-gray-500">Controls: W/S for left player, ↑/↓ for right player</p>
    </div>
  );
};

export default PingPongGame;
