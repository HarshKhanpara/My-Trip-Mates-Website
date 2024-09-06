import Image from 'next/image';

export default function CurvedGallery() {
  const unsplashUrl = "https://images.unsplash.com/photo-1707343846292-0c11438d145f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="flex space-x-4" style={{ perspective: '1500px' }}>
        {/* Adjustments for a more pronounced 3D effect */}
        {/* First Image (Leftmost) */}
        <div className="transform -translate-x-12 rotate-y-35 translate-z-[-2000px] scale-90">
          <Image src={unsplashUrl} alt="Image 1" width={400} height={400} className="rounded-lg shadow-lg" />
        </div>
        {/* Second Image (Left) */}
        <div className="transform -translate-x-6 rotate-y-20 translate-z-[120px] scale-95">
          <Image src={unsplashUrl} alt="Image 2" width={400} height={400} className="rounded-lg shadow-lg" />
        </div>
        {/* Center Image */}
        <div className="transform scale-100 translate-z-[-120px]">
          <Image src={unsplashUrl} alt="Image 3" width={400} height={400} className="rounded-lg shadow-lg" />
        </div>
        {/* Fourth Image (Right) */}
        <div className="transform translate-x-6 rotate-y-[-20deg] translate-z-[120px] scale-95">
          <Image src={unsplashUrl} alt="Image 4" width={400} height={400} className="rounded-lg shadow-lg" />
        </div>
        {/* Fifth Image (Rightmost) */}
        <div className="transform translate-x-12 rotate-y-[-35deg] translate-z-[2000px] scale-90">
          <Image src={unsplashUrl} alt="Image 5" width={400} height={400} className="rounded-lg shadow-lg" />
        </div>
      </div>
    </div>
  );
}