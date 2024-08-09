'use client'
import { IoIosPause, IoMdClose } from "react-icons/io";

import React, { useRef, useState } from 'react';
import { AiFillSchedule, AiOutlineExpandAlt } from "react-icons/ai";
import { VscDebugStart } from "react-icons/vsc";
import { FaCompressAlt } from "react-icons/fa";

interface IVideoPlayerProps {
    videoLink: string;
    position: string;
}

const VideoPlayer: React.FC<IVideoPlayerProps> = ({ videoLink, position }) => {
    const [isVisible, setIsVisible] = useState(true);
    const [width, setWidth] = useState('40');
    const [height, setHeight] = useState('60')
    const [isPaused, setIsPaused] = useState(false);
    const [expand, setExpand] = useState(false);

    const videoRef = useRef<HTMLVideoElement>(null);

    const handleClose = () => {
        setIsVisible(false);
    };
    const pauseVideo = () => {
        if (videoRef.current) {
            if (isPaused) {
                videoRef.current.play();
            } else {
                videoRef.current.pause();
            }
            setIsPaused(!isPaused);
        }
    };
    const maximise = () => {
        if (expand) {
            setWidth('40');
            setHeight('60')
            setExpand(false);
        } else {
            setWidth('96');
            setHeight('4/5')
            setExpand(true)
        }
    }

    if (!isVisible) return null;

    return (
        <>
            <div
                className={`fixed ${position === 'bottom-right' ? "bottom-10 right-10" : "bottom-10 left-10"}  md:w-${width} md:h-${height} z-50 border-4 border-gray-500 rounded-2xl`}
            >
                <div className="relative w-full h-full">
                    <video
                        ref={videoRef}
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
                        onClick={pauseVideo}
                        className="absolute bottom-2 left-2 text-gray-700 rounded-full p-1 text-2xl hover:text-3xl z-50"
                    >
                        {isPaused ? <IoIosPause /> : <VscDebugStart />}
                    </button>
                    <button
                        onClick={maximise}
                        className="absolute bottom-2 right-2 text-gray-600 rounded-full p-1 text-2xl hover:text-3xl z-50"
                    >
                        {expand ? <FaCompressAlt /> : <AiOutlineExpandAlt />}
                    </button>

                    {expand && < div className="absolute bottom-20 left-1/2 transform -translate-x-1/2">
                        <button className="bg-gray-800 text-xl text-white rounded-full p-3 flex">
                            <AiFillSchedule />Schedule a call
                        </button>
                    </div>}

                </div>
            </div >
        </>
    );
};

export default VideoPlayer;
