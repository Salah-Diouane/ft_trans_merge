import React from 'react';
import { Outlet } from 'react-router-dom';

const Game: React.FC = () => {
  return (
    <div className='w-full h-full flex items-center justify-cente'>
      <Outlet />
    </div>
  );
};

export default Game;
