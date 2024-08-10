import React from 'react';
import event13 from '../../../assets/event13.webp'; // Updated image
import event14 from '../../../assets/event14.webp'; // New background image

const Round1 = () => {
  return (
    <div className="relative flex flex-col items-center justify-center w-full min-h-screen p-4 mt-5 mb-5 md:p-8">
      {/* Background Image */}
      <img
        src={event14}
        alt="Background"
        className="absolute top-0 left-0 object-cover w-full h-full brightness-70"
      />

      {/* Overlay Content */}
      <div className="relative w-full p-4 bg-black rounded-lg shadow-xl md:p-8 bg-opacity-70 max-w-none drop-shadow-xl">
        <div className="flex flex-col items-center md:flex-row">
          <div className="flex-shrink-0 w-full md:w-auto md:mr-8">
            <img
              src={event13}
              alt="Digital Jam"
              className="w-full rounded-lg md:max-w-sm lg:max-w-md"
            />
          </div>
          <div className="w-full max-w-2xl mt-4 text-center md:mt-8 md:text-left">
            <h1 className="text-4xl font-medium text-white md:text-4xl lg:text-4xl font-good">
              ROUND 1: DESIGNATHON  
            </h1>
            <p className="mt-4 text-base font-medium text-white md:text-lg lg:text-xl">
              <strong className="text-purple-400">Mode:</strong> Online <br />
              <strong className="text-purple-400">Task:</strong> Design a simple UI for a mobile music player app <br />
              <strong className="text-purple-400">Time Limit:</strong> 60 minutes <br />
              <strong className="text-purple-400">Requirements:</strong> Share your screen during the round and submit your Figma file via Google form <br />
              <strong className="text-purple-400">Rules:</strong> Adhere strictly to the time limit; late submissions may lead to disqualification <br />
              <strong className="text-purple-400">Advancement:</strong> Top 10 teams will move to the next round            
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Round1;
