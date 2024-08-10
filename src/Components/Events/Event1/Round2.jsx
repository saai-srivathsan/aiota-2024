import React from 'react';
import event15 from '../../../assets/event15.webp'; // Updated image
import event16 from '../../../assets/event16.webp'; // New background image

const Round2 = () => {
  return (
    <div className="relative flex flex-col items-center justify-center w-full min-h-screen p-4 mt-5 mb-5 md:p-8">
      {/* Background Image */}
      <img
        src={event16}
        alt="Background"
        className="absolute top-0 left-0 object-cover w-full h-full brightness-70"
      />

      {/* Overlay Content */}
      <div className="relative w-full p-4 bg-black rounded-lg shadow-xl md:p-8 bg-opacity-70 max-w-none drop-shadow-xl">
        <div className="flex flex-col items-center md:flex-row-reverse">
          <div className="flex-shrink-0 w-full md:w-auto md:ml-8">
            <img
              src={event15}
              alt="Logo Lab"
              className="w-full rounded-lg md:max-w-sm lg:max-w-md"
            />
          </div>
          <div className="w-full max-w-2xl mt-4 text-center md:mt-8 md:text-left">
            <h1 className="text-4xl font-medium text-white md:text-4xl lg:text-4xl font-good">
              ROUND 2: LOGO LAB
            </h1>
            <p className="mt-4 text-base font-medium text-white md:text-lg lg:text-xl font-poppins">
              <strong className="text-purple-400">Mode:</strong> Offline (Physical presence required) <br />
              <strong className="text-purple-400">Task:</strong> Design a logo based on a theme revealed at the start  <br />
              <strong className="text-purple-400">Time Limit:</strong> 45 minutes  <br />
              <strong className="text-purple-400">Requirements:</strong> The logo must be original, creative, and reflective of the theme  <br />
              <strong className="text-purple-400">Advancement:</strong> Top 7 teams will move to the next round 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Round2;
