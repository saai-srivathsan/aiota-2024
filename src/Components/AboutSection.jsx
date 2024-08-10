import React from 'react';
import discover from '../assets/discover.mp4'; // Import your video file

const AboutSection = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-800 font-poppins">
      <div className="relative w-full h-full p-8">
        <video
          className="object-cover w-full h-full rounded-lg shadow-2xl drop-shadow-2xl"
          src={discover}
          autoPlay
          loop
          muted
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-white bg-black bg-opacity-50">
          <h1 className="mb-4 text-4xl font-bold font-good">Enter the Virtual Arena!</h1>
          <p className="max-w-6xl text-lg text-justify">
          Welcome, brave adventurer! You've just entered a world where every corner holds a new challenge and every decision shapes your destiny. As you embark on this thrilling journey, you'll navigate through uncharted territories, encounter formidable foes, and uncover hidden secrets. Equip yourself with courage and wit, for the path ahead is fraught with mystery and excitement. Are you ready to take the plunge into this epic quest and carve your name into legend? The game begins now—let your adventure unfold!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;