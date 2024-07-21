"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";

const musicContent = [
    {
        title: "Music Composition",
        description:
            "Explore the art of music composition. Create original pieces, experiment with different genres, and refine your craft. Our platform provides the tools you need to bring your musical ideas to life and collaborate with other musicians."
    },
    {
        title: "Real-time Collaboration",
        description:
            "Collaborate with musicians around the world in real-time. Share your compositions, get feedback, and make changes on the fly. With our platform, you can connect with other artists, exchange ideas, and create music together seamlessly."
    },
    {
        title: "Music Production",
        description:
            "Dive into the world of music production. Use professional-grade tools and software to record, edit, and produce high-quality tracks. Our platform offers a comprehensive suite of features to help you polish your music and prepare it for release."
    },
    {
        title: "Music Education",
        description:
            "Enhance your musical skills with our educational resources. Learn from industry experts through tutorials, masterclasses, and interactive lessons. Whether you're a beginner or an experienced musician, our platform has something to offer."
    }
];


const WhyChooseUs = () => {
    return (
        <div>
            <StickyScroll content={musicContent}/>
        </div>
    )
}

export default WhyChooseUs
