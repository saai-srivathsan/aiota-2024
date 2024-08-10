import React from 'react';
import { LinkedIn } from '@mui/icons-material'; // Import LinkedIn icon from MUI
import backgroundImg from './assets/bg6.webp'; // Import the background image
import developer1 from './assets/madhu.png'; // Example images
import developer2 from './assets/jaya.png';
import developer3 from './assets/sanjai.png';
import developer4 from './assets/shalini.png';

const developerTeamData = [
  {
    name: 'Madhumitha D',
    subtitle: 'CSE (AIML) - 3rd year',
    linkedInUrl:'https://www.linkedin.com/in/madhudasarat?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    imgSrc: developer1,
  },
  {
    name: 'Jayachandiran',
    subtitle: 'CSE (AIML) - 3rd year',
    linkedInUrl: 'https://www.linkedin.com/in/jayachandiran-kumar-068b8a252?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    imgSrc: developer2,
  },
  {
    name: 'Sanjai P',
    subtitle: 'CSE (IoT) - 3rd year',
    linkedInUrl: 'https://www.linkedin.com/in/sanjai-p-308864257/',
    imgSrc: developer3,
  },
  {
    name: 'Shalini K',
    subtitle: 'CSE (IoT) - 3rd year',
    linkedInUrl: 'https://www.linkedin.com/in/shalini-krishnan-5b1122258?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    imgSrc: developer4,
  },
];

const DeveloperTeam = () => {
  return (
    <div className="relative flex flex-col items-center justify-center w-full min-h-screen p-8 mt-5 mb-5">
      {/* Background Image */}
      <img 
        src={backgroundImg} 
        alt="Background"
        className="absolute top-0 left-0 object-cover w-full h-full"
      />

      {/* Overlay Content */}
      <div className="relative w-full max-w-6xl p-8 bg-black rounded-lg shadow-xl bg-opacity-80 drop-shadow-xl">
        <h1 className="mb-12 text-4xl font-bold text-center text-white md:text-5xl lg:text-6xl">
          Developer Team
        </h1>
        <div className="grid grid-cols-1 gap-8 text-center sm:grid-cols-2 lg:grid-cols-4 font-poppins">
          {developerTeamData.map((person, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center space-y-4 transition-transform duration-300 rounded-lg hover:scale-105 group hover:shadow-[0_0_25px_10px_rgba(128,0,128,0.7)]"
            >
              <img
                src={person.imgSrc}
                alt={person.name}
                className="object-cover rounded-full h-42 w-42 brightness-70"
              />
              <h2 className="text-xl font-semibold text-white">{person.name}</h2>
              <p className="text-white">{person.subtitle}</p>
              <a href={person.linkedInUrl} target="_blank" rel="noopener noreferrer">
                <LinkedIn 
                  style={{ fontSize: 30 }} 
                  className="text-white transition-colors duration-300 group-hover:text-purple-700" 
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DeveloperTeam;
