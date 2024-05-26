'use client'

import React, { useState } from 'react';

const YouTubeEmbed = ({ videoIds }) => {
    const [selectedVideo, setSelectedVideo] = useState(null);

    return (
        <div className="container mx-auto px-4 lg:px-16 py-8 mt-10">

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 ">
                {videoIds.map((id) => (
                    <div key={id} className="cursor-pointer">
                        <iframe
                            className="w-full h-52 sm:h-56 md:h-64 rounded-md"
                            src={`https://www.youtube.com/embed/${id}`}
                            frameBorder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                ))}
                {selectedVideo && (
                    <div className="col-span-3 sm:col-span-2 lg:col-span-1 flex justify-center mt-4">
                        <iframe
                            width="560"
                            height="315"
                            src={`https://www.youtube.com/embed/${selectedVideo}`}
                            frameBorder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full max-w-xl"
                        ></iframe>
                    </div>
                )}
            </div>

        </div>


    );
};

export default YouTubeEmbed;
