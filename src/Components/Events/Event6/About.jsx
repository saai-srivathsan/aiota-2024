import React from 'react';
import e52 from '../../../assets/e62.webp'; // Import the image

const About = () => {
  return (
    <div className="relative flex flex-col items-center justify-center w-full min-h-screen p-8 mt-5 mb-5">
      {/* Background Image */}
      <div 
        className="absolute top-0 left-0 w-full h-full bg-center bg-cover brightness-70" 
        style={{ backgroundImage: `url(${e52})` }}
      ></div>

      {/* Overlay Content */}
      <div className="relative w-full max-w-4xl p-8 bg-black rounded-lg shadow-xl bg-opacity-70 drop-shadow-xl">
        <div className="flex flex-col items-center">
          <div className="text-center">
            <h1 className="mb-6 text-6xl font-bold text-white md:text-5xl lg:text-6xl font-good">
            Tech Olympics
            </h1>
            <p className="text-lg font-medium text-white font-poppins md:text-xl lg:text-2xl">
            An intriguing series of events that tests your technical knowledge, coding skills, and logical thinking. This competition will challenge and expand your mind with diverse activities designed to push your limits and showcase your expertise. Be prepared for a thrilling experience that combines strategy, teamwork, and intellectual prowess in a dynamic and engaging format.            </p>
            <div className="contact text-white">
              <p><br/>Event Coordinators</p>
              <br />
              <p>ADITYA R - +91 98847 77225</p>
              <p>HARINI S - +91 97105 60660</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
