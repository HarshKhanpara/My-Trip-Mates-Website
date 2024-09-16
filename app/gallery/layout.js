export const metadata = {
    title: 'Visual Gallery - Bali, Vietnam, and Thailand Journeys',
    description: 'Explore stunning visual galleries from trips to Bali, Vietnam, and Thailand. Capture the essence of these beautiful destinations through our curated image collections.',
    openGraph: {
      title: 'Visual Gallery - Bali, Vietnam, and Thailand Journeys',
      description: 'Join us in an immersive visual journey across Bali, Vietnam, and Thailand. Discover the vibrant cultures, landscapes, and unforgettable memories captured in these galleries.',
      images: [
        {
          url: '/gallery/background.jpg',
          width: 800,
          height: 600,
          alt: 'Gallery Background',
        }
      ],
      type: 'website'
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Visual Gallery - Bali, Vietnam, and Thailand Journeys',
      description: 'Explore stunning visual galleries from trips to Bali, Vietnam, and Thailand. Capture the essence of these beautiful destinations through our curated image collections.',
      image: '/gallery/background.jpg',
    },
    meta:{
      author: 'My Trip Mates',
      robots: 'index, follow',
      keywords: 'bali, vietnam, thailand, travel, adventure, trip, images, visual, gallery',
      description: 'Join us in an immersive visual journey across Bali, Vietnam, and Thailand. Discover the vibrant cultures, landscapes, and unforgettable memories captured in these galleries.',
      title: 'Visual Gallery - Bali, Vietnam, and Thailand Journeys',
    }
  };
  

export default function Layout({ children }) {
    return (
        <>
        {children}
        </>
    );
  }
  