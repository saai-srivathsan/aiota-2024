import React from 'react';
import e52 from '../../../assets/e72.webp'; // Import the image

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
            Promptoria
            </h1>
            <p className="text-lg font-medium text-white font-poppins md:text-xl lg:text-2xl">
            Promptoria is a dynamic competition where creativity and coding prowess intersect. In this event, teams of two are challenged to leverage advanced AI tools to solve complex problems. Initially, teams will engage in a word-generation task using ChatGPT, testing their efficiency and ingenuity. The top teams will then advance to a coding challenge in the final round, where they must develop solutions using a surprise AI tool. This event highlights innovative thinking and technical skills in a competitive and collaborative environment.</p>
            <div className="contact text-white">
              <p><br/>Event Coordinators</p>
              <br />
              <p>Alfred Christo W- +91 8610239159              </p>
              <p>Yeshwanth Raj C- +91 9003247079</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
