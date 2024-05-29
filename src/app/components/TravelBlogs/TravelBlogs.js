'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const TravelBlogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await fetch('/blog.json');
                const data = await response.json();
                setBlogs(data);
            } catch (error) {
                console.error('Error fetching blog data:', error);
            }
        };

        fetchBlogs();
    }, []);

    return (
        <div className="container max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="relative h-64 w-full mb-12">
                <Image
                    src="/images/blog-banner.jpg"
                    layout="fill"
                    objectFit="cover"
                    alt="Blog Banner"
                    className="rounded-lg"
                />
                <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
                    <h1 className="text-white text-4xl font-bold">Our Blog</h1>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogs.map((blog) => (
                    <div key={blog._id} className="bg-white rounded-lg overflow-hidden border-l-8 border-sky-900 hover:border-sky-800 shadow-md hover:shadow-xl">
                        <Image
                            src={blog.image}
                            width={400}
                            height={250}
                            objectFit="cover"
                            alt={blog.title}
                            className="w-full h-48 object-cover transform transition-transform duration-300 hover:scale-105"
                        />
                        <div className="p-6">
                            <h2 className="text-2xl font-bold mb-2">{blog.title}</h2>
                            <p className="text-gray-600 mb-4">{new Date(blog.date).toLocaleDateString()}</p>
                            <p className="text-gray-700 mb-4">
                                {blog.description.slice(0, 40)}...
                            </p>
                            <Link href={`/blog/${blog._id}`} legacyBehavior>
                                <a className="text-sky-900 bottom-0 left-0 font-semibold hover:underline">Read More</a>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TravelBlogs;
