


import React, { useEffect } from 'react';
import socket from '../Chat/services/socket';
import { MdConstruction } from "react-icons/md";
import profile from "../Assets/me.jpeg"
import other_pic from "../Assets/logo.png"
import '../../styles/index.css'
interface DisplayStatProps {
  color: string;
  stat: string;
}

interface Display_LevelProps {
  name: string,
  level: string | number,
}



const Display_Stat: React.FC<DisplayStatProps> = ({ color, stat }) => {
  return (
    <div className='bg-[#222831] m-2 h-16 rounded-3xl flex  items-center p-2 justify-between'>
      <img src={profile} className='size-12 rounded-3xl ' />
      <p className={`font-russo ${color}`}>6</p>
      <p className={`font-russo ${color}`}>{stat}</p>
      <p className={`font-russo ${color}`}>6</p>
      <img src={profile} className='size-12 rounded-3xl  ' />
    </div>
  )
}

const Display_Level: React.FC<Display_LevelProps> = ({ name, level }) => {
  return (
    <div className='bg-[#222831] m-2 h-16 rounded-3xl flex  items-center p-2 justify-between'>
      <img src={profile} className='size-12 rounded-3xl ' />
      <p className={`font-russo text-white pl-3`} >{name}</p>
      <div className='w-[85%] rounded-lg mr-3 ml-3 bg-[#0077FF]'>
        0
      </div>
      <p className={`font-russo text-white`}>{level}</p>
    </div>
  )
}


import { FaPlay } from "react-icons/fa";

const WelcomeCard: React.FC = () => {
  return (

    <div className='z-10 relative w-full h-[20%]   rounded-3xl text-[#EEEEEE] overflow-hidden before:absolute before:w-[50%]  before:h-full before:left-0 before:bg-[#393E46] before:rounded-br-[30%] 
                        after:absolute after:right-0 after:top-0 after:w-[50%] after:h-full after:bg-[#393E46] after:rounded-bl-[30%] '>

      <div className='relative flex flex-col space-y-12 p-4'>
        <div className=''>
          <h1 className='font-russo text-6xl text-white'>Welcome Back!</h1>
          <h2 className='font-russo text-5xl text-white mt-1'>Player</h2>
        </div>

        <button className='mt-4 w-fit px-8 py-3 rounded-full bg-[#0077FF] text-white font-bold flex items-center justify-center space-x-2'>
          <FaPlay className='text-lg' />
          <span>Play</span>
        </button>
      </div>
      
      <div className='z-20 curved-bottom-image absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-[#222831] rounded-full h-[81%] w-52 overflow-hidden flex items-center justify-center'>
        <img src={profile} alt="Player Profile" className='size-44  object-cover rounded-full' />
      </div>

      <div className='absolute top-0 right-0 z-20 h-full'>


        <svg className='h-full w-auto'  fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M177.359 256.436H128.197L169.058 42.436H218.22L177.359 256.436Z" fill="#222831" />
          <path d="M117.359 256.436H68.1973L109.058 42.436H158.22L117.359 256.436Z" fill="#222831" />
          <path d="M141.687 102.026C142.56 101.151 142.56 100.06 141.687 99.1893L129.03 86.5582L141.687 73.8811C142.56 73.0069 142.56 71.916 141.687 71.0449C140.814 70.1738 139.723 70.1757 138.85 71.05L126.193 83.7271L113.536 71.096C112.663 70.2249 111.572 70.2269 110.699 71.1012C110.263 71.5383 110.044 71.9751 110.044 72.6296C110.044 73.2841 110.263 73.7201 110.699 74.1556L123.356 86.7867L110.699 99.4638C110.263 99.9009 110.044 100.338 110.044 100.992C110.044 101.429 110.263 102.083 110.699 102.518C111.572 103.389 112.663 103.387 113.536 102.513L126.193 89.3996L138.85 102.031C139.723 102.902 141.032 102.899 141.687 102.026Z" fill="#0077FF" />
          <path d="M130.447 134.326C131.402 133.215 130.562 131.202 129.103 131.104L101.103 127.468C100.817 127.352 100.415 127.52 100.012 127.689C99.6099 127.858 99.4087 127.942 99.0902 128.312C98.6545 128.968 98.504 129.741 98.756 130.345L109.593 156.32C109.845 156.924 110.5 157.359 111.272 157.508C111.557 157.625 111.959 157.457 112.362 157.288C112.764 157.119 112.966 157.035 113.284 156.664L130.447 134.326ZM103.924 131.963L124.945 134.74L112.157 151.696L103.924 131.963Z" fill="#0077FF" />
          <path d="M182.001 163.335C178.556 155.08 169.143 151.22 160.892 154.68C152.641 158.141 148.772 167.57 152.216 175.826C155.661 184.081 165.074 187.94 173.325 184.48C181.576 181.02 185.361 171.389 182.001 163.335ZM156.04 174.222C153.436 167.98 156.451 161.038 162.488 158.506C168.727 155.89 175.657 158.898 178.177 164.939C180.781 171.18 177.767 178.123 171.729 180.655C165.49 183.271 158.56 180.263 156.04 174.222Z" fill="#0077FF" />
          <path d="M200.176 119.222L189.339 93.2472C188.919 92.2405 187.778 91.7726 186.772 92.1946L160.811 103.082C159.805 103.504 159.336 104.647 159.756 105.653L170.593 131.628C171.013 132.634 172.154 133.102 173.16 132.68L199.121 121.793C200.127 121.371 200.596 120.228 200.176 119.222ZM173.459 128.296L164.134 105.946L186.271 96.6629L195.597 119.013L173.459 128.296Z" fill="#0077FF" />
        </svg>

      </div>

    </div>
  );
};


const Home: React.FC = () => {

  useEffect(() => {
    if (!socket.connect())
      socket.connect()
  });

  return (
    <div className="w-full h-full flex flex-row  bg-[#222831] p-5">
      <div className='w-[70%]  p-2 space-y-3 overflow-auto'>
        <WelcomeCard />
        <div className=' w-full h-[79%] bg-[#393E46] rounded-3xl text-[#EEEEEE] overflow-auto custom-scroll p-4'>
          <div className='sticky top-0 font-russo p-2 text-2xl size-auto bg-[#393E46]'>LeaderBoard</div>
          <Display_Level name={"salah"} level={"33.34 Lvl"} />
          <Display_Level name={"salah"} level={"15.01 Lvl"} />
          <Display_Level name={"salah"} level={"13.37 Lvl"} />
          <Display_Level name={"salah"} level={"42.42 Lvl"} />
          <Display_Level name={"salah"} level={"54.87 Lvl"} />
          <Display_Level name={"salah"} level={"15.09 Lvl"} />
        </div>
      </div>
      <div className='w-[30%]   p-2 '>
        <div className='h-full  bg-[#393E46]  rounded-3xl text-[#EEEEEE] overflow-auto custom-scroll p-4'>
          <div className='sticky top-0 font-russo p-2 text-2xl size-auto bg-[#393E46]'>History</div>
          <Display_Stat color={"text-[#469CFD]"} stat={"DRAW"} />
          <Display_Stat color={"text-[#F85761]"} stat={"DEFEAT"} />
          <Display_Stat color={"text-[#3AA64B]"} stat={"VICTORY"} />
          <Display_Stat color={"text-[#3AA64B]"} stat={"VICTORY"} />
        </div>
      </div>
    </div>
  );
};

export default Home;
