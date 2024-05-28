

import ContactUs from '@/app/components/Contact/Contact';



export const metadata = {
    title: 'Contact Us - Trek Explore Travel',
    description: 'Get in touch with Trek Explore Travel for personalized travel packages, expert guides, and unforgettable travel experiences. We are here to help you plan your next adventure.',
    keywords: 'Trek Explore Travel, contact us, travel inquiries, travel support, personalized travel packages',
    openGraph: {
        title: 'Contact Us - Trek Explore Travel',
        description: 'Get in touch with Trek Explore Travel for personalized travel packages, expert guides, and unforgettable travel experiences. We are here to help you plan your next adventure.',
        type: 'website',
        url: 'https://www.trekexploretravel.com/contact',
        images: [
            {
                url: 'https://www.trekexploretravel.com/og-contact.jpg',
                width: 800,
                height: 600,
                alt: 'Contact Trek Explore Travel',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Contact Us - Trek Explore Travel',
        description: 'Get in touch with Trek Explore Travel for personalized travel packages, expert guides, and unforgettable travel experiences. We are here to help you plan your next adventure.',
        image: 'https://www.trekexploretravel.com/twitter-contact.jpg',
    },
};

const page = () => {
    return (
        <div>
            <ContactUs />
        </div>
    );
};

export default page;