'use client'


import { useState, useEffect } from 'react';
import Image from 'next/image';

const TripAlbum = () => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('/gallery.json');
                const data = await res.json();
                setImages(data);
            } catch (error) {
                console.error('Error fetching gallery data:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (!images.length) {
        return <div>No images found</div>;
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8 text-center">Gallery</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {images.map((image, index) => (
                    <div key={index} className="relative group">
                        <div className="w-full h-64 overflow-hidden rounded-lg">
                            <Image
                                src={image.url}
                                alt={`${image.name} - ${image.location}`}
                                layout="fill"
                                objectFit="cover"
                                className="transition-transform duration-300 ease-in-out transform group-hover:scale-105"
                                placeholder="blur"
                                blurDataURL={image.url}
                            />
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 text-center">
                            <h2 className="text-lg font-semibold">{image.name}</h2>
                            <p className="text-sm">{image.location}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TripAlbum;
