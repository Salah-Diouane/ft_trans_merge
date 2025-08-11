import React from 'react';
import Subtract from '../Assets/Subtract.svg';
import f_logo from '../Assets/local.svg'
import s_logo from '../Assets/tournament.svg'
import t_logo from '../Assets/remote.svg'
import { Link, Outlet } from 'react-router-dom';

const TicTacToe: React.FC = () => {
  return (
    <div className="w-full h-full flex max-lg:flex-wrap  items-center justify-center gap-16 bg-[#222831] rounded-2xl max-lg:w-full max-lg:h-[91%]">


      <div className='flex flex-col items-center justify-center space-y-12 bg-[#393E46] max-2xl:w-[300px] w-[400px]  rounded-2xl max-lg:m-2 max-lg:p-4 p-20 transition duration-150 ease-in-out hover:scale-105 hover:shadow-lg max-lg:mt-4 max-lg:mb-0 h-[40%] max-xl:h-[300px]' style={{ backgroundImage: `url(${Subtract})` }}>
        <img src={f_logo} alt="Tournaments" className="w-auto max-lg:w-20" />
        <Link to="local-game" className="text-white bg-[#0077FF] rounded-2xl p-2 text-2xl font-russo m-10 text-center">
        Local
        </Link>
      </div>


      <div className='flex flex-col items-center justify-center space-y-12 bg-[#393E46] max-2xl:w-[300px] w-[400px]  rounded-2xl max-lg:m-2 max-lg:p-4 p-20 transition duration-150 ease-in-out hover:scale-105 hover:shadow-lg max-lg:mt-4 max-lg:mb-0 h-[40%] max-xl:h-[300px]' style={{ backgroundImage: `url(${Subtract})` }}>
        <img src={t_logo} alt="Tournaments" className="w-auto max-lg:w-20" />
        <Link to="remote-game" className="text-white bg-[#0077FF] rounded-2xl p-2 text-2xl font-russo m-10 text-center">
        Remote
        </Link>
      </div>
      {/* <Outlet /> */}
    </div>
  );
};

export default TicTacToe;
// w-[280px] rounded-2xl max-lg:m-2 max-lg:p-4 p-20