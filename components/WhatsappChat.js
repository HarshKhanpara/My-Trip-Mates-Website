"use client";

import React, { useState, useEffect } from 'react';
import { FaWhatsapp, FaTimes } from 'react-icons/fa';

const WhatsAppChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = () => {
    setShowPopup(false); // Close the pop-up
    const whatsappLink = `https://wa.me/message/4JNUATXAUKPVN1?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank');
    setMessage(''); // Clear the input after sending the message
  };

  // Automatically hide popup after 10 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(false);
    }, 10000); // 10 seconds
    return () => clearTimeout(timer);
  }, []);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="fixed bottom-16 md:bottom-4 right-4 z-50">
      {/* WhatsApp Button */}
      <button
        onClick={toggleChat}
        className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 md:p-5 shadow-lg transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50"
        aria-label="Open WhatsApp Chat"
      >
        <FaWhatsapp className="text-3xl md:text-4xl" />
      </button>

      {/* WhatsApp Chat Box */}
      {isOpen && (
        <div className="fixed bottom-20 right-4 w-80 bg-white rounded-lg shadow-xl overflow-hidden transition-all duration-300 transform origin-bottom-right">
          <div className="bg-green-500 p-4 flex justify-between items-center">
            <h2 className="text-white font-bold">WhatsApp Chat</h2>
            <button
              onClick={toggleChat}
              className="text-white hover:text-gray-200 focus:outline-none"
              aria-label="Close chat"
            >
              <FaTimes />
            </button>
          </div>
          <div className="p-4 h-80 overflow-y-auto">
            <div className="bg-gray-100 rounded-lg p-3 mb-2">
              <p className="text-gray-700">Hello! How can I help you?</p>
            </div>
            <div className="bg-green-100 rounded-lg p-3 mb-2 ml-auto max-w-[80%]">
              <p className="text-gray-700">Hi! I have a question about your services.</p>
            </div>
          </div>
          <div className="p-4 border-t flex">
            <input
              type="text"
              placeholder="Type a message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-3 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <button
              onClick={handleSendMessage}
              className="bg-green-500 text-white rounded-full p-3 ml-2 shadow-lg hover:bg-green-600 transition-all duration-300"
            >
              <FaWhatsapp className="text-xl" />
            </button>
          </div>
        </div>
      )}

      {/* Pop-up for booking or inquiries */}
      {showPopup && (
  <div className="fixed bottom-40 md:bottom-28 right-4 w-80 bg-yellow-400 rounded-lg shadow-xl p-4 transition-all duration-300 transform origin-bottom-right animate-glow">
    <div className="flex justify-between items-center">
      <h2 className="text-black font-bold">Reserve Your Spot!</h2>
      <button
        onClick={handleClosePopup}
        className="text-black hover:text-gray-700 focus:outline-none"
        aria-label="Close popup"
      >
        <FaTimes />
      </button>
    </div>
    <p className="text-black mt-2 cursor-pointer">Book your adventure now or ask us for more details!</p>
    <button
      onClick={() => {
        handleSendMessage(); // Send message and close popup
        setMessage('Book my adventure now!'); // Optionally set a default message
      }}
      className="mt-4 bg-green-500 text-white rounded-full p-3 shadow-lg w-full hover:bg-green-600 transition-all duration-300"
    >
      Ask us on WhatsApp
    </button>
  </div>
)}

    </div>
  );
};

export default WhatsAppChat;
