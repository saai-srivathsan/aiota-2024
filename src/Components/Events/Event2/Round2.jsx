import React from 'react';
import event15 from '../../../assets/e28.webp'; // Updated image
import e27 from '../../../assets/e27.webp'; // New background image

const Round2 = () => {
  return (
    <div className="relative flex flex-col items-center justify-center w-full min-h-screen p-4 mt-5 mb-5 md:p-8">
      {/* Background Image */}
      <img
        src={e27}
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
            Round 2: Offline 5-Hour Hackathon
            </h1>
            <p className="mt-4 text-base font-medium text-white md:text-lg lg:text-xl font-poppins">
            The hackathon will be conducted on August 28. <br/>
            This round will be held offline for 5 hours. <br/>
            Venue details will be provided shortly. <br/>
            Internet access, refreshments, and lunch will be provided.

            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Round2;
