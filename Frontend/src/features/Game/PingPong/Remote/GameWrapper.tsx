import React, { useRef, useEffect, useState } from 'react';
import socket from '../../../Chat/services/socket';

const baseWidth = 600;
const baseHeight = 400;

const basePaddleWidth = 12;
const basePaddleHeight = 70;
const baseBallRadius = 10;
const baseInitialBallSpeed = 3;

interface Score {
  left: number;
  right: number;
}

interface GameWrapperProps {
  playerName: string;
}

interface playersDataProps {
  left: string;
  right: string;
}

const GameWrapper: React.FC<GameWrapperProps> = ({ playerName }) => {
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

  const [score, setScore] = useState<Score>({ left: 0, right: 0 });
  const [gameOver, setGameOver] = useState(false);
  const [gameInProgress, setGameInProgress] = useState(false);
  const [playerSide, setPlayerSide] = useState<'left' | 'right' | null>(null);
  const [winner, setWinner] = useState<'left' | 'right' | null>(null);
  const [roomId, setRoomId] = useState<'' | null>(null);
  const [playersNames, setPlayersNames] = useState<playersDataProps | null>(null);

  const keysRef = useRef({
    w: false,
    s: false,
    up: false,
    down: false,
  });

  // Resize handler: update canvas size and scaling
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

    // Background gradient
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

    // Center line
    ctx.setLineDash([6, 6]);
    ctx.strokeStyle = '#444';
    ctx.beginPath();
    ctx.moveTo(cw / 2, 0);
    ctx.lineTo(cw / 2, ch);
    ctx.stroke();
    ctx.setLineDash([]);

    // Paddles
    ctx.fillStyle = '#0ff';
    ctx.shadowBlur = 10 * scaleRef.current;
    ctx.shadowColor = '#0ff';
    ctx.fillRect(20 * scaleRef.current, leftY, paddleW, paddleH);
    ctx.fillRect(cw - 20 * scaleRef.current - paddleW, rightY, paddleW, paddleH);

    // Ball
    ctx.beginPath();
    ctx.arc(x, y, ballR, 0, Math.PI * 2);
    ctx.fillStyle = '#ff0';
    ctx.shadowColor = '#ff0';
    ctx.fill();
    ctx.closePath();

    ctx.shadowBlur = 0;
  };

  const sendScoreUpdate = (score: Score) => {
    console.log("Scored", score);
    socket.emit('scoreUpdate', {
      roomId,
      score
    });
  };

  const handleRematch = () => {
    setScore({ left: 0, right: 0 });
    setGameOver(false);
    setGameInProgress(false);
    socket.emit('rematch', { roomId });
  };

  const sendPaddleMovement = (direction: number, state: 'start' | 'stop', playerName: string) => {
    if (!playerSide) return;
    socket.emit('paddleMove', { side: playerSide, direction, state, roomId, playerName });
  };


  const handleKeyDown = (e: KeyboardEvent) => {

    if (playerSide === 'left') {
      if (e.key === 'w' && !keysRef.current.w) {
        keysRef.current.w = true;
        sendPaddleMovement(-1, 'start', playerName);
      }
      if (e.key === 's' && !keysRef.current.s) {
        keysRef.current.s = true;
        sendPaddleMovement(1, 'start', playerName);
      }
    } else if (playerSide === 'right') {
      if (e.key === 'ArrowUp' && !keysRef.current.up) {
        keysRef.current.up = true;
        sendPaddleMovement(-1, 'start', playerName);
      }
      if (e.key === 'ArrowDown' && !keysRef.current.down) {
        keysRef.current.down = true;
        sendPaddleMovement(1, 'start', playerName);
      }
    }
  };

  const handleKeyUp = (e: KeyboardEvent) => {

    if (playerSide === 'left') {
      if (e.key === 'w' && keysRef.current.w) {
        keysRef.current.w = false;
        sendPaddleMovement(-1, 'stop', playerName);
      }
      if (e.key === 's' && keysRef.current.s) {
        keysRef.current.s = false;
        sendPaddleMovement(1, 'stop', playerName);
      }
    } else if (playerSide === 'right') {
      if (e.key === 'ArrowUp' && keysRef.current.up) {
        keysRef.current.up = false;
        sendPaddleMovement(-1, 'stop', playerName);
      }
      if (e.key === 'ArrowDown' && keysRef.current.down) {
        keysRef.current.down = false;
        sendPaddleMovement(1, 'stop', playerName);
      }
    }
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
      if (ctx) draw(ctx);
      animationFrameId = requestAnimationFrame(render);
    };
    render();

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [gameOver, score, canvasSize, playerSide, playerName]);

  useEffect(() => {
    socket.on('init', ({ player }) => {
      console.log('I am player:', player);
      setPlayerSide(player === 0 ? 'left' : 'right');
    });

    socket.on('gameState', (serverState) => {
      const data = { left: serverState.players[0], right: serverState.players[1] };
      setPlayersNames(data);
      ballRef.current = {
        ...serverState.ball,
        x: serverState.ball.x * scaleRef.current,
        y: serverState.ball.y * scaleRef.current,
      };

      leftPaddleRef.current.y = serverState.paddles.left * scaleRef.current;
      rightPaddleRef.current.y = serverState.paddles.right * scaleRef.current;

      // Set playerSide if not set yet and playerName is known
      if (!playerSide && playerName) {
        if (serverState.players[0] === playerName) {
          setPlayerSide("left");
        } else if (serverState.players[1] === playerName) {
          setPlayerSide("right");
        }
      }

      setScore(serverState.score);
      setRoomId(serverState.roomId);
    });

    socket.on('gameOver', (playerWin) => {
      console.log('Game Over winner:', playerWin);
      setWinner(playerWin.winner);
      setGameOver(true);
      socket.disconnect();
    });

    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      console.log('Page is being refreshed or closed');
      socket.emit('playerLeft', playerName);
      socket.off('init');
      socket.off('gameState');
      socket.off('gameOver');
      socket.disconnect();
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    window.addEventListener('unload', handleBeforeUnload);

    return () => {
      if (playerSide)
        socket.emit('playerLeft', playerName)
      socket.off('init');
      socket.off('gameState');
      socket.off('gameOver');
      window.removeEventListener('beforeunload', handleBeforeUnload);
      window.removeEventListener('unload', handleBeforeUnload);
      // socket.disconnect()
    };
  }, [roomId]);

  return (
    <div className="flex flex-col items-center justify-center text-white">
      <h1 className="text-3xl mb-4 font-bold font-mono tracking-wide">Pong</h1>
      {gameOver && (
        <div className="text-2xl font-bold text-yellow-400 mb-4">
          Game Over! {`${winner}  Wins!`}
        </div>
      )}
      <div className="mb-2 text-xl font-mono flex items-center">
        <span className="text-cyan-400 flex items-center gap-2">
          <div className="relative flex flex-col items-center group">

            <img src="/src/features/Assets/me.jpeg" alt="" className='rounded-full bg-cover w-12 h-12' />
            <div className="absolute top-6 flex flex-col items-center hidden mt-6 group-hover:flex">
              <div className="w-3 h-3 -mb-2 rotate-45 bg-black"></div>
              <span className="relative z-10 p-2 text-xs leading-none text-white whitespace-no-wrap bg-black shadow-lg">{playersNames?.left}</span>
            </div>
          </div>
          {playersNames?.left === winner && score.left == 6 ? 7 : score.left}</span>
        <span className="mx-4 text-gray-500">|</span>
        <span className="text-pink-400 flex items-center gap-2">
          {playersNames?.right === winner && score.right == 6 ? 7 : score.right}
          <div className="relative flex flex-col items-center group">

            <img src="/src/features/Assets/me.jpeg" alt="" className='rounded-full bg-cover w-12 h-12' />
            <div className="absolute top-6 flex flex-col items-center hidden mt-6 group-hover:flex">
              <div className="w-3 h-3 -mb-2 rotate-45 bg-black"></div>
              <span className="relative z-10 p-2 text-xs leading-none text-white whitespace-no-wrap bg-black shadow-lg">{playersNames?.right}</span>
            </div>
          </div>
        </span>
      </div>
      <canvas
        ref={canvasRef}
        width={canvasSize.width}
        height={canvasSize.height}
        className="rounded-lg border-2 border-white shadow-xl cursor-none"
        style={{ maxWidth: '100%', height: 'auto' }}
      />
      <p className="mt-4 text-sm text-gray-400 font-mono">W/S and ↑/↓ to move</p>
    </div>
  );
};

export default GameWrapper;
