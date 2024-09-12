import { stories } from '@/constants/blogs';
import Image from 'next/image';
import { redirect } from 'next/navigation';

const BlogPost = ({ params }) => {
    const { id } = params;
    const post = stories.find((p) => p.id === parseInt(params.id));
    if(!post) {
        redirect('/not-found');
    }
  return (
    <>
    <div className=" mx-auto p-8">
      <h1 className="text-3xl font-bold my-4 text-center">{post.title}</h1>
      <Image src={post.image} alt={post.title} width={800} height={500} className='mx-auto mt-7 mb-7'/>
      <p className="text-gray-600">{post.date} • {post.readTime}</p>
      <div className="mt-4 text-gray-800">{post.description}</div>
    </div>
    </>
  );
};


export default BlogPost;
