"use client";

import Image from 'next/image';
import { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';

const TravelStories = ({
  backgroundColor = '#ffffff', // Default white background
  textColor = '#000000', // Default black text
}) => {
  const stories = [
    {
      image: '/blog1.png',
      location: 'Mumbai, India',
      date: 'Feb 27, 2023',
      readTime: '8 min read',
      title: 'A Wonderful Journey to India',
      description: 'I had always been interested in spirituality, so I decided to take a year-long journey to India to explore various religious practices and traditions.',
      link: '#',
    },
    {
      image: '/blog2.png',
      location: 'Barcelona, Spain',
      date: 'Feb 27, 2023',
      readTime: '5 min read',
      title: 'A Solo Trip Across Europe',
      description: 'I had just graduated from college and decided to take a six-month solo trip across Europe before starting my career. I backpacked through 15 different countries, staying in hostels and meeting people.',
      link: '#',
    },
    {
      image: '/blog3.png',
      location: 'Kathmandu, Nepal',
      date: 'Feb 27, 2023',
      readTime: '6 min read',
      title: '11 Best Places to Visit in Nepal',
      description: 'It was a beautiful spring morning when I arrived in Kathmandu, the capital city of Nepal. As soon as I stepped out of the airport, I was struck by the vibrant colors, the chaos of the streets.',
      link: '#',
    },
    {
      image: '/blog4.png',
      location: 'Prague, Ukraine',
      date: 'Feb 27, 2023',
      readTime: '4 min read',
      title: 'The Petrin Hill',
      description: 'I visited Prague, the beautiful capital city of the Czech Republic, and one of my favorite places in the city was the Petrin Hill. The Petrin Hill is a green oasis in the heart of Prague.',
      link: '#',
    },
    {
      image: '/assets/images/ukraine.jpg',
      location: 'Prague, Ukraine',
      date: 'Feb 27, 2023',
      readTime: '4 min read',
      title: 'The Petrin Hill',
      description: 'I visited Prague, the beautiful capital city of the Czech Republic, and one of my favorite places in the city was the Petrin Hill. The Petrin Hill is a green oasis in the heart of Prague.',
      link: '#',
    },
  ];

  const [showAll, setShowAll] = useState(false);

  // Spring animation for bouncy effect
  const bounceProps = useSpring({
    transform: showAll ? 'scale(1)' : 'scale(1)',
    opacity: showAll ? 0 : 1,
    config: {
      tension: 170,
      friction: 12,
    },
  });

  return (
    <section className="p-8" style={{ backgroundColor }}>
         {/* Blurred background */}

      <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-2xl md:text-3xl font-bold mb-2 md:mb-4" style={{ color: textColor }}>
            Top Travel Stories
          </h2>
          <p className="text-sm md:text-base mb-4 md:mb-8" style={{ color: textColor }}>
            Explore our latest stories from our active users
          </p>
        </div>
        <button
          className="text-sm md:text-base font-semibold py-3 px-4 md:py-2 md:px-4 rounded-md border hover:bg-opacity-90 transition duration-300 ease-in-out"
          style={{
            color: textColor,
            borderColor: textColor,
            borderColor: backgroundColor === '#ffffff' ? '#000000' : 'transparent', // Inverse button color
          }}
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? 'Show Less' : 'View All Stories'}
        </button>
      </div>

      <div className="mt-12 grid md:grid-cols-2 gap-14 max-w-7xl mx-auto justify-items-center">
        {stories.slice(0, showAll ? stories.length : 4).map((story, index) => (
          <animated.div
            key={index}
            className="shadow-md rounded-lg overflow-hidden border-[#C4C4C4] border-2"
            style={bounceProps}
          >
            <Image
              src={story.image}
              alt={story.title}
              className="w-full h-48 object-cover"
              width={490}
              height={304520}
            />
            <div className="p-6">
              <div className="flex justify-between items-center text-sm mb-4" style={{ color: textColor }}>
                <span>{story.location}</span>
                <span>{story.date}</span>
                <span>{story.readTime}</span>
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2" style={{ color: textColor }}>
                {story.title}
              </h3>
              <p className="text-sm md:text-base mb-4" style={{ color: textColor }}>
                {story.description}
              </p>
              <a href={story.link} className="text-blue-500 hover:underline text-sm">
                Read More
              </a>
            </div>
          </animated.div>
        ))}
      </div>
    </section>
  );
};

export default TravelStories;
