import React, { useEffect } from 'react';
import socket from '../Chat/services/socket';
import { MdConstruction } from "react-icons/md";

const Home: React.FC = () => {

  useEffect( () => {
    if (!socket.connect())
      socket.connect()
    });

  return (
    <div className="w-full h-full flex items-center justify-center bg-[#393E46] rounded-2xl max-lg:w-full max-lg:h-[91%]">
      <div className="text-center space-y-6">
        <div className="flex justify-center">
          <MdConstruction className="w-16 h-16 text-[#23ccdc] animate-bounce" />
        </div>
        <h1 className="text-white text-3xl sm:text-4xl font-bold">
          Home Page Under Construction
        </h1>
        <p className="text-[#cccccc] text-lg sm:text-xl max-w-md mx-auto">
          We're working hard to bring you something awesome. Check back soon!
        </p>
      </div>
    </div>
  );
};

export default Home;
