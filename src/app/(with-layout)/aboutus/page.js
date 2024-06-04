// File: app/about/page.jsx (or pages/about.jsx if using the Pages Directory)
import React from 'react';
import ContainerPage from "../../components/container/page";
import Image from 'next/image';
import { FaFacebook, FaYoutube, FaInstagram } from 'react-icons/fa';

export const metadata = {
    title: 'About Us - Trek Explore Travel',
    description: 'Learn more about Trek Explore Travel, our mission, and our team. Follow us on social media to stay updated on our latest adventures.'
};

const AboutUs = () => {
    return (

        <div className="bg-gray-50 p-10 mt-14">
            <ContainerPage>
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-3xl font-semibold mb-6">About Us</h1>
                    <p className="mb-6 text-lg leading-relaxed">
                        Welcome to Trek Explore Travel! We are dedicated to providing the best travel experiences,
                        inspiring adventures, and unforgettable memories. Our mission is to explore the world and
                        bring you along on our journey through stunning visuals, detailed guides, and immersive content.
                    </p>
                    <Image
                        src="https://i.ibb.co/Jpc3b47/image.png"
                        alt="Our Team"
                        width={800}
                        height={450}
                        placeholder="blur"
                        blurDataURL="/"
                        className="rounded-lg mb-6 mx-auto"

                    />



                    <h2 className="text-2xl font-semibold mb-4">Follow Us</h2>
                    <div className="flex justify-center space-x-6">
                        <a href="https://www.facebook.com/mesbahoffwego" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                            <FaFacebook size={32} />
                        </a>
                        <a href="https://youtube.com/@mesbahoffwego4045?si=d2XQbd4F8Hn9FKM5" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-800">
                            <FaYoutube size={32} />
                        </a>
                        <a href="https://www.instagram.com/mesbahoffwego" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800">
                            <FaInstagram size={32} />
                        </a>
                    </div>
                </div>
            </ContainerPage>
        </div>

    );
};

export default AboutUs;
