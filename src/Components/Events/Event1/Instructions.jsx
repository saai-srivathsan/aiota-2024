import React from 'react';
import instructionBg from '../../../assets/instruction.webp'; // Updated image path
import image1 from '../../../assets/image1.webp'; // Example image paths
import image2 from '../../../assets/image2.webp';
import image3 from '../../../assets/image3.webp';
import image4 from '../../../assets/image4.webp';

const Instructions = () => {
  const instructions = [
    {
      image: image1,
      subtitle: "Team Composition",
      description: "Each team consists of 2 members. Only the team lead should register.",
    },
    {
      image: image2,
      subtitle: "Registration Fee",
      description: "There is no registration fee for participating.",
    },
    {
      image: image3,
      subtitle: "Preliminary Round",
      description: "The preliminary round will take place online. Date and time will be informed shortly.",
    },
    {
      image: image4,
      subtitle: "Confirmation",
      description: "Selected teams will receive a confirmation mail for the offline event.",
    },
  ];

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden text-white font-poppins">
      {/* Background Image */}
      <img
        src={instructionBg}
        alt="Instructions Background"
        className="absolute inset-0 object-cover w-full h-full brightness-70"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl px-4 py-16 text-center md:px-8">
        <h1 className="mb-8 text-2xl font-bold tracking-widest uppercase md:text-3xl font-good">
          Gear up, Space Hero! Follow these instructions to avoid cosmic chaos
        </h1>
        <div className="flex flex-col md:flex-row md:justify-between">
          <div className="flex flex-col space-y-8 md:w-1/2 md:mr-4">
            {instructions.slice(0, 2).map((instruction, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-4 bg-black rounded-lg shadow-lg md:flex-row bg-opacity-30 backdrop-blur-lg"
              >
                <img
                  src={instruction.image}
                  alt={instruction.subtitle}
                  className="object-cover w-48 h-48 mb-4 rounded-lg md:mb-0 md:mr-4"
                />
                <div className="text-center md:text-left">
                  <h2 className="mb-2 text-lg font-semibold md:text-xl">{instruction.subtitle}</h2>
                  <p className="text-base md:text-lg">{instruction.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col space-y-8 md:w-1/2 md:ml-4">
            {instructions.slice(2).map((instruction, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-4 bg-black rounded-lg shadow-lg md:flex-row bg-opacity-30 backdrop-blur-lg"
              >
                <img
                  src={instruction.image}
                  alt={instruction.subtitle}
                  className="object-cover w-48 h-48 mb-4 rounded-lg md:mb-0 md:mr-4"
                />
                <div className="text-center md:text-left">
                  <h2 className="mb-2 text-lg font-semibold md:text-xl">{instruction.subtitle}</h2>
                  <p className="text-base md:text-lg">{instruction.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instructions;
