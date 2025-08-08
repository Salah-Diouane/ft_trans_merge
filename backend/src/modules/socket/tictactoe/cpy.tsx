// Fixed RemoteGame component - Key changes for draw case

const RemoteGame: React.FC = () => {
  // ... existing state variables ...
  const [isDraw, setIsDraw] = useState<boolean>(false);

  // ... existing useEffects and functions ...

  function resetGameStat() {
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
    setIsDraw(false); // Add this line
    hasJoinedGameRef.current = false;
    setTime(0);
    setStartTimer(false);
  }

  function handleNewGameAfterDraw() {
    resetGameStat();
    // Don't emit leave:game, just reset local state
    setStartTimer(false);
  }

  function playAgain() {
    socket.emit("game:restart");
    setGameEnded(false);
    setIsDraw(false);
    setStartTimer(false);
    setTime(0);
  }

  useEffect(() => {
    const onGameStart = ({ playerX, playerO }: { playerX: string; playerO: string }) => {
      console.log("Game started!");
      hasJoinedGameRef.current = true;
      setPlayerOName(playerO);
      setPlayerXName(playerX);
      setGameStarted(true);
      setUsersJoin(true);
      setWaitingForPlayer(false);
      setMySymbol(currentUserRef.current === playerX ? "X" : "O");
      setStartTimer(true);
    };

    const onGameMove = ({ squares: newSquares, xIsNext: newXIsNext }: { squares: (string | null)[]; xIsNext: boolean }) => {
      setSquares(newSquares);
      setXIsNext(newXIsNext);
      setTime(0);
    };

    // New handler for game winner
    const onGameWinner = ({ winner, loser, winningSymbol }: { winner: string; loser: string; winningSymbol: string }) => {
      if (gameEndedRef.current) return;

      setGameEnded(true);
      setLoser(loser);

      if (winner === currentUserRef.current) {
        triggerFireworks();
      }

      setGameStarted(false);
      setMySymbol(null);
      hasJoinedGameRef.current = false;
      setStartTimer(false);
    };

    // Fixed draw handler
    const onGameDraw = () => {
      if (gameEndedRef.current) return;

      console.log("Game ended in a draw");
      setGameEnded(true);
      setIsDraw(true);
      setGameStarted(false);
      setMySymbol(null);
      hasJoinedGameRef.current = false;
      setStartTimer(false);
    };

    const onGameRestart = ({ playerX, playerO }: { playerX: string; playerO: string }) => {
      setSquares(Array(9).fill(null));
      setXIsNext(true);
      setGameEnded(false);
      setIsDraw(false);
      setPlayerXName(playerX);
      setPlayerOName(playerO);
      setGameStarted(true);
      setMySymbol(currentUserRef.current === playerX ? "X" : "O");
      setStartTimer(true);
    };

    // ... other event handlers remain the same ...

    socket.on("game:start", onGameStart);
    socket.on("game:error", onGameError);
    socket.on("game:waiting", onGameWaiting);
    socket.on("game:move", onGameMove);
    socket.on("game:winner", onGameWinner); // New event
    socket.on("game:draw", onGameDraw); // Fixed handler
    socket.on("game:restart", onGameRestart);
    socket.on("player:disconnected", onPlayerDisconnected);
    socket.on("game:win-by-disconnect", onGameWinByDisconnect);
    socket.on("game:timeout", onGameTimeout);

    return () => {
      socket.off("game:start", onGameStart);
      socket.off("game:error", onGameError);
      socket.off("game:waiting", onGameWaiting);
      socket.off("game:move", onGameMove);
      socket.off("game:winner", onGameWinner);
      socket.off("game:draw", onGameDraw);
      socket.off("game:restart", onGameRestart);
      socket.off("player:disconnected", onPlayerDisconnected);
      socket.off("game:win-by-disconnect", onGameWinByDisconnect);
      socket.off("game:timeout", onGameTimeout);
    };
  }, []);

  // Remove the useEffect that handles local winner detection
  // The backend will now handle this and emit appropriate events

  // Updated status UI logic
  let statusUI = null;

  if (disconnectWinner && !isDraw && !timerdone) {
    statusUI = (
      <div className="text-center m-6">
        <p className="text-2xl font-bold text-green-400">
          You Win !!! Opponent Disconnected
        </p>
        <button
          className="bg-[#0077FF] hover:bg-blue-800 px-5 py-2 mt-4 rounded-lg text-white font-semibold shadow-md"
          onClick={startNewGame}
        >
          Go Back
        </button>
      </div>
    );
  } else if (timerdone) {
    statusUI =
      loser === currentUserRef.current ? (
        <div className="text-center mt-6">
          <p className="text-2xl font-bold text-red-400">
            You lost! Time's up.
          </p>
          <button
            onClick={startNewGame}
            className="bg-[#0077FF] hover:bg-blue-800 px-5 py-2 mt-4 rounded-lg text-white font-semibold shadow-md"
          >
            Go back
          </button>
        </div>
      ) : (
        <div className="text-center mt-6">
          <p className="text-2xl font-bold text-green-400">
            You win! Opponent timed out.
          </p>
          <button
            onClick={startNewGame}
            className="bg-[#0077FF] hover:bg-blue-800 px-5 py-2 mt-4 rounded-lg text-white font-semibold shadow-md"
          >
            Go back
          </button>
        </div>
      );
  } else if (isDraw) {
    statusUI = (
      <div className="text-center mt-6">
        <p className="text-2xl font-bold text-yellow-400">It's a draw!</p>
        <div className="flex gap-4 mt-4 justify-center">
          <button
            onClick={playAgain}
            className="bg-green-600 hover:bg-green-700 px-5 py-2 rounded-lg text-white font-semibold shadow-md"
          >
            Play Again
          </button>
          <button
            onClick={handleNewGameAfterDraw}
            className="bg-[#0077FF] hover:bg-blue-800 px-5 py-2 rounded-lg text-white font-semibold shadow-md"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  } else if (gameEnded && !isDraw && !timerdone && !disconnectWinner) {
    // This handles regular wins/losses
    statusUI =
      loser === currentUserRef.current ? (
        <div className="text-center mt-6">
          <p className="text-2xl font-bold text-red-400">You lost!</p>
          <div className="flex gap-4 mt-4 justify-center">
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
              Go Back
            </button>
          </div>
        </div>
      ) : (
        <div className="text-center mt-6">
          <p className="text-2xl font-bold text-green-400">You win!</p>
          <div className="flex gap-4 mt-4 justify-center">
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
              Go Back
            </button>
          </div>
        </div>
      );
  }

  // ... rest of the component remains the same ...
};