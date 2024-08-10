import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import spaceocean from '../../../assets/spaceocean.mp4';
import Header from '../../Header';
import Event1About from './About';
import Hero from './Hero';
import Instructions from './Instructions';
import Rounds from './Rounds';
import Round1 from './Round1';
import Round2 from './Round2';
import Round3 from './Round3';
import RegisterPrompt from './RegisterPrompt';

const Event1 = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleEnterClick = () => {
    navigate('/loading1'); // Navigate to the loading page for Event 1
  };

  return (
    <>
    <div className={`relative min-h-screen font-poppins home__bg ${menuOpen ? 'pt-16' : ''}`}>
      <Hero />
      </div>
      <Event1About />
      <Instructions />
      <Round1 />
      <Round2 />
      <Round3 />
      <RegisterPrompt />
    </>
  );
};

export default Event1;
