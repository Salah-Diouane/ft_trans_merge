
import React from 'react';
import { Link } from 'react-router-dom';
import pic from "./gif.gif"
export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-[100%] text-center overflow-auto">
        <img src={pic} className='w-auto h-auto rounded-2xl' />
        {/* <h1 className="text-9xl font-bold mb-4 ">404</h1> */}
        <p className="text-lg mb-6 text-zinc-300 pt-4">Oops! The page you’re looking for doesn’t exist.</p>
        <button className='rounded-lg bg-[#0077FF] h-auto w-auto p-2'>
        <Link to="/"  className="text-green-50  hover:text-blue-700 transition-colors " >
          Go back home
        </Link>
        </button>

    </div>
  );
}
