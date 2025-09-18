// src/components/RemotePong.tsx
import React, { useState, useRef, useEffect } from 'react';
import GameWrapper from './GameWrapper';
import socket, { joinGame, onReady } from '../../../Chat/services/socket';
import { FiUsers } from 'react-icons/fi';
import { RiPingPongFill } from 'react-icons/ri';
import { useLocation } from 'react-router-dom';

const RemotePong: React.FC = () => {
  const [name, setName] = useState('');
  const [joined, setJoined] = useState(false);
  const [ready, setReady] = useState(false);
  const [playerLeft, setPlayerLeft] = useState(false);
  const userNameRef = useRef<string | null>(null);
  const [countdown, setCountdown] = useState<number | null>(null);
  const location = useLocation();

  // Connect and join logic
  useEffect(() => {
    socket.connect();
    socket.emit('get-my-profile');

    const handleProfile = (user: any) => {
      console.log("---> : user : ", user);
      const userName = user.username;

      if (userName) {
        setName(userName);
        userNameRef.current = userName;

        if (!joined) {
          setJoined(true);
          joinGame(userName); // sends socket.emit('join', playerName)
        }
      }
    };

    socket.on('profile-data', handleProfile);

    const handleCountdown = (time: number) => {
      setCountdown(time);
    };

    const handleReady = () => {
      console.log('player is ready')
      setCountdown(null);
      setReady(true);
      console.log("Game ready for", userNameRef.current);
    };

    socket.on('countdown', handleCountdown);
    socket.on('ready', handleReady);

    const handleRoomId = (roomId: string) => {
      console.log('Joined room:', roomId);
    };

    socket.on('roomId', handleRoomId);

    return () => {
      socket.off('countdown', handleCountdown);
      socket.off('ready', handleReady);
      socket.off('profile-data', handleProfile);
      socket.off('roomId', handleRoomId);
    };
  }, []);

  // Disconnect on game over
  useEffect(() => {
    const handleGameOver = () => {
      setJoined(false);
      setReady(false);
      socket.disconnect();
    };

    socket.on('gameOver', handleGameOver);

    return () => {
      socket.off('gameOver', handleGameOver);
    };
  }, []);

  // Handle browser refresh / tab close
  useEffect(() => {

    socket.on('playerLeft', () => {
      setPlayerLeft(true);
    })

    const handleBeforeUnload = () => {
      if (userNameRef.current) {
        socket.emit('playerLeft', userNameRef.current);
        socket.disconnect();
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    window.addEventListener('unload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      window.removeEventListener('unload', handleBeforeUnload);
    };
  }, []);

  // Handle route changes
  useEffect(() => {
    return () => {
      if (joined && userNameRef.current) {
        console.log("Left triggered")
        socket.emit('playerLeft', userNameRef.current);
        socket.disconnect();
      }
    };
  }, [location, joined]);
  
  const handleAnotherGame = () => {
    window.location.reload();
  }

  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-32 xl:px-72 w-full flex flex-col justify-center items-center h-full">
      {playerLeft && countdown ? (
        <div className="flex flex-col items-center justify-center text-white">
          <h1 className="text-5xl font-extrabold text-blue-500 drop-shadow-lg mb-6 animate-pulse">
            The Player Left The Game!
          </h1>
          <button
          onClick={handleAnotherGame}
          className="mt-6 px-6 py-2 text-lg font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition duration-200"
        >
          Another Game
        </button>
        </div>
      ) : countdown !== null ? (
        <div className="flex flex-col items-center justify-center text-white">
          <h1 className="text-5xl font-extrabold text-blue-400 drop-shadow-lg mb-6 animate-pulse">
            MATCH FOUND!
          </h1>
          <p className="text-lg text-gray-300 mb-4 tracking-wide uppercase">
            Game starts in
          </p>
          <div className="text-8xl font-mono text-blue-300 drop-shadow-xl animate-scaleUp">
            {countdown}
          </div>
        </div>
      ) : !ready ? (
        <div className="bg-[#393e46] rounded-2xl p-8 shadow-2xl w-full max-w-2xl mx-auto border border-gray-600">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-[#222831] rounded-full flex items-center justify-center mb-4 mx-auto border border-gray-600">
              <RiPingPongFill className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-white mb-2">Finding Match</h1>
            <p className="text-gray-300">Connecting you with an opponent...</p>
          </div>

          <div className="relative mb-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-2 border-2 border-blue-500">
                  <FiUsers className="w-6 h-6 text-white" />
                </div>
                <span className="text-sm text-white font-medium">You</span>
              </div>

              <div className="flex-1 mx-2 sm:mx-4 relative">
                <div className="h-0.5 bg-gray-600 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-500 rounded-full animate-pulse"
                    style={{
                      animation: 'loading 2s ease-in-out infinite',
                      width: '60%',
                    }}
                  ></div>
                </div>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-12 h-12 border-2 border-dashed border-gray-500 rounded-full flex items-center justify-center mb-2 animate-pulse">
                  <div className="flex space-x-1">
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                </div>
                <span className="text-sm text-gray-400 font-medium">Opponent</span>
              </div>
            </div>
          </div>

          <div className="text-center mb-6">
            <div className="inline-flex items-center space-x-3 bg-[#222831] px-6 py-3 rounded-full border border-gray-600">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-ping"></div>
              <span className="text-gray-300 font-medium">Searching for players</span>
            </div>
          </div>

          <div className="pt-6 border-t border-gray-600">
            <p className="text-sm text-gray-400 text-center">
              Get some water while waiting for the other player
            </p>
          </div>
        </div>
      ) : (
        <GameWrapper playerName={userNameRef.current || ''} />
      )}
    </div>
  );
};

export default RemotePong;
