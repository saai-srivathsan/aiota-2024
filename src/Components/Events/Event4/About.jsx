import React from 'react';
import e41 from '../../../assets/e41.webp'; // Import the image

const About = () => {
  return (
    <div className="relative flex flex-col items-center justify-center w-full min-h-screen p-8 mt-5 mb-5">
      {/* Background Image */}
      <div 
        className="absolute top-0 left-0 w-full h-full bg-center bg-cover brightness-70" 
        style={{ backgroundImage: `url(${e41})` }}
      ></div>

      {/* Overlay Content */}
      <div className="relative w-full max-w-4xl p-8 bg-black rounded-lg shadow-xl bg-opacity-70 drop-shadow-xl">
        <div className="flex flex-col items-center">
          <div className="text-center">
            <h1 className="mb-6 text-6xl font-bold text-white md:text-5xl lg:text-6xl font-good">
              LCU 2.0 EVENT
            </h1>
            <p className="text-lg font-medium text-white font-poppins md:text-xl lg:text-2xl">
            Get ready to take your UI design skills to the next level at Let’s Code the UI, part of AIOTA 2.0! On 28/08/2024, join us for an exciting challenge where you can turn your creative visions into stunning user interfaces.
            </p>
            <div className="contact text-white">
              <p><br/>Event Coordinators</p>
              <br />
              <p>Shalini H - +91 63829 60279</p>
              <p>Balamurugan G - +91 73057 68301</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
