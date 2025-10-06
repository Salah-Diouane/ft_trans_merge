import { useEffect, useState } from "react";
import Square from "./Square";
import triggerFireworks from "./confetti";

interface BoardProps {
  xIsNext: boolean;
  squares: (string | null)[];
  onPlay: (nextSquares: (string | null)[]) => void;
  playerXName: string;
  playerOName: string;
  gameStarted: boolean;
}

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

export default function Board({
  xIsNext,
  squares,
  onPlay,
  playerXName,
  playerOName,
  gameStarted,
}: BoardProps) {
  function handleClick(i: number) {
    if (!gameStarted || calculateWinner(squares) || squares[i]) return;
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? "X" : "O";
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  const isBoardFull = squares.every((square) => square !== null);
  const currentPlayerName = xIsNext ? playerXName : playerOName;
  const gameOver = winner || isBoardFull;
  const [confettiTriggered, setConfettiTriggered] = useState(false);

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
        <p className="text-[#00FF7F] font-bold text-2xl mb-2"> Winner!</p>

        <p className="text-white text-xl">
          {winnerName} ({winner}) wins!
        </p>
      </div>
    );
  } else if (isBoardFull) {
    status = (
      <div className={`text-center ${statusAnimation}`}>
        <p className="text-yellow-400 text-xl font-bold"> It's a draw!</p>
      </div>
    );
  } else if (gameStarted) {
    status = (
      <p className="text-[#0077FF] font-semibold text-xl text-center">
        Next player:{" "}
        <span className="text-white">
          {currentPlayerName} ({xIsNext ? "X" : "O"})
        </span>
      </p>
    );
  }

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-5xl font-extrabold text-white mb-6">Tic Tac Toe</h1>

      <div className="mb-4">{status}</div>

      <div
        className={`bg-[#222831] p-6 rounded-2xl grid grid-cols-3 gap-4 w-72 sm:w-96 animate-none ${
          gameOver ? "scale-105 shadow-lg" : ""
        }`}
      >
        {squares.map((square, i) => (
          <Square key={i} value={square} onSquareClick={() => handleClick(i)} />
        ))}
      </div>
    </div>
  );
}
