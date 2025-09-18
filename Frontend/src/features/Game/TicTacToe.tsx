import React from 'react';
import Subtract from '../Assets/Subtract.svg';
import f_logo from '../Assets/local.svg'
import t_logo from '../Assets/remote.svg'
import { Link } from 'react-router-dom';

const TicTacToe: React.FC = () => {
  return (
    <div className="relative w-full h-full bg-[#222831] rounded-2xl max-lg:h-[91%] overflow-hidden">
      
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-28 h-28 bg-[#0077FF]/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-36 h-36 bg-[#0077FF]/2 rounded-full blur-3xl"></div>
        <div className="absolute top-0 left-1/2 w-1 h-24 bg-[#0077FF]/20 rounded-b-full transform -translate-x-1/2"></div>
        <div className="absolute bottom-0 right-1/4 w-2 h-20 bg-[#0077FF]/20 rounded-t-full"></div>
      </div>

      <div className="relative z-10 p-8 lg:p-16 h-full flex flex-col">
        
        {/* Header Section */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="relative inline-block mb-6">
            <h1 className="text-5xl lg:text-6xl font-russo text-white tracking-wider relative">
              TIC TAC TOE
            </h1>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-transparent via-[#0077FF] to-transparent rounded-full"></div>
          </div>
          
          <div className="space-y-4">
            <p className="text-[#EEEEEE]/80 text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed font-light">
              Choose your battle mode and outsmart your opponent
            </p>
            <div className="flex items-center justify-center gap-2">
              <div className="w-1 h-1 bg-[#0077FF] rounded-full"></div>
              <div className="w-2 h-2 bg-[#0077FF] rounded-full"></div>
              <div className="w-1 h-1 bg-[#0077FF] rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Game Modes Grid */}
        <div className="flex-1 flex items-center justify-center">
          <div className="flex max-lg:flex-col items-center justify-center gap-16 lg:gap-24 w-full max-w-4xl">
            
            {/* Local Game Card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-[#0077FF]/8 rounded-3xl transform rotate-2 group-hover:rotate-0 transition-all duration-500 ease-out"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-[#0077FF]/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div 
                className="relative flex flex-col items-center justify-center bg-[#393E46] rounded-3xl p-8 lg:p-12 w-80 lg:w-96 h-80 lg:h-96 transition-all duration-500 group-hover:translate-y-[-8px] group-hover:scale-[1.02] border border-[#393E46] group-hover:border-[#0077FF]/30 shadow-lg group-hover:shadow-xl group-hover:shadow-[#0077FF]/10"
                style={{ backgroundImage: `url(${Subtract})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
              >
                {/* Badge */}
                <div className="absolute -top-3 -right-3 bg-[#0077FF] text-white px-3 py-1 rounded-full text-xs font-russo opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  CLASSIC
                </div>

                {/* Icon Container */}
                <div className="flex-1 flex items-center justify-center mb-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-[#0077FF]/15 rounded-full blur-2xl scale-150 group-hover:scale-125 transition-all duration-700"></div>
                    <div className="relative p-6 bg-[#222831]/50 rounded-2xl backdrop-blur-sm border border-[#0077FF]/20 group-hover:border-[#0077FF]/40 transition-all duration-300">
                      <img 
                        src={f_logo} 
                        alt="Local Game" 
                        className="w-20 lg:w-24 h-auto filter drop-shadow-lg group-hover:scale-110 transition-transform duration-300" 
                      />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="text-center space-y-4 w-full">
                  <h3 className="text-2xl lg:text-3xl font-russo text-white group-hover:text-[#0077FF] transition-colors duration-300">
                    Local
                  </h3>
                  <p className="text-[#EEEEEE]/70 text-sm lg:text-base leading-relaxed px-4">
                    Play against a friend on the same device
                  </p>
                  <div className="pt-2">
                    <Link 
                      to="local-game" 
                      className="inline-block bg-[#0077FF] hover:bg-[#0066DD] text-white px-8 py-3 rounded-2xl font-russo text-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#0077FF]/30 active:scale-95 transform hover:translate-y-[-2px]"
                    >
                      Play Local
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Remote Game Card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-[#0077FF]/8 rounded-3xl transform -rotate-2 group-hover:rotate-0 transition-all duration-500 ease-out"></div>
              <div className="absolute inset-0 bg-gradient-to-bl from-[#0077FF]/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div 
                className="relative flex flex-col items-center justify-center bg-[#393E46] rounded-3xl p-8 lg:p-12 w-80 lg:w-96 h-80 lg:h-96 transition-all duration-500 group-hover:translate-y-[-8px] group-hover:scale-[1.02] border border-[#393E46] group-hover:border-[#0077FF]/30 shadow-lg group-hover:shadow-xl group-hover:shadow-[#0077FF]/10"
                style={{ backgroundImage: `url(${Subtract})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
              >
                {/* Badge */}
                <div className="absolute -top-3 -right-3 bg-[#0077FF] text-white px-3 py-1 rounded-full text-xs font-russo opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  ONLINE
                </div>

                {/* Icon Container */}
                <div className="flex-1 flex items-center justify-center mb-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-[#0077FF]/15 rounded-full blur-2xl scale-150 group-hover:scale-125 transition-all duration-700"></div>
                    <div className="relative p-6 bg-[#222831]/50 rounded-2xl backdrop-blur-sm border border-[#0077FF]/20 group-hover:border-[#0077FF]/40 transition-all duration-300">
                      <img 
                        src={t_logo} 
                        alt="Remote Game" 
                        className="w-20 lg:w-24 h-auto filter drop-shadow-lg group-hover:scale-110 transition-transform duration-300" 
                      />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="text-center space-y-4 w-full">
                  <h3 className="text-2xl lg:text-3xl font-russo text-white group-hover:text-[#0077FF] transition-colors duration-300">
                    Remote
                  </h3>
                  <p className="text-[#EEEEEE]/70 text-sm lg:text-base leading-relaxed px-4">
                    Challenge players worldwide online
                  </p>
                  <div className="pt-2">
                    <Link 
                      to="remote-game" 
                      className="inline-block bg-[#0077FF] hover:bg-[#0066DD] text-white px-8 py-3 rounded-2xl font-russo text-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#0077FF]/30 active:scale-95 transform hover:translate-y-[-2px]"
                    >
                      Start Battle
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Footer */}
        <div className="text-center mt-12 lg:mt-16">
          <div className="inline-flex flex-col items-center gap-4">
            <div className="flex items-center gap-3 text-[#EEEEEE]/50 text-sm lg:text-base">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-[#0077FF] rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-[#0077FF]/60 rounded-full animate-pulse delay-150"></div>
                <div className="w-2 h-2 bg-[#0077FF]/40 rounded-full animate-pulse delay-300"></div>
              </div>
              <span className="font-russo tracking-wide">Select your game mode</span>
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-[#0077FF]/40 rounded-full animate-pulse delay-500"></div>
                <div className="w-2 h-2 bg-[#0077FF]/60 rounded-full animate-pulse delay-650"></div>
                <div className="w-2 h-2 bg-[#0077FF] rounded-full animate-pulse delay-800"></div>
              </div>
            </div>
            
            <div className="flex items-center gap-6 text-[#EEEEEE]/30 text-xs">
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 bg-[#0077FF] rounded-full"></div>
                <span>Local Play</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 bg-[#0077FF] rounded-full"></div>
                <span>Online Battle</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 bg-[#0077FF] rounded-full"></div>
                <span>Strategy Game</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicTacToe;