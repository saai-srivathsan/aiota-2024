import React from 'react';
import { LinkedIn } from '@mui/icons-material'; // Import LinkedIn icon from MUI
import backgroundImg from './assets/bg7.jpg'; // Import the background image
import promotion1 from './assets/sakthi.png'; // Example images
import promotion2 from './assets/venkat.png';

const promotionTeamData = [
  {
    name: 'Venkat Dronadula',
    subtitle: 'CSE(AIML) - Third year',
    linkedInUrl: 'https://www.linkedin.com/in/venkat-dronadula-199285256?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
    imgSrc: promotion2,
  },
  {
    name: 'Sakthi Sree P',
    subtitle: 'CSE(AIML) - Third year',
    linkedInUrl: 'https://www.linkedin.com/in/sakthi-sree-474811257?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    imgSrc: promotion1,
  },
];

const PromotionTeam = () => {
  return (
    <div className="relative flex flex-col items-center justify-center w-full min-h-screen p-8 mt-5 mb-5">
      {/* Background Image */}
      <img 
        src={backgroundImg} 
        alt="Background"
        className="absolute top-0 left-0 object-cover w-full h-full brightness-50"
      />

      {/* Overlay Content */}
      <div className="relative w-full max-w-4xl p-8 bg-black rounded-lg shadow-xl bg-opacity-70 drop-shadow-xl">
        <h1 className="mb-12 text-4xl font-bold text-center text-white md:text-5xl lg:text-6xl">
          Promotion Team
        </h1>
        <div className="grid grid-cols-1 gap-8 text-center sm:grid-cols-2 font-poppins">
          {promotionTeamData.map((person, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center p-4 space-y-4 transition-transform duration-300 bg-black bg-opacity-70 rounded-lg hover:scale-105 group hover:shadow-[0_0_25px_10px_rgba(0,128,0,0.7)]" // Updated dark green hover shadow
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
                  className="text-white transition-colors duration-300 group-hover:text-green-600" // Updated LinkedIn icon hover color
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PromotionTeam;
