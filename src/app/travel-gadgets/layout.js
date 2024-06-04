

export const metadata = {
    title: 'Trek Explore Travel - Travel Gadets',
    description: 'Welcome to Trek Explore Travel! Discover and plan your next adventure with us. We offer personalized travel packages, expert guides, and unforgettable experiences to the most exciting destinations around the world. Explore, dream, and discover with Trek Explore Travel.',
    keywords: 'Trek Explore Travel, adventure tours, travel packages, personalized travel, expert guides, travel experiences, trekking, travel destinations',
    author: 'Trek Explore Travel',
    openGraph: {
      title: 'Trek Explore Travel - Plan Your Adventure Tour Now',
      description: 'Welcome to Trek Explore Travel! Discover and plan your next adventure with us. We offer personalized travel packages, expert guides, and unforgettable experiences to the most exciting destinations around the world. Explore, dream, and discover with Trek Explore Travel.',
      type: 'website',
      url: 'https://www.trekexploretravel.com/',
      images: [
        {
          url: 'https://www.trekexploretravel.com/og-image.jpg',
          width: 800,
          height: 600,
          alt: 'Trek Explore Travel',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Trek Explore Travel - Plan Your Adventure Tour Now',
      description: 'Welcome to Trek Explore Travel! Discover and plan your next adventure with us. We offer personalized travel packages, expert guides, and unforgettable experiences to the most exciting destinations around the world. Explore, dream, and discover with Trek Explore Travel.',
      image: 'https://www.trekexploretravel.com/twitter-image.jpg',
    },
  };


const layout = ({ children }) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default layout;