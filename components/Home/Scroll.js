const ScrollIndicator = () => {
  const handleScroll = () => {
    const targetElement = document.getElementById('target-section');
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 cursor-pointer"
      onClick={handleScroll}
    >
      <div className="w-[44px] h-[68px] border-2 border-white rounded-full flex items-center justify-center">
        <div className="w-4 h-4 bg-white rounded-full animate-bounce"></div>
      </div>
    </div>
  );
};

export default ScrollIndicator;
