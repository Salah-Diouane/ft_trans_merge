import React, { useState, useEffect, useRef } from "react";
import socket from "../../Chat/Frontend/services/socket";
import Choose from "./Choose";
import { useLocation } from "react-router-dom"
import Board from "./Board"

function calculateWinner(squares: (string | null)[]) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

const RemoteGame: React.FC = () => {

  const [gameStarted, setGameStarted] = useState(false);
  const [playerXName, setPlayerXName] = useState("");
  const [playerOName, setPlayerOName] = useState("");
  const [squares, setSquares] = useState<(string | null)[]>(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [usersJoin, setUsersJoin] = useState<boolean>(false);
  const [currentUser, setCurrentUser] = useState<string>("");
  const [mySymbol, setMySymbol] = useState<"X" | "O" | null>(null);
  const [waitingForPlayer, setWaitingForPlayer] = useState(false);
  const currentUserRef = useRef<string>("");
   const location = useLocation()

  const handlePlay = (index: number) => {
    socket.emit("game:move", {
        index,
        player: currentUser 
    });
  };

  const startNewGame = () => {

    setSquares(Array(9).fill(null));
    setXIsNext(true);
    setGameStarted(false);
    setPlayerXName("");
    setPlayerOName("");
    setUsersJoin(false);
    setMySymbol(null);
    setWaitingForPlayer(false);
    socket.emit("leave:game");

  };

  const playAgain = () => {

    socket.emit("game:restart");

  };

  const winner = calculateWinner(squares);
  const isDraw = squares.every((sq) => sq !== null) && !winner;
  const gameOver = winner || isDraw;
  console.log("---> gameOver")
  console.log(gameOver)

  useEffect(() => {

    socket.on("game:start", ({ playerX, playerO }) => {

      setPlayerXName(playerX);
      setPlayerOName(playerO);
      setGameStarted(true);
      setUsersJoin(true);
      setWaitingForPlayer(false);

      if (currentUserRef.current === playerX) {

        setMySymbol("X");
        
      } else {
        setMySymbol("O");
      }

    });

    socket.on("game:waiting", () => {
      setWaitingForPlayer(true);
    });

    socket.on("game:move", ({ squares: newSquares, xIsNext: newXIsNext }) => {
      setSquares(newSquares);
      setXIsNext(newXIsNext);
    });

    socket.on("game:restart", () => {
      setSquares(Array(9).fill(null));
      setXIsNext(true);
    });

    socket.on("player:disconnected", ({ message }) => {
      alert(message);
    //   startNewGame();
    });

    return () => {
      socket.off("game:start");
      socket.off("game:waiting");
      socket.off("game:move");
      socket.off("game:restart");
      socket.off("player:disconnected");
    };
  }, []);

  useEffect(() => {
	const handleBeforeUnload = () => {
		socket.emit("player:left", { currentUser });
	};

	window.addEventListener("beforeunload", handleBeforeUnload);
	return () => {
		window.removeEventListener("beforeunload", handleBeforeUnload);
	};
}, [currentUser]);


  useEffect ( () => {

   
    console.log(location)
    
    if (location.pathname !== "/game/tic-tac-toe/remote-game"){
        console.log("is lefting the game")
        socket.emit("player:left", { currentUser});
    }
  }, [location.pathname])

  return (
    <div className="h-full w-full flex items-center justify-center bg-[#222831] p-4">
      {!gameStarted && !usersJoin ? (
        <div className="flex flex-col items-center space-y-4">
          {waitingForPlayer ? (
            <div className="bg-[#393E46] rounded-xl shadow-lg p-8 max-w-md w-full text-white text-center">
              <h2 className="text-2xl font-bold mb-4">⏳ Waiting for Player</h2>
              <p className="text-gray-300">
                Looking for another player to join...
              </p>
              <div className="mt-4">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto"></div>
              </div>
            </div>
          ) : (
            <Choose
              onChoose={(playerName) => {
                setCurrentUser(playerName);
                currentUserRef.current = playerName;
                socket.emit("join:game");
              }}
            />
          )}
        </div>
      ) : (
        <div className="flex flex-col items-center space-y-6 w-full max-w-2xl">
          <div className="bg-[#393E46] p-4 rounded-xl shadow-md w-full text-white flex justify-around">
            <div
              className={`text-center p-2 rounded ${
                mySymbol === "X" ? "bg-blue-600" : ""
              }`}
            >
              <p className="font-bold">{playerXName}</p>
              <p className="text-blue-400">X</p>
              {mySymbol === "X" && (
                <p className="text-xs text-green-400">You</p>
              )}
            </div>
            <div
              className={`text-center p-2 rounded ${
                mySymbol === "O" ? "bg-green-600" : ""
              }`}
            >
              <p className="font-bold">{playerOName}</p>
              <p className="text-green-400">O</p>
              {mySymbol === "O" && (
                <p className="text-xs text-green-400">You</p>
              )}
            </div>
          </div>

          <Board
            xIsNext={xIsNext}
            squares={squares}
            onPlay={handlePlay}
            playerXName={playerXName}
            playerOName={playerOName}
            gameStarted={gameStarted}
            currentUser={currentUser}
            mySymbol={mySymbol}
          />

        <button onClick={() => socket.emit("leave:game")}>Leave Game</button>

          {gameOver && (
            <div className="flex gap-4">
              <button
                onClick={playAgain}
                className="bg-green-600 hover:bg-green-700 px-5 py-2 rounded-lg text-white font-semibold shadow-md"
              >
                Play Again
              </button>
              <button
                onClick={startNewGame}
                className="bg-[#0077FF] hover:bg-blue-800 px-5 py-2 rounded-lg text-white font-semibold shadow-md"
              >
                New Game
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default RemoteGame;




