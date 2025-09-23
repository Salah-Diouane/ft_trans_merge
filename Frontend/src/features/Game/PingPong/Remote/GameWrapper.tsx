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
  playerDisplayName?: string; // Add optional display name prop
  onGameEnd?: (winner: string | null) => void;
}

interface playersDataProps {
  left: string;
  right: string;
}

interface displayNamesProps {
  left: string;
  right: string;
}

const GameWrapper: React.FC<GameWrapperProps> = ({ playerName, playerDisplayName, onGameEnd }) => {
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
  const [winner, setWinner] = useState<string | null>(null); // Changed to string for username
  const [roomId, setRoomId] = useState<'' | null>(null);
  const [playersNames, setPlayersNames] = useState<playersDataProps | null>(null);
  const [playersDisplayNames, setPlayersDisplayNames] = useState<displayNamesProps | null>(null);

  // Add refs to track if usernames have been fetched
  const playerNamesFetchedRef = useRef(false);
  const usernamesCacheRef = useRef<Record<string, string>>({});

  // Touch controls state
  const [isMobile, setIsMobile] = useState(false);
  const touchStateRef = useRef({
    touching: false,
    lastDirection: 0,
  });

  const keysRef = useRef({
    w: false,
    s: false,
    up: false,
    down: false,
  });

  // Optimized function to fetch usernames only once
  const fetchUsernamesOnce = async (playerIds: string[]): Promise<Record<string, string>> => {
    // Check if we already have all usernames cached
    const uncachedIds = playerIds.filter(id => !usernamesCacheRef.current[id]);
    
    if (uncachedIds.length === 0) {
      return usernamesCacheRef.current;
    }

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/users`, {
        credentials: "include",
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ids: uncachedIds }),
      });

      if (!response.ok) {
        // Fallback to IDs if fetch fails
        uncachedIds.forEach(id => {
          usernamesCacheRef.current[id] = id;
        });
        return usernamesCacheRef.current;
      }

      const responseData = await response.json();
      const fetchedUsers: string[] = responseData.users;

      // Cache the new usernames
      uncachedIds.forEach((id, index) => {
        usernamesCacheRef.current[id] = fetchedUsers[index] || id;
      });

      return usernamesCacheRef.current;
    } catch (error) {
      console.error("Error fetching usernames:", error);
      // Fallback to IDs on error
      uncachedIds.forEach(id => {
        usernamesCacheRef.current[id] = id;
      });
      return usernamesCacheRef.current;
    }
  };

  // Detect if device supports touch
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile('ontouchstart' in window || navigator.maxTouchPoints > 0);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Touch event handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    e.preventDefault();
    if (!playerSide || gameOver) return;
    
    touchStateRef.current.touching = true;
    
    const touch = e.touches[0];
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;

    const touchY = touch.clientY - rect.top;
    const canvasHeight = canvasSize.height;
    const center = canvasHeight / 2;
    
    const direction = touchY < center ? -1 : 1;
    touchStateRef.current.lastDirection = direction;
    
    sendPaddleMovement(direction, 'start', playerName);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    e.preventDefault();
    if (!touchStateRef.current.touching || !playerSide || gameOver) return;

    const touch = e.touches[0];
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;

    const touchY = touch.clientY - rect.top;
    const canvasHeight = canvasSize.height;
    const center = canvasHeight / 2;
    
    const newDirection = touchY < center ? -1 : 1;
    
    if (newDirection !== touchStateRef.current.lastDirection) {
      sendPaddleMovement(touchStateRef.current.lastDirection, 'stop', playerName);
      sendPaddleMovement(newDirection, 'start', playerName);
      touchStateRef.current.lastDirection = newDirection;
    }
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    e.preventDefault();
    if (!touchStateRef.current.touching || !playerSide) return;
    
    touchStateRef.current.touching = false;
    sendPaddleMovement(touchStateRef.current.lastDirection, 'stop', playerName);
  };

  // Resize handler
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
    if (touchStateRef.current.touching) return;

    if (e.key === 'w' && !keysRef.current.w) {
      keysRef.current.w = true;
      sendPaddleMovement(-1, 'start', playerName);
    }
    if (e.key === 's' && !keysRef.current.s) {
      keysRef.current.s = true;
      sendPaddleMovement(1, 'start', playerName);
    }
    if (e.key === 'ArrowUp' && !keysRef.current.up) {
      keysRef.current.up = true;
      sendPaddleMovement(-1, 'start', playerName);
    }
    if (e.key === 'ArrowDown' && !keysRef.current.down) {
      keysRef.current.down = true;
      sendPaddleMovement(1, 'start', playerName);
    }
  };

  const handleKeyUp = (e: KeyboardEvent) => {
    if (touchStateRef.current.touching) return;

    if (e.key === 'w' && keysRef.current.w) {
      keysRef.current.w = false;
      sendPaddleMovement(-1, 'stop', playerName);
    }
    if (e.key === 's' && keysRef.current.s) {
      keysRef.current.s = false;
      sendPaddleMovement(1, 'stop', playerName);
    }
    if (e.key === 'ArrowUp' && keysRef.current.up) {
      keysRef.current.up = false;
      sendPaddleMovement(-1, 'stop', playerName);
    }
    if (e.key === 'ArrowDown' && keysRef.current.down) {
      keysRef.current.down = false;
      sendPaddleMovement(1, 'stop', playerName);
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

    socket.on('gameState', async (serverState) => {
      const data = { left: serverState.players[0], right: serverState.players[1] };
      setPlayersNames(data);

      // Only fetch usernames once when players are first set
      if (!playerNamesFetchedRef.current && serverState.players[0] && serverState.players[1]) {
        playerNamesFetchedRef.current = true;
        
        const usernamesMap = await fetchUsernamesOnce([serverState.players[0], serverState.players[1]]);
        
        setPlayersDisplayNames({
          left: usernamesMap[serverState.players[0]] || serverState.players[0],
          right: usernamesMap[serverState.players[1]] || serverState.players[1]
        });
      }

      ballRef.current = {
        ...serverState.ball,
        x: serverState.ball.x * scaleRef.current,
        y: serverState.ball.y * scaleRef.current,
      };

      leftPaddleRef.current.y = serverState.paddles.left * scaleRef.current;
      rightPaddleRef.current.y = serverState.paddles.right * scaleRef.current;

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

    socket.on('gameOver', async (playerWin) => {
      console.log('Game Over winner:', playerWin);
      
      // Get winner display name from cache or fetch if needed
      let winnerDisplayName = usernamesCacheRef.current[playerWin.winner];
      if (!winnerDisplayName) {
        const usernamesMap = await fetchUsernamesOnce([playerWin.winner]);
        winnerDisplayName = usernamesMap[playerWin.winner] || playerWin.winner;
      }
      
      setWinner(winnerDisplayName);
      setGameOver(true);
      
      if (onGameEnd)
        onGameEnd(winnerDisplayName);
    });

    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      console.log('Page is being refreshed or closed');
      socket.emit('playerLeft', playerName);
      socket.off('init');
      socket.off('gameState');
      socket.off('gameOver');
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
      
      // Reset the fetch flag when component unmounts
      playerNamesFetchedRef.current = false;
      usernamesCacheRef.current = {};
    };
  }, [roomId, onGameEnd, playerName, playerSide]);

  return (
    <div className="flex flex-col items-center justify-center text-white">
      <h1 className="text-3xl mb-4 font-bold font-mono tracking-wide">Pong</h1>
      {gameOver && (
        <div className="text-2xl font-bold text-yellow-400 mb-4">
          Game Over! {winner} Wins!
        </div>
      )}
      <div className="mb-2 text-xl font-mono flex items-center">
        <span className="text-cyan-400 flex items-center gap-2">
          <div className="relative flex flex-col items-center group">
            <img src="/src/features/Assets/me.jpeg" alt="" className='rounded-full bg-cover w-12 h-12' />
            <div className="absolute top-6 flex flex-col items-center hidden mt-6 group-hover:flex">
              <div className="w-3 h-3 -mb-2 rotate-45 bg-black"></div>
              <span className="relative z-10 p-2 text-xs leading-none text-white whitespace-no-wrap bg-black shadow-lg">
                {playersDisplayNames?.left || playersNames?.left}
              </span>
            </div>
          </div>
          {winner === (playersDisplayNames?.left || playersNames?.left) && score.left === 6 ? 7 : score.left}
        </span>
        <span className="mx-4 text-gray-500">|</span>
        <span className="text-pink-400 flex items-center gap-2">
          {winner === (playersDisplayNames?.right || playersNames?.right) && score.right === 6 ? 7 : score.right}
          <div className="relative flex flex-col items-center group">
            <img src="/src/features/Assets/me.jpeg" alt="" className='rounded-full bg-cover w-12 h-12' />
            <div className="absolute top-6 flex flex-col items-center hidden mt-6 group-hover:flex">
              <div className="w-3 h-3 -mb-2 rotate-45 bg-black"></div>
              <span className="relative z-10 p-2 text-xs leading-none text-white whitespace-no-wrap bg-black shadow-lg">
                {playersDisplayNames?.right || playersNames?.right}
              </span>
            </div>
          </div>
        </span>
      </div>
      
      <div className="relative">
        <canvas
          ref={canvasRef}
          width={canvasSize.width}
          height={canvasSize.height}
          className="rounded-lg border-2 border-white shadow-xl cursor-none"
          style={{ maxWidth: '100%', height: 'auto' }}
        />

        {isMobile && playerSide && (
          <div
            className="absolute top-0 left-0 w-full h-full"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{ touchAction: 'none' }}
          />
        )}
      </div>

      <p className="mt-4 text-sm text-gray-400 font-mono">
        {isMobile 
          ? 'Touch upper/lower screen to move or use W/S or ↑/↓'
          : 'W/S or ↑/↓ to move'
        }
      </p>
    </div>
  );
};

export default GameWrapper;
