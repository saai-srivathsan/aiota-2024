import React from 'react';
import e29 from '../../../assets/e29.webp'; // Updated image
import e210 from '../../../assets/e210.webp'; // New background image

const Round3 = () => {
  return (
    <div className="relative flex flex-col items-center justify-center w-full min-h-screen p-4 mt-5 mb-5 md:p-8">
      {/* Background Image */}
      <img
        src={e210}
        alt="Background"
        className="absolute top-0 left-0 object-cover w-full h-full brightness-70"
      />

      {/* Overlay Content */}
      <div className="relative w-full p-4 bg-black rounded-lg shadow-xl md:p-8 bg-opacity-70 max-w-none drop-shadow-xl">
        <div className="flex flex-col items-center md:flex-row-reverse">
          <div className="flex-shrink-0 w-full md:w-auto md:ml-8">
            <img
              src={e29}
              alt="UI Mayhem"
              className="w-full rounded-lg md:max-w-sm lg:max-w-md"
            />
          </div>
          <div className="w-full max-w-2xl mt-4 text-center md:mt-8 md:text-left">
            <h1 className="text-4xl font-medium text-white md:text-4xl lg:text-4xl font-good">
            Additional Information
            </h1>
            <p className="mt-4 text-base font-medium text-white md:text-lg lg:text-xl">
            Prepare thoroughly for both the abstract submission and the hackathon. <br />
            Ensure you bring all necessary equipment. <br />
            Stay tuned for further instructions and updates. 

            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Round3;
