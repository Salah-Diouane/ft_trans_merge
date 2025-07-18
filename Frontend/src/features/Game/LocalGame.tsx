import React, { useState } from 'react';

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
  playerXName: string;
  playerOName: string;
  gameStarted: boolean;
};

function Board({ xIsNext, squares, onPlay, playerXName, playerOName, gameStarted }: BoardProps) {

  function handleClick(i: number) {
    if (!gameStarted || calculateWinner(squares) || squares[i]) {
      return;
    }

    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? 'X' : 'O';
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  const isBoardFull = squares.every((square) => square !== null);
  const currentPlayerName = xIsNext ? playerXName : playerOName;

  let status;
  if (winner) {
    const winnerName = winner === 'X' ? playerXName : playerOName;
    status = (
      <div className="text-center">
        <p className="text-green-400 font-bold text-2xl mb-2">🎉 Winner!</p>
        <p className="text-white text-xl">{winnerName} ({winner}) wins!</p>
      </div>
    );
  } else if (isBoardFull) {
    status = (
      <p className="text-yellow-400 font-semibold text-xl text-center">
        🤝 It's a draw!
      </p>
    );
  } else if (gameStarted) {
    status = (
      <p className="text-gray-300 font-semibold text-xl text-center">
        Next player: <span className="text-blue-400">{currentPlayerName} ({xIsNext ? 'X' : 'O'})</span>
      </p>
    );
  } else {
    status = (
      <p className="text-gray-400 font-semibold text-xl text-center">
        Game ready to start!
      </p>
    );
  }

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl font-extrabold text-white mb-8 tracking-wide">
        Tic Tac Toe
      </h1>
      
      <div className="mb-6 h-20 flex items-center">{status}</div>
      
      <div className="bg-gray-800 rounded-2xl shadow-lg p-6 grid grid-cols-3 gap-4 w-72 sm:w-96">
        {squares.map((square, index) => (
          <Square key={index} value={square} onSquareClick={() => handleClick(index)} />
        ))}
      </div>
    </div>
  );
}

type ChooseProps = {
  onChoose: (playerName: string, choice: 'X' | 'O') => void;
};

function Choose({ onChoose }: ChooseProps) {
  const [name, setName] = useState('');

  return (
    <div className='bg-white rounded-lg shadow-lg p-8 max-w-md mx-auto'>
      <h2 className='text-2xl font-bold text-center text-gray-800 mb-6'>
        Welcome to Tic Tac Toe!
      </h2>
      
      <div className='mb-6'>
        <label className='block text-gray-700 text-sm font-bold mb-2'>
          Enter your name:
        </label>
        <input
          type="text"
          placeholder='Your name'
          value={name}
          onChange={(e) => setName(e.target.value)}  
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className='mb-4'>
        <p className='text-gray-700 text-center mb-4'>Choose your symbol:</p>
        <div className='flex gap-4 justify-center'>
          <button
            onClick={() => onChoose(name || 'Player', 'X')}
            className='bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-md text-white font-bold transition duration-200'
          >
            X (goes first)
          </button>
          <button
            onClick={() => onChoose(name || 'Player', 'O')}
            className='bg-green-600 hover:bg-green-700 px-8 py-3 rounded-md text-white font-bold transition duration-200'
          >
            O (goes second)
          </button>
        </div>
      </div>
      
      {/* <p className='text-sm text-gray-600 text-center'>
        You'll play against "Computer" (simple AI)
      </p> */}
    </div>
  );
}

const LocalGame: React.FC = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [playerXName, setPlayerXName] = useState('');
  const [playerOName, setPlayerOName] = useState('');
  const [squares, setSquares] = useState<(string | null)[]>(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  function handlePlay(nextSquares: (string | null)[]) {
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  function startNewGame() {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
    setGameStarted(false);
    setPlayerXName('');
    setPlayerOName('');
  }

  function playAgain() {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
    setGameStarted(true);
  }

  const winner = calculateWinner(squares);
  const isDraw = squares.every((sq) => sq !== null) && !winner;
  const gameOver = winner || isDraw;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-gradient-to-tr from-gray-800 via-gray-900 to-black p-8">
      {!gameStarted && (
        <Choose
          onChoose={(playerName, choice) => {
            if (choice === 'X') {
              setPlayerXName(playerName);
              setPlayerOName('Computer');
            } else {
              setPlayerXName('Computer');
              setPlayerOName(playerName);
            }
            setGameStarted(true);
            setXIsNext(true);
          }}
        />
      )}

      {gameStarted && (
        <div className="flex flex-col items-center space-y-6">
          <div className="bg-gray-800 rounded-lg p-4 mb-4">
            <div className="flex justify-center space-x-8 text-white">
              <div className="text-center">
                <p className="font-bold text-lg">{playerXName}</p>
                <p className="text-blue-400">Playing as X</p>
              </div>
              <div className="text-center">
                <p className="font-bold text-lg">{playerOName}</p>
                <p className="text-green-400">Playing as O</p>
              </div>
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
            <div className="flex flex-col items-center space-y-4">
              <div className="flex space-x-4">
                <button
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg shadow-md transition"
                  onClick={playAgain}
                >
                  Play Again
                </button>
                <button
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-md transition"
                  onClick={startNewGame}
                >
                  New Game
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default LocalGame;