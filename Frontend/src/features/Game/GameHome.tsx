import React from 'react';
import Subtract from '../Assets/Subtract.svg';
import ping_pong from '../Assets/ping-pong.svg';
import tic_tac from '../Assets/tic-tac-toe-game.svg';
import { Link } from 'react-router-dom';

const GameHome: React.FC = () => {

  return (

    <div className="w-full h-full flex max-lg:flex-wrap  items-center justify-center gap-28 bg-[#222831] rounded-2xl max-lg:w-full max-lg:h-[91%] ">

      <div className='flex flex-col items-center justify-center space-y-12 bg-[#393E46] max-2xl:w-[300px] w-[400px]  max-lg:w-[280px] rounded-2xl   md:p-8 max-lg:p-10 transition duration-150 ease-in-out hover:scale-105 hover:shadow-lg  h-[35%] max-xl:h-[300px]' style={{ backgroundImage: `url(${Subtract})` }}>
        <img src={ping_pong} alt="Ping Pong" className="w-24 md:w-32 max-lgw-40" />
        <Link to="ping-pong" className="text-white bg-[#0077FF] rounded-2xl p-2 text-xl md:text-2xl font-russo  text-center">
          Ping Pong
        </Link>
      </div>

      <div className='flex flex-col items-center justify-center space-y-12 bg-[#393E46] max-2xl:w-[300px] w-[400px]  max-lg:w-[280px] rounded-2xl p-4 md:p-8 max-lg:p-10 transition duration-150 ease-in-out hover:scale-105 hover:shadow-lg  h-[35%] max-xl:h-[300px]' style={{ backgroundImage: `url(${Subtract})` }}>
        <img src={tic_tac} alt="Tic Tac Toe" className="w-24 md:w-32 max-lgw-40 " />
        <Link to="tic-tac-toe" className="text-white bg-[#0077FF] rounded-2xl p-2 text-xl md:text-2xl font-russo text-center">
          Tic Tac Toe
        </Link>
      </div>

    </div>
  );
};

export default GameHome;




// import React from 'react';
// import Subtract from '../Assets/Subtract.svg';
// import ping_pong from '../Assets/ping-pong.svg';
// import tic_tac from '../Assets/tic-tac-toe-game.svg';
// import { Link } from 'react-router-dom';

// const GameHome: React.FC = () => {
//   return (
//     <div className="w-full h-full flex max-lg:flex-wrap items-center justify-center gap-16 bg-[#222831] rounded-2xl max-lg:w-full max-lg:h-[91%]">
      
//       {/* Ping Pong Card */}
//       <div className="flex flex-col items-center justify-center bg-[#393E46] w-[400px] max-lg:w-[280px] rounded-2xl p-4 md:p-8 transition duration-150 ease-in-out hover:scale-105 hover:shadow-lg h-[40%]" style={{ backgroundImage: `url(${Subtract})` }}>
//         <img src={ping_pong} alt="Ping Pong" className="w-24 md:w-32 max-lg:w-40" />
//         <Link to="ping-pong" className="text-white bg-[#0077FF] rounded-2xl p-2 text-xl md:text-2xl font-russo mt-4 text-center">
//           Ping Pong
//         </Link>
//       </div>

//       {/* Tic Tac Toe Card */}
//       <div className="flex flex-col items-center justify-center bg-[#393E46] w-[400px] max-lg:w-[280px] rounded-2xl p-4 md:p-8 transition duration-150 ease-in-out hover:scale-105 hover:shadow-lg h-[40%]" style={{ backgroundImage: `url(${Subtract})` }}>
//         <img src={tic_tac} alt="Tic Tac Toe" className="w-24 md:w-32 max-lg:w-40" />
//         <Link to="tic-tac-toe" className="text-white bg-[#0077FF] rounded-2xl p-2 text-xl md:text-2xl font-russo mt-4 text-center">
//           Tic Tac Toe
//         </Link>
//       </div>

//     </div>
//   );
// };

// export default GameHome;
