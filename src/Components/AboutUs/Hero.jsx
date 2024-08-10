import React from 'react';
import scifiVideo from './assets/scifi.mp4'; // Import the video

const Hero = () => {
  return (
    <div className="relative flex flex-col items-center justify-center w-full min-h-screen p-8 mt-5 mb-5">
      {/* Background Video */}
      <video 
        src={scifiVideo} 
        autoPlay 
        loop 
        muted 
        className="absolute top-0 left-0 object-cover w-full h-full brightness-70"
      />

      {/* Overlay Content */}
      <div className="relative w-full max-w-4xl p-8 bg-black rounded-lg shadow-xl bg-opacity-70 drop-shadow-xl">
        <div className="flex flex-col items-center">
          <div className="text-center">
            <h1 className="mb-6 text-6xl font-bold text-white md:text-5xl lg:text-6xl font-good">
              MEET OUr TEAM
            </h1>
            <p className="text-lg font-medium text-white font-poppins md:text-xl lg:text-2xl">
            AIOTA is made possible through the combined efforts of our dedicated faculty members and student coordinators. Our faculty members have lent their expertise and vision, guiding the symposium to reflect the latest trends and innovations. Meanwhile, our student coordinators have played a crucial role in executing the event with enthusiasm and precision, managing everything from logistics to coordination. Together, their hard work has ensured that AIOTA is both a vibrant and informative platform, celebrating the future of IoT and AIML.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
