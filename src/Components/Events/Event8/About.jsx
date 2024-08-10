import React from 'react';
import e52 from '../../../assets/e82.webp'; // Import the image

const About = () => {
  return (
    <div className="relative flex flex-col items-center justify-center w-full min-h-screen p-8 mt-5 mb-5">
      {/* Background Image */}
      <div 
        className="absolute top-0 left-0 w-full h-full bg-center bg-cover brightness-70" 
        style={{ backgroundImage: `url(${e52})` }}
      ></div>

      {/* Overlay Content */}
      <div className="relative w-full max-w-4xl p-8 bg-black rounded-lg shadow-xl bg-opacity-70 drop-shadow-xl">
        <div className="flex flex-col items-center">
          <div className="text-center">
            <h1 className="mb-6 text-6xl font-bold text-white md:text-5xl lg:text-6xl font-good">
            DESIG<strong className="text-green-800">N</strong>ERDS
            </h1>
            <p className="text-lg font-medium text-white font-poppins md:text-xl lg:text-2xl">
            The event showcases creativity and innovation in IoT through design and interactive challenges. Participants first create a poster and play Dumb Charades to visualize IoT concepts. In the next round, they face a surprise IoT app design challenge, testing their adaptability and technical skills. The event blends artistic expression with technical proficiency, promoting critical thinking and collaboration in the IoT field </p>          </div>
            <div className="contact text-white">
              <p><br/>Event Coordinators</p>
              <br />
              <p>K Rajalakshmi- +91 9841827497</p>
              <p>J Jaswanth Raj- +91 72004 40578</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;
