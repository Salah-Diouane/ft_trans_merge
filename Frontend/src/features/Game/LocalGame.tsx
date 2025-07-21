// import React, { useState } from 'react';

// type SquareProps = {
//   value: string | null;
//   onSquareClick: () => void;
// };

// function Square({ value, onSquareClick }: SquareProps) {
//   return (
//     <button
//       className={`bg-gray-700 text-white text-3xl font-bold rounded-lg shadow-md hover:bg-gray-600 transition-all duration-300 flex items-center justify-center h-20 sm:h-24 hover:scale-105 ${
//         value ? 'animate-pulse' : ''
//       }`}
//       onClick={onSquareClick}
//     >
//       {value}
//     </button>
//   );
// }

// function calculateWinner(squares: (string | null)[]) {
//   const lines = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6],
//   ];

//   for (let i = 0; i < lines.length; i++) {
//     const [a, b, c] = lines[i];
//     if (
//       squares[a] &&
//       squares[a] === squares[b] &&
//       squares[a] === squares[c]
//     ) {
//       return squares[a];
//     }
//   }
//   return null;
// }

// type BoardProps = {
//   xIsNext: boolean;
//   squares: (string | null)[];
//   onPlay: (nextSquares: (string | null)[]) => void;
//   playerXName: string;
//   playerOName: string;
//   gameStarted: boolean;
// };

// function Board({ xIsNext, squares, onPlay, playerXName, playerOName, gameStarted }: BoardProps) {
//   function handleClick(i: number) {
//     if (!gameStarted || calculateWinner(squares) || squares[i]) {
//       return;
//     }

//     const nextSquares = squares.slice();
//     nextSquares[i] = xIsNext ? 'X' : 'O';
//     onPlay(nextSquares);
//   }

//   const winner = calculateWinner(squares);
//   const isBoardFull = squares.every((square) => square !== null);
//   const currentPlayerName = xIsNext ? playerXName : playerOName;
//   const gameOver = winner || isBoardFull;

//   // Animation classes based on game state
//   let boardAnimation = '';
//   let statusAnimation = '';
  
//   if (winner) {
//     boardAnimation = 'animate-pulse';
//     statusAnimation = 'animate-bounce';
//   } else if (isBoardFull) {
//     boardAnimation = 'animate-pulse';
//     statusAnimation = 'animate-pulse';
//   }

//   let status;
//   if (winner) {
//     const winnerName = winner === 'X' ? playerXName : playerOName;
//     status = (
//       <div className={`text-center ${statusAnimation}`}>
//         <p className="text-green-400 font-bold text-2xl mb-2 animate-pulse">🎉 Winner!</p>
//         <p className="text-white text-xl">{winnerName} ({winner}) wins!</p>
//       </div>
//     );
//   } else if (isBoardFull) {
//     status = (
//       <div className={`text-center ${statusAnimation}`}>
//         <p className="text-yellow-400 font-semibold text-xl">🤝 It's a draw!</p>
//       </div>
//     );
//   } else if (gameStarted) {
//     status = (
//       <p className="text-gray-300 font-semibold text-xl text-center">
//         Next player: <span className="text-blue-400">{currentPlayerName} ({xIsNext ? 'X' : 'O'})</span>
//       </p>
//     );
//   } else {
//     status = (
//       <p className="text-gray-400 font-semibold text-xl text-center">
//         Game ready to start!
//       </p>
//     );
//   }

//   return (
//     <div className="flex flex-col items-center">
//       <h1 className="text-4xl font-extrabold text-white mb-8 tracking-wide">
//         Tic Tac Toe
//       </h1>
      
//       <div className="mb-6 h-20 flex items-center">{status}</div>
      
//       <div className={`bg-gray-800 rounded-2xl shadow-lg p-6 grid grid-cols-3 gap-4 w-72 sm:w-96 transition-all duration-500 ${boardAnimation} ${
//         gameOver ? 'scale-105 shadow-2xl' : ''
//       } ${
//         winner ? 'ring-4 ring-green-400 shadow-green-400/50' : ''
//       } ${
//         isBoardFull && !winner ? 'ring-4 ring-yellow-400 shadow-yellow-400/50' : ''
//       }`}>
//         {squares.map((square, index) => (
//           <Square key={index} value={square} onSquareClick={() => handleClick(index)} />
//         ))}
//       </div>
//     </div>
//   );
// }

// type ChooseProps = {
//   onChoose: (playerName: string, choice: 'X' | 'O') => void;
// };

// function Choose({ onChoose }: ChooseProps) {
//   const [name, setName] = useState('');

//   return (
//     <div className='bg-white rounded-lg shadow-lg p-8 max-w-md mx-auto'>
//       <h2 className='text-2xl font-bold text-center text-gray-800 mb-6'>
//         Welcome to Tic Tac Toe!
//       </h2>
      
//       <div className='mb-6'>
//         <label className='block text-gray-700 text-sm font-bold mb-2'>
//           Enter your name:
//         </label>
//         <input
//           type="text"
//           placeholder='Your name'
//           value={name}
//           onChange={(e) => setName(e.target.value)}  
//           className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />
//       </div>

//       <div className='mb-4'>
//         <p className='text-gray-700 text-center mb-4'>Choose your symbol:</p>
//         <div className='flex gap-4 justify-center'>
//           <button
//             onClick={() => onChoose(name || 'Player', 'X')}
//             className='bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-md text-white font-bold transition duration-200'
//           >
//             X (goes first)
//           </button>
//           <button
//             onClick={() => onChoose(name || 'Player', 'O')}
//             className='bg-green-600 hover:bg-green-700 px-8 py-3 rounded-md text-white font-bold transition duration-200'
//           >
//             O (goes second)
//           </button>
//         </div>
//       </div>
      
//       <p className='text-sm text-gray-600 text-center'>
//         You'll play against "Computer" (simple AI)
//       </p>
//     </div>
//   );
// }

// const LocalGame: React.FC = () => {
//   const [gameStarted, setGameStarted] = useState(false);
//   const [playerXName, setPlayerXName] = useState('');
//   const [playerOName, setPlayerOName] = useState('');
//   const [squares, setSquares] = useState<(string | null)[]>(Array(9).fill(null));
//   const [xIsNext, setXIsNext] = useState(true);

//   function handlePlay(nextSquares: (string | null)[]) {
//     setSquares(nextSquares);
//     setXIsNext(!xIsNext);
//   }

//   function startNewGame() {
//     setSquares(Array(9).fill(null));
//     setXIsNext(true);
//     setGameStarted(false);
//     setPlayerXName('');
//     setPlayerOName('');
//   }

//   function playAgain() {
//     setSquares(Array(9).fill(null));
//     setXIsNext(true);
//     setGameStarted(true);
//   }

//   const winner = calculateWinner(squares);
//   const isDraw = squares.every((sq) => sq !== null) && !winner;
//   const gameOver = winner || isDraw;

//   return (
//     <div className="flex flex-col items-center justify-center h-full w-full bg-[#393E46] rounded-2xl p-8">

//       {!gameStarted && (
//         <Choose
//           onChoose={(playerName, choice) => {
//             if (choice === 'X') {
//               setPlayerXName(playerName);
//               setPlayerOName('Computer');
//             } else {
//               setPlayerXName('Computer');
//               setPlayerOName(playerName);
//             }
//             setGameStarted(true);
//             setXIsNext(true);
//           }}
//         />
//       )}

//       {gameStarted && (
//         <div className="flex flex-col items-center space-y-6">
//           <div className="bg-gray-800 rounded-lg p-4 mb-4">
//             <div className="flex justify-center space-x-8 text-white">
//               <div className="text-center">
//                 <p className="font-bold text-lg">{playerXName}</p>
//                 <p className="text-blue-400">Playing as X</p>
//               </div>
//               <div className="text-center">
//                 <p className="font-bold text-lg">{playerOName}</p>
//                 <p className="text-green-400">Playing as O</p>
//               </div>
//             </div>
//           </div>

//           <Board
//             xIsNext={xIsNext}
//             squares={squares}
//             onPlay={handlePlay}
//             playerXName={playerXName}
//             playerOName={playerOName}
//             gameStarted={gameStarted}
//           />

//           {gameOver && (
//             <div className={`flex flex-col items-center space-y-4 ${
//               winner ? 'animate-bounce' : ''
//             }`}>
//               <div className="flex space-x-4">
//                 <button
//                   className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg shadow-md transition-all duration-300 hover:scale-105"
//                   onClick={playAgain}
//                 >
//                   Play Again
//                 </button>
//                 <button
//                   className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-md transition-all duration-300 hover:scale-105"
//                   onClick={startNewGame}
//                 >
//                   New Game
//                 </button>
//               </div>
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default LocalGame;


// import React, { useState } from 'react';

// "use client";

// import confetti from "canvas-confetti";

// import { Button } from "@/components/ui/button";

// export function ConfettiSideCannons() {
//   const handleClick = () => {
//     const end = Date.now() + 3 * 1000; // 3 seconds
//     const colors = ["#a786ff", "#fd8bbc", "#eca184", "#f8deb1"];

//     const frame = () => {
//       if (Date.now() > end) return;

//       confetti({
//         particleCount: 2,
//         angle: 60,
//         spread: 55,
//         startVelocity: 60,
//         origin: { x: 0, y: 0.5 },
//         colors: colors,
//       });
//       confetti({
//         particleCount: 2,
//         angle: 120,
//         spread: 55,
//         startVelocity: 60,
//         origin: { x: 1, y: 0.5 },
//         colors: colors,
//       });

//       requestAnimationFrame(frame);
//     };

//     frame();
//   };

//   return (
//     <div className="relative">
//       <Button onClick={handleClick}>Trigger Side Cannons</Button>
//     </div>
//   );
// }


// type SquareProps = {
//   value: string | null;
//   onSquareClick: () => void;
// };

// function Square({ value, onSquareClick }: SquareProps) {
//   return (
//     <button
//       className={`bg-[#393E46] text-white text-4xl font-mono rounded-xl border-2 border-[#0077FF] shadow-lg  hover:text-white hover:scale-105
//       transition duration-300 ease-in-out flex items-center justify-center h-20 sm:h-24 ${
//         value ? 'animate-pulse' : ''
//       }`}
//       onClick={onSquareClick}
//     >
//       {value}
//     </button>
//   );
// }

// function calculateWinner(squares: (string | null)[]) {
//   const lines = [
//     [0, 1, 2], [3, 4, 5], [6, 7, 8],
//     [0, 3, 6], [1, 4, 7], [2, 5, 8],
//     [0, 4, 8], [2, 4, 6],
//   ];
//   for (let i = 0; i < lines.length; i++) {
//     const [a, b, c] = lines[i];
//     if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
//       return squares[a];
//     }
//   }
//   return null;
// }

// type BoardProps = {
//   xIsNext: boolean;
//   squares: (string | null)[];
//   onPlay: (nextSquares: (string | null)[]) => void;
//   playerXName: string;
//   playerOName: string;
//   gameStarted: boolean;
// };

// function Board({ xIsNext, squares, onPlay, playerXName, playerOName, gameStarted }: BoardProps) {

//   function handleClick(i: number) {
//     if (!gameStarted || calculateWinner(squares) || squares[i])
//         return;
//     const nextSquares = squares.slice();
//     nextSquares[i] = xIsNext ? 'X' : 'O';
//     onPlay(nextSquares);
//   }

//   const winner = calculateWinner(squares);
//   const isBoardFull = squares.every((square) => square !== null);
//   const currentPlayerName = xIsNext ? playerXName : playerOName;
//   const gameOver = winner || isBoardFull;

//   let boardAnimation = '';
//   let statusAnimation = '';

//   if (winner) {
//     boardAnimation = 'animate-pulse';
//     statusAnimation = 'animate-bounce';
//   } else if (isBoardFull) {
//     boardAnimation = 'animate-pulse';
//     statusAnimation = 'animate-pulse';
//   }

//   let status;
//   if (winner) {
//     const winnerName = winner === 'X' ? playerXName : playerOName;
//     status = (
//       <div className={`text-center ${statusAnimation}`}>
//         <p className="text-[#00FF7F] font-bold text-2xl mb-2">🎉 Winner!</p>
//         <ConfettiSideCannons/>
//         <p className="text-white text-xl">{winnerName} ({winner}) wins!</p>
//       </div>
//     );
//   } else if (isBoardFull) {
//     status = (
//       <div className={`text-center ${statusAnimation}`}>
//         <p className="text-yellow-400 text-xl font-bold">🤝 It's a draw!</p>
//       </div>
//     );
//   } else if (gameStarted) {
//     status = (
//       <p className="text-[#0077FF] font-semibold text-xl text-center">
//         Next player: <span className="text-white">{currentPlayerName} ({xIsNext ? 'X' : 'O'})</span>
//       </p>
//     );
//   } 

//   return (
//     <div className="flex flex-col items-center">
//       <h1 className="text-5xl font-extrabold text-white mb-6">Tic Tac Toe</h1>
//       <div className="mb-4">{status}</div>
//       <div className={`bg-[#222831] p-6 rounded-2xl grid grid-cols-3 gap-4 w-72 sm:w-96 animate-none ${
//         gameOver ? 'scale-105 shadow-lg' : ''
//       }`}>
//         {squares.map((square, i) => (
//           <Square key={i} value={square} onSquareClick={() => handleClick(i)} />
//         ))}
//       </div>
      
//     </div>
//   );
// }

// type ChooseProps = {
//   onChoose: (playerName: string, choice: 'X' | 'O') => void;
// };

// function Choose({ onChoose }: ChooseProps) {
//   const [name, setName] = useState('');

//   return (
//     <div className="bg-[#393E46] rounded-xl shadow-lg p-8 max-w-md w-full text-white">
//       <h2 className="text-3xl font-bold text-center mb-6">Welcome!</h2>
//       <div className="mb-4">
//         <label className="block text-sm mb-2">Enter your name:</label>
//         <input
//           type="text"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           className="w-full px-3 py-2 bg-[#222831] text-white border border-[#0077FF] rounded-md focus:outline-none focus:ring-2 focus:ring-[#0077FF]"
//         />
//       </div>
//       <div className="mb-4">
//         <p className="text-center mb-2">Choose your symbol:</p>
//         <div className="flex gap-4 justify-center">
//           <button
//             onClick={() => onChoose(name || 'Player', 'X')}
//             className="bg-[#0077FF] hover:bg-blue-700 text-white font-bold px-6 py-2 rounded-md"
//           >
//             X
//           </button>
//           <button
//             onClick={() => onChoose(name || 'Player', 'O')}
//             className="bg-green-600 hover:bg-green-700 text-white font-bold px-6 py-2 rounded-md"
//           >
//             O
//           </button>
//         </div>
//       </div>
//       <p className="text-xs text-center text-gray-300">You'll play against Computer</p>
//     </div>
//   );
// }

// const LocalGame: React.FC = () => {
//   const [gameStarted, setGameStarted] = useState(false);
//   const [playerXName, setPlayerXName] = useState('');
//   const [playerOName, setPlayerOName] = useState('');
//   const [squares, setSquares] = useState<(string | null)[]>(Array(9).fill(null));
//   const [xIsNext, setXIsNext] = useState(true);

//   const handlePlay = (nextSquares: (string | null)[]) => {
//     setSquares(nextSquares);
//     setXIsNext(!xIsNext);
//   };

//   const startNewGame = () => {
//     setSquares(Array(9).fill(null));
//     setXIsNext(true);
//     setGameStarted(false);
//     setPlayerXName('');
//     setPlayerOName('');
//   };

//   const playAgain = () => {
//     setSquares(Array(9).fill(null));
//     setXIsNext(true);
//     setGameStarted(true);
//   };

//   const winner = calculateWinner(squares);
//   const isDraw = squares.every((sq) => sq !== null) && !winner;
//   const gameOver = winner || isDraw;

//   return (
//     <div className="min-h-screen w-full flex items-center justify-center bg-[#222831] p-4">
//       {!gameStarted ? (
//         <Choose
//           onChoose={(playerName, choice) => {
//             if (choice === 'X') {
//               setPlayerXName(playerName);
//               setPlayerOName('Computer');
//             } else {
//               setPlayerXName('Computer');
//               setPlayerOName(playerName);
//             }
//             setGameStarted(true);
//           }}
//         />
//       ) : (
//         <div className="flex flex-col items-center space-y-6 w-full max-w-2xl">
//           <div className="bg-[#393E46] p-4 rounded-xl shadow-md w-full text-white flex justify-around">
//             <div className="text-center">
//               <p className="font-bold">{playerXName}</p>
//               <p className="text-blue-400">X</p>
//             </div>
//             <div className="text-center">
//               <p className="font-bold">{playerOName}</p>
//               <p className="text-green-400">O</p>
//             </div>
//           </div>

//           <Board
//             xIsNext={xIsNext}
//             squares={squares}
//             onPlay={handlePlay}
//             playerXName={playerXName}
//             playerOName={playerOName}
//             gameStarted={gameStarted}
//           />

//           {gameOver && (
//             <div className="flex gap-4">
//               <button
//                 onClick={playAgain}
//                 className="bg-green-600 hover:bg-green-700 px-5 py-2 rounded-lg text-white font-semibold shadow-md"
//               >
//                 Play Again
//               </button>
//               <button
//                 onClick={startNewGame}
//                 className="bg-[#0077FF] hover:bg-blue-800 px-5 py-2 rounded-lg text-white font-semibold shadow-md"
//               >
//                 New Game
//               </button>
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default LocalGame;






import React, { useState, useEffect } from "react";
import confetti from "canvas-confetti";

// You can remove this import if you don't have your own Button component
// import { Button } from "@/components/ui/button";

function triggerConfetti() {
  const end = Date.now() + 4 * 1000; // 3 seconds
  const colors = ["#a786ff", "#fd8bbc", "#eca184", "#f8deb1"];

  const frame = () => {
    if (Date.now() > end) return;

    confetti({
      particleCount: 2,
      angle: 60,
      spread: 55,
      startVelocity: 60,
      origin: { x: 0, y: 0.5 },
      colors: colors,
    });
    confetti({
      particleCount: 2,
      angle: 120,
      spread: 55,
      startVelocity: 60,
      origin: { x: 1, y: 0.5 },
      colors: colors,
    });

    requestAnimationFrame(frame);
  };

  frame();
}

// Fireworks confetti trigger function
function triggerFireworks() {
  const duration = 5 * 1000;
  const animationEnd = Date.now() + duration;
  const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

  const randomInRange = (min: number, max: number) =>
    Math.random() * (max - min) + min;

  const interval = window.setInterval(() => {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      clearInterval(interval);
      return;
    }

    const particleCount = 50 * (timeLeft / duration);
    confetti({
      ...defaults,
      particleCount,
      origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
    });
    confetti({
      ...defaults,
      particleCount,
      origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
    });
  }, 250);
}

type SquareProps = {
  value: string | null;
  onSquareClick: () => void;
};

function Square({ value, onSquareClick }: SquareProps) {
  return (
    <button
      className={`bg-[#393E46] text-white text-4xl font-mono rounded-xl border-2 border-[#0077FF] shadow-lg  hover:text-white hover:scale-105
      transition duration-300 ease-in-out flex items-center justify-center h-20 sm:h-24 ${
        value ? "animate-pulse" : ""
      }`}
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
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
    if (
      squares[a] &&
      squares[a] === squares[b] &&
      squares[a] === squares[c]
    ) {
      return squares[a];
    }
  }
  return null;
}

type BoardProps = {
  xIsNext: boolean;
  squares: (string | null)[];
  onPlay: (nextSquares: (string | null)[]) => void;
  playerXName: string;
  playerOName: string;
  gameStarted: boolean;
};

function Board({
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
      // triggerConfetti();
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

type ChooseProps = {
  onChoose: (playerName: string, choice: "X" | "O") => void;
};

function Choose({ onChoose }: ChooseProps) {
  const [name, setName] = useState("");

  return (
    <div className="bg-[#393E46] rounded-xl shadow-lg p-8 max-w-md w-full text-white">
      <h2 className="text-3xl font-bold text-center mb-6">Welcome!</h2>
      <div className="mb-4">
        <label className="block text-sm mb-2">Enter your name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-3 py-2 bg-[#222831] text-white border border-[#0077FF] rounded-md focus:outline-none focus:ring-2 focus:ring-[#0077FF]"
        />
      </div>
      <div className="mb-4">
        <p className="text-center mb-2">Choose your symbol:</p>
        <div className="flex gap-4 justify-center">
          <button
            onClick={() => onChoose(name || "Player", "X")}
            className="bg-[#0077FF] hover:bg-blue-700 text-white font-bold px-6 py-2 rounded-md"
          >
            X
          </button>
          <button
            onClick={() => onChoose(name || "Player", "O")}
            className="bg-green-600 hover:bg-green-700 text-white font-bold px-6 py-2 rounded-md"
          >
            O
          </button>
        </div>
      </div>
      <p className="text-xs text-center text-gray-300">
        You'll play against Computer
      </p>
    </div>
  );
}

const LocalGame: React.FC = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [playerXName, setPlayerXName] = useState("");
  const [playerOName, setPlayerOName] = useState("");
  const [squares, setSquares] = useState<(string | null)[]>(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const handlePlay = (nextSquares: (string | null)[]) => {
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  };

  const startNewGame = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
    setGameStarted(false);
    setPlayerXName("");
    setPlayerOName("");
  };

  const playAgain = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
    setGameStarted(true);
  };

  const winner = calculateWinner(squares);
  const isDraw = squares.every((sq) => sq !== null) && !winner;
  const gameOver = winner || isDraw;

  return (
    <div className="h-full w-full flex items-center justify-center bg-[#222831] p-4">
      {!gameStarted ? (
        <Choose
          onChoose={(playerName, choice) => {
            if (choice === "X") {
              setPlayerXName(playerName);
              setPlayerOName("Computer");
            } else {
              setPlayerXName("Computer");
              setPlayerOName(playerName);
            }
            setGameStarted(true);
          }}
        />
      ) : (
        <div className="flex flex-col items-center space-y-6 w-full max-w-2xl">
          <div className="bg-[#393E46] p-4 rounded-xl shadow-md w-full text-white flex justify-around">
            <div className="text-center">
              <p className="font-bold">{playerXName}</p>
              <p className="text-blue-400">X</p>
            </div>
            <div className="text-center">
              <p className="font-bold">{playerOName}</p>
              <p className="text-green-400">O</p>
            </div>
          </div>

          <Board
            xIsNext={xIsNext}
            squares={squares}
            onPlay={handlePlay}
            playerXName={playerXName}
            playerOName={playerOName}
            gameStarted={gameStarted}
          />

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

export default LocalGame;
