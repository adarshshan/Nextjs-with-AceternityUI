'use client'
import React from 'react';
interface IVideoPlayerProps {
    videoLink: string;
    position: string;
}
const VideoPlayer: React.FC<IVideoPlayerProps> = ({ videoLink, position }) => {
    return (
        <video
            className={`fixed ${position === 'bottom-right' ? "bottom-10 right-10" : "bottom-10 left-10"}  w-48 h-40 z-50 border-4 border-gray-500 rounded-2xl md:h-64 object-cover`}
            src={videoLink}
            autoPlay
            muted
            loop
        ></video>
    );
};

export default VideoPlayer;
