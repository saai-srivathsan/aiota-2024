import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import l2 from '../../assets/e24.mp4'; // Updated video

const Loading2 = () => {
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
        const nextProgress = prevProgress + 20;
        if (nextProgress >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            navigate('/events/event2'); // Updated path to Event2
          }, 1000);
        }
        return nextProgress;
      });
    }, 500);

    return () => {
      clearInterval(interval);
      video.removeEventListener('canplaythrough', handleCanPlayThrough);
    };
  }, [navigate]);

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gray-900 font-poppins">
      <video
        id="loading-video"
        src={l2}
        autoPlay
        loop
        preload="auto"
        className="absolute top-0 left-0 object-cover w-full h-full"
      />
      {!isVideoLoaded && (
        <div className="absolute top-0 left-0 w-full h-full bg-black"></div>
      )}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-20"></div>

      <div className="relative z-10 px-4 text-center text-white">
        <h1 className="mb-2 text-5xl font-bold font-good">Eldoria Awaits!</h1>
        <h2 className="mb-8 text-2xl font-medium">The Portal to Enchantment is Opening. Ready Your Spells and Steady Your Heart</h2>

        <div className="w-3/4 h-4 max-w-4xl mx-auto overflow-hidden bg-gray-700 rounded-full">
          <div
            className="h-full duration-300 bg-white transition-width"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p className="mt-4 text-xl">{progress}%</p>
      </div>
    </div>
  );
};

export default Loading2;
