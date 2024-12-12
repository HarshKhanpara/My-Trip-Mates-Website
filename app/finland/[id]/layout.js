
export const metadata = {
    title: 'Explore Best Bali Destinations',
    description: 'Discover our upcoming group trips and explore new destinations with Fellow travelers. Book your next adventure today!',
    siteName: 'My Trip Mates',
    
    // Open Graph (Facebook, LinkedIn)
    openGraph: {
      title: 'Best Finland Destinations',
      description: 'Discover our upcoming group trips and explore new destinations with Fellow travelers. Book your next adventure today!',
      images: [
        {
          url: '/slide3.png',
          width: 800,
          height: 600,
          alt: 'Group Trip' // Optional, improves accessibility
        }
      ],
      url: 'https://yourwebsite.com/about', // Full URL of the page
      type: 'website'
    },
    
    // Twitter Card
    twitter: {
      card: 'summary_large_image', // Can be 'summary', 'summary_large_image', 'app', or 'player'
      title: 'Explore Best Finland Destinations',
      description: 'Discover our upcoming group trips and explore new destinations with Fellow travelers. Book your next adventure today!',
      image: '/slide3.png', // Image for Twitter sharing
      imageAlt: 'Background Image of Our Travel Experiences',
      site: '@mytripmates' // Optional, Twitter handle of the website
    },
  
    meta: {
      robots: 'index, follow', // Allows search engines to index the page
      keywords: 'finland, best travel destinations, adventure, trip, images, visual, gallery',
      author: 'My Trip Mates',
    }
  };
  
  
  export default function Layout({ children }) {
      return (
        <>
          {children}
          </>
      );
    }
    