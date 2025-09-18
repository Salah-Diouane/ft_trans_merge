import { useEffect, useState } from "react";
import Square from "./Square";
import socket from "../../Chat/services/socket";

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
};

type GameResult = {
  winner: string | null;
  loser: string | null;
  reason: "win" | "draw" | "timeout" | "disconnect";
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
}: BoardProps) {

  const [gameResult, setGameResult] = useState<GameResult | null>(null);
  const [time, setTime] = useState(0);

  const isMyTurn = mySymbol && ((xIsNext && mySymbol === "X") || (!xIsNext && mySymbol === "O"));

  function handleClick(i: number) {
    if (!gameStarted || squares[i] || !isMyTurn || gameResult) return;
    onPlay(i);
  }
  // io.to(session.gameState.gameId).emit("game:end", {
  //   winner,
  //   loser,
  //   reason,
  // });

  useEffect(() => {

    socket.on("game:end", (data: GameResult) => {
      setGameResult(data);
      // winner and loser and reason
    });

    socket.on("game:restart", () => {
      setGameResult(null);
    });

    return () => {
      socket.off("game:end");
      socket.off("game:restart");
    };
  }, []);
  console.log("")
  let boardAnimation = "";
  let statusAnimation = "";

  if (gameResult) {
    boardAnimation = "animate-pulse";
    statusAnimation = "animate-bounce";
  }

  let status;
  if (gameResult) {
    if (gameResult.reason === "win") {
      status = (
        <p className="text-green-400 text-2xl font-bold text-center">
          {gameResult.winner} wins! 🎉
        </p>
      );
    } else if (gameResult.reason === "draw") {
      status = (
        <p className="text-yellow-400 text-2xl font-bold text-center">
          It's a draw!
        </p>
      );
    } else if (gameResult.reason === "timeout") {
      status = (
        <p className="text-red-400 text-2xl font-bold text-center">
          {gameResult.loser} ran out of time ⏳ — {gameResult.winner} wins!
        </p>
      );
    } else if (gameResult.reason === "disconnect") {
      status = (
        <p className="text-red-400 text-2xl font-bold text-center">
          {gameResult.loser} left — {gameResult.winner} wins!
        </p>
      );
    }
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
console.log("gameResult-------> : ",gameResult)
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
