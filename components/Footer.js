import React from 'react';

const Footer = ({
  backgroundColor = '#ffffff', // Default to white background
  textColor = '#000000', // Default to black text
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
            <span className="text-5xl" style={{ color: textColor,fontFamily:'autography' }}>
              my trip mates
            </span>
          </div>
          
          {/* Footer Sections */}
          <div className="flex flex-col md:flex-row md:space-x-12 text-left md:text-left space-y-6 md:space-y-0">
            <div className="space-y-2">
              <h5 className="font-semibold" style={{ color: textColor }}>Company</h5>
              <p style={{ color: textColor }}>Mumbai</p>
              <p style={{ color: textColor }}>Phone: 123-456-7890</p>
              <p style={{ color: textColor }}>Website: mytripmates.co</p>
            </div>
            <div className="space-y-2">
              <h5 className="font-semibold" style={{ color: textColor }}>Contact Us</h5>
              <p style={{ color: textColor }}>Email: contact@mytripmates.co</p>
              <p style={{ color: textColor }}>Phone: 123-456-7890</p>
              <p style={{ color: textColor }}>Address: Mumbai, India</p>
            </div>
            <div className="space-y-2">
              <h5 className="font-semibold" style={{ color: textColor }}>Quick Links</h5>
              <a href="#" className="block hover:text-blue-500" style={{ color: textColor }}>Home</a>
              <a href="#" className="block hover:text-blue-500" style={{ color: textColor }}>About</a>
              <a href="#" className="block hover:text-blue-500" style={{ color: textColor }}>Services</a>
              <a href="#" className="block hover:text-blue-500" style={{ color: textColor }}>Contact</a>
            </div>
          </div>
          
          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-6">
            <a href="#" aria-label="LinkedIn" className="hover:text-blue-500" style={{ color: textColor }}>
              {/* LinkedIn SVG */}
              <svg width="24" height="24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zm.02 8h-4v13h4v-13zm7.3 0h-4v6.6h-0.01c-0.54-1.03-1.86-1.8-3.29-1.8-2.39 0-4.32 1.9-4.32 4.27v4.89h4v-4.9c0-1.11 0.89-2 2-2 1.1 0 2 0.9 2 2v4.9h4v-6.6zm-5.6-9.48c-.85-.01-1.7.3-2.34.88a3.237 3.237 0 0 0-1.05 2.37v.02c0 1.33.54 2.55 1.49 3.46.85.79 1.98 1.23 3.21 1.2 1.85 0 3.67-.88 4.78-2.36 1.26-1.62 1.68-3.9 1.2-5.96-1.03-.44-2.13-.66-3.2-.66z"/>
              </svg>
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-pink-500" style={{ color: textColor }}>
              {/* Instagram SVG */}
              <svg width="24" height="24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.25c-3.06 0-5.55 2.49-5.55 5.55v9.45c0 3.06 2.49 5.55 5.55 5.55 3.06 0 5.55-2.49 5.55-5.55v-9.45c0-3.06-2.49-5.55-5.55-5.55zM6.12 8.7a1.95 1.95 0 0 1 1.95-1.95c1.08 0 1.95.87 1.95 1.95a1.95 1.95 0 0 1-1.95 1.95c-1.08 0-1.95-.87-1.95-1.95zm10.67 9.16a4.46 4.46 0 0 1-4.46 4.46 4.46 4.46 0 0 1-4.46-4.46v-9.45a4.46 4.46 0 0 1 4.46-4.46 4.46 4.46 0 0 1 4.46 4.46v9.45zM12 4.38c-2.09 0-3.78 1.69-3.78 3.78v7.66c0 2.09 1.69 3.78 3.78 3.78 2.09 0 3.78-1.69 3.78-3.78v-7.66c0-2.09-1.69-3.78-3.78-3.78z"/>
              </svg>
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-blue-400" style={{ color: textColor }}>
              {/* Twitter SVG */}
              <svg width="24" height="24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M23 3c-.82.36-1.69.61-2.6.72.93-.56 1.64-1.44 1.97-2.5-.87.51-1.83.87-2.85 1.07-.82-.87-1.99-1.42-3.29-1.42-2.49 0-4.51 2.03-4.51 4.53 0 .36.04.71.1 1.05-3.76-.19-7.1-2-9.33-4.75-.39.67-.62 1.45-.62 2.29 0 1.58.8 2.97 2.03 3.79-.75-.02-1.46-.23-2.08-.57v.06c0 2.21 1.57 4.06 3.65 4.48-.38.1-.78.15-1.18.15-.29 0-.57-.03-.84-.07.57 1.78 2.22 3.08 4.16 3.12-1.53 1.2-3.47 1.92-5.57 1.92-.36 0-.71-.02-1.06-.06 1.97 1.26 4.31 2 6.82 2 8.16 0 12.63-6.75 12.63-12.63 0-.19-.01-.39-.02-.58.87-.63 1.62-1.42 2.22-2.32z"/>
              </svg>
            </a>
          </div>
        </div>
        <div className="text-center mt-6 text-sm" style={{ color: textColor }}>
          © 2023 My Trip Mates. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
