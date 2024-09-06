// import { useSpring, animated, useScroll } from '@react-spring/web';
// import { useEffect, useState } from 'react';

// const Parallax = ({ children }) => {
//   const { scrollY } = useScroll();
//   const scrollLimit = 1000; // Define the scroll limit for the parallax effect
//   const [isMounted, setIsMounted] = useState(false);

//   useEffect(() => {
//     setIsMounted(true);
//   }, []);

//   // Adjust the parallax and fade-out effect parameters as needed
//   const props = useSpring({
//     transform: isMounted ? scrollY.to(y => `translateY(${Math.min(y * 0.5, scrollLimit * 0.5)}px)`) : 'translateY(0px)', // Parallax effect stops at scrollLimit
//     opacity: isMounted ? scrollY.to(y => Math.max(1 - y / (scrollLimit / 2), 0.75)) : 1, // More gradual fade-out effect
//   });

//   return <animated.div style={props}>{children}</animated.div>;
// };

// export default Parallax;