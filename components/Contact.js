"use client";

import { useState } from 'react';
import emailjs from 'emailjs-com';

export default function Contact({
  backgroundColor = '#ffffff', // Default to white background
  textColor = '#000000', // Default to black text
}) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    message: ''
  });

  const [isSending, setIsSending] = useState(false);
  const [sendStatus, setSendStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);

    try {
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,       // Replace with your EmailJS service ID
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,      // Replace with your EmailJS template ID
        formData,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID           // Replace with your EmailJS user ID
      );

      console.log(result.text);
      setSendStatus('Email sent successfully!');
      setFormData({
        name: '',
        email: '',
        contact: '',
        message: ''
      });
    } catch (error) {
      console.error(error);
      setSendStatus('Failed to send email.');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center w-full"
      style={{
        backgroundColor, // Apply configurable background color
      }}
      id="contact-section"
    >
      <div className="p-4 md:p-8 rounded-md shadow-lg w-full max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-extralight text-center mb-6"
          style={{ color: textColor, fontFamily: 'title-light' }} // Apply configurable text color
        >
          GET YOUR ITINERARY
        </h2>
        <p className="text-center text-lg mb-8" style={{ color: textColor }}>
          Enter your details here
        </p>
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          {/* Form Section */}
          <div className="w-full md:w-2/3 flex flex-col">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-lg mb-1" style={{ color: textColor }}>Name*</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full p-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-lg mb-1" style={{ color: textColor }}>Email Address*</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  className="w-full p-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-lg mb-1" style={{ color: textColor }}>Contact Number*</label>
                <input
                  type="text"
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  placeholder="Enter your contact number"
                  className="w-full p-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-lg mb-1" style={{ color: textColor }}>Message (Optional)</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Enter your message"
                  className="w-full p-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows={5}
                ></textarea>
              </div>
              <button
                type="submit"
                className={`w-full py-3 ${isSending ? 'bg-gray-400' : 'bg-blue-600'} text-white font-bold rounded-md hover:bg-blue-500 transition-all duration-300`}
                disabled={isSending}
              >
                {isSending ? 'Sending...' : 'Submit'}
              </button>
            </form>
            {sendStatus && (
              <p className="mt-4 text-center" style={{ color: textColor }}>
                {sendStatus}
              </p>
            )}
          </div>
          {/* Map Section */}
          <div className="w-full md:w-1/3 flex justify-center items-center">
            <div className="w-full">
              <h3 className="mb-6 text-center font-light text-4xl"
                style={{ color: textColor }} // Apply configurable text color
              >
                REACH US AT
              </h3>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.3560177875315!2d72.82436657596601!3d19.048078382150752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c941e018661f%3A0x646d98d3b6a4fcb!2sMy%20Trip%20Mates!5e0!3m2!1sen!2sin!4v1725559084202!5m2!1sen!2sin"
                width="100%"
                height="450px"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-md shadow-lg"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
