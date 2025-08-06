


// import React, { useState, useEffect, useRef } from "react";
// import socket from "../../Chat/Frontend/services/socket";
// import Choose from "./Choose";
// import { useLocation, useNavigate } from "react-router-dom";
// import Board from "./Board";
// import triggerFireworks from "./confetti";

// function calculateWinner(squares: (string | null)[]){
//   const lines = [
//     [0, 1, 2], [3, 4, 5], [6, 7, 8],
//     [0, 3, 6], [1, 4, 7], [2, 5, 8],
//     [0, 4, 8], [2, 4, 6]
//   ];
  
//   for (const[a, b, c] of lines){
//     if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c])
//       return squares[a]
//   }
//   return null;
// }

// const RemoteGame: React.FC = () => {
//   const [gameStarted, setGameStarted] = useState<boolean>(false);
//   const [playerXName, setPlayerXName] = useState<string>("");
//   const [playerOName, setPlayerOName] = useState<string>("");
//   const [squares, setSquares] = useState<((string | null)[])>(Array(9).fill(null))
//   const [xIsNext, setXIsNext] = useState<boolean>(true)
//   const [usersJoin, setUsersJoin] = useState<boolean>(false)
//   const [currentUser, setCurrentUser]= useState<string>("")
//   const [mySymbol, setMySymbol] = useState<"X" | "O" | null>(null)
//   const [waitingForPlayer, setWaitingForPlayer] = useState<boolean>(false)
//   const [disconnectWinner, setDisconnectWinner] = useState<string | null>(null)
//   const [timerdone, setTimerdone] = useState<boolean>(false)
//   const [loser, setLoser] = useState<string>("")
//   const [gameEnded, setGameEnded] = useState<boolean>(false)

//   const currentUserRef = useRef<string>("")
//   const hasJoinedGameRef = useRef<boolean>(false);
//   const location = useLocation();
//   const navigate = useNavigate();
  
//   const winner = calculateWinner(squares);

  
//   const isDraw = squares.every(square => square !== null) && !winner;
//   const gameOver = (winner || isDraw);


//   useEffect(() => {
//     return () => {
//       if (hasJoinedGameRef.current && socket && socket.connected) {
//         socket.emit("leave:game");
//         // socket.disconnect();
//       }
//     };
//   }, []); //  runs only on unmount



//   function hadlePlay (index : number){
//     if (!gameEnded){
//       socket.emit("game:move", {
//         index,
//         player: currentUser
//       });
//     }
//   }
  
//   function resetGameStat(){
//     setSquares(Array(9).fill(null))
//     setXIsNext(true);
//     setGameStarted(false);
//     setPlayerXName("");
//     setPlayerOName("");
//     setUsersJoin(false);
//     setMySymbol(null);
//     setWaitingForPlayer(false);
//     setDisconnectWinner(null);
//     setTimerdone(false);
//     setLoser("");
//     setGameEnded(false);
//     hasJoinedGameRef.current = false; 
//   }

//   function startNewGame(){
//     resetGameStat();
//     socket.emit("leave:game");
//   }

//   function playAgain(){
//     socket.emit("game:restart")
//     startNewGame()
//   }

//   function handleLeaveGame(){
//     socket.emit("leave:game");
//     hasJoinedGameRef.current = false;
//     startNewGame();
//   }

//   useEffect( () => {
//     socket.on("game:start", ({ playerX, playerO }) =>{
//       console.log(" Game started!");
//       hasJoinedGameRef.current = true; 
//       setPlayerOName(playerO)
//       setPlayerXName(playerX)
//       setGameStarted(true)
//       setUsersJoin(true)
//       setWaitingForPlayer(false)
//       setMySymbol(currentUserRef.current === playerX ? "X" : "O")
//     });

//     socket.on("game:error", ({message})=> alert(message));

//     socket.on("game:waiting", () => {
//       console.log("Waiting for player...");
//       hasJoinedGameRef.current = true; 
//       setWaitingForPlayer(true);
//     });

//     socket.on("game:move", ({squares: newSquare, xIsNext: newXIsNext}) => {
//       setSquares(newSquare)
//       setXIsNext(newXIsNext)
//     });

//     socket.on("game:restart", () => {
//       setSquares(Array(9).fill(null))
//       setXIsNext(true)
//       setGameEnded(false)
//     })

//     socket.on("player:disconnected", ({ message }) => {
//       console.log("Player disconnected:", message);
//     });

//     socket.on("game:win-by-disconnect", ({ winner, loser }) => {
//       if (gameEnded)
//           return
//       setGameEnded(true)
//       setDisconnectWinner(winner)
//       setLoser(loser)
//       if (winner === currentUserRef.current)
//         triggerFireworks()
//       setGameStarted(false)
//       setMySymbol(null)
//       hasJoinedGameRef.current = false; 
//     })

//     return () =>{
//       socket.off("game:start");
//       socket.off("game:waiting");
//       socket.off("game:move");
//       socket.off("game:restart");
//       socket.off("player:disconnected");
//       socket.off("game:win-by-disconnect");
//       socket.off("game:error");
//     }

//   }, [gameEnded])

//   useEffect(() => {
//     socket.on("game:timeout", ({loser, winner, message}) => {
//       console.log("Game timeout occurred");
//       if (gameEnded)
//           return ;
//       setGameEnded(true);
//       setTimerdone(true);
//       setLoser(loser)
//       if (winner === currentUserRef.current)
//         triggerFireworks()
//       setGameStarted(false)
//       setMySymbol(null)
//       setSquares(Array(9).fill(null))
//       hasJoinedGameRef.current = false; 
//     })

//     return () => {
//       socket.off("game:timeout");
//     };
    
//   }, [gameEnded] )

//   // console.log("loser : ")
//   // console.log(loser)

//   console.log("current user : ")
//   console.log(currentUserRef.current)

//   useEffect(() => {

//     if (!winner || gameEnded)
//       return;
  
//     setGameEnded(true);
  
//     const winnerName = winner === "X" ? playerXName : playerOName;
//     const loserName = winner === "X" ? playerOName : playerXName;
  
//     if (winnerName === currentUserRef.current) {
//       triggerFireworks(); 
//     }
  
//     setLoser(loserName);
//     setGameStarted(false);
//     setMySymbol(null);
//     hasJoinedGameRef.current = false;
//   }, [winner]);
  
//   return (
//     <div className="h-full w-full flex items-center justify-center bg-[#222831] p-4">
//       {!gameStarted && !usersJoin && !timerdone ? (
//         <div className="flex flex-cols items-center space-x-4">
//           {waitingForPlayer ? (
//             <div className="bg-[#393E46] rounded-xl shadow-lg p-8 max-w-md w-full text-white text-center">
//               <h2 className="text-2xl font-bold mb-4">⏳ Waiting for Player</h2>
//               <p className="text-gray-300">Looking for another player to join...</p>
//               <div className="mt-4">
//                 <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto" />
//               </div>
//               <button
//                 onClick={handleLeaveGame}
//                 className="bg-red-600 hover:bg-red-700 text-white font-bold px-4 py-2 rounded-lg shadow-md mt-4"
//               >
//                 Cancel
//               </button>
//             </div>
//           ) : (
//             <Choose 
//               onChoose={(playerName) => {
//                 setCurrentUser(playerName);
//                 currentUserRef.current = playerName;
//                 socket.emit("join:game");
//               }}
//             />
//           )}

//         </div>
//       ) : (
//         <div className="flex flex-col items-center space-y-6 w-full max-w-2xl">
//           <h1 className="text-5xl font-extrabold text-white mb-6">Tic Tac Toe</h1>

//           <div className="bg-[#393E46] p-4 rounded-xl shadow-md w-full text-white flex justify-around">

//             <div className={`text-center p-2 rounded-xl shadow-md ${mySymbol === 'X' ? "bg-blue-600 w-1/3" : ""} `}>
//               <p className="font-bold">{playerXName}</p>
//               <p className="text-blue-400">X</p>
//               {mySymbol === "X" && <p className="text-xs text-green-400">You</p>}              
//             </div>

//             <div className={`text-center p-2 rounded ${mySymbol === "O" ? "bg-green-600 w-1/3" : ""}`}>
//               <p className="font-bold">{playerOName}</p>
//               <p className="text-green-400">O</p>
//               {mySymbol === "O" && <p className="text-xs text-green-400">You</p>}
//             </div>

//           </div>
//           <Board
//             xIsNext = {xIsNext}
//             squares = {squares}
//             onPlay = {hadlePlay}
//             replayGame = {startNewGame}
//             playagain={playAgain}
//             playerOName={playerOName}
//             playerXName={playerXName}
//             gameStarted = {gameStarted}
//             currentUser = {currentUser}
//             mySymbol={mySymbol}
//           />

//           {disconnectWinner && !gameOver && !timerdone && (
//             <div className="text-center m-6">
//               <p className="text-2xl font-bold text-green-400">
//                 You Win !!! Opponent Disconnected
//               </p>
//               <button className="bg-[#0077FF] hover:bg-blue-800 px-5 py-2 mt-4 rounded-lg text-white font-semibold shadow-md"
//                       onClick={startNewGame}
//               >
//                 Go Back
//               </button>
//             </div>
//           )}

//           {timerdone && loser === currentUserRef.current && (
//             <div className="text-center mt-6">
//             <p className="text-2xl font-bold text-red-400"> You lost! Time's up.</p>
//             <button
//               onClick={startNewGame}
//               className="bg-[#0077FF] hover:bg-blue-800 px-5 py-2 mt-4 rounded-lg text-white font-semibold shadow-md"
//             >
//               Go back
//             </button>
//           </div>            
//           )}

//           {/* {gameOver   && winner == currentUserRef.current &&( */}
//           {timerdone && loser !== currentUserRef.current && (
//             <div className="text-center mt-6">
//             <p className="text-2xl font-bold text-green-400"> You win! Opponent timed out.</p>
//             <button
//               onClick={startNewGame}
//               className="bg-[#0077FF] hover:bg-blue-800 px-5 py-2 mt-4 rounded-lg text-white font-semibold shadow-md"
//               >
//               Go back
//             </button>
//           </div>
//           )}

//           {gameOver && gameEnded && loser !== currentUserRef.current && (
//             <div className="text-center mt-6">
//             <p className="text-2xl font-bold text-green-400"> You win! </p>
//             <button
//               onClick={startNewGame}
//               className="bg-[#0077FF] hover:bg-blue-800 px-5 py-2 mt-4 rounded-lg text-white font-semibold shadow-md"
//               >
//               Go back
//             </button>
//           </div>
//           )}

//           {gameOver && gameEnded && loser === currentUserRef.current && (
//             <div className="text-center mt-6">
//             <p className="text-2xl font-bold text-red-400"> You lost! .</p>
//             <button
//               onClick={startNewGame}
//               className="bg-[#0077FF] hover:bg-blue-800 px-5 py-2 mt-4 rounded-lg text-white font-semibold shadow-md"
//             >
//               Go back
//             </button>
//           </div>            
//           )}

//           {gameOver && !timerdone && !gameEnded && (
//             <div className="flex gap-4 mt-6">
//              <button
//                onClick={playAgain}
//                className="bg-green-600 hover:bg-green-700 px-5 py-2 rounded-lg text-white font-semibold shadow-md"
//              >
//                Play Again
//              </button>
//              <button
//                onClick={startNewGame}
//                className="bg-[#0077FF] hover:bg-blue-800 px-5 py-2 mt-4 rounded-lg text-white font-semibold shadow-md"
//              >
//                New Game
//              </button>
//            </div>           
//           )}

//           { !gameOver && !gameEnded && !timerdone && !disconnectWinner && (
//             <button
//             onClick={handleLeaveGame}
//             className="bg-red-600 hover:bg-red-700 text-white font-bold px-4 py-2 rounded-lg shadow-md mt-4"
//           >
//             Leave Game
//           </button>            
//           )}

//         </div> 
//       )}
//     </div>
//   )
// }

// export default RemoteGame


import React, { useState, useEffect, useRef } from "react";
import socket from "../../Chat/Frontend/services/socket";
import Choose from "./Choose";
import { useLocation, useNavigate } from "react-router-dom";
import Board from "./Board";
import triggerFireworks from "./confetti";

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
  const [currentUser, setCurrentUser] = useState<string>("");
  const [mySymbol, setMySymbol] = useState<"X" | "O" | null>(null);
  const [waitingForPlayer, setWaitingForPlayer] = useState<boolean>(false);
  const [disconnectWinner, setDisconnectWinner] = useState<string | null>(null);
  const [timerdone, setTimerdone] = useState<boolean>(false);
  const [loser, setLoser] = useState<string>("");
  const [gameEnded, setGameEnded] = useState<boolean>(false);

  const currentUserRef = useRef<string>("");
  const hasJoinedGameRef = useRef<boolean>(false);
  const gameEndedRef = useRef<boolean>(gameEnded);

  const location = useLocation();
  const navigate = useNavigate();

  // Sync ref with state
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
      }
    };
  }, []);

  function handlePlay(index: number) {
    if (!gameEnded) {
      socket.emit("game:move", {
        index,
        player: currentUser,
      });
    }
  }

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
    hasJoinedGameRef.current = false;
  }

  function startNewGame() {
    resetGameStat();
    socket.emit("leave:game");
  }

  function playAgain() {
    socket.emit("game:restart");
    startNewGame();
  }

  function handleLeaveGame() {
    socket.emit("leave:game");
    hasJoinedGameRef.current = false;
    startNewGame();
  }

  // Setup all socket listeners only once
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
    };

    const onGameError = ({ message }: { message: string }) => alert(message);

    const onGameWaiting = () => {
      console.log("Waiting for player...");
      hasJoinedGameRef.current = true;
      setWaitingForPlayer(true);
    };

    const onGameMove = ({ squares: newSquares, xIsNext: newXIsNext }: { squares: (string | null)[]; xIsNext: boolean }) => {
      setSquares(newSquares);
      setXIsNext(newXIsNext);
    };

    const onGameRestart = () => {
      setSquares(Array(9).fill(null));
      setXIsNext(true);
      setGameEnded(false);
    };

    const onPlayerDisconnected = ({ message }: { message: string }) => {
      console.log("Player disconnected:", message);
    };

    const onGameWinByDisconnect = ({ winner, loser }: { winner: string; loser: string }) => {
      if (gameEndedRef.current) return;

      setGameEnded(true);
      setDisconnectWinner(winner);
      setLoser(loser);

      if (winner === currentUserRef.current) triggerFireworks();

      setGameStarted(false);
      setMySymbol(null);
      hasJoinedGameRef.current = false;
    };

    const onGameTimeout = ({ loser, winner, message }: { loser: string; winner: string; message: string }) => {
      if (gameEndedRef.current) return;

      console.log("Game timeout occurred");
      setGameEnded(true);
      setTimerdone(true);
      setLoser(loser);

      if (winner === currentUserRef.current) triggerFireworks();

      setGameStarted(false);
      setMySymbol(null);
      setSquares(Array(9).fill(null));
      hasJoinedGameRef.current = false;
    };

    socket.on("game:start", onGameStart);
    socket.on("game:error", onGameError);
    socket.on("game:waiting", onGameWaiting);
    socket.on("game:move", onGameMove);
    socket.on("game:restart", onGameRestart);
    socket.on("player:disconnected", onPlayerDisconnected);
    socket.on("game:win-by-disconnect", onGameWinByDisconnect);
    socket.on("game:timeout", onGameTimeout);

    return () => {
      socket.off("game:start", onGameStart);
      socket.off("game:error", onGameError);
      socket.off("game:waiting", onGameWaiting);
      socket.off("game:move", onGameMove);
      socket.off("game:restart", onGameRestart);
      socket.off("player:disconnected", onPlayerDisconnected);
      socket.off("game:win-by-disconnect", onGameWinByDisconnect);
      socket.off("game:timeout", onGameTimeout);
    };
  }, []);

  useEffect(() => {
    if (!winner || gameEnded) return;

    setGameEnded(true);

    const winnerName = winner === "X" ? playerXName : playerOName;
    const loserName = winner === "X" ? playerOName : playerXName;

    if (winnerName === currentUserRef.current) {
      triggerFireworks();
    }

    setLoser(loserName);
    setGameStarted(false);
    setMySymbol(null);
    hasJoinedGameRef.current = false;
  }, [winner]);

  return (
    <div className="h-full w-full flex items-center justify-center bg-[#222831] p-4">
      {!gameStarted && !usersJoin && !timerdone ? (
        <div className="flex flex-cols items-center space-x-4">
          {waitingForPlayer ? (
            <div className="bg-[#393E46] rounded-xl shadow-lg p-8 max-w-md w-full text-white text-center">
              <h2 className="text-2xl font-bold mb-4">⏳ Waiting for Player</h2>
              <p className="text-gray-300">Looking for another player to join...</p>
              <div className="mt-4">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto" />
              </div>
              <button
                onClick={handleLeaveGame}
                className="bg-red-600 hover:bg-red-700 text-white font-bold px-4 py-2 rounded-lg shadow-md mt-4"
              >
                Cancel
              </button>
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
          <h1 className="text-5xl font-extrabold text-white mb-6">Tic Tac Toe</h1>

          <div className="bg-[#393E46] p-4 rounded-xl shadow-md w-full text-white flex justify-around">
            <div className={`text-center p-2 rounded-xl shadow-md ${mySymbol === "X" ? "bg-blue-600 w-1/3" : ""} `}>
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

          {disconnectWinner && !gameOver && !timerdone && (
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
          )}

          {timerdone && loser === currentUserRef.current && (
            <div className="text-center mt-6">
              <p className="text-2xl font-bold text-red-400"> You lost! Time's up.</p>
              <button
                onClick={startNewGame}
                className="bg-[#0077FF] hover:bg-blue-800 px-5 py-2 mt-4 rounded-lg text-white font-semibold shadow-md"
              >
                Go back
              </button>
            </div>
          )}

          {timerdone && loser !== currentUserRef.current && (
            <div className="text-center mt-6">
            <p className="text-2xl font-bold text-green-400"> You win! Opponent timed out.</p>
            <button onClick={startNewGame} className="bg-[#0077FF] hover:bg-blue-800 px-5 py-2 mt-4 rounded-lg text-white font-semibold shadow-md" >
            Go back
            </button>
            </div>
          )}
                {gameOver && gameEnded && loser !== currentUserRef.current && (
        <div className="text-center mt-6">
          <p className="text-2xl font-bold text-green-400"> You win! </p>
          <button
            onClick={startNewGame}
            className="bg-[#0077FF] hover:bg-blue-800 px-5 py-2 mt-4 rounded-lg text-white font-semibold shadow-md"
          >
            Go back
          </button>
        </div>
      )}

      {gameOver && gameEnded && loser === currentUserRef.current && (
        <div className="text-center mt-6">
          <p className="text-2xl font-bold text-red-400"> You lost! </p>
          <button
            onClick={startNewGame}
            className="bg-[#0077FF] hover:bg-blue-800 px-5 py-2 mt-4 rounded-lg text-white font-semibold shadow-md"
          >
            Go back
          </button>
        </div>
      )}

      {gameOver && !timerdone && !gameEnded && (
        <div className="flex gap-4 mt-6">
          <button
            onClick={playAgain}
            className="bg-green-600 hover:bg-green-700 px-5 py-2 rounded-lg text-white font-semibold shadow-md"
          >
            Play Again
          </button>
          <button
            onClick={startNewGame}
            className="bg-[#0077FF] hover:bg-blue-800 px-5 py-2 mt-4 rounded-lg text-white font-semibold shadow-md"
          >
            New Game
          </button>
        </div>
      )}

      {!gameOver && !gameEnded && !timerdone && !disconnectWinner && (
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
