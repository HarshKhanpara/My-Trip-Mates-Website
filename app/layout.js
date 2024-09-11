import { Poppins } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from '@next/third-parties/google'


import Navbar from "@/components/Navbar";
import Image from "next/image";
import WhatsAppChat from "@/components/WhatsappChat";

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
        {/* <a 
  href="https://wa.me/message/4JNUATXAUKPVN1" 
  target="_blank" 
  style={{
            position: 'fixed',
            width: '60px',
            height: '60px',
            bottom: '40px',
            right: '20px',
            backgroundColor: '#25d366',
            color: '#FFF',
            borderRadius: '50px',
            textAlign: 'center',
            fontSize: '30px',
            boxShadow: '2px 2px 3px #999',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          className="z-30"
>
  <div className="mt-[16px]">
    <Image
      src="/social-wa.png"
      layout="fill"
    />
  </div>
</a> */}
          <WhatsAppChat />
          <GoogleAnalytics gaId="G-N0922Y6259" />
      </body>
    </html>
  );
}
