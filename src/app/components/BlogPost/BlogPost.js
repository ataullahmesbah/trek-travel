'use client'

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

const BlogPost = () => {
    const router = useRouter();
    const { id } = router.query;
    const [blog, setBlog] = useState(null);

    useEffect(() => {
        const fetchBlog = async () => {
            if (!id) return;

            try {
                const response = await fetch('/blog.json');
                const data = await response.json();
                const blogPost = data.find((blog) => blog.id === parseInt(id));
                setBlog(blogPost);
            } catch (error) {
                console.error('Error fetching blog data:', error);
            }
        };

        fetchBlog();
    }, [id]);

    if (!blog) {
        return <p>Loading...</p>;
    }

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
