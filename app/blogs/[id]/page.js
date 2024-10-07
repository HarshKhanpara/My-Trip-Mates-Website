"use client";

import Footer from '@/components/Footer';
import TravelStories from '@/components/Home/TravelStories';
import Loading3D from '@/components/LoadingScreen';
import Navbar from '@/components/Navbar';
import { getABlog } from '@/utils/blogs';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const BlogPost = ({ params }) => {
    const { id } = params;
    const [post, setPost] = useState(null);

    useEffect(() => {
        const fetchTrip = async () => {
          const post = await getABlog(id);
          
          if(post === null) {
            router.push('/404');
          }
          setPost(post);
        };
    
        fetchTrip();
      }, [id]);
    
      if (!post) {
        return <Loading3D
            loadingMessage='LOADING YOUR BLOG POST'
         />; // Show the 3D loading screen while data is loading
      }
    

    // Split blog content by new lines
    const paragraphs = post.fullBlog.split('\n');

    return (
        <>
              <Navbar
        backgroundColor='white'  // Light background color
        textColor='black'        // Dark text color for contrast
        buttonColor='#E15E2E'    // Color for buttons
        hoverColor='#E15E2E'     // Hover color for links
        dropdownBgColor='white'  // Light dropdown background
        dropdownTextColor='black' // Dark dropdown text color
      />
            <div className="relative mx-auto p-8 pt-24">
                <p
                    className="text-orange-500 text-6xl md:text-6xl absolute left-1/2 transform -translate-x-1/2 translate-y-1 -rotate-6 font-extrabold text-center"
                    style={{ fontFamily: 'autography' }}
                >
                    {post.loc}
                </p>

                {/* Title text overlapping below the location */}
                <h1 className="text-3xl font-bold my-11 text-center relative z-10">
                    {post.title}
                </h1>

                {/* Image */}
                <Image
                    src={post.image}
                    alt={post.title}
                    width={800}
                    height={400}
                    className="mx-auto mt-7 mb-7 max-h-[400px] max-w-[800px] hidden md:block"
                />
                {/* Image */}
               <Image
                    src={post.image}
                    alt={post.title}
                    width={300}
                    height={300}
                    className="mx-auto mt-7 mb-7 max-h-[400px] max-w-[800px] block md:hidden"
                />

                <p className="text-2xl text-blue-500 text-center">{post.subtext}</p>
                
                {/* Render each paragraph separately */}
                <div className="mt-4 text-gray-800 p-2 md:p-6 text-left">
                    {paragraphs.map((para, index) => (
                        <p key={index} className="mb-4">
                            {para}
                        </p>
                    ))}
                </div>
                <div
            className="pl-2 text-right text-3xl md:text-5xl cursor-pointer"
            style={{ color: '#000', fontFamily: 'autography' }}
          >
            my trip mates
          </div>
            </div>
            <TravelStories />
            <Footer />
        </>
    );
};

export default BlogPost;
