export const metadata = {
    title: 'About Us - Crafting Travel Experiences',
    description: 'Learn about our passion for crafting extraordinary travel experiences. Discover our beliefs and commitment to customer satisfaction, sustainability, and authenticity.',
    siteName: 'My Trip Mates',
    
    // Open Graph (Facebook, LinkedIn)
    openGraph: {
      title: 'About Us - Crafting Travel Experiences',
      description: 'Discover our mission and values. We are committed to creating memorable travel experiences while prioritizing sustainability, authenticity, and customer satisfaction.',
      images: [
        {
          url: '/gallery/background.jpg',
          width: 800,
          height: 600,
          alt: 'Background Image' // Optional, improves accessibility
        }
      ],
      url: 'https://yourwebsite.com/about', // Full URL of the page
      type: 'website'
    },
    
    // Twitter Card
    twitter: {
      card: 'summary_large_image', // Can be 'summary', 'summary_large_image', 'app', or 'player'
      title: 'About Us - Crafting Travel Experiences',
      description: 'Discover our mission and values. We are committed to creating memorable travel experiences while prioritizing sustainability, authenticity, and customer satisfaction.',
      image: '/gallery/background.jpg', // Image for Twitter sharing
      imageAlt: 'Background Image of Our Travel Experiences',
      site: '@mytripmates' // Optional, Twitter handle of the website
    },
  
    meta: {
      robots: 'index, follow', // Allows search engines to index the page
      keywords: 'travel, experiences, sustainability, customer satisfaction, authentic journeys',
      author: 'My Trip Mates',
    }
  };
  
  
  const AboutLayout = ({children}) => {
    return (
      <>
        {children}
      </>
    );
  };
  
  export default AboutLayout;
  