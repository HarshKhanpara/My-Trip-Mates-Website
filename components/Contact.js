"use client";

import { useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);
  const [sendStatus, setSendStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formData,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID
      );

      setSendStatus("Email sent successfully!");
      setFormData({
        name: "",
        email: "",
        contact: "",
        message: "",
      });
    } catch (error) {
      setSendStatus("Failed to send email.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <>
      <h2 className="text-6xl font-extrabold mb-14 text-center mt-7 ">
        GET YOUR ITINERARY
      </h2>

      <div className="flex flex-col py-10 px-4" id="contact-section">
        <div className="relative flex flex-col md:mx-10 items-center justify-center md:flex-row-reverse bg-gradient-to-b from-[#577597] to-[#060848] text-white rounded-2xl shadow-xl md:space-x-6 ">
          {/* Map Section */}
          <div className="relative -top-10 md:-top-44 md:w-1/2 md:m-5 flex flex-col items-center rounded-3xl">
            <div className="w-full bg-white rounded-md shadow-md">
              <div className="hidden md:block">
              <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.3560177875315!2d72.82436657596601!3d19.048078382150752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c941e018661f%3A0x646d98d3b6a4fcb!2sMy%20Trip%20Mates!5e0!3m2!1sen!2sin!4v1725559084202!5m2!1sen!2sin"
        className="w-full h-[450px] border-0 rounded-3xl shadow-lg"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Location Map"
      />
              </div>
              <div className="md:hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.3560177875315!2d72.82436657596601!3d19.048078382150752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c941e018661f%3A0x646d98d3b6a4fcb!2sMy%20Trip%20Mates!5e0!3m2!1sen!2sin!4v1725559084202!5m2!1sen!2sin"
                  style={{
                    border: 0,
                    borderRadius: "20px",
                  }}
                  width="100%"
                  height="300px"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="transition-transform transform hover:scale-105"
                ></iframe>
              </div>
            </div>
            <div className="flex mt-4 p-4 bg-white rounded-full shadow-md w-full md:m-5">
              <div className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-6 h-6 text-black"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 2C8.134 2 5 5.134 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.866-3.134-7-7-7z"
                  />
                  <circle cx="12" cy="9" r="2" />
                </svg>
              </div>
              <div>
                <h4 className="text-md text-black">My Trip Mates</h4>
                <p className="text-sm text-[#BBBBBB] leading-relaxed">
                  Mumbai, India
                </p>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="px-10 md:px-0 md:p-10 md:w-3/4 flex flex-col justify-center mb-5 md:mb-0">
            <p className="mb-8 md:w-3/4 mt-1 tracking-tight text-xl">
              Searching a TRIPMATE? We’ve got you!
            </p>
            <p className="mb-8 md:w-3/6 mt-1 tracking-tight font-bold text-3xl leading-normal">
              Connect with travellers, explore destinations together, and make
              every journey unforgettable!
            </p>
            <form onSubmit={handleSubmit} className="md:w-[411px]">
              <div className="space-y-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name*"
                  className="block w-full p-3 text-black bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <input
                  type="text"
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  placeholder="Your Contact*"
                  className="block w-full p-3 text-black bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email*"
                  className="block w-full p-3 text-black bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message (Optional)"
                  className="block w-full mb-7 p-3 text-black bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows={4}
                ></textarea>
              </div>
              <button
                type="submit"
                className={`block w-full md:w-1/2 py-3 font-bold rounded-3xl mt-10 ${
                  isSending
                    ? "bg-gray-500 cursor-not-allowed"
                    : "bg-[#0775EB] hover:bg-blue-600"
                } text-white transition-all`}
                disabled={isSending}
              >
                {isSending ? "Sending..." : "Get Your Itinerary"}
              </button>
            </form>
            {sendStatus && <p className="mt-4 text-center">{sendStatus}</p>}
          </div>
        </div>
      </div>
    </>
  );
}
