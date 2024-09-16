//Meta data and wrapper


export const metadata = {
    title: 'Group Trips - Explore Your Next Adventure',
    description: 'Discover our upcoming group trips and explore new destinations with Fellow travelers. Book your next adventure today!',
    siteName: 'My Trip Mates',
    openGraph: {
      title: 'Group Trips - Explore Your Next Adventure',
      description: 'Join our upcoming group trips and explore new destinations with fellow travelers. Book your next adventure today!',
      images: [
        {
          url: '/gallery/background.jpg',
          width: 800,
          height: 600
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Group Trips - Explore Your Next Adventure',
      description: 'Discover our upcoming group trips and explore new destinations with Fellow travelers. Book your next adventure today!',
      image: '/gallery/background.jpg'
    },
    meta: {
      robots: 'index, follow',
      keywords: 'bali, vietnam, thailand, travel, adventure, trip, images, visual, gallery',
      author: 'My Trip Mates',
    }
  };


export default function Layout({ children }) {
    return (
        children
    );
  }
  