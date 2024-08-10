import React from 'react';
import instruction from '../../../assets/instructionstwo.mp4'; // Updated video path
import image1 from '../../../assets/e21.webp'; // Example image paths
import image2 from '../../../assets/e22.webp';
import image3 from '../../../assets/e23.webp';
import image4 from '../../../assets/image4.webp';

const Instructions = () => {
  const instructions = [
    {
      image: image1,
      subtitle: "Team Composition",
      description: "Each team should consist of 3 to 4 members.",
    },
    {
      image: image2,
      subtitle: "Resources",
      description: "Participants should bring their own laptop.",
    },
    {
      image: image3,
      subtitle: "Hardware",
      description: "If your project involves hardware, you are welcome to bring it.",
    },
  ];

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden text-white font-poppins">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 object-cover w-full h-full brightness-70"
      >
        <source src={instruction} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl px-4 py-16 text-center md:px-8">
        <h1 className="mb-8 text-2xl font-bold tracking-widest uppercase md:text-3xl font-good">
          Unlock the magic by following the enchanted instructions
        </h1>
        <div className="flex flex-wrap justify-center gap-8">
          {instructions.map((instruction, index) => (
            <div
              key={index}
              className="flex flex-col items-center w-full max-w-xs p-4 bg-black rounded-lg shadow-lg bg-opacity-30 backdrop-blur-lg"
            >
              <img
                src={instruction.image}
                alt={instruction.subtitle}
                className="object-cover w-48 h-48 mb-4 rounded-lg"
              />
              <div className="text-center">
                <h2 className="mb-2 text-lg font-semibold md:text-xl">{instruction.subtitle}</h2>
                <p className="text-base md:text-lg">{instruction.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Instructions;
