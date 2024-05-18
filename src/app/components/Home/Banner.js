'use client';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Image from "next/image";

import banner1 from '@/assets/banner/ban1.jpg';
import banner2 from '@/assets/banner/ban2.jpg';

const Banner = () => {
    return (
        <div className="w-full h-screen md:h-full">
            <Carousel
                showArrows={true}
                autoPlay={true}
                infiniteLoop={true}
                showThumbs={false}
                showStatus={false}
                interval={3000}
                className="h-full"
            >
                <div className="relative h-full md:h-screen">
                    <Image
                        src={banner1}
                        alt="Banner 1"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <p className="text-white text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold px-4">Welcome to Our Site</p>
                    </div>
                </div>
                <div className="relative h-full md:h-screen">
                    <Image
                        src={banner2}
                        alt="Banner 2"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <p className="text-white text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold px-4">Discover Our Services</p>
                    </div>
                </div>
                <div className="relative h-full md:h-screen">
                    <Image
                        src={banner1}
                        alt="Banner 3"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <p className="text-white text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold px-4">Join Us Today</p>
                    </div>
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;
