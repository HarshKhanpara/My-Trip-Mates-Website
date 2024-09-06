"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter

const Navbar = ({
  backgroundColor = 'transparent',
  textColor = 'white',
  buttonColor = '#E15E2E',
  hoverColor = '#E15E2E',
  dropdownBgColor = 'black',
  dropdownTextColor = 'white',
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter(); // Initialize useRouter

  // Handle the click event to redirect to the home page
  const redirectToHome = () => {
    router.push('/');
  };

  return (
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
      <div className="hidden md:flex justify-center flex-grow space-x-6">
        <a
          href="#about"
          className="px-4 py-2 hover:text-opacity-80 transition ease-in-out"
          style={{ color: textColor }}
        >
          About us
        </a>
        <a
          href="#blogs"
          className="px-4 py-2 hover:text-opacity-80 transition ease-in-out"
          style={{ color: textColor }}
        >
          Blogs
        </a>
        <a
          href="#gallery"
          className="px-4 py-2 hover:text-opacity-80 transition ease-in-out"
          style={{ color: textColor }}
        >
          Gallery
        </a>
        <a
          href="#reviews"
          className="px-4 py-2 hover:text-opacity-80 transition ease-in-out"
          style={{ color: textColor }}
        >
          Reviews
        </a>
        <a
          href="#trips"
          className="px-4 py-2 hover:text-opacity-80 transition ease-in-out"
          style={{ color: textColor }}
          onClick={() => router.push('/upcoming-trips')}
        >
          Upcoming Trips
        </a>
      </div>

      {/* Right Side - Contact Us Button */}
      <div className="flex items-center">
        <button
          className="hidden md:flex text-white md:px-6 md:py-2 rounded-full font-semibold"
          style={{ backgroundColor: buttonColor }}
          onClick={() => router.push('/contact')}
        >
          Contact Us
        </button>

        {/* Hamburger Icon for Mobile View */}
        <button
          className="md:hidden px-4 py-2"
          style={{ color: textColor }}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      {/* Dropdown Menu */}
      {isMenuOpen && (
        <div
          className="absolute top-full left-0 w-full md:hidden"
          style={{ backgroundColor: dropdownBgColor }}
        >
          <a
            href="#about"
            className="block hover:underline px-4 py-2"
            style={{ color: dropdownTextColor }}
          >
            About us
          </a>
          <a
            href="#blogs"
            className="block hover:underline px-4 py-2"
            style={{ color: dropdownTextColor }}
          >
            Blogs
          </a>
          <a
            href="#gallery"
            className="block hover:underline px-4 py-2"
            style={{ color: dropdownTextColor }}
          >
            Gallery
          </a>
          <a
            href="#reviews"
            className="block hover:underline px-4 py-2"
            style={{ color: dropdownTextColor }}
          >
            Reviews
          </a>
          <a
            href="#trips"
            className="block hover:underline px-4 py-2"
            style={{ color: dropdownTextColor }}
            onClick={() => router.push('/upcoming-trips')}
          >
            Upcoming Trips
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
