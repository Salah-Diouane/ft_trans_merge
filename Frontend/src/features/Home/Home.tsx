import React, { useEffect } from 'react';
import socket from '../Chat/services/socket';
import '../../styles/index.css'
import { useStore } from "../../store/store"
import { FaPlay } from "react-icons/fa";

interface DisplayItemProps {
  type: 'level' | 'stat';
  name?: string;
  level?: string | number;
  stat?: string;
  color?: string;
  rank?: number;
}


import { FaCrown, FaMedal, FaTrophy, FaBolt, FaStar, FaGamepad, FaFire, FaChevronRight, } from "react-icons/fa";
import { ShieldHalf } from "lucide-react"
const DisplayItem: React.FC<DisplayItemProps> = ({ type, name, level, stat, color, rank }) => {

  const store = useStore()
  const level_int = level ? parseFloat(level.toString()) : 0;
  const getRankIcon = (rank?: number) => {
    switch (rank) {
      case 1: return <FaCrown className="text-yellow-400 text-lg" />;
      case 2: return <FaMedal className="text-gray-300 text-lg" />;
      case 3: return <FaMedal className="text-amber-600 text-lg" />;
      default: return <span className='text-cyan-200 font-bold text-sm'>{rank}</span>
      // default: return <ShieldHalf className='text-cyan-200 font-bold text-sm' />
    }
  };

  // const getStatIcon = (stat?: string) => {
  //   console.log("stat : ")
  //   console.log(stat)
  //   switch (stat?.toLowerCase()) {
  //     case 'VICTORY': return <FaTrophy className="text-emerald-400 animate-pulse" />;
  //     case 'DEFEAT': return <FaBolt className="text-red-400 animate-pulse" />;
  //     case 'DRAW': return <FaStar className="text-blue-400 animate-spin" />;
  //     default: return <FaGamepad className="text-gray-400" />;
  //   }
  // };
  const getStatElement = (stat?: string, color?: string) => {
    console.log("stat : ", stat);
    switch (stat?.toLowerCase()) {
      case 'victory': 
        return (
          <div className={`px-4 py-2 rounded-full text-sm font-bold ${color} bg-slate-700/30 border border-slate-600/50 backdrop-blur-sm group-hover:bg-[#393E46] group-hover:border-[#0077FF]/50 transition-all duration-300 flex items-center gap-2`}>
            <FaTrophy className="text-emerald-400 animate-pulse" />
            {stat}
          </div>
        );
      case 'defeat': 
        return (
          <div className={`px-4 py-2 rounded-full text-sm font-bold ${color} bg-slate-700/30 border border-slate-600/50 backdrop-blur-sm group-hover:bg-[#393E46] group-hover:border-[#0077FF]/50 transition-all duration-300 flex items-center gap-2`}>
            <FaBolt className="text-red-400 animate-pulse" />
            {stat}
          </div>
        );
      case 'draw': 
        return (
          <div className={`px-4 py-2 rounded-full text-sm font-bold ${color} bg-slate-700/30 border border-slate-600/50 backdrop-blur-sm group-hover:bg-[#393E46] group-hover:border-[#0077FF]/50 transition-all duration-300 flex items-center gap-2`}>
            <FaStar className="text-blue-400 animate-spin" />
            {stat}
          </div>
        );
      default: 
        return (
          <div className={`px-4 py-2 rounded-full text-sm font-bold ${color} bg-slate-700/30 border border-slate-600/50 backdrop-blur-sm group-hover:bg-[#393E46] group-hover:border-[#0077FF]/50 transition-all duration-300 flex items-center gap-2`}>
            <FaGamepad className="text-gray-400" />
            {stat}
          </div>
        );
    }
  };


  return (
    <>
      {type === 'level' && (
        <div className="flex items-center p-4 bg-[#222831] m-2 h-16 rounded-3xl  border border-[#393E46]/50 hover:border-[#0077FF]/50">

          <div className="flex items-center gap-5 w-1/6">
            <div className="relative flex-shrink-0">
              {getRankIcon(rank)}
            </div>
            <img src={store.image_url} className="size-12 rounded-full border-2 border-white" alt="player profile" />
            <div className="h-12 flex items-center">
              <p className="font-russo text-white truncate max-w-40 leading-tight">{name}</p>
            </div>
          </div>

          <div className="flex-1 flex items-center gap-4 ml-4 ">
            <div className="flex-1 h-3 bg-[#5e7396] rounded-full overflow-hidden border border-[#393E46]">
              <div
                className="h-full bg-[#0077FF] rounded-full transition-all duration-500 ease-out shadow-lg shadow-[#0077FF]/30"
                style={{ width: `${Math.min(level_int, 100)}%` }}
              />
            </div>
            <div className="text-right flex items-center space-x-4">
              <p className="font-bold text-[#EEEEEE] text-lg">{level}</p>
              <p className="text-gray-400 text-xs">Level</p>
            </div>
          </div>

        </div>
      )}

      {type === 'stat' && (
        <div className='group bg-[#222831]  m-2 h-16 rounded-3xl flex items-center p-4 justify-between border border-[#393E46]/50 hover:border-[#0077FF]/50 transition-all duration-300 hover:shadow-md'>

          <img
            src={store.image_url}
            className='size-12 rounded-full border-2 border-[#393E46] group-hover:border-[#0077FF] transition-all shadow-md'
            alt="player profile"
          />

          <div className='flex-1 flex items-center justify-between pl-4 pr-2'>
            <p className={`font-russo ${color} text-lg font-bold`}>6</p>

            {/* <div className={`px-4 py-2 rounded-full text-sm font-bold ${color} bg-[#393E46] border border-[#393E46]`}> */}
            {/* {getStatIcon(stat)}
            <div className={`px-4 py-2 rounded-full text-sm font-bold ${color} bg-slate-700/30 border border-slate-600/50 backdrop-blur-sm`}>
              {stat}
            </div> */}
            {/* <div className="flex items-center gap-2 group-hover:scale-105 transition-transform duration-300">
              {getStatIcon(stat)}
              <div className={`px-4 py-2 rounded-full text-sm font-bold ${color} bg-slate-700/30 border border-slate-600/50 backdrop-blur-sm group-hover:bg-[#393E46] group-hover:border-[#0077FF]/50 transition-all duration-300`}>
                {stat}
              </div>
            </div> */}
            <div className="group-hover:scale-105 transition-transform duration-300">
              {getStatElement(stat, color)}
            </div>
            <p className={`font-russo ${color} text-lg font-bold`}>6</p>

          </div>
            <img
              src={store.image_url}
              className='size-12 rounded-full border-2 border-[#393E46] group-hover:border-[#0077FF] transition-all shadow-md ml-4'
              alt="opponent profile"
            />

        </div>
      )}
    </>
  );
};



const WelcomeCard: React.FC = () => {
  const store = useStore();
  return (

    <div className='z-10 relative w-full h-[20%] bg-[#393E46]  rounded-3xl text-[#EEEEEE] overflow-hidden '>

      <div className=' flex flex-col space-y-12 p-4'>

        <div className=''>
          <h1 className='font-russo text-6xl text-white'>Welcome Back!</h1>
          <h2 className='font-russo text-5xl text-white mt-1'>Player</h2>
        </div>

        <button className='mt-4 w-fit px-8 py-3 rounded-full bg-[#0077FF] text-white font-bold flex items-center justify-center space-x-2'>
          <FaPlay className='text-lg' />
          <span>Play</span>
        </button>

      </div>

      {/* <img src={store.image_url} alt="Player Profile" className='size-44  object-cover rounded-full' /> */}

      <div className="absolute transform -translate-x-1/2 -bottom-4 left-1/2 h-[80%] flex justify-center">
        <svg
          viewBox="0 0 207 110"
        // xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M102.267 0.434814C132.402 0.434814 156.831 24.8643 156.831 54.9993C156.831 59.7291 156.229 64.3183 155.098 68.6946C155.021 69.5379 154.981 70.389 154.981 71.2463C154.982 92.1843 178.085 109.197 206.771 109.556V109.565H0.228516V109.484C27.7613 108.213 49.5513 91.5806 49.5518 71.2463C49.5518 70.389 49.511 69.5379 49.4346 68.6946C48.3034 64.3184 47.7021 59.729 47.7021 54.9993C47.7021 24.8643 72.1317 0.434882 102.267 0.434814Z"
            fill="#222831"
          />

          <image
            href={store.image_url}
            x="53.5"
            y="10"
            width="100"
            height="90"
            clipPath="url(#circleClip)"
            preserveAspectRatio="xMidYMid slice"
          />

          <defs>
            <clipPath id="circleClip">
              <circle cx="103.5" cy="55" r="45" />
            </clipPath>
          </defs>
        </svg>
      </div>

      <div className="absolute top-0 right-0 z-20 h-full  w-[25%] flex justify-end">
        <svg
          className="h-full w-[70%]"
          viewBox="0 0 220 270"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
        >
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
        <div className=' w-full h-[79%] bg-[#393E46] rounded-3xl text-[#EEEEEE] overflow-auto custom-scroll '>
          <div className='sticky top-0 z-10 font-russo  text-2xl h-16 size-auto bg-[#393E46] p-5'>LeaderBoard</div>
          <DisplayItem type='level' name="salah" level="10.25" rank={1} />
          <DisplayItem type='level' name="ahmed" level="15.01" rank={2} />
          <DisplayItem type='level' name="fatimafatimafatimafatimafatimafatimafatimafatima" level="13.37" rank={3} />
          <DisplayItem type='level' name="omar" level="42.42" rank={4}/>
          <DisplayItem type='level' name="layla" level="54.87" rank={5}/>
          <DisplayItem type='level' name="youssef" level="15.09" rank={6}/>
          <DisplayItem type='level' name="sara" level="28.99" rank={7}/>
          <DisplayItem type='level' name="ali" level="10.10" rank={8}/>
          <DisplayItem type='level' name="ali" level="10.10" rank={9}/>
          <DisplayItem type='level' name="ali" level="10.10" rank={10}/>
          <DisplayItem type='level' name="ali" level="10.10" rank={11}/>
          <DisplayItem type='level' name="ali" level="10.10" rank={12}/>
          <DisplayItem type='level' name="ali" level="10.10" rank={13}/>
          <DisplayItem type='level' name="ali" level="10.10" rank={14}/>
          <DisplayItem type='level' name="ali" level="10.10" rank={15}/>
          <DisplayItem type='level' name="ali" level="10.10" rank={16}/>
          <DisplayItem type='level' name="ali" level="10.10" rank={17}/>
          <DisplayItem type='level' name="ali" level="10.10" rank={18}/>
          <DisplayItem type='level' name="ali" level="10.10" rank={19}/>
          <DisplayItem type='level' name="ali" level="10.10" rank={20}/>
          <DisplayItem type='level' name="ali" level="10.10" rank={21}/>

        </div>
      </div>
      <div className='w-[30%]   p-2 '>
        <div className='h-full  bg-[#393E46]  rounded-3xl text-[#EEEEEE] overflow-auto custom-scroll '>
          <div className='sticky top-0 z-10 font-russo p-5 h-16 text-2xl size-auto bg-[#393E46]'>History</div>
          <DisplayItem type='stat' color="text-[#469CFD]" stat="DRAW" />
          <DisplayItem type='stat' color="text-[#F85761]" stat="DEFEAT" />
          <DisplayItem type='stat' color="text-[#3AA64B]" stat="VICTORY" />
          <DisplayItem type='stat' color="text-[#3AA64B]" stat="VICTORY" />
          <DisplayItem type='stat' color="text-[#F85761]" stat="DEFEAT" />
          <DisplayItem type='stat' color="text-[#469CFD]" stat="DRAW" />
          <DisplayItem type='stat' color="text-[#3AA64B]" stat="VICTORY" />
          <DisplayItem type='stat' color="text-[#3AA64B]" stat="VICTORY" />
          <DisplayItem type='stat' color="text-[#F85761]" stat="DEFEAT" />
          <DisplayItem type='stat' color="text-[#469CFD]" stat="DRAW" />
          <DisplayItem type='stat' color="text-[#3AA64B]" stat="VICTORY" />
          <DisplayItem type='stat' color="text-[#3AA64B]" stat="VICTORY" />
          <DisplayItem type='stat' color="text-[#F85761]" stat="DEFEAT" />
          <DisplayItem type='stat' color="text-[#469CFD]" stat="DRAW" />
          <DisplayItem type='stat' color="text-[#3AA64B]" stat="VICTORY" />
          <DisplayItem type='stat' color="text-[#3AA64B]" stat="VICTORY" />
          <DisplayItem type='stat' color="text-[#F85761]" stat="DEFEAT" />
          <DisplayItem type='stat' color="text-[#469CFD]" stat="DRAW" />
          <DisplayItem type='stat' color="text-[#3AA64B]" stat="VICTORY" />
          <DisplayItem type='stat' color="text-[#3AA64B]" stat="VICTORY" />
          <DisplayItem type='stat' color="text-[#F85761]" stat="DEFEAT" />
          <DisplayItem type='stat' color="text-[#469CFD]" stat="DRAW" />
          <DisplayItem type='stat' color="text-[#3AA64B]" stat="VICTORY" />
          <DisplayItem type='stat' color="text-[#3AA64B]" stat="VICTORY" />
          <DisplayItem type='stat' color="text-[#F85761]" stat="DEFEAT" />
          <DisplayItem type='stat' color="text-[#469CFD]" stat="DRAW" />
          <DisplayItem type='stat' color="text-[#3AA64B]" stat="VICTORY" />
          <DisplayItem type='stat' color="text-[#3AA64B]" stat="VICTORY" />
          <DisplayItem type='stat' color="text-[#F85761]" stat="DEFEAT" />
          <DisplayItem type='stat' color="text-[#469CFD]" stat="DRAW" />
          <DisplayItem type='stat' color="text-[#3AA64B]" stat="VICTORY" />
          <DisplayItem type='stat' color="text-[#3AA64B]" stat="VICTORY" />
          <DisplayItem type='stat' color="text-[#F85761]" stat="DEFEAT" />
          <DisplayItem type='stat' color="text-[#469CFD]" stat="DRAW" />
          <DisplayItem type='stat' color="text-[#3AA64B]" stat="VICTORY" />
          <DisplayItem type='stat' color="text-[#3AA64B]" stat="VICTORY" />
          <DisplayItem type='stat' color="text-[#F85761]" stat="DEFEAT" />
          <DisplayItem type='stat' color="text-[#469CFD]" stat="DRAW" />
          <DisplayItem type='stat' color="text-[#3AA64B]" stat="VICTORY" />
          <DisplayItem type='stat' color="text-[#3AA64B]" stat="VICTORY" />
          <DisplayItem type='stat' color="text-[#F85761]" stat="DEFEAT" />
          <DisplayItem type='stat' color="text-[#469CFD]" stat="DRAW" />
          <DisplayItem type='stat' color="text-[#3AA64B]" stat="VICTORY" />
          <DisplayItem type='stat' color="text-[#3AA64B]" stat="VICTORY" />
          <DisplayItem type='stat' color="text-[#F85761]" stat="DEFEAT" />
          <DisplayItem type='stat' color="text-[#469CFD]" stat="DRAW" />
          <DisplayItem type='stat' color="text-[#3AA64B]" stat="VICTORY" />
          <DisplayItem type='stat' color="text-[#3AA64B]" stat="VICTORY" />
          <DisplayItem type='stat' color="text-[#F85761]" stat="DEFEAT" />
          <DisplayItem type='stat' color="text-[#469CFD]" stat="DRAW" />
          <DisplayItem type='stat' color="text-[#3AA64B]" stat="VICTORY" />
          <DisplayItem type='stat' color="text-[#3AA64B]" stat="VICTORY" />
          <DisplayItem type='stat' color="text-[#F85761]" stat="DEFEAT" />
          <DisplayItem type='stat' color="text-[#469CFD]" stat="DRAW" />
          <DisplayItem type='stat' color="text-[#3AA64B]" stat="VICTORY" />
          <DisplayItem type='stat' color="text-[#F85761]" stat="DEFEAT" />
          <DisplayItem type='stat' color="text-[#3AA64B]" stat="VICTORY" />
          <DisplayItem type='stat' color="text-[#3AA64B]" stat="VICTORY" />
          <DisplayItem type='stat' color="text-[#F85761]" stat="DEFEAT" />
          <DisplayItem type='stat' color="text-[#469CFD]" stat="DRAW" />
        </div>
      </div>
    </div>
  );
};

export default Home;



