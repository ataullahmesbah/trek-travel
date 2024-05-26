'use client'

// VideoAlbum.js

import VideoGallery from "../videoGallery/videogallery";

const videos = [
    {
        videoUrl: 'https://youtu.be/GFyqryC0UWA?si=9zGR2TznpenGD6Lx',
        thumbnailUrl: 'https://i.ibb.co/7kzXZtz/EEE2.png',
    },
    {
        videoUrl: 'https://www.example.com/video2.mp4',
        thumbnailUrl: 'https://www.example.com/thumbnail2.jpg',
    },
    // Add more video objects as needed
];

const VideoAlbum = () => {
    return (
        <div>
            <h1>Video Gallery</h1>
            {/* Check if videos is defined before passing it to VideoGallery */}
            {videos && <VideoGallery videos={videos} />}
        </div>
    );
};

export default VideoAlbum;
