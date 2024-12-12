"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Footer = ({
  backgroundColor = "#ffffff", // Default to white background
  textColor = "#000000", // Default to black text
}) => {

  const router = useRouter();
  return (
    <footer
      className="py-8"
      style={{ backgroundColor }} // Apply configurable background color
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12">
          {/* Logo and Social Media */}
          <div className="col-span-1">
            <Image
              src="/logo.jpg" // Replace with the path to your logo
              alt="My Trip Mates Logo"
              width={344}
              height={100}
              className="mb-4"
            />
            <div className="flex space-x-4">
              <a href="https://twitter.com" target="_blank" rel="noreferrer">
                <Image
                  src="/twitter-icon.jpg" // Replace with the path to your Twitter icon
                  alt="Twitter"
                  width={24}
                  height={24}
                />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <Image
                  src="/facebook-icon.jpg" // Replace with the path to your Facebook icon
                  alt="Facebook"
                  width={14}
                  height={14}
                />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <Image
                  src="/instagram-icon.jpg" // Replace with the path to your Instagram icon
                  alt="Instagram"
                  width={24}
                  height={24}
                />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h5 className="font-semibold text-gray-900 mb-3">Product</h5>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li><a href="#" className="hover:underline">Features</a></li>
              <li><a href="#" className="hover:underline">Pricing</a></li>
              <li><a href="#" className="hover:underline">Reviews</a></li>
              <li><a href="#" className="hover:underline">Updates</a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h5 className="font-semibold text-gray-900 mb-3">Company</h5>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li><a href="#" className="hover:underline">About</a></li>
              <li><a href="#" className="hover:underline">Contact us</a></li>
              <li><a href="#" className="hover:underline">Careers</a></li>
              <li><a href="#" className="hover:underline">Blog</a></li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h5 className="font-semibold text-gray-900 mb-3">Support</h5>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li><a href="#" className="hover:underline">Getting started</a></li>
              <li><a href="#" className="hover:underline">Help center</a></li>
              <li><a href="#" className="hover:underline">Report a bug</a></li>
              <li><a href="#" className="hover:underline">Chat support</a></li>
            </ul>
          </div>

          {/* Contact Info */}
{/* Contact Info */}
<div>
  <h5 className="font-semibold text-gray-900 mb-3">Contact us</h5>
  <ul className="space-y-2 text-gray-700 text-sm">
    <li className="flex items-center">
      <Image
        src="/email-icon.jpg" // Replace with the path to your email icon
        alt="Email"
        width={16}
        height={16}
        className="mr-2"
      />
      Email:{" "}
      <a href="mailto:mytripmates.co" className="hover:underline ml-1">
        mytripmates.co
      </a>
    </li>
    <li className="flex items-center">
      <Image
        src="/phone-icon.jpg" // Replace with the path to your phone icon
        alt="Phone"
        width={16}
        height={16}
        className="mr-2"
      />
      Phone:{" "}
      <a href="tel:+1234567890" className="hover:underline ml-1">
        1234567890
      </a>
    </li>
    <li className="flex items-center">
      <Image
        src="/location-icon.jpg" // Replace with the path to your location icon
        alt="Address"
        width={16}
        height={16}
        className="mr-2"
      />
      Address: Mumbai, India
    </li>
  </ul>
</div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 text-gray-600 text-sm text-center border-t pt-6">
          <p>© 2024 My Trip Mates. All Rights Reserved.</p>
          <p>
            <a onClick={()=>router.push("/terms-and-conditions")} className="hover:underline cursor-pointer" >Terms and Conditions</a> |{" "}
            <a onClick={()=>router.push("/privacy-policy")} className="hover:underline cursor-pointer">Privacy Policy</a>
          </p>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
