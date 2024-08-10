import React, { useState } from 'react';
import { Instagram, YouTube, Twitter, Facebook, LinkedIn } from '@mui/icons-material';
import logo from './assets/logo.webp';

const Footer = () => {
  const [openColumn, setOpenColumn] = useState(null);

  const toggleColumn = (index) => {
    setOpenColumn(openColumn === index ? null : index);
  };

  const columns = [
    'Home',
    'About Us',
    'Events',
    'Contact Us',
    'Help'
  ];

  return (
    <footer className="p-3 text-white bg-gray-800 md:px-6 font-poppins">
      <div className="flex flex-col justify-between gap-6 pb-3 border-b border-gray-300 md:flex-row">
        <div className="max-w-lg">
          <div className="flex items-center m-2 mr-8">
            <img src={logo} className="w-20 h-12"/>
          </div>
          <p className="m-2 mr-8 text-sm text-white">
            Department of Computer Science Engineering with Artificial Intelligence and Machine Learning
          </p>
          <p className="m-2 mr-8 text-sm text-white">Department of Internet of Things</p>
          <p className="m-2 mr-8 text-sm text-white">
            Sri Sairam Engineering College
            <br></br>
            Sai Leo Nagar,West Tambaram Poonthandalam, Village, Chennai, Tamil Nadu 602109
          </p>
          <a href="https://www.google.co.in/maps/dir//Sri+Sairam+Engineering+College,+Sai+Leo+Nagar,West+Tambaram+Poonthandalam,+Village,+Chennai,+Tamil+Nadu+602109/@12.9602171,80.0548322,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3a52f596c7fb72c9:0x8e7a30529f9ef227!2m2!1d80.0574071!2d12.9602171?entry=ttu"
           className="m-2 mr-8 text-sm text-white hover:text-purple-700" fontSize="large" target="_blank">Get Directions 🧭</a>
        </div>
      </div>

      <div className="flex flex-col gap-2 mt-3 md:flex-row md:mt-0">
        <span className="mt-3 mr-4">Follow Us</span>
        <div className="flex mt-1">
          <a href="https://www.instagram.com/aiota__2024?igsh=dmtxZ2x2NjJybWJz" target="_blank" rel="noopener noreferrer" className="ml-2">
            <Instagram className="hover:text-purple-700" fontSize="large" target="_blank" style={{ verticalAlign: 'middle' }} />
          </a>
          <a href="https://www.instagram.com/sairam_aiml_?igsh=MWIyZTkzeGxwdTk2OQ==" target="_blank" rel="noopener noreferrer" className="ml-2">
            <Instagram className="hover:text-purple-700" fontSize="large" target="_blank" style={{ verticalAlign: 'middle' }} />
          </a>
          <a href="https://www.instagram.com/sairam__iot?igsh=MXVvcHlrNG53emxmeQ==" target="_blank" rel="noopener noreferrer" className="ml-2">
            <Instagram className="hover:text-purple-700" fontSize="large" target="_blank" style={{ verticalAlign: 'middle' }} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
