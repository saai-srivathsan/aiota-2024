import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import vd from '../../assets/e24.mp4'; // Adjust the path as necessary

const Loading3 = () => {
  const [progress, setProgress] = useState(0);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const video = document.getElementById('loading-video');
    const handleCanPlayThrough = () => {
      setIsVideoLoaded(true);
    };

    video.addEventListener('canplaythrough', handleCanPlayThrough);

    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        const nextProgress = Math.min(prevProgress + 13, 100); // Smaller increments for smoother progress
        if (nextProgress >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            navigate('/events/event3'); // Navigate to Event3.jsx
          }, 1000); // Smooth transition delay
        }
        return nextProgress;
      });
    }, 300); // Shorter interval for more responsive progress

    return () => {
      clearInterval(interval);
      video.removeEventListener('canplaythrough', handleCanPlayThrough);
    };
  }, [navigate]);

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gray-900 font-poppins">
      {/* Background Video */}
      <video
        id="loading-video"
        src={vd}
        autoPlay
        loop
        preload="auto"
        className="absolute top-0 left-0 object-cover w-full h-full brightness-50" // Adjust brightness here
      />
      {!isVideoLoaded && (
        <div className="absolute top-0 left-0 w-full h-full bg-black"></div>
      )}
      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30"></div>

      <div className="relative z-10 px-4 text-center text-white">
        {/* Title */}
        <h2 className="mt-4 text-3xl font-medium animate-subtitle">Keep calm and say</h2>
        <h1 className="text-5xl font-extrabold animate-title font-good">Cheen Tapak Tum Tum</h1>

        {/* Subtitle */}
        <h2 className="mt-4 text-xl font-medium animate-subtitle">While we transport you to the magical world!</h2>

        {/* Progress Bar */}
        <div className="w-4/5 h-6 max-w-5xl mx-auto mt-8 overflow-hidden bg-gray-800 rounded-full animate-progress">
          <div
            className="h-full transition-all duration-500 bg-white"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p className="mt-4 text-2xl animate-percentage">{progress}%</p>
      </div>
    </div>
  );
};

export default Loading3;
