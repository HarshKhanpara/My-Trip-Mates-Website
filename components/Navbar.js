"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Toaster } from 'react-hot-toast';
import toast from 'react-hot-toast';
import { FaInfoCircle, FaBlog, FaImages, FaStar, FaCalendarAlt, FaPhone, FaTimes, FaBars } from 'react-icons/fa';


const Navbar = ({
  backgroundColor = 'transparent',
  textColor = 'white',
  buttonColor = '#E15E2E',
  hoverColor = '#E15E2E',
  dropdownBgColor = 'black',
  dropdownTextColor = 'white',
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const redirectToHome = () => {
    router.push('/');
  };

  const handleGalleryClick = () => {
    router.push('/gallery');
  };

  const handlePageUnderDevelopment = () => {
    toast('Page coming soon!', {
      icon: '🚀',
      position:'bottom-center'
    },
  );
      };

      const handleScrollToContact = () => {
        const targetElement = document.getElementById('contact-section');
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      };

      const handleScrollToBlogs = () => {
        const targetElement = document.getElementById('blog-section');
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      };

  return (
    <>
     <Toaster />
      <nav
        className="flex justify-between items-center p-6 absolute w-full z-20"
        style={{ backgroundColor, color: textColor }}
      >
        {/* Left Side - Logo */}
        <div className="flex items-center space-x-4">
          <div
            className="pl-2 text-3xl md:text-5xl cursor-pointer"
            style={{ color: textColor, fontFamily: 'autography' }}
            onClick={redirectToHome}
          >
            my trip mates
          </div>
        </div>

        {/* Center - Navigation Links */}
        <div className="hidden md:flex justify-center flex-grow space-x-6 cursor-pointer">
          <a
            className="px-4 py-2 hover:text-opacity-80 transition ease-in-out hover:-translate-y-2"
            style={{ color: textColor }}
            onClick={() => router.push('/about')}
          >
            About us
          </a>
          <a
            className="px-4 py-2 hover:text-opacity-80 transition ease-in-out hover:-translate-y-2 cursor-pointer"
            style={{ color: textColor }}
            onClick={handleScrollToBlogs} // Trigger the toaster here
          >
            Blogs
          </a>
          <a
            className="px-4 py-2 hover:text-opacity-80 transition ease-in-out hover:-translate-y-2 cursor-pointer"
            style={{ color: textColor }}
            onClick={handleGalleryClick}
          >
            Gallery
          </a>
          <a
            className="px-4 py-2 hover:text-opacity-80 transition ease-in-out hover:-translate-y-2 cursor-pointer"
            style={{ color: textColor }}
            onClick={() => router.push('/reviews')}
          >
            Reviews
          </a>
          <a
            className="px-4 py-2 hover:text-opacity-80 transition ease-in-out hover:-translate-y-2 cursor-pointer"
            style={{ color: textColor }}
            onClick={() => router.push('/upcoming-trips')}
          >
            Upcoming Trips
          </a>
        </div>

        {/* Right Side - Contact Us Button */}
        <div className="flex items-center">
          <button
            className="hidden md:flex text-white md:px-6 md:py-2 rounded-full font-semibold cursor-pointer"
            style={{ backgroundColor: buttonColor }}
            onClick={handleScrollToContact}
            >
            Contact Us
          </button>

          {/* Hamburger / Cross Icon for Mobile View */}
          <button
            className="md:hidden px-4 py-2 transform transition-transform hover:scale-110 duration-300"
            style={{ color: textColor }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <FaTimes className="w-8 h-8" />
            ) : (
              <FaBars className="w-8 h-8" />
            )}
          </button>
        </div>

        {/* Dropdown Menu */}
        {isMenuOpen && (
          <div
            className="absolute top-full left-1/2 transform -translate-x-1/2 w-[95%] md:hidden shadow-lg rounded-lg overflow-hidden transition-all duration-500 ease-in-out translate-y-2"
            style={{ backgroundColor: dropdownBgColor }}
          >
            {[
              { label: 'About us', icon: <FaInfoCircle />, action: () => router.push('/about') },
              { label: 'Blogs', icon: <FaBlog />, action: handleScrollToBlogs },
              { label: 'Gallery', icon: <FaImages />, action: handleGalleryClick },
              { label: 'Reviews', icon: <FaStar />, action: () => router.push('/reviews') },
              { label: 'Upcoming Trips', icon: <FaCalendarAlt />, action: () => router.push('/upcoming-trips') },
            ].map(({ label, icon, action }, idx) => (
              <a
                key={idx}
                className="flex items-center px-4 py-4 border-b border-gray-700 hover:bg-gray-800 transition-colors duration-300"
                style={{ color: dropdownTextColor }}
                onClick={action}
              >
                <span style={{ color: textColor }}>{icon}</span>
                <span className="ml-2">{label}</span>
              </a>
            ))}

            {/* Contact Us Button */}
            <div className="flex justify-center p-4">
              <button
                className="w-full text-white px-6 py-2 rounded-full font-semibold shadow-lg transform hover:scale-105 transition-transform duration-300"
                style={{ backgroundColor: buttonColor }}
                onClick={handleScrollToContact}
              >
                Contact Us
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;