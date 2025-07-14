import React from 'react';
import { Outlet } from 'react-router-dom';

const Game: React.FC = () => {
  return (
    <div className='p-80'>
      <Outlet />
    </div>
  );
};

export default Game;
