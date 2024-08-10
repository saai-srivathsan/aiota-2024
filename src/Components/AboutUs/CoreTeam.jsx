import React from 'react';
import { LinkedIn } from '@mui/icons-material'; // Import LinkedIn icon from MUI
import backgroundImg from './assets/bg5.jpg'; // Import the background image
import core1 from './assets/dinesh.png'; // Example images
import core2 from './assets/sachin.png';
import core3 from './assets/alfred.png';
import core4 from './assets/rajalakshmi.png';
import promotion2 from './assets/venkat.png'; // New image

const coreTeamData = [
  {
    name: 'Dinesh Kumar E',
    subtitle: 'CSE (AIML) - Third year',
    linkedInUrl: 'https://www.linkedin.com/in/dinesh-kumar-e?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    imgSrc: core1,
  },
  {
    name: 'Sachin M P',
    subtitle: 'CSE (AIML) - Third year',
    linkedInUrl: 'https://www.linkedin.com/in/sachin-m-p-453701255?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    imgSrc: core2,
  },
  {
    name: 'Venkat Dronadula',
    subtitle: 'CSE(AIML) - Third year',
    linkedInUrl: 'https://www.linkedin.com/in/venkat-dronadula-199285256?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
    imgSrc: promotion2,
  },
  {
    name: 'Rajalakshmi K',
    subtitle: 'CSE(IoT) - Third year',
    linkedInUrl: 'https://www.linkedin.com/in/rajalakshmi-krishnamurthy-ba67a6260?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    imgSrc: core4,
  },
  {
    name: 'Alfred Christo W',
    subtitle: 'CSE(IoT) - Third year',
    linkedInUrl: 'https://www.linkedin.com/in/alfred-christo-bba6a8257?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    imgSrc: core3,
  },
];

const CoreTeam = () => {
  return (
    <div className="relative flex flex-col items-center justify-center w-full min-h-screen p-8 mt-5 mb-5">
      {/* Background Image */}
      <img 
        src={backgroundImg} 
        alt="Background"
        className="absolute top-0 left-0 object-cover w-full h-full brightness-50"
      />

      {/* Overlay Content */}
      <div className="relative w-full max-w-full p-8 bg-black rounded-lg shadow-xl bg-opacity-70 drop-shadow-xl">
        <h1 className="mb-12 text-4xl font-bold text-center text-white md:text-5xl lg:text-6xl">
          Core Team
        </h1>
        <div className="grid grid-cols-1 gap-6 text-center rounded-lg sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 font-poppins">
          {coreTeamData.map((person, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center p-4 space-y-4 rounded-lg transition-transform duration-300 hover:scale-105 group hover:shadow-[0_0_25px_10px_rgba(255,255,0,0.7)]"
              style={{ maxWidth: '16rem' }} // Adjusted width to fit the new image size
            >
              <img
                src={person.imgSrc}
                alt={person.name}
                className="object-cover w-48 h-48 rounded-full" // Reduced size of images
              />
              <h2 className="text-xl font-semibold text-white">{person.name}</h2>
              <p className="text-white">{person.subtitle}</p>
              <a href={person.linkedInUrl} target="_blank" rel="noopener noreferrer">
                <LinkedIn 
                  style={{ fontSize: 30 }} 
                  className="text-white transition-colors duration-300 group-hover:text-yellow-500" 
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoreTeam;
