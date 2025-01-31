import React from 'react';
import e26 from '../../../assets/e89.webp'; // Updated image
import e25 from '../../../assets/e84.webp'; // New background image

const Round1 = () => {
  return (
    <div className="relative flex flex-col items-center justify-center w-full min-h-screen p-4 mt-5 mb-5 md:p-8">
      {/* Background Image */}
      <img
        src={e25}
        alt="Insight Island"
        className="absolute top-0 left-0 object-cover w-full h-full brightness-70"
      />

      {/* Overlay Content */}
      <div className="relative w-full p-4 bg-black rounded-lg shadow-xl md:p-8 bg-opacity-70 max-w-none drop-shadow-xl">
        <div className="flex flex-col items-center md:flex-row">
          <div className="flex-shrink-0 w-full md:w-auto md:mr-8">
            <img
              src={e26}
              alt="LCU 20"
              className="w-full rounded-lg md:max-w-sm lg:max-w-md"
            />
          </div>
          <div className="w-full max-w-2xl mt-4 text-center md:mt-8 md:text-left">
            <h1 className="text-4xl font-medium text-white md:text-4xl lg:text-4xl font-good">
            Round 1 
            </h1>
            <p className="mt-4 text-base font-medium text-white md:text-lg lg:text-xl">
            • Teams will generate words using prompts through ChatGPT. <br></br>
            • A timer will be set from 00:00 at the beginning of Round 1.<br></br>
            • Teams are allowed to collect general, simple words and use any resources available within ChatGPT.<br></br>

 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Round1;
