
import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-[80%] text-center overflow-hidden">
        
        <h1 className="text-9xl font-bold mb-4 ">404</h1>
        <p className="text-lg mb-6">Oops! The page you’re looking for doesn’t exist.</p>
      <Link to="/"  className="text-blue-500 underline hover:text-blue-700 transition-colors" >
        Go back home
      </Link>

    </div>
  );
}
