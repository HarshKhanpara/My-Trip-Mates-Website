'use client';

import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { getCardOfBlogs } from '@/utils/blogs';
import Loading3D from '../LoadingScreen';

const TravelStories = ({
  backgroundColor = '#ffffff', // Default white background
  textColor = '#000000', // Default black text
}) => {
  const [visibleStories, setVisibleStories] = useState({}); // To track visibility of each story card
  const storyRefs = useRef([]); // Array of references for each story card
  const router = useRouter();
  const [stories, setStories] = useState([]);

  useEffect(() => {
    const fetchTrip = async () => {
      const stories = await getCardOfBlogs();
      if (stories === null) {
        router.push('/404');
      }
      setStories(stories);
    };

    fetchTrip();
  }, []);

  useEffect(() => {
    if (stories.length > 0) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const index = entry.target.getAttribute('data-index');
            if (entry.isIntersecting) {
              setVisibleStories((prev) => ({ ...prev, [index]: true }));
            } else {
              setVisibleStories((prev) => ({ ...prev, [index]: false }));
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
    }
  }, [stories]); // Only run the observer once the stories have been loaded

  if (!stories || stories.length === 0) {
    return <Loading3D loadingMessage="LOADING YOUR BLOGS" />; // Show the 3D loading screen while data is loading
  }

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
          className="text-sm md:text-base font-semibold py-3 px-4 md:py-2 md:px-4 rounded-md border hover:bg-opacity-90 transition duration-300 ease-in-out z-50"
          style={{
            color: textColor,
            borderColor: backgroundColor === '#ffffff' ? '#000000' : 'transparent',
          }}
          onClick={() => {
            router.push('/blogs');
          }}
        >
          {'View All Stories'}
        </button>
      </div>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-8 mx-auto justify-items-center">
        {stories.slice(0, 3).map((story, index) => (
          <div
            key={index}
            data-index={index}
            ref={(el) => (storyRefs.current[index] = el)}
            className={`shadow-md z-50 rounded-lg overflow-hidden border-[#C4C4C4] border-2 cursor-pointer transition-all duration-700 ease-in-out transform ${
              visibleStories[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: `${index * 200}ms` }}
            onClick={() => router.push(story.link)}
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
          </div>
        ))}
      </div>
    </section>
  );
};

export default TravelStories;
