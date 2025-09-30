import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import GameWrapper from '../Remote/GameWrapper';
import socket from '../../../Chat/services/socket';
import { RiPingPongFill } from 'react-icons/ri';

const InviteGame: React.FC = () => {
  const { roomId } = useParams<{ roomId: string }>();
  const [playerName, setPlayerName] = useState<string>('');
  const [playerDisplayName, setPlayerDisplayName] = useState<string>('');
  const [gameReady, setGameReady] = useState(false);
  const [countdown, setCountdown] = useState<number | null>(null);
  const [error, setError] = useState<string>('');
  const [playerLeft, setPlayerLeft] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("SPAMMING ROOM ID -----> ", roomId);
    if (!roomId) {
      setError('Invalid room ID');
      return;
    }

    const fetchGame = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/invite/:gameid`, {
          credentials: "include",
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
          },
        });
  
        if (!response.ok) {
          throw new Error("Game not found.");
        }
        return response.ok;
      } catch (error:any) {
        console.error("Error fetching users:", error);
        setError("Game not found.");
        return {};
      }
    };
    fetchGame();
    socket.connect();
    socket.emit('get-my-profile');

    socket.on('profile-data', (user: any) => {
      if (user?.id) {
        setPlayerName(String(user.id));
        setPlayerDisplayName(user.username || String(user.id));
      }
    });

    // Listen for game events
    socket.on('countdown', (time: number) => {
      console.log('Countdown:', time);
      setCountdown(time);
    });

    socket.on('ready', () => {
      console.log('Game ready!');
      setGameReady(true);
      setCountdown(null);
    });

    socket.on('init', ({ player }) => {
      console.log('Player initialized:', player);
    });

    socket.on('roomId', (id: string) => {
      console.log('Joined room:', id);
    });

    socket.on('error', (errorData: { message: string }) => {
      console.error('Game error:', errorData);
      setError(errorData.message);
    });

    socket.on('playerLeft', (leftPlayer: string) => {
        console.log(`Player ${leftPlayer} left the game.`);
        setPlayerLeft(true);
    });

    return () => {
      socket.off('profile-data');
      socket.off('countdown');
      socket.off('ready');
      socket.off('init');
      socket.off('roomId');
      socket.off('error');
      socket.off('playerLeft');
    };
  }, [roomId]);

  const handleGameEnd = (winner: string | null) => {
    console.log(`Game ended. Winner: ${winner}`);
    setTimeout(() => {
      navigate('/chat');
    }, 3000);
  };

  const handleGoBack = () => {
    if (playerName) {
        console.log("Player LEFT");
      socket.emit('playerLeft', playerName);
    }
    navigate('/chat');
  };

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#222831] text-white">
        <div className="text-center p-8 bg-[#393E46] rounded-xl border border-red-500/30">
          <h1 className="text-2xl font-bold text-red-400 mb-4">Game Error</h1>
          <p className="text-white/80 mb-6">{error}</p>
          <button
            onClick={handleGoBack}
            className="px-6 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg font-medium transition-colors"
          >
            Go Back to Chat
          </button>
        </div>
      </div>
    );
  }

  if (playerLeft) {
    return (
         <div className="flex flex-col items-center justify-center text-white">
           <h1 className="text-5xl font-extrabold text-blue-500 drop-shadow-lg mb-6 animate-pulse">
             The Player Left The Game!
           </h1>
           <button
             onClick={() => navigate('/chat')}
             className="mt-6 px-6 py-2 text-lg font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition duration-200"
           >
             Back to Chat
           </button>
         </div>
       );
   }

  if (countdown !== null) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#222831] text-white">
        <div className="text-center">
          <RiPingPongFill className="w-20 h-20 mx-auto text-blue-400 mb-6" />
          <h1 className="text-4xl font-bold text-blue-400 mb-4">Get Ready!</h1>
          <p className="text-xl text-white/80 mb-8">Game starts in:</p>
          <div className="text-8xl font-mono text-blue-300 font-bold animate-pulse">
            {countdown}
          </div>
        </div>
      </div>
    );
  }

  if (!gameReady) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#222831] text-white">
        <div className="text-center p-8 bg-[#393E46] rounded-xl">
          <RiPingPongFill className="w-16 h-16 mx-auto text-blue-400 mb-4 animate-spin" />
          <h1 className="text-2xl font-bold mb-4">Waiting for Game...</h1>
          <p className="text-white/70">Setting up your Pong match</p>
          <button
            onClick={handleGoBack}
            className="mt-6 px-4 py-2 text-sm bg-gray-600 hover:bg-gray-700 rounded-lg transition-colors"
          >
            Cancel
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#222831]">
      <div className="p-4">
        <button
          onClick={handleGoBack}
          className="mb-4 px-4 py-2 text-sm bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors"
        >
          ← Back to Chat
        </button>
      </div>
      <GameWrapper 
        playerName={playerName}
        playerDisplayName={playerDisplayName}
        onGameEnd={handleGameEnd}
      />
    </div>
  );
};

export default InviteGame;