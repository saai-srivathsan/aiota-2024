import React from 'react';
import event15 from '../../../assets/e611.webp'; // Updated image
import e27 from '../../../assets/e66.webp'; // New background image

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
            Round 2 - TECH TALES  
            </h1>
            <p className="mt-4 text-base font-medium text-white md:text-lg lg:text-xl font-poppins">
            • This is an offline round. <br></br>
            • <strong className="text-lime-300">Dungeon Escape:</strong>Dungeon Escape: Identify hidden passwords to reach the "Treasure Room”.<br></br>
            • <strong className="text-lime-300">Tech Charades:</strong> One teammate gives clues for technical terms, while the other teammate guesses the term and provides the answer.<br></br>
            • <strong className="text-lime-300">Connection Quest:</strong> Answer technical questions by connecting images.<br></br>
            • Adhere to time limits for a chance to win.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Round2;
