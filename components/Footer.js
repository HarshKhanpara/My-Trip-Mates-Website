import Image from "next/image";
import React from "react";

const Footer = ({
  backgroundColor = "#ffffff", // Default to white background
  textColor = "#000000", // Default to black text
}) => {
  return (
    <footer
      className="py-8"
      style={{ backgroundColor }} // Apply configurable background color
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:justify-between items-start  space-y-6 md:space-y-0">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-4">
            <span
              className="text-5xl"
              style={{ color: textColor, fontFamily: "autography" }}
            >
              my trip mates
            </span>
          </div>

          {/* Footer Sections */}
          <div className="flex flex-col md:flex-row md:space-x-12 text-left md:text-left space-y-6 md:space-y-0">
            <div className="space-y-2">
              <h5 className="font-semibold" style={{ color: textColor }}>
                Company
              </h5>
              <p style={{ color: textColor }}>Mumbai</p>
              <p style={{ color: textColor }}>Phone: +91 9356614841</p>
              <p style={{ color: textColor }}>Website: mytripmates.co</p>
            </div>
            <div className="space-y-2">
              <h5 className="font-semibold" style={{ color: textColor }}>
                Contact Us
              </h5>
              <p style={{ color: textColor }}>Email: contact@mytripmates.co</p>
              <p style={{ color: textColor }}>Phone: +91 9356614841</p>
              <p style={{ color: textColor }}>Address: Mumbai, India</p>
            </div>
            <div className="space-y-2">
              <h5 className="font-semibold" style={{ color: textColor }}>
                Quick Links
              </h5>
              <a
                href="#"
                className="block hover:text-blue-500"
                style={{ color: textColor }}
              >
                Home
              </a>
              <a
                href="#"
                className="block hover:text-blue-500"
                style={{ color: textColor }}
              >
                About
              </a>
              <a
                href="#"
                className="block hover:text-blue-500"
                style={{ color: textColor }}
              >
                Services
              </a>
              <a
                href="#"
                className="block hover:text-blue-500"
                style={{ color: textColor }}
              >
                Contact
              </a>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-6">
            <a
              href="#"
              aria-label="LinkedIn"
              className="hover:text-blue-500"
              style={{ color: textColor }}
            >
              {/* LinkedIn Outline SVG */}
              <Image
                src='/twitter.png'
                width={24}
                height={24}
                alt="Contact us on Twitter"
              />
            </a>
            <a
              href="https://www.instagram.com/mytripmates/?hl=en"
              aria-label="Instagram"
              className="hover:text-pink-500"
              style={{ color: textColor }}
            >
              {/* Instagram Outline SVG */}
              <Image
                src='/instagram.png'
                width={24}
                height={24}
                alt="Contact us on Instagram"
              />
            </a>
            <a
              href="https://www.facebook.com/mytripmates"
              aria-label="Facebook"
              className="hover:text-blue-400"
              style={{ color: textColor }}
            >
              {/* Facebook Outline SVG */}
              <Image
                src='/facebook.png'
                width={24}
                height={24}
                alt="Contact us on Facebook"
              />
            </a>
          </div>
        </div>
        <div className="text-center mt-6 text-sm" style={{ color: textColor }}>
          © 2023 My Trip Mates. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
