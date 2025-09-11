import React, { useRef, useEffect, useState } from "react";
import toast from "react-hot-toast";

const Game = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Mode toggle
  const [mode, setMode] = useState<"pong" | "tictactoe">("pong");

  // Pong settings
  const [ballColor, setBallColor] = useState("#FF0000");
  const [paddleColor, setPaddleColor] = useState("#0000FF");
  const [tableColor, setTableColor] = useState("#EEEEEE");

  // TicTacToe settings
  const [xColor, setXColor] = useState("#FF0000");
  const [oColor, setOColor] = useState("#0000FF");
  const [gridColor, setGridColor] = useState("#000000");
  const [boardColor, setBoardColor] = useState("#FFFFFF");

  // Preview draw
  useEffect(() => {
    if (mode !== "tictactoe") return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    const width = canvas.width;
    const height = canvas.height;
  
    let ball = {
      x: width / 2,
      y: height / 2,
      radius: 10,
      dx: 3,
      dy: 2,
    };
  
    const draw = () => {
      // Board background
      ctx.fillStyle = boardColor;
      ctx.fillRect(0, 0, width, height);
  
      // Grid
      ctx.strokeStyle = gridColor;
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.moveTo(width / 3, 0);
      ctx.lineTo(width / 3, height);
      ctx.moveTo((2 * width) / 3, 0);
      ctx.lineTo((2 * width) / 3, height);
      ctx.moveTo(0, height / 3);
      ctx.lineTo(width, height / 3);
      ctx.moveTo(0, (2 * height) / 3);
      ctx.lineTo(width, (2 * height) / 3);
      ctx.stroke();
  
      // Ball
      ctx.beginPath();
      ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
      ctx.fillStyle = xColor; // 🔥 here you could use X or O color dynamically
      ctx.fill();
      ctx.closePath();
    };
  
    const update = () => {
      ball.x += ball.dx;
      ball.y += ball.dy;
  
      // Bounce off edges
      if (ball.x - ball.radius < 0 || ball.x + ball.radius > width) ball.dx *= -1;
      if (ball.y - ball.radius < 0 || ball.y + ball.radius > height) ball.dy *= -1;
  
      // Bounce against grid lines
      if (Math.abs(ball.x - width / 3) < ball.radius || Math.abs(ball.x - (2 * width) / 3) < ball.radius) {
        ball.dx *= -1;
      }
      if (Math.abs(ball.y - height / 3) < ball.radius || Math.abs(ball.y - (2 * height) / 3) < ball.radius) {
        ball.dy *= -1;
      }
    };
  
    const loop = () => {
      draw();
      update();
      requestAnimationFrame(loop);
    };
  
    loop();
  }, [mode, xColor, oColor, gridColor, boardColor]);
  

  return (
    <div className="flex flex-col space-y-6 text-white">
      {/* Mode Switch */}
      <div className="flex gap-4 justify-center">
        <button
          className={`px-4 py-2 rounded ${mode === "pong" ? "bg-blue-600" : "bg-gray-600"}`}
          onClick={() => setMode("pong")}
        >
          Pong
        </button>
        <button
          className={`px-4 py-2 rounded ${mode === "tictactoe" ? "bg-blue-600" : "bg-gray-600"}`}
          onClick={() => setMode("tictactoe")}
        >
          TicTacToe
        </button>
      </div>

      {/* Preview */}
      <div className="flex justify-center">
        <canvas ref={canvasRef} width={400} height={400} className="border border-white" />
      </div>

      {/* Customization Controls */}
      {mode === "pong" ? (
        <>
          <label>Ball Color <input type="color" value={ballColor} onChange={e => setBallColor(e.target.value)} /></label>
          <label>Paddle Color <input type="color" value={paddleColor} onChange={e => setPaddleColor(e.target.value)} /></label>
          <label>Table Color <input type="color" value={tableColor} onChange={e => setTableColor(e.target.value)} /></label>
        </>
      ) : (
        <>
          <label>X Color <input type="color" value={xColor} onChange={e => setXColor(e.target.value)} /></label>
          <label>O Color <input type="color" value={oColor} onChange={e => setOColor(e.target.value)} /></label>
          <label>Grid Color <input type="color" value={gridColor} onChange={e => setGridColor(e.target.value)} /></label>
          <label>Board Color <input type="color" value={boardColor} onChange={e => setBoardColor(e.target.value)} /></label>
        </>
      )}
    </div>
  );
};

export default Game;
