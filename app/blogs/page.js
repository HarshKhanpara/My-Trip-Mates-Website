"use client";

import Image from 'next/image';
import { stories } from '@/constants/blogs'; // Import your stories data
import { useRouter } from 'next/navigation';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { useEffect, useState } from 'react';
import { getAllBlogs } from '@/utils/blogs';

const BlogListing = () => {
  const router = useRouter();
  const [stories, setStories] = useState([]);

  useEffect(() => {
    const fetchTrip = async () => {
      const stories = await getAllBlogs();
      if(stories === null) {
        router.push('/404');
      }
      setStories(stories);
    };

    fetchTrip();
  }, []);

  if (!stories) {
    return <Loading3D
    loadingMessage='LOADING YOUR BLOGS'
     />; // Show the 3D loading screen while data is loading
  }


  return (
    <>
  <Navbar
        backgroundColor='white'  // Light background color
        textColor='black'        // Dark text color for contrast
        buttonColor='#E15E2E'    // Color for buttons
        hoverColor='#E15E2E'     // Hover color for links
        dropdownBgColor='white'  // Light dropdown background
        dropdownTextColor='black' // Dark dropdown text color
      />
    <section className="p-8 pt-40 bg-gray-50 min-h-screen" id="blog-listing-section">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold mb-4 text-gray-900">All Travel Stories</h2>
        <p className="text-lg text-gray-700">Explore all our latest stories from our active users</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto">
        {stories.map((story, index) => (
          <div
            key={index}
            className="relative shadow-lg rounded-lg overflow-hidden border border-gray-300 cursor-pointer transition-transform transform hover:scale-105 hover:shadow-xl"
            onClick={() => router.push(story.link)}
          >
            <Image
              src={story.image}
              alt={story.title}
              className="w-full h-60 object-cover transition-transform duration-300 ease-in-out hover:scale-110"
              width={490}
              height={304520}
            />
            <div className="p-6 bg-white">
              <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-600 mb-4">
                <span>{story.location}</span>
                <span>{story.date}</span>
                <span>{story.readTime}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{story.title}</h3>
              <p className="text-base text-gray-800 mb-4">{story.description}</p>
              <a href={story.link} className="text-blue-700 hover:underline text-base font-medium">
                Read More
              </a>
              <div className="absolute top-2 right-2 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                New
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
    <Footer />
    </>
  );
};

export default BlogListing;
