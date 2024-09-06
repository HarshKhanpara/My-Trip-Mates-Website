// components/GlobalBackground.js
const GlobalBackground = ({ children }) => {
    return (
      <div className="relative">
        {/* Fixed background */}
        <div 
          className="fixed inset-0 z-0" 
          style={{ backgroundColor: "#ED8C99", filter: 'blur(100px)', opacity: 0.6 }}
        ></div>
  
        {/* Page content */}
        <div className="relative z-10">
          {children}
        </div>
      </div>
    );
  };
  
  export default GlobalBackground;
  