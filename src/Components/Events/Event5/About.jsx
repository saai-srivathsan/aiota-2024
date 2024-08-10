import React from 'react';
import e52 from '../../../assets/e52.webp'; // Import the image

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
              NEXUS 2.0
            </h1>
            <p className="text-lg font-medium text-white font-poppins md:text-xl lg:text-2xl">
            Experience a premier showcase of groundbreaking projects and technological advancements in a captivating underwater setting. Dive into Ocean Realm to explore cutting-edge innovations and marvels, presented by leading experts and visionary creators. Join us for a profound journey through the depths of technological excellence.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
