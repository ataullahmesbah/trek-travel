

import Image from 'next/image';
import useBlogs from '../../hooks/useBlogs';

const BlogPost = () => {
    const { id } = useParams();
    const [blogs] = useBlogs();


    const blog = blogs.find((blog) => blog._id === id);
    return (
        <div className="container max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
            <p className="text-gray-600 mb-4">{new Date(blog.date).toLocaleDateString()}</p>
            <div className="relative h-64 w-full mb-12">
                <Image
                    src={blog.image}
                    layout="fill"
                    objectFit="cover"
                    alt={blog.title}
                    placeholder="blur"
                    quality={100}
                    blurDataURL={blog.image}
                    className="rounded-lg"
                />
            </div>
            <div className="prose max-w-none">
                <p>{blog.content}</p>
            </div>
        </div>
    );
};

export default BlogPost;
