import React from 'react';
import { LinkedIn } from '@mui/icons-material'; // Import LinkedIn icon from MUI
import backgroundImg from './assets/bg4.jpg'; // Import the background image
import design2 from './assets/durgie.png';
import design3 from './assets/raji.png';
import design4 from './assets/priya.png';
import design5 from './assets/rithu.png'; // Add the new image
import promotion1 from './assets/sakthi.png'; // Add the new image for the first card

const designTeamData = [
  {
    name: 'Sakthi Sree P',
    subtitle: 'CSE(AIML) - Third year',
    linkedInUrl: 'https://www.linkedin.com/in/sakthi-sree-474811257?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    imgSrc: promotion1,
  },
  {
    name: 'Shri Durga',
    subtitle: 'CSE(AIML) - Third year',
    linkedInUrl: 'https://www.linkedin.com/in/shri-durga-k-p-48651a27a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    imgSrc: design2,
  },
  {
    name: 'Rithikka N',
    subtitle: 'CSE (AIML) - Third year',
    linkedInUrl: 'https://www.linkedin.com/in/rithikka-n-7018a2257?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
    imgSrc: design5,
  },
  {
    name: 'Rajeswari S',
    subtitle: 'CSE(IOT) - Third year',
    linkedInUrl: 'https://www.linkedin.com/in/raji-saravanan-19b00025a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    imgSrc: design3,
  },
  {
    name: 'Priyadarshini K',
    subtitle: 'CSE(IOT) - Third year',
    linkedInUrl: 'https://www.linkedin.com/in/priyadarshini-karthikeyan-8837b5259?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    imgSrc: design4,
  },
];

const DesignTeam = () => {
  return (
    <div className="relative flex flex-col items-center justify-center w-full min-h-screen p-8 mt-5 mb-5">
      {/* Background Image */}
      <img 
        src={backgroundImg} 
        alt="Background"
        className="absolute top-0 left-0 object-cover w-full h-full brightness-50"
      />

      {/* Overlay Content */}
      <div className="relative w-full max-w-full p-8 bg-black rounded-lg shadow-xl bg-opacity-90 drop-shadow-xl">
        <h1 className="mb-12 text-4xl font-bold text-center text-white md:text-5xl lg:text-6xl">
          Design Team
        </h1>
        <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-2 lg:grid-cols-5 font-poppins">
          {designTeamData.map((person, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center space-y-4 transition-transform duration-300 rounded-lg hover:scale-95 group hover:translate-y-[-10px] hover:shadow-[0_0_25px_5px_rgba(0,255,255,0.7)]"
            >
              <img
                src={person.imgSrc}
                alt={person.name}
                className="object-cover w-56 h-56 rounded-full" // Slightly decreased the size
              />
              <h2 className="text-lg font-semibold text-white">{person.name}</h2>
              <p className="text-sm text-white">{person.subtitle}</p>
              <a href={person.linkedInUrl} target="_blank" rel="noopener noreferrer">
                <LinkedIn 
                  style={{ fontSize: 28 }} 
                  className="text-white transition-colors duration-300 group-hover:text-cyan-400" 
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DesignTeam;
