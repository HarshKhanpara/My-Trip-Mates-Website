"use client";

import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import Image from "next/image";

const FAQItem = ({ question, answer, isOpen, toggle }) => {
  return (
    <div className="border-b border-gray-200">
      <button
        className="w-full py-4 px-4 sm:px-6 flex justify-between items-center text-left focus:outline-none bg-white hover:bg-gray-50 transition-colors duration-200"
        onClick={toggle}
      >
        <span className="text-base sm:text-lg w-4/5 font-semibold text-gray-900">
          {question}
        </span>
        {isOpen ? (
          <ChevronDown className="w-5 sm:w-6 h-5 sm:h-6 text-blue-500" />
        ) : (
          <ChevronRight className="w-5 sm:w-6 h-5 sm:h-6 text-gray-400" />
        )}
      </button>
      {isOpen && (
        <div className="px-4 sm:px-6 pb-4 bg-gray-50">
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            {answer}
          </p>
        </div>
      )}
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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

  return (
    <section className="py-8 px-4 sm:px-8 lg:px-16">
      <div className="mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
          <div>
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-2 text-center md:text-left">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 text-base sm:text-lg text-center md:text-left">
              Have any questions? Read popular answers below
            </p>
          </div>
          <div className="flex justify-center md:justify-end w-full md:w-auto">
          <button
              className="text-base md:text-lg font-semibold py-2 px-8 whitespace-nowrap rounded-md border hover:bg-opacity-90 transition duration-300 ease-in-out"
              style={{
                color: "#000",
                borderColor: "#000",
                backgroundColor: "transparent",
              }}
            >
              View All
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg">
          {faqData.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              toggle={() => toggleFAQ(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
