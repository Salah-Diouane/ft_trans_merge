import React, { JSX, useState } from 'react';

type SquareProps = {
  value: string | null;
  onSquareClick: () => void;
};

function Square({ value, onSquareClick }: SquareProps) {
  return (
    <button
      className="bg-gray-700 text-white text-3xl font-bold rounded-lg shadow-md hover:bg-gray-600 transition duration-200 flex items-center justify-center h-20 sm:h-24"
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
  disabled: boolean
};

function Board({ xIsNext, squares, onPlay, disabled }: BoardProps) {
  function handleClick(i: number) {
    if (disabled)
        return 
    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? 'X' : 'O';
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  const isBoardFull = squares.every((square) => square !== null);

  let status;
  if (winner) {
    status = (
      <p className="text-green-400 font-bold text-xl">
        Winner: {winner}
      </p>
    );
  } else if (isBoardFull) {
    status = (
      <p className="text-yellow-400 font-semibold text-xl">
        It's a draw!
      </p>
    );
  } else {
    status = (
      <p className="text-gray-300 font-semibold text-xl">
        Next player: <span className="text-blue-400">{xIsNext ? 'X' : 'O'}</span>
      </p>
    );
  }

  return (
    <>
      <div className="mb-6">{status}</div>
      <div className="bg-gray-800 rounded-2xl shadow-lg p-6 grid grid-cols-3 gap-4 w-72 sm:w-96">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}

type RenderGameProps = {
    xIsNext: boolean;
    squares: (string | null)[];
    onPlay: (nextSquares: (string | null)[]) => void;
    winner: string | null;
    isDraw : boolean;
    gameStarted : boolean;
  };

function RenderGame({ xIsNext, squares, onPlay, winner, isDraw, gameStarted}: RenderGameProps){
    return (
    <div className="flex flex-col items-center mr-8">
        <h1 className="text-4xl font-extrabold text-white mb-8 tracking-wide">
        Tic Tac Toe
        </h1>
        {/* <Board xIsNext={xIsNext} squares={squares} onPlay={onPlay} /> */}
        <Board xIsNext={xIsNext} squares={squares} onPlay={onPlay} disabled={!gameStarted} />
    </div>
    // {(winner || isDraw) && (
    //     <button className='bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-md transition' onClick={replayGame}> Restart Game </button>
    // )
    // }
    );
}
// function Choose() {
//     return (
//         <div className='bg-white h-[10%] w-[40%] mb-56'>
//             <h1 className='text-center bg-green-700'>X or O</h1>
//             <div className='flex flex-row gap-x-96  items-center justify-center'>
//                 <button className='bg-amber-700 size-11'>X</button>
//                 <button className='bg-yellow-300 size-11'>O</button>
//             </div>
//         </div>
//     )
// }

type DisplayStatProps = {
    moves: JSX.Element[];
    id: number
  };

function DisplayStat({moves, id} : DisplayStatProps){
    return(
        <div className="flex flex-col items-start w-72 sm:w-96">
            <h1 className='ttext-center bg-slate-50'>Player {id}</h1>
            <ol className="space-y-3">{moves}</ol>
        </div> 
    )
}

// const LocalGame: React.FC = () => {
//   const [xIsNext, setXIsNext] = useState(true)
//   const [history, setHistory] = useState<(string | null)[][]>([Array(9).fill(null)])
//   const [currentMove, setCurrentMove] = useState(0)
//   const currentSquares = history[currentMove]

//   function handlePlay(nextSquares: (string | null)[]) {
//     const nextHistory = [...history.slice(0, currentMove + 1), nextSquares]
//     setHistory(nextHistory)
//     setCurrentMove(nextHistory.length - 1)
//     setXIsNext(!xIsNext)
//   }

//   function jumpTo(move: number) {
//     setCurrentMove(move);
//     setXIsNext(move % 2 === 0);
//   }

//   const winner = calculateWinner(currentSquares);
//   const isDraw = currentSquares.every((square) => square !== null)
//   console.log(winner)
//   console.log("jfdsfhdgsfh")
// //   const moves = history.map((id, move) => {
// //     const description = move === 0 ? 'Go to game start' : `Go to move #${move}`;
// //     return (
// //       <li key={move}>
// //         <button
// //           className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-md transition w-full"
// //           onClick={() => jumpTo(move)}
// //         >
// //           {description}
// //         </button>
// //       </li>
// //     );
// //   });
// const movesPlayer1 = history
//   .map((_, move) => move)
//   .filter(move => move % 2 === 0)  
//   .map(move => {
//     const description = move === 0 ? 'Go to game start' : `Go to move #${move}`;
//     return (
//       <li key={move}>
//         <button
//           className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-md transition w-full"
//           onClick={() => jumpTo(move)}
//         >
//           {description}
//         </button>
//       </li>
//     );
//   });

// const movesPlayer2 = history
//   .map((_, move) => move)
//   .filter(move => move % 2 !== 0)  
//   .map(move => {
//     const description = `Go to move #${move}`;
//     return (
//       <li key={move}>
//         <button
//           className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg shadow-md transition w-full"
//           onClick={() => jumpTo(move)}
//         >
//           {description}
//         </button>
//       </li>
//     );
//   });


//  function replayGame(){
//     setHistory([Array(9).fill(null)])
//     setCurrentMove(0)
//     setXIsNext(true)
//  }



//   return (
//     <div className="flex flex-col items-center justify-center  h-full w-full bg-gradient-to-tr from-gray-800 via-gray-900 to-black">
//         {/* main componant*/}
//         <Choose />
 
//         <DisplayStat moves={movesPlayer1} id={1}/>
//         <DisplayStat moves={movesPlayer2} id={2}/>
//         <RenderGame xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} winner={winner} isDraw={isDraw} />
//       {/* <div className="w-72 sm:w-96">
//         <ol className="space-y-3">{moves}</ol>
//       </div> */}
//     </div>
//   );
// };

// export default LocalGame;



// --- Your existing Square, Board, calculateWinner, RenderGame, DisplayStat components ---

function Choose({ onChoose }: { onChoose: (choice: 'X' | 'O') => void }) {
  return (
    <div className='bg-white h-[10%] w-[40%] mb-10 flex flex-col items-center justify-center rounded-md shadow-md'>
      <h1 className='text-center bg-green-700 text-white px-4 py-2 rounded-md mb-4'>Choose X or O</h1>
      <div className='flex gap-10'>
        <button
          onClick={() => onChoose('X')}
          className='bg-amber-700 px-6 py-3 rounded-md text-white font-bold hover:bg-amber-800'
        >
          X
        </button>
        <button
          onClick={() => onChoose('O')}
          className='bg-yellow-300 px-6 py-3 rounded-md text-black font-bold hover:bg-yellow-400'
        >
          O
        </button>
      </div>
    </div>
  );
}

// const LocalGame: React.FC = () => {
//   const [playerChoice, setPlayerChoice] = useState<'X' | 'O' | null>(null);
//   const [gameStarted, setGameStarted] = useState(false);

//   const [xIsNext, setXIsNext] = useState(true);
//   const [history, setHistory] = useState<(string | null)[][]>([Array(9).fill(null)]);
//   const [currentMove, setCurrentMove] = useState(0);
//   const currentSquares = history[currentMove];

//   function handlePlay(nextSquares: (string | null)[]) {
//     const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
//     setHistory(nextHistory);
//     setCurrentMove(nextHistory.length - 1);
//     setXIsNext(!xIsNext);
//   }

//   function jumpTo(move: number) {
//     setCurrentMove(move);
//     setXIsNext(move % 2 === 0);
//   }

//   function replayGame() {
//     setHistory([Array(9).fill(null)]);
//     setCurrentMove(0);
//     setXIsNext(true);
//   }

//   const winner = calculateWinner(currentSquares);
//   const isDraw = currentSquares.every((square) => square !== null);

//   // Moves split by player
//   const movesPlayer1 = history
//     .map((_, move) => move)
//     .filter((move) => move % 2 === 0)
//     .map((move) => {
//       const description = move === 0 ? 'Go to game start' : `Go to move #${move}`;
//       return (
//         <li key={move}>
//           <button
//             className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-md transition w-full"
//             onClick={() => jumpTo(move)}
//           >
//             {description}
//           </button>
//         </li>
//       );
//     });

//   const movesPlayer2 = history
//     .map((_, move) => move)
//     .filter((move) => move % 2 !== 0)
//     .map((move) => {
//       const description = `Go to move #${move}`;
//       return (
//         <li key={move}>
//           <button
//             className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg shadow-md transition w-full"
//             onClick={() => jumpTo(move)}
//           >
//             {description}
//           </button>
//         </li>
//       );
//     });

//   // START BUTTON HANDLER
//   function startGame() {
//     setGameStarted(true);
//     replayGame();
//   }

//   if (!playerChoice) {
//     return <Choose onChoose={setPlayerChoice} />;
//   }

//   if (!gameStarted) {
//     return (
//       <div className="flex flex-col items-center justify-center h-full w-full bg-gray-900 text-white">
//         <h2 className="text-2xl mb-6">You chose: {playerChoice}</h2>
//         <button
//           onClick={startGame}
//           className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md"
//         >
//           Start Game
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div className="flex flex-row h-full w-full bg-gradient-to-tr from-gray-800 via-gray-900 to-black p-6 gap-4">
//       <DisplayStat moves={movesPlayer1} id={1} />
//       <div className="flex flex-col items-center">
//         <RenderGame xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} winner={winner} isDraw={isDraw} />
//         {(winner || isDraw) && (
//           <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-md transition mt-4" onClick={replayGame} >
//             Restart Game
//           </button>
//         )}
//       </div>

//       <DisplayStat moves={movesPlayer2} id={2} />
//     </div>
//   );
// };

// export default LocalGame;



const LocalGame: React.FC = () => {
    const [playerChoice, setPlayerChoice] = useState<'X' | 'O' | null>(null);
    const [gameStarted, setGameStarted] = useState(false);
  
    const [xIsNext, setXIsNext] = useState(true);
    const [history, setHistory] = useState<(string | null)[][]>([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const currentSquares = history[currentMove];
  
    function handlePlay(nextSquares: (string | null)[]) {
      const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
      setHistory(nextHistory);
      setCurrentMove(nextHistory.length - 1);
      setXIsNext(!xIsNext);
    }
  
    function jumpTo(move: number) {
      setCurrentMove(move);
      setXIsNext(move % 2 === 0);
    }
  
    function replayGame() {
      setHistory([Array(9).fill(null)]);
      setCurrentMove(0);
      setXIsNext(true);
      setGameStarted(false);
      setPlayerChoice(null);
    }
  
    // Prepare moves but only show if gameStarted === true
    const movesPlayer1 = gameStarted
      ? history
          .map((_, move) => move)
          .filter((move) => move % 2 === 0)
          .map((move) => {
            const description = move === 0 ? 'Go to game start' : `Go to move #${move}`;
            return (
              <li key={move}>
                <button
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-md transition w-full"
                  onClick={() => jumpTo(move)}
                >
                  {description}
                </button>
              </li>
            );
          })
      : [];
  
    const movesPlayer2 = gameStarted
      ? history
          .map((_, move) => move)
          .filter((move) => move % 2 !== 0)
          .map((move) => {
            const description = `Go to move #${move}`;
            return (
              <li key={move}>
                <button
                  className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg shadow-md transition w-full"
                  onClick={() => jumpTo(move)}
                >
                  {description}
                </button>
              </li>
            );
          })
      : [];
  
    return (
      <div className="flex flex-col items-center justify-center h-full w-full bg-gradient-to-tr from-gray-800 via-gray-900 to-black p-8">
        {!playerChoice && (
          <Choose
            onChoose={(choice) => {
              setPlayerChoice(choice);
              setHistory([Array(9).fill(null)]);
              setCurrentMove(0);
              setXIsNext(choice === 'X');
              setGameStarted(false);
            }}
          />
        )}
  
        {playerChoice && !gameStarted && (
          <div className="flex flex-col items-center space-y-4">
            <p className="text-white text-xl">You chose: {playerChoice}</p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-md transition" onClick={() => setGameStarted(true)} >
              Start Game
            </button>
            {/* xIsNext, squares, onPlay, winner, isDraw, gameStarted */}
            <RenderGame xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} winner={null} isDraw={false} gameStarted={false}/>
          </div>
        )}
  
        {gameStarted && (
          <div className="flex flex-row items-start gap-8 mt-8">
            <DisplayStat moves={movesPlayer1} id={1} />
            <RenderGame xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} winner={null} isDraw={false} gameStarted={true}/>
            <DisplayStat moves={movesPlayer2} id={2} />
          </div>
        )}
  
        {(playerChoice || gameStarted) && (
          <button
            className="mt-8 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg shadow-md transition"
            onClick={replayGame}
          >
            Reset Game
          </button>
        )}
      </div>
    );
  };
  export default LocalGame;