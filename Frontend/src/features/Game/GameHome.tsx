import React from 'react';
import Subtract from '../Assets/Subtract.svg';
import ping_pong from '../Assets/ping-pong.svg';
import tic_tac from '../Assets/tic-tac-toe-game.svg';
import { Link } from 'react-router-dom';

const GameHome: React.FC = () => {
  return (
    <div className="w-full h-full flex items-center justify-center gap-44 bg-[#222831] rounded-2xl max-lg:w-full max-lg:h-[91%]">

      <div className='flex flex-col items-center justify-between bg-[#393E46] size-[500px] rounded-2xl p-20 transition duration-150 ease-in-out hover:scale-105 hover:shadow-lg' style={{ backgroundImage: `url(${Subtract})` }}>
        <img src={ping_pong} alt="Ping Pong" className="size-[50%]" />
        <Link to="ping-pong" className="text-white bg-[#0077FF] rounded-2xl p-2 text-2xl font-russo m-10 text-center">
          Ping Pong
        </Link>
      </div>

      <div className='flex flex-col items-center justify-between bg-[#393E46] size-[500px] rounded-2xl p-20 transition duration-150 ease-in-out hover:scale-105 hover:shadow-lg' style={{ backgroundImage: `url(${Subtract})` }}>
        <img src={tic_tac} alt="Tic Tac Toe" className="size-[50%]" />
        <Link to="tic-tac-toe" className="text-white bg-[#0077FF] rounded-2xl p-2 text-2xl font-russo m-10 text-center">
          Tic Tac Toe
        </Link>
      </div>

    </div>
  );
};


export default GameHome;
