import React from 'react';
import YouTubeEmbed from '../YouTubeEmbed/YouTubeEmbed';


const videoAlbum = () => {
    const videoIds = [
        // 'j-34PruXVRw',
    ];

    return (
        <div className="p-4">
            <YouTubeEmbed videoIds={videoIds} />
        </div>
    );
};

export default videoAlbum;
