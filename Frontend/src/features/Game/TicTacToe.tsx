import React from 'react';
import Subtract from '../Assets/Subtract.svg';
import f_logo from '../Assets/local.svg'
import s_logo from '../Assets/tournament.svg'
import t_logo from '../Assets/remote.svg'
import { Link, Outlet } from 'react-router-dom';

const TicTacToe: React.FC = () => {
  return (
    <div className="w-full h-full flex items-center justify-center gap-28 bg-[#222831] rounded-2xl max-lg:w-full max-lg:h-[91%]">


      <div className='flex flex-col items-center justify-between bg-[#393E46] size-[500px] rounded-2xl p-20 transition duration-150 ease-in-out hover:scale-105 hover:shadow-lg' style={{ backgroundImage: `url(${Subtract})` }}>
        <img src={f_logo} alt="Tournaments" className="size-[50%]" />
        <Link to="local-game" className="text-white bg-[#0077FF] rounded-2xl p-2 text-2xl font-russo m-10 text-center">
        Local
        </Link>
      </div>


      <div className='flex flex-col items-center justify-between bg-[#393E46] size-[500px] rounded-2xl p-20 transition duration-150 ease-in-out hover:scale-105 hover:shadow-lg' style={{ backgroundImage: `url(${Subtract})` }}>
        <img src={t_logo} alt="Tournaments" className="size-[50%]" />
        <button className=" text-white bg-[#0077FF] rounded-2xl p-2 text-2xl font-russo m-10 " >Remote</button>
      </div>
      {/* <Outlet /> */}
    </div>
  );
};

export default TicTacToe;
