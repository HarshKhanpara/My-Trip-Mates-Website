
export const metadata = {
    title: 'About Us - Crafting Travel Experiences',
    description: 'Learn about our passion for crafting extraordinary travel experiences. Discover our beliefs and commitment to customer satisfaction, sustainability, and authenticity.',
    openGraph: {
      title: 'About Us - Crafting Travel Experiences',
      description: 'Discover our mission and values. We are committed to creating memorable travel experiences while prioritizing sustainability, authenticity, and customer satisfaction.',
      images: '/gallery/background.jpg',
    },
  };
  
  
  const AboutLayout = ({children}) => {
    return (
      <>
        {children}
      </>
    )
  }
  
  export default AboutLayout;