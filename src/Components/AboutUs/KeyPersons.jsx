import React from 'react';
import { LinkedIn } from '@mui/icons-material'; // Import LinkedIn icon from MUI
import backgroundImg from './assets/background.jpg'; // Import the background image
import ceo from './assets/ceo.png';
import principal from './assets/principal.png';
import aimlhod from './assets/priyamam.png';
import iothod from './assets/gandhimathimam.png';

const keyPersonsData = [
  {
    name: 'Dr. Sai Prakash Leo Muthu',
    subtitle: 'CEO - Sairam Institutions',
    linkedInUrl: 'https://www.linkedin.com/in/personone/',
    imgSrc: ceo,
  },
  {
    name: 'Dr. J Raja',
    subtitle: 'Principal - Sairam Engineering College',
    linkedInUrl: 'https://www.linkedin.com/in/persontwo/',
    imgSrc: principal,
  },
  {
    name: 'Dr. E. Priya',
    subtitle: 'HOD - Department of CSE (AIML)',
    linkedInUrl: 'https://www.linkedin.com/in/personthree/',
    imgSrc: aimlhod,
  },
  {
    name: 'Dr. Kanthimathi M',
    subtitle: 'HOD - Department of CSE (IOT)',
    linkedInUrl: 'https://www.linkedin.com/in/personfour/',
    imgSrc: iothod,
  },
];

const KeyPersons = () => {
  return (
    <div className="relative flex flex-col items-center justify-center w-full min-h-screen p-8 mt-5 mb-5">
      {/* Background Image */}
      <img 
        src={backgroundImg} 
        alt="Background"
        className="absolute top-0 left-0 object-cover w-full h-full "
      />

      {/* Overlay Content */}
      <div className="relative w-full max-w-6xl p-8 bg-black rounded-lg shadow-xl bg-opacity-70 drop-shadow-xl">
        <h1 className="mb-12 text-4xl font-bold text-center text-white md:text-5xl lg:text-6xl">
          Key Persons
        </h1>
        <div className="grid grid-cols-1 gap-8 text-center sm:grid-cols-2 lg:grid-cols-4 font-poppins">
          {keyPersonsData.map((person, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center p-4 space-y-4 transition-transform duration-300  rounded-lg hover:scale-105 group hover:shadow-[0_0_25px_10px_rgba(128,0,128,0.7)]"
            >
              <img
                src={person.imgSrc}
                alt={person.name}
                className="object-cover rounded-full h-42 w-42"
              />
              <h2 className="text-xl font-semibold text-white">{person.name}</h2>
              <p className="text-white">{person.subtitle}</p>
              <a href={person.linkedInUrl} target="_blank" rel="noopener noreferrer">
                <LinkedIn 
                  style={{ fontSize: 30 }} 
                  className="text-white transition-colors duration-300 group-hover:text-purple-500" 
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KeyPersons;
