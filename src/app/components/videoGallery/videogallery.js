import React from 'react';
import YouTubeEmbed from '../YouTubeEmbed/YouTubeEmbed';


const videoGallery = () => {
    const videoIds = [
        'i1Ms7lmRD3c?si=OnZ0Tz18AkNz2p0I',
        'y0wXQ5EdW_0?si=KYXyerD86qgi7Ro-',
        'wFn-jqLc10k?si=93liFfdFnBE3rb4U',
    ];

    return (
        <div className="p-4">
            <YouTubeEmbed videoIds={videoIds} />
        </div>
    );
};

export default videoGallery;
