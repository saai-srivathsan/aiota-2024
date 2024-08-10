import React from 'react';
import {
  EventNote as EventNoteIcon,
  Star as StarIcon,
  EmojiEvents as EmojiEventsIcon,
  Group as GroupIcon
} from '@mui/icons-material';
import featuresImage from '../assets/features.webp'; // Replace with your image file path

const newfeatures = [
  {
    title: 'Tech Events',
    description: 'Dive into a series of cutting-edge tech events showcasing the latest advancements in AI and IoT.',
    icon: <EventNoteIcon fontSize="large" sx={{ color: '#9b59b6' }} />, // Purple color
  },
  {
    title: 'Exciting Prizes',
    description: 'Engage in interactive activities and competitions for a chance to win incredible prizes.',
    icon: <StarIcon fontSize="large" sx={{ color: '#9b59b6' }} />, // Purple color
  },
  {
    title: 'Unexpected Twists',
    description: 'Experience thrilling surprises and twists that will keep you on your toes throughout the symposium.',
    icon: <EmojiEventsIcon fontSize="large" sx={{ color: '#9b59b6' }} />, // Purple color
  },
  {
    title: 'Distinguished Chief Guests',
    description: 'Hear from renowned industry leaders and influential figures who will share their insights and vision.',
    icon: <GroupIcon fontSize="large" sx={{ color: '#9b59b6' }} />, // Purple color
  },
];

const Features = () => {
  return (
    <div className="relative min-h-screen overflow-hidden font-poppins">
      {/* Background Image */}
      <img
        src={featuresImage}
        alt="Features"
        className="absolute top-0 left-0 object-cover w-full h-full"
      />

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40"></div>

      {/* Features Container */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4">
        <h1 className="font-medium text-white text-md font-poppins">Before entering into the world know</h1>
        <h1 className="mb-4 text-6xl font-bold text-white font-good">What's in Store?</h1>
        <div className="flex flex-col w-full mt-10 max-w-6xl gap-8 md:flex-row md:justify-between">
          {newfeatures.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center w-full p-6 space-y-4 bg-black border-2 border-gray-600 rounded-lg shadow-lg bg-opacity-40 h-80 md:w-60 transform transition-transform duration-300 hover:scale-110"
            >
              <div className="flex-shrink-0 text-purple-600">
                {feature.icon}
              </div>
              <div className="text-center">
                <h2 className="mb-4 text-xl font-semibold text-white">{feature.title}</h2>
                <p className="text-white">{feature.description}</p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default Features;
