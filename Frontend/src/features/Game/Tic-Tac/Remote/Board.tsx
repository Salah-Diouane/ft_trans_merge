import { useEffect, useState } from "react";
import Square from "./Square";

type BoardProps = {
  xIsNext: boolean;
  squares: (string | null)[];
  onPlay: (index: number) => void;
  replayGame: () => void;
  playagain: () => void;
  playerXName: string;
  playerOName: string;
  gameStarted: boolean;
  currentUser: string;
  mySymbol: "X" | "O" | null;
  gameResult?: {
    winner: string | null;
    loser: string | null;
    reason: "win" | "draw" | "timeout" | "disconnect";
  } | null;
};

export default function Board({
  xIsNext,
  squares,
  onPlay,
  replayGame,
  playagain,
  playerXName,
  playerOName,
  gameStarted,
  currentUser,
  mySymbol,
  gameResult = null,
}: BoardProps) {

  const isMyTurn = mySymbol && ((xIsNext && mySymbol === "X") || (!xIsNext && mySymbol === "O"));

  function handleClick(i: number) {
    if (!gameStarted || squares[i] || !isMyTurn || gameResult) return;
    onPlay(i);
  }

  let boardAnimation = "";

  if (gameResult) {
    boardAnimation = "animate-pulse";
  }

  let status;
  if (gameResult) {
    // Game has ended - show result
    switch (gameResult.reason) {
      case "win":
        status = (
          <p className="text-2xl font-bold text-center">
            <span className={gameResult.winner === currentUser ? "text-green-400" : "text-red-400"}>
              {gameResult.winner} wins! 🎉
            </span>
          </p>
        );
        break;
      case "draw":
        status = (
          <p className="text-yellow-400 text-2xl font-bold text-center">
            It's a draw!
          </p>
        );
        break;
      case "timeout":
        status = (
          <p className="text-2xl font-bold text-center">
            <span className={gameResult.winner === currentUser ? "text-green-400" : "text-red-400"}>
              {gameResult.loser} ran out of time ⏳ — {gameResult.winner} wins!
            </span>
          </p>
        );
        break;
      case "disconnect":
        status = (
          <p className="text-2xl font-bold text-center">
            <span className={gameResult.winner === currentUser ? "text-green-400" : "text-red-400"}>
              {gameResult.loser} left — {gameResult.winner} wins!
            </span>
          </p>
        );
        break;
    }
  } else if (gameStarted) {
    // Game is ongoing - show whose turn it is
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

  console.log("Board gameResult:", gameResult);

  return (
    <div className="flex flex-col items-center">
      <div className="mb-4">{status}</div>
      <div
        className={`bg-[#222831] p-6 rounded-2xl grid grid-cols-3 gap-4 w-72 sm:w-96 ${boardAnimation} ${
          gameResult ? "scale-105 shadow-lg" : ""
        }`}
      >
        {squares.map((square, i) => (
          <Square
            key={i}
            value={square}
            onSquareClick={() => handleClick(i)}
            disabled={!isMyTurn || !!gameResult}
          />
        ))}
      </div>
    </div>
  );
}