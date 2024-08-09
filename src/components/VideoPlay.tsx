'use client'
import { IoIosPause, IoMdClose } from "react-icons/io";

import React, { useState } from 'react';
import { AiOutlineExpandAlt } from "react-icons/ai";

interface IVideoPlayerProps {
    videoLink: string;
    position: string;
}

const VideoPlayer: React.FC<IVideoPlayerProps> = ({ videoLink, position }) => {
    const [isVisible, setIsVisible] = useState(true);
    const [width,setWidth]=useState(48);
    const [height,setHeight]=useState(40)

    const handleClose = () => {
        setIsVisible(false);
    };
    const handleLeftClick = () => { }
    const maximise = () => {
        setWidth(96);
        setHeight(96)
     }

    if (!isVisible) return null;

    return (
        <>
            <div
                className={`fixed ${position === 'bottom-right' ? "bottom-10 right-10" : "bottom-10 left-10"} w-${width} h-${height} z-50 border-4 border-gray-500 rounded-2xl`}
            >
                <div className="relative w-full h-full">
                    <video
                        className="w-full h-full rounded-2xl object-cover"
                        src={videoLink}
                        autoPlay
                        muted
                        loop
                    ></video>
                    <div className="absolute top-10 left-[-35px] bg-blue-600 rounded-l-2xl rounded-tr-2xl p-2 px-3">hello!</div>
                    <button
                        onClick={handleClose}
                        className="absolute top-[-15px] right-[-15px] text-white bg-gray-700 rounded-full p-2 z-50"
                    >
                        <IoMdClose className="text-xl" />
                    </button>
                    <button
                        onClick={handleLeftClick}
                        className="absolute bottom-2 left-2 text-gray-700 rounded-full p-1 text-2xl hover:text-3xl z-50"
                    >
                        <IoIosPause />
                    </button>
                    <button
                        onClick={maximise}
                        className="absolute bottom-2 right-2 text-gray-600 rounded-full p-1 text-2xl hover:text-3xl z-50"
                    >
                        <AiOutlineExpandAlt />
                    </button>
                </div>
            </div>
        </>
    );
};

export default VideoPlayer;
