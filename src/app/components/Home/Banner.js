'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export const metadata = {
    title: 'Travel Stories - Trek Explore Travel',
    description: 'Discover captivating travel stories from around the world. Join us on our adventures and get inspired for your next journey with stunning visuals and engaging narratives.',
};

const banners = [
    {
        imageUrl: 'https://i.ibb.co/Jpc3b47/image.png',
        title: 'Adventure Stories',
        description: 'Our latest stories are here'
    },
    {
        imageUrl: 'https://i.ibb.co/hKh5Gqp/image.png',
        title: 'Discover New Places',
        description: 'Join us on our journey through stunning visuals'
    },
    {
        imageUrl: 'https://i.ibb.co/8rdGbBH/kasmir-great-lakes-trek-3.jpg',
        title: 'Unforgettable Memories',
        description: 'Experience the thrill of a lifetime'
    },
];

const Banner = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
        }, 5000);

        return () => clearInterval(interval); // Clear interval on component unmount
    }, []);

    return (
        <div className="bg-gray-50 mt-14">
            {/* Banner Section */}
            <div className="relative w-full h-[70vh]">
                {banners.map((banner, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                    >
                        <Image
                            src={banner.imageUrl}
                            alt={banner.title}
                            layout="fill"
                            objectFit="cover"
                            className="w-full h-full"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
                            <h1 className="text-white text-4xl font-semibold border-b-2 border-white">{banner.title}</h1>
                            <p className="text-white text-2xl mt-4">{banner.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Banner;
