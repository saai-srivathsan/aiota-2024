import React from 'react';
import event17 from '../../../assets/event17.webp'; // Updated image
import event18 from '../../../assets/event18.webp'; // New background image

const Round3 = () => {
  return (
    <div className="relative flex flex-col items-center justify-center w-full min-h-screen p-4 mt-5 mb-5 md:p-8">
      {/* Background Image */}
      <img
        src={event18}
        alt="Background"
        className="absolute top-0 left-0 object-cover w-full h-full brightness-70"
      />

      {/* Overlay Content */}
      <div className="relative w-full p-4 bg-black rounded-lg shadow-xl md:p-8 bg-opacity-70 max-w-none drop-shadow-xl">
        <div className="flex flex-col items-center md:flex-row-reverse">
          <div className="flex-shrink-0 w-full md:w-auto md:ml-8">
            <img
              src={event17}
              alt="UI Mayhem"
              className="w-full rounded-lg md:max-w-sm lg:max-w-md"
            />
          </div>
          <div className="w-full max-w-2xl mt-4 text-center md:mt-8 md:text-left">
            <h1 className="text-4xl font-medium text-white md:text-4xl lg:text-4xl font-good">
              ROUND 3: UI MAYHEM
            </h1>
            <p className="mt-4 text-base font-medium text-white md:text-lg lg:text-xl">
              <strong className="text-purple-400">Mode:</strong> Offline (Both team members must be present) <br />
              <strong className="text-purple-400">Task:</strong> Design an innovative and user-friendly interface for a versatile application, with details revealed on the spot <br />
              <strong className="text-purple-400">Time Limit:</strong> 90 minutes <br />
              <strong className="text-purple-400">Criteria:</strong> Points awarded for functionality, innovation, and overall user experience; think outside the box <br />
              <strong className="text-purple-400">Note:</strong> Beware of unexpected hindrances to test your focus and ability to work under pressure <br />
              <strong className="text-purple-400">Rules:</strong> Adhere strictly to the time limit; late submissions may lead to disqualification 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Round3;
