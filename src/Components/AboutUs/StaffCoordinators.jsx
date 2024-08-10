import React from 'react';
import { LinkedIn } from '@mui/icons-material'; // Import LinkedIn icon from MUI
import backgroundImg from './assets/bg2.jpg'; // Import the background image
import coordinator1 from './assets/kavimam.png'; // Example images
import coordinator2 from './assets/valarmam.png';

const staffCoordinatorsData = [
  {
    name: 'Mrs. K Kavitha',
    linkedInUrl: 'https://www.linkedin.com/in/kavitha-k-516449290/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    imgSrc: coordinator1,
  },
  {
    name: 'Dr. G Valarmathy',
    linkedInUrl: 'https://www.linkedin.com/in/markthompson',
    imgSrc: coordinator2,
  },
];

const StaffCoordinators = () => {
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
        <h1 className="mb-12 text-2xl font-bold text-center text-white md:text-5xl lg:text-6xl">
          Staff Coordinators
        </h1>
        <div className="grid grid-cols-1 gap-8 text-center sm:grid-cols-2 font-poppins">
          {staffCoordinatorsData.map((person, index) => (
            <div 
              key={index} 
              className="relative flex flex-col items-center bg-black bg-opacity-70 rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105 group hover:shadow-[0_0_25px_10px_rgba(0,255,255,0.7)]"
            >
              <img
                src={person.imgSrc}
                alt="Coordinator"
                className="object-cover w-full h-full" // Full width and height
              />
              <a 
                href={person.linkedInUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className={`absolute text-white transition-colors duration-300 group-hover:text-cyan-400 ${
                  index === 0 ? 'bottom-2 left-2' : 'bottom-2 right-2'
                }`}
              >
                <LinkedIn style={{ fontSize: 30 }} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StaffCoordinators;
