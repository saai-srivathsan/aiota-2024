import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import e81 from '../../../assets/e81.webp'; // Updated image path
import Header from '../../Header';

const Hero = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleEnterClick = () => {
    navigate('/loading1'); // Navigate to the loading page for Event 1
  };

  return (
    <div className={`relative min-h-screen font-poppins home__bg ${menuOpen ? 'pt-16' : ''}`}>
      <img 
        src={e81} 
        alt="Arcane Library Background"
        className="absolute top-0 left-0 object-cover w-full h-full"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30"></div>
      <Header />
      <section className={`relative z-10 md:mt-20 sm:mt-20 lg:mt-[3cm] lg:ml-[1cm] px-4 ${menuOpen ? 'pt-16' : ''}`} style={{ width: '100%', maxWidth: '1200px' }}>
        <div className="flex flex-col items-start justify-between md:flex-row md:items-center">
          <div className="mb-8 text-left text-white md:mb-0 md:text-left">
            <h1 className="max-w-4xl p-2 pl-4 pr-4 mb-4 text-4xl font-extrabold border-2 border-white md:text-3xl lg:text-7xl md:mb-4 lg:mb-4 font-good">
              Arcane Library
            </h1>
          </div>
          <div className="text-white md:ml-20 lg:ml-[7cm]">
            <p className="text-lg font-bold text-justify lg:ml-[7cm] md:text-2xl lg:text-xl">
              Welcome to Arcane Library!
            </p>
            <p className="text-sm text-justify max-w-sm lg:ml-[7cm] md:text-2xl lg:text-xl">
              Every book is a portal to wonder and every scroll holds a secret spell! Embark on a quest to unlock the magic of IoT. Get ready to weave your technical prowess into enchanting adventures.
            </p>
            <div className="flex flex-col lg:ml-[7cm] mt-5 space-y-4 md:flex-row md:space-y-0 md:space-x-4">
            <a href="https://r.mtdv.me/videos/7RU8e749Iz" target="_blank"
                className="px-4 py-2 text-sm text-white border-2 border-white rounded-full md:px-6 lg:px-8 md:py-3 lg:py-4 md:text-base lg:text-lg hover:bg-white hover:text-black"
              >
                Explore
              </a>
              <a href="https://r.mtdv.me/videos/7RU8e749Iz" target="_blank"
                className="px-4 py-2 text-sm text-white border-2 border-white rounded-full md:px-6 lg:px-8 md:py-3 lg:py-4 md:text-base lg:text-lg hover:bg-white hover:text-black"
              >
                Explore
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;