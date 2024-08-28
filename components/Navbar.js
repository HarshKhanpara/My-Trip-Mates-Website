"use client";

import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center p-6 bg-transparent absolute w-full z-10">
      <div className="text-white text-xl font-semibold px-4 py-2">mytripmates</div>
      <div className="hidden md:flex space-x-6 text-white">
        <a href="#destination" className="hover:underline px-4 py-2">Destination</a>
        <a href="#stories" className="hover:underline px-4 py-2">Stories</a>
        <a href="#reviews" className="hover:underline px-4 py-2">Reviews</a>
        <a href="#blog" className="hover:underline px-4 py-2">Blog</a>
        <button className="bg-white text-black px-4 py-2 rounded-lg">About Us</button>
      </div>
      {/* Hamburger Icon for Mobile View */}
      <button className="md:hidden px-4 py-2 text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
      </button>
      {/* Dropdown Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-black md:hidden">
          <a href="#destination" className="block hover:underline px-4 py-2 text-white">Destination</a>
          <a href="#stories" className="block hover:underline px-4 py-2 text-white">Stories</a>
          <a href="#reviews" className="block hover:underline px-4 py-2 text-white">Reviews</a>
          <a href="#blog" className="block hover:underline px-4 py-2 text-white">Blog</a>
          <button className="w-full text-left bg-white text-black px-4 py-2 rounded-lg">About Us</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;