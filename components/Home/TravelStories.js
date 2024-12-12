'use client';

import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { stories } from '@/constants/blogs';
import { useRouter } from 'next/navigation';

const TravelStories = ({
  backgroundColor = '#ffffff', // Default white background
  textColor = '#000000', // Default black text
}) => {
  const [visibleStories, setVisibleStories] = useState({}); // To track visibility of each story card
  const storyRefs = useRef([]); // Array of references for each story card
  const router = useRouter();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = entry.target.getAttribute('data-index');
          if (entry.isIntersecting) {
            setVisibleStories((prev) => ({ ...prev, [index]: true }));
          } else {
            setVisibleStories((prev) => ({ ...prev, [index]: false })); // Reset animation when scrolled out
          }
        });
      },
      { threshold: 0.2 } 
    );

    storyRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    // Cleanup observer on unmount
    return () => {
      storyRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section className="p-8" style={{ backgroundColor }} id="blog-section">
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
            backgroundColor: 'transparent',
          }}
          onClick={() => router.push('/blogs')}
        >
          View All Stories
        </button>
      </div>

      <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 ">
        {stories.slice(0, 3).map((story, index) => (
          <div
            key={index}
            data-index={index}
            ref={(el) => (storyRefs.current[index] = el)}
            className={`rounded-xl overflow-hidden cursor-pointer transition-all duration-700 ease-in-out transform border hover:scale-95 ${
              visibleStories[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            } ${
              index === 0 ? 'lg:col-span-2 lg:h-[600px]' : '' // Make the first story span two columns on larger screens
            }`}
            style={{ transitionDelay: `${index * 150}ms` }}
            onClick={() => router.push(story.link)}
          >
            <div className={`relative w-full ${index === 0 ? 'h-[600px]' : 'h-[509px]'}`}>
              <Image
                src={story.image}
                alt={story.title}
                className="object-cover"
                layout="fill"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-black opacity-80 rounded-xl text-white">
                <div className="flex justify-between text-sm mb-2">
                  <span>{story.location}</span>
                  <span className="flex items-center space-x-1">
                    <span>{story.date}</span>
                    <span className='text-2xl leading-none'>•</span>
                    <span>{story.readTime}</span>
                  </span>
                </div>
                <h3 className="text-lg font-bold mb-2">{story.title}</h3>
                <p className="text-sm mb-4">{story.description}</p>
                <a
                  href={story.link}
                  className="text-sm font-semibold text-blue-400 hover:text-blue-300"
                >
                  Read Full Post ↗
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TravelStories;
