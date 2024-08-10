import React from 'react';
import e42 from '../../../assets/e83.webp';
import image1 from '../../../assets/e86.webp'; // Example image paths
import image2 from '../../../assets/e87.webp';
import image3 from '../../../assets/e88.webp';
import image4 from '../../../assets/image4.webp';

const Instructions = () => {
  const instructions = [
    {
      image: image3,
      subtitle: "Team Composition",
      description: "Each team should have only 2 members.",
    },
    {
      image: image2,
      subtitle: "Internet",
      description: "Prepare to use your own internet connection if Wi-Fi is not available.",
    },
    {
      image: image1,
      subtitle: "Resources",
      description: "Participants must bring their own laptops.",
    },

  ];

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden text-white font-poppins">
      {/* Background Image */}
      <img
      src={e42}
        className="absolute inset-0 object-cover w-full h-full brightness-70"
      >
      </img>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl px-4 py-16 text-center md:px-8">
        <h1 className="mb-8 text-2xl font-bold tracking-widest uppercase md:text-3xl font-good">
        Within the Arcane Library's enchanted shelves, every rule is a spell. Follow the scrolls of wisdom carefully to unlock the magic within!        
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
