import React from 'react';
import LoginSignup from './LoginSignup';

const WebMain = ({ toggle }) => {
  return (
    <div className='flex justify-center items-center bg-gray-900 w-full h-[88vh] sm:h-[84vh] text-white'>
      {toggle ? (
        <h1 className='text-2xl sm:text-5xl font-bold'>Home Page</h1>
      ) : (
        <LoginSignup />
      )}
    </div>
  );
};

export default WebMain;
