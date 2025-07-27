import { useEffect, useState } from "react";
import Square from "./Square"
import  triggerFireworks  from "./confetti"
import socket from "../../Chat/Frontend/services/socket";


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

type BoardProps = {
  xIsNext: boolean;
  squares: (string | null)[];
  onPlay: (index: number) => void;
  raplayGame: () => void;
  playagain: () => void;
  playerXName: string;
  playerOName: string;
  gameStarted: boolean;
  currentUser: string;
  mySymbol: "X" | "O" | null;
};

export default function Board({
  xIsNext,
  squares,
  onPlay,
  raplayGame,
  playagain,
  playerXName,
  playerOName,
  gameStarted,
  currentUser,
  mySymbol,
}: BoardProps) {
  const isMyTurn =
    mySymbol && ((xIsNext && mySymbol === "X") || (!xIsNext && mySymbol === "O"));

  function handleClick(i: number) {
    if (!gameStarted || calculateWinner(squares) || squares[i] || !isMyTurn)
      return;
    onPlay(i);
  }

  const winner = calculateWinner(squares);
  const isBoardFull = squares.every((square) => square !== null);
  const gameOver = winner || isBoardFull;

  const [confettiTriggered, setConfettiTriggered] = useState(false);

  function handleLeftGame(){
    triggerFireworks();
    <div className="flex gap-4">
      <button
        onClick={raplayGame}
        className="bg-green-600 hover:bg-green-700 px-5 py-2 rounded-lg text-white font-semibold shadow-md"
      >
        Play Again
      </button>
      <button
        onClick={playagain}
        className="bg-[#0077FF] hover:bg-blue-800 px-5 py-2 rounded-lg text-white font-semibold shadow-md"
      >
        New Game
      </button>
    </div>
    // raplayGame();
  }
  
  useEffect(() => {
    if (winner && !confettiTriggered) {
      triggerFireworks();
      setConfettiTriggered(true);
    } else if (!winner) {
      setConfettiTriggered(false);
    }

  }, [winner, confettiTriggered]);

  let boardAnimation = "";
  let statusAnimation = "";

  if (winner) {
    boardAnimation = "animate-pulse";
    statusAnimation = "animate-bounce";
  } else if (isBoardFull) {
    boardAnimation = "animate-pulse";
    statusAnimation = "animate-pulse";
  }

  let status;
  if (winner) {
    const winnerName = winner === "X" ? playerXName : playerOName;
    status = (
      <div className={`text-center ${statusAnimation}`}>
        <p className="text-[#00FF7F] font-bold text-2xl mb-2">🎉 Winner!</p>
        <p className="text-white text-xl">
          {winnerName} ({winner}) wins!
        </p>
      </div>
    );
  } else if (isBoardFull) {
    status = (
      <div className={`text-center ${statusAnimation}`}>
        <p className="text-yellow-400 text-xl font-bold">🤝 It's a draw!</p>
      </div>
    );
  } else if (gameStarted) {
    const currentPlayerName = xIsNext ? playerXName : playerOName;
    const isCurrentPlayerMe = currentPlayerName === currentUser;
    status = (
      <p className="text-[#0077FF] font-semibold text-xl text-center">
        {isCurrentPlayerMe ? (
          <span className="text-green-400">
            Your turn ({xIsNext ? "X" : "O"})
          </span>
        ) : (
          <span className="text-white">
            {currentPlayerName}'s turn ({xIsNext ? "X" : "O"})
          </span>
        )}
      </p>
    );
  }

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-5xl font-extrabold text-white mb-6">Tic Tac Toe</h1>
      <div className="mb-4">{status}</div>
      <div
        className={`bg-[#222831] p-6 rounded-2xl grid grid-cols-3 gap-4 w-72 sm:w-96 ${boardAnimation} ${
          gameOver ? "scale-105 shadow-lg" : ""
        }`}
      >
        {squares.map((square, i) => (
          <Square
            key={i}
            value={square}
            onSquareClick={() => handleClick(i)}
            disabled={!isMyTurn || !!gameOver}
          />
        ))}
      </div>
    </div>
  );
}
