import React from 'react';
import Head from 'next/head';

export const metadata = {
    title: 'Terms and Conditions - Trek Explore Travel',
    description: 'Review the terms and conditions for using the Trek Explore Travel website and services. Your agreement and compliance are essential for enjoying our travel and adventure services.',
    keywords: 'Trek Explore Travel, Terms and Conditions, User Agreement, Service Terms, Travel, Adventure',
    openGraph: {
        title: 'Terms and Conditions - Trek Explore Travel',
        description: 'Review the terms and conditions for using the Trek Explore Travel website and services. Your agreement and compliance are essential for enjoying our travel and adventure services.',
        type: 'website',
        url: 'https://www.trekexploretravel.com/terms-conditions',
        images: [
            {
                url: 'https://www.trekexploretravel.com/images/terms-conditions.jpg',
                width: 800,
                height: 600,
                alt: 'Terms and Conditions',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Terms and Conditions - Trek Explore Travel',
        description: 'Review the terms and conditions for using the Trek Explore Travel website and services. Your agreement and compliance are essential for enjoying our travel and adventure services.',
        image: 'https://www.trekexploretravel.com/images/terms-conditions.jpg',
    },
};

const TermsConditions = () => {
    return (
        <div className="py-20">
            <Head>
                <title>{metadata.title}</title>
                <meta name="description" content={metadata.description} />
                <meta name="keywords" content={metadata.keywords} />
                <meta property="og:title" content={metadata.openGraph.title} />
                <meta property="og:description" content={metadata.openGraph.description} />
                <meta property="og:type" content={metadata.openGraph.type} />
                <meta property="og:url" content={metadata.openGraph.url} />
                <meta property="og:image" content={metadata.openGraph.images[0].url} />
                <meta property="og:image:width" content={metadata.openGraph.images[0].width} />
                <meta property="og:image:height" content={metadata.openGraph.images[0].height} />
                <meta property="og:image:alt" content={metadata.openGraph.images[0].alt} />
                <meta name="twitter:card" content={metadata.twitter.card} />
                <meta name="twitter:title" content={metadata.twitter.title} />
                <meta name="twitter:description" content={metadata.twitter.description} />
                <meta name="twitter:image" content={metadata.twitter.image} />
            </Head>
            <div className="container mx-auto px-4">
                <div className="bg-white p-8 rounded-lg shadow-lg">
                    <h1 className="text-4xl font-bold text-center mb-8">Terms and Conditions</h1>
                    <p className="mb-4">
                        Welcome to Trek Explore Travel. These Terms and Conditions outline the rules and regulations for the use of our website and services. By accessing this website, you agree to comply with these terms and conditions in full. If you do not accept all the terms and conditions stated on this page, please do not continue to use Trek Explore Travel’s website.
                    </p>
                    <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
                    <p className="mb-4">
                        These terms and conditions govern your use of our website. By using our website, you accept these terms and conditions in full. If you disagree with any part of these terms and conditions, you must not use our website.
                    </p>
                    <h2 className="text-2xl font-semibold mb-4">2. Intellectual Property Rights</h2>
                    <p className="mb-4">
                        Unless otherwise stated, Trek Explore Travel and/or its licensors own the intellectual property rights published on this website and materials used on Trek Explore Travel. Subject to the license below, all these intellectual property rights are reserved.
                    </p>
                    <h2 className="text-2xl font-semibold mb-4">3. License to Use Website</h2>
                    <p className="mb-4">
                        You may view, download for caching purposes only, and print pages or other content from the website for your own personal use, subject to the restrictions set out below and elsewhere in these terms and conditions.
                    </p>
                    <ul className="list-disc list-inside mb-4">
                        <li>You must not republish material from this website (including republication on another website);</li>
                        <li>Sell, rent or sub-license material from the website;</li>
                        <li>Show any material from the website in public;</li>
                        <li>Reproduce, duplicate, copy or otherwise exploit material on this website for a commercial purpose;</li>
                        <li>Edit or otherwise modify any material on the website;</li>
                        <li>Redistribute material from this website except for content specifically and expressly made available for redistribution.</li>
                    </ul>
                    <h2 className="text-2xl font-semibold mb-4">4. Acceptable Use</h2>
                    <p className="mb-4">
                        You must not use this website in any way that causes, or may cause, damage to the website or impairment of the availability or accessibility of the website; or in any way which is unlawful, illegal, fraudulent, or harmful, or in connection with any unlawful, illegal, fraudulent, or harmful purpose or activity.
                    </p>
                    <h2 className="text-2xl font-semibold mb-4">5. User Content</h2>
                    <p className="mb-4">
                        In these terms and conditions, “your user content”

                    </p>




                </div>
            </div>
        </div>

    );
};

export default TermsConditions;