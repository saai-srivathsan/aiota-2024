import React from 'react';
import { LinkedIn } from '@mui/icons-material'; // Import LinkedIn icon from MUI
import backgroundImg from './assets/bg3.jpg'; // Import the background image
import student1 from './assets/bhawaj.png'; // Example images
import student2 from './assets/rifa.png';
import student3 from './assets/govind.png';
import student4 from './assets/komagal.png';

const studentCoordinatorsData = [
  {
    name: 'Bharathwaj S',
    subtitle: 'CSE(AIML) - Third year',
    linkedInUrl: 'https://www.linkedin.com/in/bharathwaj-s-a93559257?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    imgSrc: student1,
  },
  {
    name: 'Amathul Rifa A',
    subtitle: 'CSE(AIML) - Third year',
    linkedInUrl: 'https://www.linkedin.com/in/amathul-rifa-141a37255?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    imgSrc: student2,
  },
  {
    name: 'Govindha Rajulu E',
    subtitle: 'CSE(IoT) - Third year',
    linkedInUrl: 'https://www.linkedin.com/in/govindha-rajulu-e-33792a247?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    imgSrc: student3,
  },
  {
    name: 'Komagal S S',
    subtitle: 'CSE(IoT) - Third year',
    linkedInUrl: 'https://www.linkedin.com/in/komagal-s-s-253546282?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    imgSrc: student4,
  },
];

const StudentCoordinators = () => {
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
          Student Coordinators
        </h1>
        <div className="grid grid-cols-1 gap-8 text-center sm:grid-cols-2 lg:grid-cols-4 font-poppins">
          {studentCoordinatorsData.map((person, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center space-y-4 transition-transform duration-300 rounded-lg hover:scale-105 group hover:shadow-[0_0_25px_10px_rgba(0,0,255,0.7)]" // Updated blue hover shadow
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
                  className="text-white transition-colors duration-300 group-hover:text-blue-500" // Updated LinkedIn icon hover color
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentCoordinators;
