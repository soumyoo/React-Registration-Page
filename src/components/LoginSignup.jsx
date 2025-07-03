import React, { useState } from 'react';

const LoginSignup = () => {
  const [haveAccount, setHaveAccount] = useState(false);

  return (
      <div className="bg-gray-900 rounded-xl shadow-md p-6 w-[90vw] max-w-md text-white border-2">
        <h1 className="text-2xl font-bold text-center mb-6">
          {haveAccount ? 'Sign Up' : 'Login'}
        </h1>

        <form className="flex flex-col gap-4">
          {haveAccount && (
            <input
              type="text"
              placeholder="Full Name"
              className="bg-gray-800 border border-gray-600 rounded-md px-4 py-2 text-white placeholder-gray-400 focus:border-white"
            />
          )}
          <input 
            type="email"
            placeholder="Email Address"
            className="bg-gray-800 border border-gray-600 rounded-md px-4 py-2 text-white placeholder-gray-400 focus:border-white"
          />
          <input
            type="password"
            placeholder="Password"
            className="bg-gray-800 border border-gray-600 rounded-md px-4 py-2 text-white placeholder-gray-400 focus:border-white"
          />

          {!haveAccount && (
            <div className="text-right text-sm -mt-2">
              <button
                type="button"
                className="text-gray-400 hover:underline"
                onClick={() => alert('Redirect to forgot password')}
              >
                Forgot Password?
              </button>
            </div>
          )}

          {haveAccount && (
            <input
              type="password"
              placeholder="Confirm Password"
              className="bg-gray-800 border border-gray-600 rounded-md px-4 py-2 text-white placeholder-gray-400 focus:border-white"
            />
          )}
          <button
            type="submit"
            className="bg-white text-black rounded-md py-2 hover:bg-gray-200 transition"
          >
            {haveAccount ? 'Sign Up' : 'Login'}
          </button>
        </form>

        <div className="text-center mt-4">
          <p className="text-sm text-gray-400">
            {haveAccount ? 'Already a member?' : 'Not a member?'}
          </p>
          <button
            onClick={() => setHaveAccount(!haveAccount)}
            className="text-white font-medium hover:underline"
          >
            {haveAccount ? 'Login' : 'Sign Up Now'}
          </button>
        </div>
      </div>
  );
};

export default LoginSignup;
