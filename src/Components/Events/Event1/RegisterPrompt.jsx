import React from 'react';
import event19 from '../../../assets/event19.mp4'; // Background video

const RegisterPrompt = () => {
  return (
    <div className="relative flex flex-col items-center justify-center w-full min-h-screen p-4 md:p-8">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 object-cover w-full h-full brightness-50"
      >
        <source src={event19} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Content */}
      <div className="relative z-10 p-6 text-center bg-black rounded-lg shadow-xl md:p-8 font-poppins bg-opacity-60">
        <h1 className="mb-4 text-4xl font-bold text-white md:text-7xl font-good">
          Ready to Blast Off?
        </h1>
        <p className="mb-2 text-base text-white md:text-lg">
          The countdown to the ultimate design showdown has begun! Gear up, Space Hero, and prepare to unleash your creative powers in a galactic competition like no other. From crafting stellar logos to designing cosmic interfaces, this is your chance to shine among the stars!
    
          Don't let this opportunity drift away—secure your spot in the Design Jam universe and make your mark in the galaxy of innovation. Ready to take the leap?
        </p>
        <a
          href="/register"
          className="inline-block px-4 py-2 text-base font-semibold text-white transition duration-300 bg-purple-600 rounded-lg shadow-lg md:px-6 md:py-3 md:text-lg hover:bg-purple-800"
        >
          Register Now
        </a>
      </div>
    </div>
  );
};

export default RegisterPrompt;
