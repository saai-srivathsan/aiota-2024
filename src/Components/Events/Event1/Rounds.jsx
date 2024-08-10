import React from 'react';
import './Rounds.css'; // Import the CSS file for styling

const rounds = [
  {
    title: "ROUND 1: DESIGNATHON",
    mode: "Online 💻",
    task: "Design a simple UI for a mobile music player app 🎨",
    time: "60 minutes ⏳",
    requirements: "Share your screen during the round and submit your Figma file via Google form 📁",
    rules: "Adhere strictly to the time limit; late submissions may lead to disqualification 🚫",
    advancement: "Top 10 teams will move to the next round 🏆"
  },
  {
    title: "ROUND 2: LOGO LAB",
    mode: "Offline (Physical presence required) 🏢",
    task: "Design a logo based on a theme revealed at the start 🎨",
    time: "45 minutes ⏰",
    requirements: "The logo must be original, creative, and reflective of the theme 🖼️",
    advancement: "Top 7 teams will move to the next round 🏅"
  },
  {
    title: "ROUND 3: UI MAYHEM",
    mode: "Offline (Both team members must be present) 🏠",
    task: "Design an innovative and user-friendly interface for a versatile application, with details revealed on the spot 📲",
    time: "90 minutes ⏳",
    criteria: "Points awarded for functionality, innovation, and overall user experience; think outside the box 🧠",
    note: "Be prepared for unexpected hindrances to test your focus and ability to work under pressure ⚠️",
    rules: "Adhere strictly to the time limit; late submissions may lead to disqualification 🚫"
  }
];

const Rounds = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden text-white bg-black">
      <div className="absolute inset-0 opacity-50">
        <video autoPlay loop muted className="object-cover w-full h-full">
          <source src="/path/to/space_background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-80"></div>
      
      <div className="relative z-10 flex items-center justify-center w-full h-full">
        <div className="carousel-container">
          <div className="carousel">
            {rounds.map((round, index) => (
              <div key={index} className="carousel-item">
                <h2 className="mb-4 text-4xl font-bold text-yellow-300">
                  {round.title}
                </h2>
                <p className="mb-2 text-lg">
                  <strong>Mode:</strong> {round.mode}
                </p>
                <p className="mb-2 text-lg">
                  <strong>Task:</strong> {round.task}
                </p>
                <p className="mb-2 text-lg">
                  <strong>Time Limit:</strong> {round.time}
                </p>
                {round.requirements && (
                  <p className="mb-2 text-lg">
                    <strong>Requirements:</strong> {round.requirements}
                  </p>
                )}
                {round.criteria && (
                  <p className="mb-2 text-lg">
                    <strong>Criteria:</strong> {round.criteria}
                  </p>
                )}
                {round.note && (
                  <p className="mb-2 text-lg">
                    <strong>Note:</strong> {round.note}
                  </p>
                )}
                <p className="mb-2 text-lg">
                  <strong>Rules:</strong> {round.rules}
                </p>
                <p className="mb-2 text-lg">
                  <strong>Advancement:</strong> {round.advancement}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rounds;
