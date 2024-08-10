import React from 'react';
import event1bg from '../../../assets/event1bg.webp'; // Import the image

const About = () => {
  return (
    <div className="relative flex flex-col items-center justify-center w-full min-h-screen p-8 mt-5 mb-5">
      {/* Background Image */}
      <img 
        src={event1bg} 
        alt="Event Background"
        className="absolute top-0 left-0 object-cover w-full h-full brightness-70"
      />

      {/* Overlay Content */}
      <div className="relative w-full max-w-4xl p-8 bg-black rounded-lg shadow-xl bg-opacity-70 drop-shadow-xl">
        <div className="flex flex-col items-center">
          <div className="text-center">
            <h1 className="mb-6 text-6xl font-bold text-white md:text-5xl lg:text-6xl font-good">
              Design Jam
            </h1>
            <p className="text-lg font-medium text-white font-poppins md:text-xl lg:text-2xl">
              Get ready for DESIGN JAM, a high-energy competition where creativity, innovation, and quick thinking are put to the test! From designing a logo to an interface, participants will face a variety of challenges aimed at pushing their design abilities to new limits at each round. These unexpected challenges will not only test your design capabilities but also your ability to stay focused amidst distractions. Embrace these challenges as opportunities to demonstrate your resilience and creativity.
            </p>
            <div className="contact text-white">
              <p><br/>Event Coordinators</p>
              <br />
              <p>GURU PRASSANDH R - +91 63812 56447</p>
              <p>NIVETHA G - +91 73389 49603</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
