import React from 'react';

const WebHeader = ({ toggle, onClick }) => {
  return (
    <div className='flex justify-between items-center bg-gray-800 w-full h-[6vh] sm:h-[8vh] px-4 text-white'>
      <h1 className='font-bold text-xs sm:text-2xl'>Soumyo_o's Registration Form</h1>
      <button
        className='text-xs sm:text-xl font-semibold bg-gray-600 hover:bg-gray-500 rounded-full px-4 py-0.5 sm:px-6 sm:py-2 transition'
        onClick={onClick}
      >
        {toggle ? 'Login/Sign up' : 'Home Page'}
      </button>
    </div>
  );
};

export default WebHeader;