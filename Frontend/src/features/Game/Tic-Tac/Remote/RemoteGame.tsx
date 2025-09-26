import React, { useState, useEffect, useRef } from "react";
import socket from "../../../Chat/services/socket";
import Choose from "./Choose";
import Board from "./Board";
import triggerFireworks from "./confetti";
import { RiPingPongFill } from 'react-icons/ri';
import { FiUsers } from 'react-icons/fi';

interface GameResult {
  winner: string | null;
  loser: string | null;
  reason: "win" | "draw" | "timeout" | "disconnect";
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
  const [gameResult, setGameResult] = useState<GameResult | null>(null);

  const currentUserRef = useRef<string | undefined>("");
  const hasJoinedGameRef = useRef<boolean>(false);

  const [startTimer, setStartTimer] = useState<boolean>(false);
  const [time, setTime] = useState<number>(0);
  const timerRef = useRef<number | null>(null);

  // Timer effect
  useEffect(() => {
    if (startTimer && !gameResult) {
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
  }, [startTimer, gameResult]);

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
    if (!gameResult && gameStarted) {
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
    setGameResult(null);
    hasJoinedGameRef.current = false;
    cleanup();
  }

  function startNewGame() {
    resetGameState();
    socket.emit("leave:game");
  }

  function playAgain() {
    socket.emit("game:restart");
    setTime(0);
    setStartTimer(false);
    setGameResult(null);
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
    setGameResult(null);
    
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
      setGameResult(null);
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
      if (gameResult) return;

      setSquares(newSquares);
      setXIsNext(newXIsNext);
      setTime(0);

      // Don't check for winner here - let backend handle it
      setStartTimer(true);
    };

    const onGameRestart = () => {
      console.log("Game restarted");
      setSquares(Array(9).fill(null));
      setXIsNext(true);
      setGameResult(null);
      setStartTimer(true);
      setTime(0);
    };

    // Unified game end handler
    const onGameEnd = (result: GameResult) => {
      console.log("Game ended:", result);
      setGameResult(result);
      cleanup();

      // Trigger fireworks if current user won
      // if ((result.winner === currentUserRef.current) && result.reason !== "draw") {
      if (result.reason === "draw"){
        result.winner = null;
      }
      if ((result.winner === currentUserRef.current)) {
        triggerFireworks();
      }

      setGameStarted(false);
      setMySymbol(null);
      hasJoinedGameRef.current = false;
    };

    // Register all socket listeners
    socket.on("game:start", onGameStart);
    socket.on("game:error", onGameError);
    socket.on("game:waiting", onGameWaiting);
    socket.on("game:move", onGameMove);
    socket.on("game:restart", onGameRestart);
    socket.on("game:end", onGameEnd);

    return () => {
      socket.off("game:start", onGameStart);
      socket.off("game:error", onGameError);
      socket.off("game:waiting", onGameWaiting);
      socket.off("game:move", onGameMove);
      socket.off("game:restart", onGameRestart);
      socket.off("game:end", onGameEnd);
    };
  }, []);

  const renderGameEndMessage = () => {
    if (!gameResult) return null;

    const isWinner = gameResult.winner === currentUserRef.current;

    switch (gameResult.reason) {
      case "win":
        return (
          <div className="text-center mt-6">
            <p className="text-2xl font-bold mb-4">
              {isWinner ? (
                <span className="text-green-400">You Win! 🎉</span>
              ) : (
                <span className="text-red-400">You Lost!</span>
              )}
            </p>
            <div className="flex gap-4 justify-center">
              <button
                onClick={startNewGame}
                className="bg-[#0077FF] hover:bg-blue-800 px-5 py-2 rounded-lg text-white font-semibold shadow-md"
              >
                Go Back
              </button>
              {/* <button
                onClick={playAgain}
                className="bg-green-600 hover:bg-green-700 px-5 py-2 rounded-lg text-white font-semibold shadow-md"
              >
                Play Again
              </button> */}
            </div>
          </div>
        );
      
      case "draw":
        return (
          <div className="text-center mt-6">
            <p className="text-2xl font-bold text-yellow-400 mb-4">It's a Draw!</p>
            <div className="flex gap-4 justify-center">
              <button
                onClick={startNewGame}
                className="bg-[#0077FF] hover:bg-blue-800 px-5 py-2 rounded-lg text-white font-semibold shadow-md"
              >
                Go Back
              </button>
              {/* <button
                onClick={playAgain}
                className="bg-green-600 hover:bg-green-700 px-5 py-2 rounded-lg text-white font-semibold shadow-md"
              >
                Play Again
              </button> */}
            </div>
          </div>
        );
      
      case "timeout":
        return (
          <div className="text-center mt-6">
            <p className="text-2xl font-bold mb-4">
              {isWinner ? (
                <span className="text-green-400">You Win! Opponent Timed Out ⏳</span>
              ) : (
                <span className="text-red-400">You Lost! Time's Up ⏳</span>
              )}
            </p>
            <button
              onClick={startNewGame}
              className="bg-[#0077FF] hover:bg-blue-800 px-5 py-2 rounded-lg text-white font-semibold shadow-md"
            >
              Go Back
            </button>
          </div>
        );
      
      case "disconnect":
        return (
          <div className="text-center mt-6">
            <p className="text-2xl font-bold mb-4">
              {isWinner ? (
                <span className="text-green-400">You Win! Opponent Disconnected</span>
              ) : (
                <span className="text-red-400">Connection Lost</span>
              )}
            </p>
            <button
              onClick={startNewGame}
              className="bg-[#0077FF] hover:bg-blue-800 px-5 py-2 rounded-lg text-white font-semibold shadow-md"
            >
              Go Back
            </button>
          </div>
        );
      
      default:
        return null;
    }
  };

  console.log("---> gameResult:", gameResult);
  
  return (
    <div className="h-full w-full flex items-center justify-center bg-[#222831] p-4">
      {!gameStarted && !usersJoin ? (
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

          {!gameResult && startTimer && gameStarted && (
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
            gameResult={gameResult}
          />

          {renderGameEndMessage()}

          {!gameResult && gameStarted && (
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