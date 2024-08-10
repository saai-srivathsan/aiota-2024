import React from 'react';
import e32 from '../../../assets/e32.mp4'; // Import the video

const About = () => {
  return (
    <div className="relative flex flex-col items-center justify-center w-full min-h-screen p-8 mt-5 mb-5">
      {/* Background Video */}
      <video 
        autoPlay 
        loop 
        muted 
        className="absolute top-0 left-0 object-cover w-full h-full brightness-70"
      >
        <source src={e32} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Content */}
      <div className="relative w-full max-w-4xl p-8 bg-black rounded-lg shadow-xl bg-opacity-70 drop-shadow-xl">
        <div className="flex flex-col items-center">
          <div className="text-center">
            <h1 className="mb-6 text-6xl font-bold text-white md:text-5xl lg:text-6xl font-good">
            DATABLITZ EVENT
            </h1>
            <p className="text-lg font-medium text-white font-poppins md:text-xl lg:text-2xl">
            Join our thrilling IPL Data Analytics Challenge! Form a team of 3 members and test your knowledge in an online quiz about the IPL and data analytics. The top 10 teams will advance to an exciting offline round where you'll analyze IPL player statistics from 2008 to 2024 using Power BI, Looker Studio, or Tableau. Strategize to maximize player efficiency while minimizing costs, showcasing your visualization skills and team-building strategies.  Prepare thoroughly, familiarize yourself with the tools, and get ready for an exhilarating data-driven competition! 
            </p>
            <div className="contact text-white">
              <p><br/>Event Coordinators</p>
              <br />
              <p>BHARATH R - +91 98403 43056</p>
              <p>RAHUL SENTHIL NATHAN - +91 98920 24433</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
