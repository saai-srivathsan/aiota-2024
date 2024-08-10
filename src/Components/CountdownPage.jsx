import React, { useState, useEffect } from 'react';
import cityImage from '../assets/city.webp'; // Import your image file

const eventDate = new Date('2024-09-04T00:00:00');

const calculateTimeRemaining = (eventDate) => {
  const now = new Date();
  const timeDiff = eventDate - now;

  if (timeDiff <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

  return {
    days,
    hours,
    minutes,
    seconds,
  };
};

const Countdown = () => {
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining(eventDate));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining(eventDate));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center mt-8 text-white">
      <h2 className="mb-4 text-3xl tracking-wide uppercase font-good">Save The Date</h2>
      <div className="text-4xl text-lime-400 font-good">
        <span>{timeRemaining.days} : </span>
        <span>{timeRemaining.hours} : </span>
        <span>{timeRemaining.minutes} : </span>
        <span>{timeRemaining.seconds} </span>
      </div>
    </div>
  );
};

const CountdownPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-800 font-poppins">
      <div className="relative w-full h-full">
        <img
          className="object-cover w-full h-full"
          src={cityImage}
          alt="City"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-white bg-black bg-opacity-50">
          <h1 className="mb-4 text-4xl font-bold text-center font-good">The Veil is Lifting. Step Through</h1>
          <h2 className="mb-4 text-xl font-medium tracking-widest text-center uppercase font-poppins">The Gatekeepers are ready. Are you?</h2>
          <p className="max-w-3xl text-lg text-center">
            A new era dawns. A world of wonder and peril awaits. Ancient magic stirs, and destiny calls. Prepare to embark on an extraordinary journey through realms unknown. The countdown has begun.
          </p>
          {/* Countdown Timer */}
          <Countdown />
        </div>
      </div>
    </div>
  );
};

export default CountdownPage;
