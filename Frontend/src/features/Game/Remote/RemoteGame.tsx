

import React, { useState, useEffect, useRef } from "react";
import socket from "../../Chat/services/socket";
import Choose from "./Choose";
import { useLocation, useNavigate } from "react-router-dom";
import Board from "./Board";
import triggerFireworks from "./confetti";
import { Star } from "lucide-react";
import { CgSpinner } from "react-icons/cg";
import { FiUsers } from 'react-icons/fi';
import { RiPingPongFill } from 'react-icons/ri';

function calculateWinner(squares: (string | null)[]) {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];

  for (const [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

const RemoteGame: React.FC = () => {
  const [gameStarted, setGameStarted] = useState<boolean>(false);
  const [playerXName, setPlayerXName] = useState<string>("");
  const [playerOName, setPlayerOName] = useState<string>("");
  const [squares, setSquares] = useState<(string | null)[]>(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState<boolean>(true);
  const [usersJoin, setUsersJoin] = useState<boolean>(false);
  const [currentUser, setCurrentUser] = useState<string | undefined>("");
  const [mySymbol, setMySymbol] = useState<"X" | "O" | null>(null);
  const [waitingForPlayer, setWaitingForPlayer] = useState<boolean>(false);
  const [disconnectWinner, setDisconnectWinner] = useState<string | null>(null);
  const [timerdone, setTimerdone] = useState<boolean>(false);
  const [loser, setLoser] = useState<string>("");
  const [gameEnded, setGameEnded] = useState<boolean>(false);

  const currentUserRef = useRef<string | undefined>("");
  const hasJoinedGameRef = useRef<boolean>(false);
  const gameEndedRef = useRef<boolean>(gameEnded);

  const [startTimer, setStartTimer] = useState<boolean>(false);
  const [time, setTime] = useState<number>(0);
  const timerRef = useRef<number | null>(null);

  // Timer effect
  useEffect(() => {
    if (startTimer && !gameEnded) {
      timerRef.current = window.setInterval(() => {
        setTime(prev => {
          const newTime = prev + 1;
          if (newTime >= 10) {
            setStartTimer(false);
            return 10;
          }
          return newTime;
        });
      }, 1000);
    } else {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [startTimer, gameEnded]);

  useEffect(() => {
    gameEndedRef.current = gameEnded;
  }, [gameEnded]);

  const winner = calculateWinner(squares);
  const isDraw = squares.every(square => square !== null) && !winner;
  const gameOver = winner || isDraw;

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (hasJoinedGameRef.current && socket && socket.connected) {
        socket.emit("leave:game");
        cleanup();
      }
    };
  }, []);

  function cleanup() {
    setStartTimer(false);
    setTime(0);
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }

  function handlePlay(index: number) {
    if (!gameEnded && !timerdone && gameStarted && !gameOver) {
      socket.emit("game:move", {
        index,
        player: currentUser,
      });
      setTime(0);
    }
  }

  function resetGameState() {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
    setGameStarted(false);
    setPlayerXName("");
    setPlayerOName("");
    setUsersJoin(false);
    setMySymbol(null);
    setWaitingForPlayer(false);
    setDisconnectWinner(null);
    setTimerdone(false);
    setLoser("");
    setGameEnded(false);
    hasJoinedGameRef.current = false;
    cleanup();
  }

  function startNewGame() {
    resetGameState();
    socket.emit("leave:game");
  }
  
  function drawCase() {
    resetGameState();
    socket.emit("game:draw");
  }

  function playAgain() {
    socket.emit("game:restart");
    setTime(0);
    setStartTimer(false);
    setGameEnded(false);
    setTimerdone(false);
  }

  function handleLeaveGame() {
    socket.emit("leave:game");
    hasJoinedGameRef.current = false;
    resetGameState();
  }

  function handleJoinGame(playerName: string | undefined) {
    setCurrentUser(playerName);
    currentUserRef.current = playerName;
    
    // Reset connection states
    setWaitingForPlayer(false);
    setGameStarted(false);
    setUsersJoin(false);
    setGameEnded(false);
    setTimerdone(false);
    setDisconnectWinner(null);
    
    socket.emit("join:game");
  }

  // Socket event listeners
  useEffect(() => {
    const onGameStart = ({ playerX, playerO }: { playerX: string; playerO: string }) => {
      console.log("Game started!", { playerX, playerO });
      hasJoinedGameRef.current = true;
      setPlayerOName(playerO);
      setPlayerXName(playerX);
      setGameStarted(true);
      setUsersJoin(true);
      setWaitingForPlayer(false);
      setMySymbol(currentUserRef.current === playerX ? "X" : "O");
      setGameEnded(false);
      setTimerdone(false); 
      setDisconnectWinner(null);
      setStartTimer(true);
      setTime(0);
    };

    const onGameError = ({ message }: { message: string }) => {
      console.error("Game error:", message);
      alert(message);
      setWaitingForPlayer(false);
    };

    const onGameWaiting = () => {
      console.log("Waiting for another player...");
      hasJoinedGameRef.current = true;
      setWaitingForPlayer(true);
      setGameStarted(false);
      setUsersJoin(false);
      setStartTimer(false);
    };

    const onGameMove = ({ squares: newSquares, xIsNext: newXIsNext }: { squares: (string | null)[]; xIsNext: boolean }) => {
      if (gameEndedRef.current) return;

      setSquares(newSquares);
      setXIsNext(newXIsNext);
      setTime(0);

      const winner = calculateWinner(newSquares);
      const isDraw = newSquares.every(sq => sq !== null) && !winner;
      
      if (winner || isDraw) {
        setStartTimer(false);
        setGameEnded(true);
      } else {
        setStartTimer(true);
      }
    };

    const onGameRestart = () => {
      console.log("Game restarted");
      setSquares(Array(9).fill(null));
      setXIsNext(true);
      setGameEnded(false);
      setTimerdone(false);
      setDisconnectWinner(null);
      setStartTimer(true);
      setTime(0);
    };

    const onPlayerDisconnected = ({ message }: { message: string }) => {
      console.log("Player disconnected:", message);
      cleanup();
    };

    const onGameWinByDisconnect = ({ winner, message }: { winner: string; message: string }) => {
      if (gameEndedRef.current) return;

      console.log("Game won by disconnect:", { winner, message });
      setGameEnded(true);
      setDisconnectWinner(winner);
      cleanup();

      if (winner === currentUserRef.current) {
        triggerFireworks();
      }

      setGameStarted(false);
      setMySymbol(null);
      hasJoinedGameRef.current = false;
    };

    const onGameTimeout = ({ loser, winner }: { loser: string, winner: string }) => {
      if (gameEndedRef.current) return;
    
      console.log("Game timeout occurred", { loser, winner });
      setGameEnded(true);
      setTimerdone(true);
      setLoser(loser);
      cleanup();
    
      if (winner === currentUserRef.current) {
        triggerFireworks();
      }
    
      setGameStarted(false);
      setMySymbol(null);
      setSquares(Array(9).fill(null));
      hasJoinedGameRef.current = false;
    };

    const onGameDrawEnd = () => {
      console.log("Game ended in draw - resetting all players");
      resetGameState();
    };

    // Add reconnection handler for existing games
    const onGameReconnect = ({ gameState, playerX, playerO }: { 
      gameState: any, 
      playerX: string, 
      playerO: string 
    }) => {
      console.log("Reconnecting to existing game...", { gameState, playerX, playerO });
      setPlayerOName(playerO);
      setPlayerXName(playerX);
      setGameStarted(true);
      setUsersJoin(true);
      setWaitingForPlayer(false);
      setMySymbol(currentUserRef.current === playerX ? "X" : "O");
      setGameEnded(gameState.gameEnded || false);
      setTimerdone(false);
      setSquares(gameState.squares);
      setXIsNext(gameState.xIsNext);
      hasJoinedGameRef.current = true;
      
      if (!gameState.gameEnded && !calculateWinner(gameState.squares)) {
        setStartTimer(true);
      }
    };

    // Register all socket listeners
    socket.on("game:start", onGameStart);
    socket.on("game:error", onGameError);
    socket.on("game:waiting", onGameWaiting);
    socket.on("game:move", onGameMove);
    socket.on("game:restart", onGameRestart);
    socket.on("player:disconnected", onPlayerDisconnected);
    socket.on("game:win-by-disconnect", onGameWinByDisconnect);
    socket.on("game:timeout", onGameTimeout);
    socket.on("game:draw-end", onGameDrawEnd);
    socket.on("game:reconnect", onGameReconnect);

    return () => {
      socket.off("game:start", onGameStart);
      socket.off("game:error", onGameError);
      socket.off("game:waiting", onGameWaiting);
      socket.off("game:move", onGameMove);
      socket.off("game:restart", onGameRestart);
      socket.off("player:disconnected", onPlayerDisconnected);
      socket.off("game:win-by-disconnect", onGameWinByDisconnect);
      socket.off("game:timeout", onGameTimeout);
      socket.off("game:draw-end", onGameDrawEnd);
      socket.off("game:reconnect", onGameReconnect);
    };
  }, []);

  // Handle winner detection
  useEffect(() => {
    if (!winner || gameEnded) return;

    console.log("Winner detected:", winner);
    setGameEnded(true);
    cleanup();

    const winnerName = winner === "X" ? playerXName : playerOName;
    const loserName = winner === "X" ? playerOName : playerXName;

    if (winnerName === currentUserRef.current) {
      triggerFireworks();
    }

    setLoser(loserName);
    setGameStarted(false);
    setMySymbol(null);
    hasJoinedGameRef.current = false;
  }, [winner, gameEnded, playerXName, playerOName]);

  // Handle draw detection
  useEffect(() => {
    if (!isDraw || gameEnded) return;

    console.log("Draw detected");
    setGameEnded(true);
    cleanup();
    setGameStarted(false);
    setMySymbol(null);
    hasJoinedGameRef.current = false;
  }, [isDraw, gameEnded]);
  
  return (
    <div className="h-full w-full flex items-center justify-center bg-[#222831] p-4">
      {!gameStarted && !usersJoin && !timerdone ? (
        <div className="flex flex-cols items-center space-x-4">
          {waitingForPlayer ? (
            <div className="bg-[#393e46] rounded-2xl p-8 shadow-2xl w-[900px] max-w-2xl mx-auto border border-gray-600">
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
                <button
                  onClick={handleLeaveGame}
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-bold px-4 py-2 rounded-lg"
                >
                  Cancel Search
                </button>
              </div>
            </div>
          ) : (
            <Choose onChoose={handleJoinGame} />
          )}
        </div>
      ) : (
        <div className="flex flex-col items-center space-y-6 w-full max-w-2xl">
          <h1 className="text-5xl font-extrabold text-white mb-6">Tic Tac Toe</h1>

          <div className="bg-[#393E46] p-4 rounded-xl shadow-md w-full text-white flex justify-around">
            <div className={`text-center p-2 rounded-xl ${mySymbol === "X" ? "bg-blue-600 w-1/3" : ""}`}>
              <p className="font-bold">{playerXName}</p>
              <p className="text-blue-400">X</p>
              {mySymbol === "X" && <p className="text-xs text-green-400">You</p>}
            </div>

            <div className={`text-center p-2 rounded ${mySymbol === "O" ? "bg-green-600 w-1/3" : ""}`}>
              <p className="font-bold">{playerOName}</p>
              <p className="text-green-400">O</p>
              {mySymbol === "O" && <p className="text-xs text-green-400">You</p>}
            </div>
          </div>

          {!gameOver && !gameEnded && !timerdone && startTimer && gameStarted && (
            <div
              className={`flex items-center justify-center w-24 h-24 rounded-full font-mono text-4xl font-extrabold text-white transition-colors duration-500 shadow-xl
                ${xIsNext ? 'bg-blue-600' : 'bg-green-600'}`}
            >
              {Math.max(0, 10 - time)}
            </div>
          )}

          <Board
            xIsNext={xIsNext}
            squares={squares}
            onPlay={handlePlay}
            replayGame={startNewGame}
            playagain={playAgain}
            playerOName={playerOName}
            playerXName={playerXName}
            gameStarted={gameStarted}
            currentUser={currentUser}
            mySymbol={mySymbol}
          />

          {/* Win by disconnect */}
          {disconnectWinner && !gameOver && !timerdone && (
            <div className="text-center m-6">
              <p className="text-2xl font-bold text-green-400">
                {disconnectWinner === currentUserRef.current ? "You Win! Opponent Disconnected" : "You Lost! You Disconnected"}
              </p>
              <button
                className="bg-[#0077FF] hover:bg-blue-800 px-5 py-2 mt-4 rounded-lg text-white font-semibold shadow-md"
                onClick={startNewGame}
              >
                Go Back
              </button>
            </div>
          )}

          {/* Timeout - You lost */}
          {timerdone && loser === currentUserRef.current && !disconnectWinner && (
            <div className="text-center mt-6">
              <p className="text-2xl font-bold text-red-400">You Lost! Time's Up.</p>
              <button
                onClick={startNewGame}
                className="bg-[#0077FF] hover:bg-blue-800 px-5 py-2 mt-4 rounded-lg text-white font-semibold shadow-md"
              >
                Go Back
              </button>
            </div>
          )}

          {/* Timeout - You won */}
          {timerdone && loser !== currentUserRef.current && loser !== "" && !disconnectWinner && (
            <div className="text-center mt-6">
              <p className="text-2xl font-bold text-green-400">You Win! Opponent Timed Out.</p>
              <button 
                onClick={startNewGame} 
                className="bg-[#0077FF] hover:bg-blue-800 px-5 py-2 mt-4 rounded-lg text-white font-semibold shadow-md"
              >
                Go Back
              </button>
            </div>
          )}

          {/*  (winner or draw) */}
          {gameOver && gameEnded && !timerdone && !disconnectWinner && (
            <div className="text-center mt-6">
              {winner ? (
                <p className="text-2xl font-bold mb-4">
                  {winner === "X" ? 
                    (playerXName === currentUserRef.current ? 
                      <span className="text-green-400">You Win!</span> : 
                      <span className="text-red-400">You Lost!</span>
                    ) : 
                    (playerOName === currentUserRef.current ? 
                      <span className="text-green-400">You Win!</span> : 
                      <span className="text-red-400">You Lost!</span>
                    )
                  }
                </p>
              ) : (
                <p className="text-2xl font-bold text-yellow-400 mb-4">It's a Draw!</p>
              )}
              <button
                onClick={startNewGame}
                className="bg-[#0077FF] hover:bg-blue-800 px-5 py-2 rounded-lg text-white font-semibold shadow-md"
              >
                Go Back
              </button>
            </div>
          )}


          {!gameOver && !gameEnded && !timerdone && !disconnectWinner && gameStarted && (
            <button
              onClick={handleLeaveGame}
              className="bg-red-600 hover:bg-red-700 text-white font-bold px-4 py-2 rounded-lg shadow-md mt-4"
            >
              Leave Game
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default RemoteGame;