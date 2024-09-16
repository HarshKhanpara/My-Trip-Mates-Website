import { Poppins } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";

import Navbar from "@/components/Navbar";
import Image from "next/image";
import WhatsAppChat from "@/components/WhatsappChat";
import Script from "next/script";

// Import Poppins font
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // Specify the weights you need
});

export const metadata = {
  title: "My trip Mates",
  description:
    "My trip mates is a platform for finding travel buddies and planning trips together.",
  siteName: "My Trip Mates",
  openGraph: {
    title: "My trip Mates",
    description:
      "My trip mates is a platform for finding travel buddies and planning trips together.",
    images: [
      {
        url: "/gallery/slide1.png",
        width: 800,
        height: 600,
        alt: "Group Trip",
      },
    ],
    url: "https://mytripmates.com",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "My trip Mates",
    description:
      "My trip mates is a platform for finding travel buddies and planning trips together.",
    image: "/gallery/slide1.png",
    imageAlt: "Background Image of Our Travel Experiences",
    site: "@mytripmates",
  },

  meta: {
    robots: "index, follow",
    keywords:
      "travel, experiences, sustainability, customer satisfaction, authentic journeys",
    author: "My Trip Mates",
  },
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
        <script type="text/javascript">
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "o1wm791t0v");
</script>
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID}');
          fbq('track', 'PageView');
        `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src={`https://www.facebook.com/tr?id=YOUR_PIXEL_ID&ev=PageView&noscript=1`}
          />
        </noscript>
      </body>
    </html>
  );
}
