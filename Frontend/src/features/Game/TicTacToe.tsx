import React from 'react';
import Subtract from '../Assets/Subtract.svg';
import f_logo from '../Assets/local.svg'
import s_logo from '../Assets/tournament.svg'
import t_logo from '../Assets/remote.svg'
const TicTacToe: React.FC = () => {
  return (
    <div className="w-full h-full flex items-center justify-center gap-44 bg-[#222831] rounded-2xl max-lg:w-full max-lg:h-[91%]">

      {/* <div className='flex flex-col items-center justify-between bg-[#393E46] size-[500px] rounded-2xl p-20' style={{ backgroundImage: `url(${Subtract})` }}>
        <img src={s_logo} alt="Tournaments" className="size-[50%]" />
        <p className=" text-[#0077FF] text-2xl font-russo pb-10" >Tournements</p>
      </div> */}

      <div className='flex flex-col items-center justify-between bg-[#393E46] size-[500px] rounded-2xl p-20 ' style={{ backgroundImage: `url(${Subtract})` }}>
        <img src={f_logo} alt="Tournaments" className="size-[50%]" />
        <button className=" text-white bg-[#0077FF] rounded-2xl p-2 text-2xl font-russo m-10 " >Local</button>
      </div>

      <div className='flex flex-col items-center justify-between bg-[#393E46] size-[500px] rounded-2xl p-20' style={{ backgroundImage: `url(${Subtract})` }}>
        <img src={t_logo} alt="Tournaments" className="size-[50%]" />
        <button className=" text-white bg-[#0077FF] rounded-2xl p-2 text-2xl font-russo m-10 " >Remote</button>
      </div>

    </div>
  );
};

export default TicTacToe;
