import React, { useEffect } from 'react';
import socket from '../Chat/services/socket';
import '../../styles/index.css'
import { useStore } from "../../store/store"
import { FaPlay } from "react-icons/fa";
import { FaCrown, FaMedal, FaTrophy, FaBolt, FaStar, FaGamepad, FaFire, FaChevronRight, } from "react-icons/fa";

interface User {
	name: string;
	level: string | number;
	rank: number;
}

interface DisplayItemProps {
	type: 'level' | 'stat';
	name?: string;
	level?: string | number;
	stat?: string;
	color?: string;
	rank?: number;
	// user: User[];
}


const DisplayItem: React.FC<DisplayItemProps> = ({ type, name, level, stat, rank }) => {

	const store = useStore()
	const level_int = level ? parseFloat(level.toString()) : 0;
	const getRankIcon = (rank?: number) => {
		switch (rank) {
			case 1: return <FaCrown className="text-yellow-400 text-lg" />;
			case 2: return <FaMedal className="text-gray-300 text-lg" />;
			case 3: return <FaMedal className="text-amber-600 text-lg" />;
			default: return <span className='text-cyan-200 font-bold text-lg'>{rank}</span>
			// default: return <ShieldHalf className='text-cyan-200 font-bold text-sm' />
		}
	};

	let color: string;
	if (stat === 'DRAW') {
		color = "text-[#469CFD]"
	}
	else if (stat === 'DEFEAT')
		color = "text-[#F85761]"
	else
		color = "text-[#3AA64B]"

	const getStatElement = (stat?: string, color?: string) => {
		console.log("stat : ", stat);
		switch (stat?.toLowerCase()) {
			case 'victory':
				return (
					<div className={`px-2 py-2 rounded-full text-sm font-bold ${color} bg-slate-700/30 border border-slate-600/50 backdrop-blur-sm group-hover:bg-[#393E46] group-hover:border-[#0077FF]/50 transition-all duration-300 flex items-center gap-2`}>
						<FaTrophy className="text-emerald-400 animate-pulse" />
						{stat}
					</div>
				);
			case 'defeat':
				return (
					<div className={`px-2 py-2 rounded-full text-sm font-bold ${color} bg-slate-700/30 border border-slate-600/50 backdrop-blur-sm group-hover:bg-[#393E46] group-hover:border-[#0077FF]/50 transition-all duration-300 flex items-center gap-2`}>
						<FaBolt className="text-red-400 animate-pulse" />
						{stat}
					</div>
				);
			case 'draw':
				return (
					<div className={`px-2 py-2 rounded-full text-sm font-bold ${color} bg-slate-700/30 border border-slate-600/50 backdrop-blur-sm group-hover:bg-[#393E46] group-hover:border-[#0077FF]/50 transition-all duration-300 flex items-center gap-2`}>
						<FaStar className="text-blue-400 animate-spin" />
						{stat}
					</div>
				);
			default:
				return (
					<div className={`px-2 py-2 rounded-full text-sm font-bold ${color} bg-slate-700/30 border border-slate-600/50 backdrop-blur-sm group-hover:bg-[#393E46] group-hover:border-[#0077FF]/50 transition-all duration-300 flex items-center gap-2`}>
						<FaGamepad className="text-gray-400" />
						{stat}
					</div>
				);
		}
	};

	return (
		<>

			{type === 'level' && (

				<div className="flex items-center p-3 xs:p-4 bg-[#222831] m-2 h-16 rounded-3xl border border-[#393E46]/50 hover:border-[#0077FF]/50 transition-all duration-300 justify-between">

					<div className="flex items-center gap-2 xs:gap-4 flex-shrink min-w-0">
						<div className="relative flex-shrink-0 p-2">{getRankIcon(rank)}</div>
						<img
							src={store.image_url}
							className="size-8 xs:size-10 sm:size-12 rounded-full border-2 border-white flex-shrink-0"
							alt="player profile"
						/>
						<p className="font-russo text-white truncate  max-w-[200px]  leading-tight p-2">
							{name}
						</p>
					</div>

					<div className=" flex flex-col items-start  gap-1 xs:gap-2">

						{/* <div className=" sm:flex flex-col items-end w-full max-w-[200px]"> */}
						<p className="font-russo text-white text-left ">Level {level}</p>
						<div className="h-3 bg-[#5e7396] rounded-full overflow-hidden border border-[#393E46] w-24">
							<div
								className="h-full bg-gradient-to-r from-[#0077FF] to-[#00AAFF] rounded-full transition-all duration-500 ease-out shadow-lg shadow-[#0077FF]/30"
								style={{ width: `${Math.min(level_int, 100)}%` }}
							/>
						</div>
						{/* </div> */}

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
						<p className={`font-russo ${color} text-lg font-bold`}>{6}</p>


						<div className="group-hover:scale-105 transition-transform duration-300 p-2" >
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

			<div className=' flex flex-col gap-8 2xl:gap-5 xl:gap-4 lg:gap-4 md:gap-3 sm:gap-4 p-4'>

				{/* <div className=''>
					<h1 className='font-russo text-2xl sm:text-4xl sm:bg-gray-700 md:bg-blue-500 md:text-4xl lg:bg-red-300 xl:bg-yellow-200 2xl:bg-black sm_md:bg-green-600 2xl:text-7xl text-white animate-pulse'>Welcome Back!</h1>
					<h2 className='font-russo text-1xl sm:text-4xl sm:bg-gray-700 md:bg-blue-500 md:text-4xl lg:bg-red-300 xl:bg-yellow-200 2xl:bg-black sm_md:bg-green-600 2xl:text-7xl text-white mt-1 animate-pulse'>Player</h2>
				</div> */}
				<div className=''>
					<h1 className='font-russo text-2xl sm:text-4xl md:text-4xl  sm_md:bg-green-600 2xl:text-7xl text-white animate-pulse'>Welcome Back!</h1>
					<h2 className='font-russo text-1xl sm:text-4xl md:text-4xl  sm_md:bg-green-600 2xl:text-7xl text-white mt-1 animate-pulse'>Player</h2>
				</div>

				<button className=' w-fit px-8 py-3 h-[50%] rounded-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600  text-white font-bold flex items-center justify-center space-x-2'>
					<FaPlay className='text-lg' />
					<span>Play</span>
				</button>

			</div>



			<div className="absolute top-[50%] right-2 sm:hidden flex items-center justify-center w-20 h-20 rounded-full overflow-hidden shadow-lg ">
				<div className='w-16 h-16 rounded-2xl overflow-hidden border-3 border-slate-600 shadow-lg"'>

					<img
						src={store.image_url}
						alt="Player Avatar"
						className="w-full h-full object-cover"
					/>
				</div>
			</div>



			<div className="sm:absolute sm:transform sm:-translate-x-1/2  sm:-bottom-4 sm:left-1/2 h-[80%] sm:justify-center hidden  sm:flex">
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

			<div className="sm:absolute sm:top-0 sm:right-0 sm:z-20 sm:h-full md:w-[30%] xl:w-[20%] sm:w-[40%] sm:justify-end hidden sm:flex ">
				<svg
					className="h-full w-full"
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


// Mock store for demonstration



const Users: User[] = [
	{ name: "mohamed diouane", level: "75.32", rank: 1 },
	{ name: "ali", level: "70", rank: 2 },
	{ name: "salah", level: "66.22", rank: 3 },
	{ name: "fatimafatimafatimafatimafatimafatimafatimafatima", level: "55.29", rank: 4 },
	{ name: "ahmed", level: "44.58", rank: 5 },
	{ name: "youssef", level: "39.85", rank: 6 },
	{ name: "omar", level: "30.25", rank: 7 },
	{ name: "adam", level: "10.25", rank: 8 },
]

const Stat = [
	{ name: "salah", image_url: "url", stat: "DRAW", user: Users[2] },
	{ name: "adam", image_url: "url", stat: "VICTORY", user: Users[7] },
	{ name: "mohamed", image_url: "url", stat: "DEFEAT", user: Users[0] },
	{ name: "youssef", image_url: "url", stat: "DRAW", user: Users[5] },
	{ name: "omar", image_url: "url", stat: "DEFEAT", user: Users[6] },
	{ name: "ahmed", image_url: "url", stat: "DRAW", user: Users[4] }
];

const Home: React.FC = () => {

	useEffect(() => {
		if (!socket.connect())
			socket.connect()
	});

	return (
		// <div className="w-full h-full flex flex-col 2xl:flex-row  max-sm:p-1  p-2 sm:p-4 md:p-6 lg:p-8 xl:p-10 2xl:p-12 gap-2 sm:gap-4 md:gap-6 lg:gap-8">
		<div className="w-full h-full flex flex-col 2xl:flex-row   p-5 gap-5  max-sm:p-1  max-[375px]:p-1 max-[390px]:w-[95%] max-[375px]:w-[90%] max-[360px]:w-[87%] max-[344px]:w-[84%]">

			<div className='w-full flex flex-col gap-4 2xl:w-[70%]'>
				<WelcomeCard />

				<div className='flex-1 bg-[#393E46] rounded-3xl text-[#EEEEEE] overflow-auto custom-scroll '>

					<div className='sticky top-0 z-10 font-russo  text-2xl h-16 size-auto bg-[#393E46] p-5'>LeaderBoard</div>

					{Users.length > 0 ? (
						Users.map((user, idx) => (
							<DisplayItem type='level' name={user.name} level={user.level} rank={user.rank} />
						))
					) : (
						<span className="text-blue-400 text-center">No matching users</span>
					)}

				</div>

			</div>

			<div className='w-full 2xl:w-[30%]  flex flex-col '>

				<div className='flex-1  bg-[#393E46]  rounded-3xl text-[#EEEEEE] overflow-auto custom-scroll '>

					<div className='sticky top-0 z-10 font-russo p-5 h-16 text-2xl size-auto bg-[#393E46]'>History</div>

					{Stat.length > 0 ? (
						Stat.map((stat, idx) => (
							<DisplayItem type='stat' stat={stat.stat} />
						))
					) : (
						<span className="text-blue-400 text-center">No matching users</span>
					)}

				</div>

			</div>

		</div>
	);
};

export default Home;





