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
    }
};

export default function Layout({ children }) {
    return (
        children
    );
  }
  