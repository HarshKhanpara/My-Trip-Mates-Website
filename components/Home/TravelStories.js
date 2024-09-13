"use client";

import Image from 'next/image';
import { useState } from 'react';
import { stories } from '@/constants/blogs';
import { useRouter } from 'next/navigation';

const TravelStories = ({
  backgroundColor = '#ffffff', // Default white background
  textColor = '#000000', // Default black text
}) => {
  const [showAll, setShowAll] = useState(false);
  const router = useRouter();

  return (
    <section className="p-8" style={{ backgroundColor }} id="blog-section">
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
  onClick={() => {
      router.push('/blogs');  
  }}
>
  {'View All Stories'}
</button>

      </div>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-8 mx-auto justify-items-center">
        {stories.slice(0,  3).map((story, index) => (
          <div
            key={index}
            className="shadow-md rounded-lg overflow-hidden border-[#C4C4C4] border-2 cursor-pointer"
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
