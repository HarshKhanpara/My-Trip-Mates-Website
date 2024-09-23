"use client";

import { useState } from 'react';
import { ChevronDown, Search } from 'lucide-react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        className="w-full py-5 flex justify-between items-center text-left focus:outline-none hover:bg-gray-100 transition-colors duration-300"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium text-gray-900">{question}</span>
        <ChevronDown
          className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${isOpen ? 'transform rotate-180 text-blue-600' : ''}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <p className="pb-5 text-gray-600">{answer}</p>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const faqData = [
    {
      question: "How does My Trip Mates ensure the quality of group trips?",
      answer: "We ensure the quality of our group trips by partnering with reputable travel companies and thoroughly vetting all trip details. Our trips are designed to offer the best experiences, with carefully planned itineraries and verified travel companions, making your journey safe and enjoyable."
    },
    {
      question: "How do i know if a group trip is right for me?",
      answer: "Each group trip on My Trip Mates comes with detailed information about the itinerary, activities, and group members. You can review these details and see profiles of other travelers to ensure the trip aligns with your preferences. Our app also features reviews and ratings from past travelers to help you make an informed decision."
    },
    {
      question: "Are flights included in group trips packages on My Trip Mates?",
      answer: "Yes, many of our group trip packages include flights. We strive to provide all-inclusive packages to make your travel experience as convenient as possible. Each trip listing will clearly mention whether flights are included, so you can plan accordingly."
    },
  ];

  const filteredFAQ = faqData.filter(item =>
    item.question.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-gray-50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mt-7 md:mt-0 sm:pt-4 mx-auto"> {/* Increased max width from max-w-3xl to max-w-4xl */}
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center text-gray-900">Frequently Asked Questions</h2>
        <p className='text-center font-semibold pt-2 pb-7'>Please reach us at sales@mytripmates.co if you cannot find an answer to your question.</p>
        <div className="relative mb-6 hidden">
          <input
            type="text"
            placeholder="Search questions..."
            className="w-full p-3 pl-10 rounded-lg bg-white shadow-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
        </div>
        <div className="space-y-4 bg-white shadow-lg rounded-lg overflow-hidden p-6">
          {filteredFAQ.length > 0 ? (
            filteredFAQ.map((item, index) => (
              <FAQItem key={index} question={item.question} answer={item.answer} />
            ))
          ) : (
            <p className="text-gray-500 text-center">No results found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
