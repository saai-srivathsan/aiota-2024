import React from 'react';
import about from '../../../assets/about.mp4'; // Import the video

const About = () => {
  return (
    <div className="relative flex flex-col items-center justify-center w-full min-h-screen p-8 mt-5 mb-5">
      {/* Background Video */}
      <video 
        autoPlay 
        loop 
        muted 
        className="absolute top-0 left-0 object-cover w-full h-full brightness-70"
      >
        <source src={about} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Content */}
      <div className="relative w-full max-w-4xl p-8 bg-black rounded-lg shadow-xl bg-opacity-70 drop-shadow-xl">
        <div className="flex flex-col items-center">
          <div className="text-center">
            <h1 className="mb-6 text-6xl font-bold text-white md:text-5xl lg:text-6xl font-good">
            Swift-a-thon
            </h1>
            <p className="text-lg font-medium text-white font-poppins md:text-xl lg:text-2xl">
            Join us for an exhilarating 5-hour hackathon where innovation meets technology! Dive into diverse themes like Healthcare, Computer Vision, Natural Language Processing, and Miscellaneous. Showcase your creativity, tackle real-world problems, and collaborate with like-minded enthusiasts.This event promises to challenge and inspire.            </p>
            <div className="contact text-white">
              <p><br/>Event Coordinators</p>
              <br />
              <p>SAAI SRIVATHSAN R - +91 87783 59172</p>
              <p>KISHORE K - +91 78717 12199</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
