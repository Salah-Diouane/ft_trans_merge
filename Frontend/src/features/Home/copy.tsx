import React, { useEffect } from 'react';
import socket from '../Chat/services/socket';
import { MdConstruction } from "react-icons/md";
import profile from "../Assets/me.jpeg"
import other_pic from "../Assets/logo.png"

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

// const WelcomeCard: React.FC = () => {
//   return (
//       <div className='bg-[#393E46]'>

//         <div className='relative w-full h-[20%] bg-[#222831]  rounded-3xl text-[#EEEEEE] overflow-hidden'>
//           <div className='flex flex-col space-y-12 p-4'>
//             <div className=''>
//               <h1 className='font-russo text-6xl text-white'>Welcome Back!</h1>
//               <h2 className='font-russo text-5xl text-white mt-1'>Player</h2>
//             </div>

//             <button className='mt-4 w-fit px-8 py-3 rounded-full bg-[#0077FF] text-white font-bold flex items-center justify-center space-x-2'>
//               <FaPlay className='text-lg' />
//               <span>Play</span>
//             </button>
//           </div>
//           <div className='absolute -bottom-3 right-1/2 transform -translate-x-1/2 bg-[#393E46] rounded-full h-[81%] w-52 overflow-hidden flex items-center justify-center'>
//           </div>
//           <div className='absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-[#393E46] rounded-full h-[81%] w-52 overflow-hidden flex items-center justify-center'>
//             <img src={profile} alt="Player Profile" className='size-44  object-cover rounded-full' />
//           </div>
//           <div className='absolute -bottom-3 left-1/3 transform -translate-x-1/2 bg-[#393E46] rounded-full h-[81%] w-52 overflow-hidden flex items-center justify-center'>
//           </div>

//         </div>
//       </div>
//   );
// };


// const WelcomeCard: React.FC = () => {
//   return (
//     // <div className="relative w-full h-[20%] bg-[#393E46] rounded-3xl text-[#EEEEEE] overflow-hidden">
//     <div className="relative w-full h-[20%] bg-[#393E46] rounded-3xl text-[#EEEEEE] overflow-hidden">

//       {/* Text + Button */}
//       <div className="flex flex-col space-y-12 p-4">
//           <div>
//             <h1 className="font-russo text-6xl text-white">Welcome Back!</h1>
//             <h2 className="font-russo text-5xl text-white mt-1">Player</h2>
//           </div>

//           <button className="mt-4 w-fit px-8 py-3 rounded-full bg-[#0077FF] text-white font-bold flex items-center justify-center space-x-2">
//             <FaPlay className="text-lg" />
//             <span>Play</span>
//           </button>
//       </div>

//       {/* Circles Group    */}

//       <div className='bg-white size-[50%] flex items-center justify-center'>

//         {/* <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex gap-0">
//           <div className="bg-[#393E46] rounded-full h-44 w-44 flex items-center justify-center"></div>
//           <div className="bg-[#393E46] rounded-full h-44 w-44 flex items-center justify-center overflow-hidden">
//             <img
//               src={profile}
//               alt="Player Profile"
//               className="size-40 object-cover rounded-full"
//             />
//           </div>
//           <div className="bg-[#393E46] rounded-full h-44 w-44 flex items-center justify-center"></div>
//         </div> */}
//         <p className='size-56'> heehhehhheheheh</p>

//       </div>

//     </div>

//   );
// };


const WelcomeCard: React.FC = () => {
  return (
    <div className="relative w-full h-[20%] bg-[#393E46] rounded-3xl text-[#EEEEEE] overflow-hidden">
      
      {/* Text + Button */}
      <div className="flex flex-col space-y-12 p-4">
        <div>
          <h1 className="font-russo text-6xl text-white">Welcome Back!</h1>
          <h2 className="font-russo text-5xl text-white mt-1">Player</h2>
        </div>

        <button className="mt-4 w-fit px-8 py-3 rounded-full bg-[#0077FF] text-white font-bold flex items-center justify-center space-x-2">
          <FaPlay className="text-lg" />
          <span>Play</span>
        </button>
      </div>

      {/* Circles Group (centered at bottom) */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-4">
        <div className="bg-[#393E46] rounded-full h-44 w-44 flex items-center justify-center"></div>
        <div className="bg-[#393E46] rounded-full h-44 w-44 flex items-center justify-center overflow-hidden">
          <img
            src={profile}
            alt="Player Profile"
            className="size-40 object-cover rounded-full"
          />
        </div>
        <div className="bg-[#393E46] rounded-full h-44 w-44 flex items-center justify-center"></div>
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
