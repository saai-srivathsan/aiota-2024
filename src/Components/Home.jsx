import React from 'react';
import Hero from './Hero';
import AboutSection from './AboutSection';
import Features from './Features';
import CountdownPage from './CountdownPage';

const Home = () => {
  return (
    <>
      <Hero />
      <div className="bg-gray-900">
        <AboutSection />
      </div>
      <Features />
      <CountdownPage />
    </>
  );
};

export default Home;
