// import React, { useEffect, useState } from 'react';
// import { FaPlay, FaTrophy, FaMedal, FaCrown, FaGamepad, FaFire, FaChevronRight, FaStar, FaBolt } from "react-icons/fa";

// // Mock store hook for demo
// const useStore = () => ({
//   image_url: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop&crop=face"
// });

// interface DisplayItemProps {
//   type: 'level' | 'stat';
//   name?: string;
//   level?: string | number;
//   stat?: string;
//   color?: string;
//   rank?: number;
//   score?: number;
// }

// const DisplayItem: React.FC<DisplayItemProps> = ({ type, name, level, stat, color, rank, score }) => {
//   const store = useStore();
//   const level_int = level ? parseFloat(level.toString()) : 0;
  
//   const getRankIcon = (rank?: number) => {
//     switch(rank) {
//       case 1: return <FaCrown className="text-yellow-400 text-lg" />;
//       case 2: return <FaMedal className="text-gray-300 text-lg" />;
//       case 3: return <FaMedal className="text-amber-600 text-lg" />;
//       default: return <span className="text-gray-400 font-bold text-sm">#{rank}</span>;
//     }
//   };

//   const getStatIcon = (stat?: string) => {
//     switch(stat?.toLowerCase()) {
//       case 'victory': return <FaTrophy className="text-emerald-400" />;
//       case 'defeat': return <FaBolt className="text-red-400" />;
//       case 'draw': return <FaStar className="text-blue-400" />;
//       default: return <FaGamepad className="text-gray-400" />;
//     }
//   };

//   return (
//     <>
//       {type === 'level' && (
//         <div className="group flex items-center p-4 bg-gradient-to-r from-slate-800/50 to-slate-700/30 backdrop-blur-sm m-2 h-20 rounded-2xl border border-slate-600/30 hover:border-blue-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 hover:transform hover:scale-[1.02]">
          
//           <div className="flex items-center gap-4 w-1/4 min-w-0">
//             <div className="relative flex-shrink-0">
//               {getRankIcon(rank)}
//             </div>
            
//             <div className="relative flex-shrink-0">
//               <img 
//                 src={store.image_url} 
//                 className="size-14 rounded-full border-2 border-gradient-to-r from-blue-400 to-purple-400 shadow-lg" 
//                 alt="player profile" 
//               />
//               <div className="absolute -bottom-1 -right-1 bg-blue-500 rounded-full size-5 flex items-center justify-center">
//                 <FaFire className="text-white text-xs" />
//               </div>
//             </div>
            
//             <div className="min-w-0 flex-1">
//               <p className="font-bold text-white truncate text-lg group-hover:text-blue-300 transition-colors">{name}</p>
//               <p className="text-gray-400 text-sm">{score?.toLocaleString()} XP</p>
//             </div>
//           </div>

//           <div className="flex-1 flex items-center gap-4 ml-4">
//             <div className="flex-1 h-3 bg-slate-700/50 rounded-full overflow-hidden border border-slate-600/30">
//               <div
//                 className="h-full bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full transition-all duration-500 ease-out shadow-lg shadow-blue-500/30"
//                 style={{ width: `${Math.min(level_int, 100)}%` }}
//               />
//             </div>
//             <div className="text-right">
//               <p className="font-bold text-white text-lg">{level}</p>
//               <p className="text-gray-400 text-xs">Level</p>
//             </div>
//           </div>

//           <FaChevronRight className="text-gray-400 ml-4 group-hover:text-blue-400 transition-colors" />
//         </div>
//       )}

//       {type === 'stat' && (
//         <div className='group bg-gradient-to-r from-slate-800/40 to-slate-700/20 backdrop-blur-sm m-2 h-18 rounded-2xl flex items-center p-4 justify-between border border-slate-600/30 hover:border-opacity-50 transition-all duration-300 hover:shadow-md'>
          
//           <div className="flex items-center gap-4">
//             <img 
//               src={store.image_url} 
//               className='size-12 rounded-full border-2 border-slate-600 shadow-md group-hover:border-blue-400 transition-all' 
//               alt="player profile" 
//             />
//             <div className="flex items-center gap-2">
//               {getStatIcon(stat)}
//               <span className="text-xs text-gray-400">VS</span>
//             </div>
//           </div>
          
//           <div className='flex items-center justify-center flex-1'>
//             <div className={`px-4 py-2 rounded-full text-sm font-bold ${color} bg-slate-700/30 border border-slate-600/50 backdrop-blur-sm`}>
//               {stat}
//             </div>
//           </div>
          
//           <div className="flex items-center gap-4">
//             <div className="text-right">
//               <p className="text-xs text-gray-400">Score</p>
//               <p className="font-bold text-white">6-6</p>
//             </div>
//             <img 
//               src={store.image_url} 
//               className='size-12 rounded-full border-2 border-slate-600 shadow-md' 
//               alt="opponent profile" 
//             />
//           </div>
          
//         </div>
//       )}
//     </>
//   );
// };

// const StatsCard: React.FC<{ title: string; value: string; icon: React.ReactNode; color: string }> = ({ title, value, icon, color }) => (
//   <div className={`bg-gradient-to-br ${color} p-4 rounded-2xl border border-white/10 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105`}>
//     <div className="flex items-center justify-between">
//       <div>
//         <p className="text-white/80 text-sm font-medium">{title}</p>
//         <p className="text-white text-2xl font-bold">{value}</p>
//       </div>
//       <div className="text-white/60 text-2xl">
//         {icon}
//       </div>
//     </div>
//   </div>
// );

// const WelcomeCard: React.FC = () => {
//   const store = useStore();
//   const [currentTime, setCurrentTime] = useState(new Date());

//   useEffect(() => {
//     const timer = setInterval(() => setCurrentTime(new Date()), 1000);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <div className='relative w-full h-[35%] bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800 rounded-3xl text-white overflow-hidden border border-slate-600/30 shadow-2xl'>
      
//       {/* Animated background elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
//         <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
//         <div className="absolute top-1/2 left-1/2 w-20 h-20 bg-pink-500/10 rounded-full blur-xl animate-pulse delay-500"></div>
//       </div>

//       <div className='relative z-10 flex h-full'>
        
//         <div className='flex-1 flex flex-col justify-between p-6'>
          
//           <div>
//             <div className="flex items-center gap-2 mb-2">
//               <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
//               <span className="text-green-400 text-sm font-medium">Online</span>
//             </div>
            
//             <h1 className='font-black text-4xl lg:text-5xl bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent leading-tight'>
//               Welcome Back!
//             </h1>
//             <h2 className='font-bold text-2xl lg:text-3xl text-blue-300 mt-1'>
//               Player
//             </h2>
            
//             <p className="text-gray-300 text-sm mt-2">
//               {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} • Ready to dominate?
//             </p>
//           </div>

//           <div className="flex flex-col sm:flex-row gap-4">
//             <button className='group px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold flex items-center justify-center space-x-3 transition-all duration-300 shadow-lg hover:shadow-blue-500/25 hover:transform hover:scale-105 border border-blue-400/30'>
//               <FaPlay className='text-lg group-hover:scale-110 transition-transform' />
//               <span className="text-lg">Play Now</span>
//             </button>
            
//             <button className='px-6 py-4 rounded-2xl bg-slate-700/50 hover:bg-slate-600/50 text-white font-medium border border-slate-500/30 hover:border-slate-400/50 transition-all duration-300 backdrop-blur-sm'>
//               Quick Match
//             </button>
//           </div>

//         </div>

//         <div className="flex-1 relative flex items-center justify-center">
          
//           <div className="relative">
//             {/* Glowing effect behind avatar */}
//             <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-2xl opacity-30 animate-pulse scale-150"></div>
            
//             {/* Main avatar */}
//             <div className="relative w-32 h-32 lg:w-40 lg:h-40">
//               <img
//                 src={store.image_url}
//                 alt="Player Profile"
//                 className='w-full h-full object-cover rounded-full border-4 border-gradient-to-r from-blue-400 to-purple-400 shadow-2xl'
//               />
              
//               {/* Level indicator */}
//               <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold px-3 py-1 rounded-full text-sm shadow-lg border-2 border-white">
//                 Lvl 42
//               </div>
              
//               {/* Status indicator */}
//               <div className="absolute top-2 right-2 w-4 h-4 bg-green-400 rounded-full border-2 border-white animate-pulse shadow-lg"></div>
//             </div>
//           </div>

//         </div>
        
//       </div>

//       {/* Stats overview */}
//       {/* <div className="absolute bottom-4 left-6 right-6 grid grid-cols-3 gap-4 z-20">
//         <StatsCard title="Wins" value="28" icon={<FaTrophy />} color="from-emerald-500/20 to-green-600/20" />
//         <StatsCard title="Rank" icon={<FaMedal />} value="#1,337" color="from-blue-500/20 to-purple-600/20" />
//         <StatsCard title="Streak" value="5" icon={<FaFire />} color="from-orange-500/20 to-red-600/20" />
//       </div> */}

//     </div>
//   );
// };

// const Home: React.FC = () => {
//   const [activeTab, setActiveTab] = useState<'leaderboard' | 'history'>('leaderboard');

//   const leaderboardData = [
//     { name: "ProGamer2024", level: "95.5 Lvl", rank: 1, score: 125430 },
//     { name: "SkillMaster", level: "87.2 Lvl", rank: 2, score: 98750 },
//     { name: "GameChampion", level: "82.1 Lvl", rank: 3, score: 89200 },
//     { name: "ElitePlayer", level: "78.9 Lvl", rank: 4, score: 78900 },
//     { name: "TopGamer", level: "75.4 Lvl", rank: 5, score: 68400 },
//     { name: "LegendKiller", level: "72.8 Lvl", rank: 6, score: 61200 }
//   ];

//   useEffect(() => {
//     // Socket connection logic would go here
//   }, []);

//   return (
//     <div className="w-full h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6 overflow-hidden">
      
//       {/* Main content area */}
//       <div className="flex h-full gap-6">
        
//         {/* Left Panel */}
//         <div className='flex-1 flex flex-col gap-6 min-w-0'>
          
//           {/* Welcome Card */}
//           <WelcomeCard />
          
//           {/* Leaderboard */}
//           <div className='flex-1 bg-gradient-to-br from-slate-800/80 to-slate-700/50 backdrop-blur-xl rounded-3xl text-white overflow-hidden border border-slate-600/30 shadow-2xl'>
//             <div className='sticky top-0 bg-gradient-to-r from-slate-800/90 to-slate-700/90 backdrop-blur-xl p-6 border-b border-slate-600/30'>
//               <div className="flex items-center justify-between">
//                 <div className="flex items-center gap-3">
//                   <FaTrophy className="text-yellow-400 text-2xl" />
//                   <h3 className='font-black text-2xl'>Global Leaderboard</h3>
//                 </div>
//                 <div className="flex items-center gap-2 text-sm text-gray-400">
//                   <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
//                   Live Updates
//                 </div>
//               </div>
//             </div>
            
//             <div className='p-4 overflow-auto custom-scroll space-y-2'>
//               {leaderboardData.map((player, index) => (
//                 <DisplayItem 
//                   key={index}
//                   type='level' 
//                   name={player.name} 
//                   level={player.level}
//                   rank={player.rank}
//                   score={player.score}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
        
//         {/* Right Panel */}
//         <div className='w-80 flex flex-col'>
//           <div className='h-full bg-gradient-to-br from-slate-800/80 to-slate-700/50 backdrop-blur-xl rounded-3xl text-white overflow-hidden border border-slate-600/30 shadow-2xl'>
            
//             {/* Header with tabs */}
//             <div className='bg-gradient-to-r from-slate-800/90 to-slate-700/90 backdrop-blur-xl p-6 border-b border-slate-600/30'>
//               <div className="flex rounded-2xl bg-slate-700/50 p-1 border border-slate-600/50">
//                 <button
//                   onClick={() => setActiveTab('history')}
//                   className={`flex-1 py-3 px-4 rounded-xl font-bold text-sm transition-all duration-300 ${
//                     activeTab === 'history' 
//                       ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg' 
//                       : 'text-gray-400 hover:text-white'
//                   }`}
//                 >
//                   <FaGamepad className="inline mr-2" />
//                   Match History
//                 </button>
//               </div>
//             </div>
            
//             {/* Content */}
//             <div className='flex-1 p-4 overflow-auto custom-scroll space-y-2'>
//               {Array.from({length: 20}, (_, i) => (
//                 <DisplayItem 
//                   key={i}
//                   type='stat' 
//                   color={
//                     i % 3 === 0 ? "text-emerald-400" :
//                     i % 3 === 1 ? "text-red-400" : "text-blue-400"
//                   }
//                   stat={
//                     i % 3 === 0 ? "VICTORY" :
//                     i % 3 === 1 ? "DEFEAT" : "DRAW"
//                   }
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
        
//       </div>
//     </div>
//   );
// };

// export default Home;




import React, { useEffect, useState } from 'react';
import { FaPlay, FaCrown, FaMedal, FaTrophy, FaBolt, FaStar, FaGamepad, FaFire, FaChevronRight } from "react-icons/fa";
import { ShieldHalf } from "lucide-react";

// Mock store hook for demo
const useStore = () => ({
  image_url: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop&crop=face"
});

interface DisplayItemProps {
  type: 'level' | 'stat';
  name?: string;
  level?: string | number;
  stat?: string;
  color?: string;
  rank?: number;
}

const DisplayItem: React.FC<DisplayItemProps> = ({ type, name, level, stat, color, rank }) => {
  const store = useStore();
  const level_int = level ? parseFloat(level.toString()) : 0;
  
  const getRankIcon = (rank?: number) => {
    switch (rank) {
      case 1: return <FaCrown className="text-yellow-400 text-lg animate-pulse" />;
      case 2: return <FaMedal className="text-gray-300 text-lg animate-bounce" />;
      case 3: return <FaMedal className="text-amber-600 text-lg animate-bounce" />;
      default: return <ShieldHalf className='text-cyan-200 font-bold text-sm animate-pulse' />
    }
  };

  const getStatIcon = (stat?: string) => {
    switch (stat?.toLowerCase()) {
      case 'victory': return <FaTrophy className="text-emerald-400 animate-pulse" />;
      case 'defeat': return <FaBolt className="text-red-400 animate-pulse" />;
      case 'draw': return <FaStar className="text-blue-400 animate-spin" />;
      default: return <FaGamepad className="text-gray-400" />;
    }
  };

  return (
    <>
      {type === 'level' && (
        <div className="group flex items-center p-4 bg-[#222831] hover:bg-[#393E46] m-2 h-16 rounded-3xl border border-[#393E46]/50 hover:border-[#0077FF]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#0077FF]/20 hover:transform hover:scale-[1.02] animate-fadeIn">

          <div className="flex items-center gap-5 w-1/6">
            <div className="relative flex-shrink-0 transform group-hover:scale-110 transition-transform duration-300">
              {getRankIcon(rank)}
            </div>
            <div className="relative">
              <img 
                src={store.image_url} 
                className="size-12 rounded-full border-2 border-white group-hover:border-[#0077FF] transition-all duration-300 hover:shadow-lg hover:shadow-[#0077FF]/30" 
                alt="player profile" 
              />
              {rank && rank <= 3 && (
                <div className="absolute -top-1 -right-1 bg-[#0077FF] rounded-full size-4 animate-ping opacity-75"></div>
              )}
            </div>
            <div className="h-12 flex items-center">
              <p className="font-russo text-white group-hover:text-[#0077FF] truncate max-w-40 leading-tight transition-colors duration-300">{name}</p>
            </div>
          </div>

          <div className="flex-1 flex items-center gap-4 ml-4">
            <div className="flex-1 h-3 bg-[#5e7396] rounded-full overflow-hidden border border-[#393E46] shadow-inner">
              <div
                className="h-full bg-gradient-to-r from-[#0077FF] to-[#00a8ff] rounded-full transition-all duration-1000 ease-out shadow-lg shadow-[#0077FF]/30 animate-shimmer"
                style={{ 
                  width: `${Math.min(level_int, 100)}%`,
                  backgroundSize: '200% 100%'
                }}
              />
            </div>
            <div className="text-right flex items-center space-x-4 group-hover:scale-105 transition-transform duration-300">
              <p className="font-bold text-[#EEEEEE] text-lg">{level}</p>
              <p className="text-gray-400 text-xs opacity-70 group-hover:opacity-100 transition-opacity duration-300">Level</p>
            </div>
          </div>

          <FaChevronRight className="text-gray-400 ml-4 group-hover:text-[#0077FF] group-hover:translate-x-1 transition-all duration-300" />
        </div>
      )}

      {type === 'stat' && (
        <div className='group bg-[#222831] hover:bg-[#393E46] m-2 h-16 rounded-3xl flex items-center p-4 justify-between border border-[#393E46]/50 hover:border-[#0077FF]/50 transition-all duration-300 hover:shadow-md hover:shadow-[#0077FF]/10 hover:transform hover:scale-[1.01] animate-slideIn'>

          <div className="relative">
            <img
              src={store.image_url}
              className='size-12 rounded-full border-2 border-[#393E46] group-hover:border-[#0077FF] transition-all duration-300 shadow-md group-hover:shadow-lg group-hover:shadow-[#0077FF]/20'
              alt="player profile"
            />
            <div className="absolute inset-0 rounded-full bg-[#0077FF]/0 group-hover:bg-[#0077FF]/10 transition-all duration-300"></div>
          </div>

          <div className='flex-1 flex items-center justify-between pl-4 pr-2'>
            <p className={`font-russo ${color} text-lg font-bold group-hover:scale-110 transition-transform duration-300`}>6</p>

            <div className="flex items-center gap-2 group-hover:scale-105 transition-transform duration-300">
              {getStatIcon(stat)}
              <div className={`px-4 py-2 rounded-full text-sm font-bold ${color} bg-slate-700/30 border border-slate-600/50 backdrop-blur-sm group-hover:bg-[#393E46] group-hover:border-[#0077FF]/50 transition-all duration-300`}>
                {stat}
              </div>
            </div>

            <p className={`font-russo ${color} text-lg font-bold group-hover:scale-110 transition-transform duration-300`}>6</p>
          </div>
          
          <div className="relative">
            <img
              src={store.image_url}
              className='size-12 rounded-full border-2 border-[#393E46] group-hover:border-[#0077FF] transition-all duration-300 shadow-md ml-4 group-hover:shadow-lg group-hover:shadow-[#0077FF]/20'
              alt="opponent profile"
            />
            <div className="absolute inset-0 rounded-full bg-[#0077FF]/0 group-hover:bg-[#0077FF]/10 transition-all duration-300 ml-4"></div>
          </div>

        </div>
      )}
    </>
  );
};

const WelcomeCard: React.FC = () => {
  const store = useStore();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 100);
  }, []);

  return (
    <div className={`z-10 relative w-full h-[20%] bg-[#393E46] rounded-3xl text-[#EEEEEE] overflow-hidden transition-all duration-1000 ${isLoaded ? 'animate-slideInLeft' : 'opacity-0 transform translate-x-[-100px]'}`}>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#0077FF]/5 rounded-full animate-pulse"></div>
        <div className="absolute -bottom-2 -left-2 w-16 h-16 bg-[#0077FF]/5 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-[#0077FF]/5 rounded-full animate-bounce delay-500"></div>
      </div>

      <div className='relative z-10 flex flex-col space-y-12 p-4'>

        <div className='animate-fadeInUp'>
          <h1 className='font-russo text-6xl text-white hover:text-[#0077FF] transition-colors duration-500 cursor-default'>Welcome Back!</h1>
          <h2 className='font-russo text-5xl text-white hover:text-[#0077FF] transition-colors duration-500 mt-1 cursor-default'>Player</h2>
        </div>

        <button className='group mt-4 w-fit px-8 py-3 rounded-full bg-[#0077FF] hover:bg-[#0066cc] text-white font-bold flex items-center justify-center space-x-2 transition-all duration-300 hover:shadow-lg hover:shadow-[#0077FF]/30 hover:scale-105 animate-bounceIn'>
          <FaPlay className='text-lg group-hover:scale-110 group-hover:translate-x-1 transition-transform duration-300' />
          <span className="group-hover:text-white transition-colors duration-300">Play</span>
        </button>

      </div>

      {/* Avatar SVG with enhanced animations */}
      <div className="absolute transform -translate-x-1/2 -bottom-4 left-1/2 h-[80%] flex justify-center animate-floatUp">
        <svg
          viewBox="0 0 207 110"
          className="hover:scale-105 transition-transform duration-500"
        >
          <path
            d="M102.267 0.434814C132.402 0.434814 156.831 24.8643 156.831 54.9993C156.831 59.7291 156.229 64.3183 155.098 68.6946C155.021 69.5379 154.981 70.389 154.981 71.2463C154.982 92.1843 178.085 109.197 206.771 109.556V109.565H0.228516V109.484C27.7613 108.213 49.5513 91.5806 49.5518 71.2463C49.5518 70.389 49.511 69.5379 49.4346 68.6946C48.3034 64.3184 47.7021 59.729 47.7021 54.9993C47.7021 24.8643 72.1317 0.434882 102.267 0.434814Z"
            fill="#222831"
            className="hover:fill-[#393E46] transition-colors duration-500"
          />

          <image
            href={store.image_url}
            x="53.5"
            y="10"
            width="100"
            height="90"
            clipPath="url(#circleClip)"
            preserveAspectRatio="xMidYMid slice"
            className="hover:opacity-80 transition-opacity duration-300"
          />

          <defs>
            <clipPath id="circleClip">
              <circle cx="103.5" cy="55" r="45" />
            </clipPath>
          </defs>
        </svg>
      </div>

      {/* Enhanced decorative SVG */}
      <div className="absolute top-0 right-0 z-20 h-full w-[25%] flex justify-end">
        <svg
          className="h-full w-[70%] hover:scale-105 transition-transform duration-500"
          viewBox="0 0 220 270"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
        >
          <path d="M177.359 256.436H128.197L169.058 42.436H218.22L177.359 256.436Z" fill="#222831" className="hover:fill-[#393E46] transition-colors duration-500" />
          <path d="M117.359 256.436H68.1973L109.058 42.436H158.22L117.359 256.436Z" fill="#222831" className="hover:fill-[#393E46] transition-colors duration-500" />
          <path d="M141.687 102.026C142.56 101.151 142.56 100.06 141.687 99.1893L129.03 86.5582L141.687 73.8811C142.56 73.0069 142.56 71.916 141.687 71.0449C140.814 70.1738 139.723 70.1757 138.85 71.05L126.193 83.7271L113.536 71.096C112.663 70.2249 111.572 70.2269 110.699 71.1012C110.263 71.5383 110.044 71.9751 110.044 72.6296C110.044 73.2841 110.263 73.7201 110.699 74.1556L123.356 86.7867L110.699 99.4638C110.263 99.9009 110.044 100.338 110.044 100.992C110.044 101.429 110.263 102.083 110.699 102.518C111.572 103.389 112.663 103.387 113.536 102.513L126.193 89.3996L138.85 102.031C139.723 102.902 141.032 102.899 141.687 102.026Z" fill="#0077FF" className="animate-pulse" />
          <path d="M130.447 134.326C131.402 133.215 130.562 131.202 129.103 131.104L101.103 127.468C100.817 127.352 100.415 127.52 100.012 127.689C99.6099 127.858 99.4087 127.942 99.0902 128.312C98.6545 128.968 98.504 129.741 98.756 130.345L109.593 156.32C109.845 156.924 110.5 157.359 111.272 157.508C111.557 157.625 111.959 157.457 112.362 157.288C112.764 157.119 112.966 157.035 113.284 156.664L130.447 134.326ZM103.924 131.963L124.945 134.74L112.157 151.696L103.924 131.963Z" fill="#0077FF" className="animate-pulse delay-300" />
          <path d="M182.001 163.335C178.556 155.08 169.143 151.22 160.892 154.68C152.641 158.141 148.772 167.57 152.216 175.826C155.661 184.081 165.074 187.94 173.325 184.48C181.576 181.02 185.361 171.389 182.001 163.335ZM156.04 174.222C153.436 167.98 156.451 161.038 162.488 158.506C168.727 155.89 175.657 158.898 178.177 164.939C180.781 171.18 177.767 178.123 171.729 180.655C165.49 183.271 158.56 180.263 156.04 174.222Z" fill="#0077FF" className="animate-spin" style={{ animationDuration: '20s' }} />
          <path d="M200.176 119.222L189.339 93.2472C188.919 92.2405 187.778 91.7726 186.772 92.1946L160.811 103.082C159.805 103.504 159.336 104.647 159.756 105.653L170.593 131.628C171.013 132.634 172.154 133.102 173.16 132.68L199.121 121.793C200.127 121.371 200.596 120.228 200.176 119.222ZM173.459 128.296L164.134 105.946L186.271 96.6629L195.597 119.013L173.459 128.296Z" fill="#0077FF" className="animate-pulse delay-700" />
        </svg>
      </div>
    </div>
  );
};

// const Home: React.FC = () => {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     // Simulating socket connection
//     setTimeout(() => setIsVisible(true), 200);
//   }, []);

//   return (
//     <div className="w-full h-screen bg-[#222831] p-5 overflow-hidden">
      
//       <div className={`w-full h-full flex flex-row space-y-3 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        
//         <div className='w-[70%] p-2 space-y-3 overflow-auto animate-slideInLeft'>
//           <WelcomeCard />
//           <div className='w-full h-[79%] bg-[#393E46] rounded-3xl text-[#EEEEEE] overflow-auto custom-scroll animate-slideInUp shadow-lg hover:shadow-xl hover:shadow-[#0077FF]/10 transition-shadow duration-500'>
//             <div className='sticky top-0 z-10 font-russo text-2xl h-16 size-auto bg-[#393E46] p-5 border-b border-[#222831]/20 backdrop-blur-sm'>
//               <span className="hover:text-[#0077FF] transition-colors duration-300 cursor-default">LeaderBoard</span>
//             </div>
            
//             {/* Staggered animation for leaderboard items */}
//             <div className="animate-staggerChildren">
//               <DisplayItem type='level' name="salah" level="10.25" rank={1} />
//               <DisplayItem type='level' name="ahmed" level="15.01" rank={2} />
//               <DisplayItem type='level' name="fatima" level="13.37" rank={3} />
//               <DisplayItem type='level' name="omar" level="42.42" />
//               <DisplayItem type='level' name="layla" level="54.87" />
//               <DisplayItem type='level' name="youssef" level="15.09" />
//               <DisplayItem type='level' name="sara" level="28.99" />
//               <DisplayItem type='level' name="ali" level="10.10" />
//               <DisplayItem type='level' name="ali" level="10.10" />
//               <DisplayItem type='level' name="ali" level="10.10" />
//             </div>
//           </div>
//         </div>
        
//         <div className='w-[30%] p-2 animate-slideInRight'>
//           <div className='h-full bg-[#393E46] rounded-3xl text-[#EEEEEE] overflow-auto custom-scroll shadow-lg hover:shadow-xl hover:shadow-[#0077FF]/10 transition-shadow duration-500'>
//             <div className='sticky top-0 z-10 font-russo p-5 h-16 text-2xl size-auto bg-[#393E46] border-b border-[#222831]/20 backdrop-blur-sm'>
//               <span className="hover:text-[#0077FF] transition-colors duration-300 cursor-default">History</span>
//             </div>
            
//             {/* Staggered animation for history items */}
//             <div className="animate-staggerChildren">
//               <DisplayItem type='stat' color="text-[#469CFD]" stat="DRAW" />
//               <DisplayItem type='stat' color="text-[#F85761]" stat="DEFEAT" />
//               <DisplayItem type='stat' color="text-[#3AA64B]" stat="VICTORY" />
//               <DisplayItem type='stat' color="text-[#3AA64B]" stat="VICTORY" />
//               <DisplayItem type='stat' color="text-[#F85761]" stat="DEFEAT" />
//               <DisplayItem type='stat' color="text-[#469CFD]" stat="DRAW" />
//               <DisplayItem type='stat' color="text-[#3AA64B]" stat="VICTORY" />
//               <DisplayItem type='stat' color="text-[#3AA64B]" stat="VICTORY" />
//               <DisplayItem type='stat' color="text-[#F85761]" stat="DEFEAT" />
//               <DisplayItem type='stat' color="text-[#469CFD]" stat="DRAW" />
//             </div>
//           </div>
//         </div>
        
//       </div>

//     </div>
//   );
// };

// export default Home;





const Home: React.FC = () => {

  useEffect(() => {
    if (!socket.connect())
      socket.connect()
  }, []);

  return (
    <div className="w-full h-screen flex flex-col md:flex-row bg-[#222831] p-5 gap-4">
      
      {/* Left Section */}
      <div className="w-full md:w-[70%] flex flex-col gap-3">
        <WelcomeCard />

        <div className="flex-1 bg-[#393E46] rounded-3xl text-[#EEEEEE] overflow-auto custom-scroll">
          {/* Sticky Header */}
          <div className="sticky top-0 z-10 font-russo text-2xl h-16 p-5 bg-[#393E46]">
            LeaderBoard
          </div>

          {Users.length > 0 ? (
            Users.map((user, idx) => (
              <DisplayItem key={idx} type="level" name={user.name} level={user.level} rank={user.rank} />
            ))
          ) : (
            <span className="text-blue-400 text-center block p-4">No matching users</span>
          )}
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-[30%] flex flex-col">
        <div className="flex-1 bg-[#393E46] rounded-3xl text-[#EEEEEE] overflow-auto custom-scroll">
          <div className="sticky top-0 z-10 font-russo text-2xl h-16 p-5 bg-[#393E46]">
            History
          </div>

          {Stat.length > 0 ? (
            Stat.map((stat, idx) => (
              <DisplayItem key={idx} type="stat" stat={stat.stat} />
            ))
          ) : (
            <span className="text-blue-400 text-center block p-4">No matching stats</span>
          )}
        </div>
      </div>
      
    </div>
  );
};

export default Home;



