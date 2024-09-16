export const metadata = {
    title: 'Reviews - My Trip Mates',
    description: 'See what our fellow travelers have to say about their experience with My Trip Mates. Join our community of fellow travelers and share your thoughts.',
    siteName: 'My Trip Mates',
    
    // Open Graph (Facebook, LinkedIn)
    openGraph: {
      title: 'Reviews - My Trip Mates',
      description: 'See what our Fellow travelers have to say about their experience with My Trip Mates. Join our community of Fellow travelers and share your thoughts.',
      images: [
        {
          url: '/home.jpg',
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
      title: 'Reviews - My Trip Mates',
      description: 'See what our Fellow travelers have to say about their experience with My Trip Mates. Join our community of Fellow travelers and share your thoughts.',
      image: '/home.jpg', // Image for Twitter sharing
      imageAlt: 'Background Image of Our Travel Experiences',
      site: '@mytripmates' // Optional, Twitter handle of the website
    },
  
    meta: {
      robots: 'index, follow', // Allows search engines to index the page
      keywords: 'travel, experiences, sustainability, customer satisfaction, authentic journeys, fellow travelers,feedback',
      author: 'My Trip Mates',
    }
  };


  const ReviewLayout = ({children}) => {
    return (
      <>
        {children}
      </>
    );
  };
  
  export default ReviewLayout;