'use client'

import Image from 'next/image';
// VideoGallery.js

import { useState } from 'react';

const VideoGallery = ({ videos }) => {
    const [currentVideo, setCurrentVideo] = useState(null);

    const playVideo = (videoUrl) => {
        setCurrentVideo(videoUrl);
    };

    return (
        <div className="video-gallery">
            {/* Check if videos is defined and not null before mapping over it */}
            {videos && videos.map((video, index) => (
                <div key={index} className="video-thumbnail">
                    <Image src={video.thumbnailUrl} alt="Video Thumbnail" />
                    <button onClick={() => playVideo(video.videoUrl)}>Play Video</button>
                </div>
            ))}
            {currentVideo && (
                <div className="video-player">
                    {/* Your video player code */}
                </div>
            )}
        </div>
    );
};

export default VideoGallery;
