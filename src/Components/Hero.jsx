import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import cyberpunk from '../assets/cyberpunk.mp4';
import Header from './Header';

const Hero = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleEnterClick = () => {
    navigate('/loading'); // Navigate to the loading page
  };

  return (
    <div className={`relative min-h-screen font-poppins home__bg ${menuOpen ? 'pt-16' : ''}`}>
      <video 
        src={cyberpunk} 
        autoPlay 
        loop 
        muted 
        className="absolute top-0 left-0 object-cover w-full h-full"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-20"></div>
      <Header />
      <section className={`relative z-10 md:mt-20 sm:mt-20 px-4 text-left text-white transform -translate-y-1/2 left-4 top-[5cm] ${menuOpen ? 'pt-16' : ''}`} style={{ width: '90%', maxWidth: '800px' }}>
        <p className="text-lg text-justify md:text-2xl lg:text-xl">
          Welcome to the World of
        </p>
        <h1 className="mb-4 text-4xl font-extrabold md:text-5xl lg:text-6xl md:mb-4 lg:mb-4 font-good">AIOTA 2.0</h1>
        <p className="mb-2 text-lg font-medium text-justify md:text-xl lg:text-lg md:mb-8 lg:mb-10">
          Welcome to AIOTA 2.0, your gateway to the future where the digital and physical worlds merge, and tomorrow's possibilities come to life today. More than just a symposium, AIOTA 2.0 is an immersive experience crafted to spark your imagination. Hosted by the Departments of AIML and IoT at Sri Sairam Engineering College, this event is a celebration of innovation and collaboration. Join us to explore the frontiers of technology, pushing the boundaries of what's possible in our rapidly evolving world.
        </p>
        <button 
          onClick={handleEnterClick}
          className="px-4 py-2 text-sm text-white border-2 border-white rounded-full md:px-6 lg:px-8 md:py-3 lg:py-4 md:text-base lg:text-lg hover:bg-white hover:text-black"
        >
          Enter
        </button>
      </section>
    </div>
  );
};

export default Hero;
