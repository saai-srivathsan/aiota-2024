import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import astronaut from '../../assets/astronaut.webp';
import img from '../../assets/img.webp';
import codecastle from '../../assets/castle.webp';
import InsightIsland from '../../assets/island.webp';
import PixelPark from '../../assets/e50.webp';
import TechTown from '../../assets/e60.webp';
import Cybercity from '../../assets/e70.webp';
import e80 from '../../assets/e79.webp'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const events = [
  {
    id: 'event1',
    title: 'Titan Base',
    subtitle: 'Prezento 2.0',
    description: 'Be the captain of your intellectual ship as you chart new frontiers of knowledge and collaborate with a crew of brilliant minds.',
    image: astronaut,
  },
  {
    id: 'event2',
    title: 'Mystic Grove',
    subtitle: 'Swift-a-thon',
    description: 'Venture into a mystical realm where ancient forests, floating islands, and magical creatures await. Tackle coding challenges and unlock enchanted treasures as you journey through this epic hackathon. Gear up for an adventure where tech meets magic!',
    image: img,
  },
  {
    id: 'event3',
    title: 'Code Castle',
    subtitle: 'Datablitz',
    description: 'Dive into this legendary fortress to analyze IPL statistics and develop powerful algorithms. Transform raw data into valuable insights as you unlock ancient coding secrets. Prepare for an epic journey where data meets destiny!',
    image: codecastle,
  },
  {
    id: 'event4',
    title: 'Insight Island',
    subtitle: 'LCU 2.0',
    description: 'Dive into "LCU" where teams of three will transform mystical UI designs into dazzling code with the help of AI magic! Battle through two thrilling rounds. Use your wits in a memory game to choose your color palette and unleash your coding prowess. Ready to shine in the spotlight?',
    image: InsightIsland,
  },
  {
    id: 'event5',
    title: 'Ocean Realm',
    subtitle: 'Nexus 2.0',
    description: 'Take a deep dive into Ocean Realm, a vibrant showcase of groundbreaking projects and technological marvels, where innovation knows no bounds.',
    image: PixelPark,
  },
  {
    id: 'event6',
    title: 'Magic Glade',
    subtitle: 'Tech Olympics',
    description: 'Venture into a magical realm where your coding skills and logical prowess will be put to the test! Conquer whimsical challenges in a fairy-tale adventure that pushes your limits. Team up with fellow adventurers and showcase your brilliance in a fantastical quest!',
    image: TechTown,
  },
  {
    id: 'event7',
    title: 'Cyber City',
    subtitle: 'Promptoria',
    description: 'Enter a bustling metropolis powered by steam and gears, where creativity fuels the future. In this city of brass and clockwork, you will generate prompts that spark innovation and adventure. As you craft your ideas, watch as airships soar, machines whir, and the cityscape transforms with your imaginative prowess.',
    image: Cybercity,
  },
  {
    id: 'event8',
    title: 'Arcane Library',
    subtitle: 'DesigNerds',
    description: 'In this whimsical challenge, conjure your creativity with a spellbinding poster design and decipher IoT mysteries through a delightful game of Dumb Charades. Get ready for a fantastical journey where your artistic flair and technical wizardry will shine! ',
    image: e80,
  },
];

const NextArrow = ({ onClick }) => {
  return (
    <div className="absolute z-10 text-white transform -translate-y-1/2 cursor-pointer top-1/2 right-4" onClick={onClick}>
      <FaArrowRight size={40} />
    </div>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <div className="absolute z-10 text-white transform -translate-y-1/2 cursor-pointer top-1/2 left-4" onClick={onClick}>
      <FaArrowLeft size={40} />
    </div>
  );
};

const EventSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay: true,
    autoplaySpeed: 3000,
    customPaging: (i) => (
      <div
        style={{
          marginTop: "25px",
          width: "7px",
          height: "7px",
          borderRadius: "50%",
          backgroundColor: i === settings.currentSlide ? "lavender" : "white", // Lavender for current slide
        }}
      />
    ),
    appendDots: (dots) => (
      <div
        style={{
          backgroundColor: "transparent", // Background of the dots container
          padding: "10px",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
  };

  return (
    <Slider {...settings} className="w-full h-full mb-10">
      {events.map(event => (
        <div key={event.id} className="relative w-full h-screen">
          <img src={event.image} alt={event.title} className="object-cover w-full h-full" />
          <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center text-white bg-black bg-opacity-50">
            <h1 className="mb-2 text-6xl font-bold font-good">{event.title}</h1>
            <p className="max-w-xl mb-4 tracking-widest text-2xl uppercase font-poppins">{event.subtitle}</p>
            <p className="max-w-xl mb-4 font-poppins">{event.description}</p>
            <a href={`/events/${event.id}/loading`} target="_blank" rel="noopener noreferrer">
              <button className="px-4 py-2 text-sm text-white border-2 border-white rounded-full hover:bg-white hover:text-black">
                Enter
              </button>
            </a>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default EventSlider;
