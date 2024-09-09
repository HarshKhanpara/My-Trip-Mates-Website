import { Poppins } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";

// Import Poppins font
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // Specify the weights you need
});

export const metadata = {
  title: "My trip Mates",
  description: "My trip mates is a platform for finding travel buddies and planning trips together.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {children}
      </body>
    </html>
  );
}
