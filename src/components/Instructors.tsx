'use client'

import { WavyBackground } from "./ui/wavy-background"
import { AnimatedTooltip } from "./ui/animated-tooltip";

const people = [
    {
        id: 1,
        name: "Adarsh",
        designation: "Software Engineer",
        image:
            "https://pics.craiyon.com/2023-07-15/dc2ec5a571974417a5551420a4fb0587.webp",
    },
    {
        id: 2,
        name: "Shanu",
        designation: "Product Manager",
        image:
            "https://play-lh.googleusercontent.com/LeX880ebGwSM8Ai_zukSE83vLsyUEUePcPVsMJr2p8H3TUYwNg-2J_dVMdaVhfv1cHg",
    },
    {
        id: 3,
        name: "Pit",
        designation: "Data Scientist",
        image:
            "https://newprofilepic.photo-cdn.net//assets/images/article/profile.jpg?90af0c8",
    },
    {
        id: 4,
        name: "Druv",
        designation: "UX Designer",
        image:
            "https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/e76d4296-43f3-493b-9d50-f8e5c142d06c/2117667014/boys-profile-picture-screenshot.png",
    }
];

const Instructors = () => {
    return (
        <div className="relative h-[40rem] overflow-hidden flex items-center justify-center">
            <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full">
                <h2 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8">Meet Our Instructors</h2>
                <p className="text-base md:text-lg text-white text-center mb-4">Discover the talented professionals whko will guide your musical journey</p>
                <div className="flex flex-row items-center justify-center mb-10 w-full">
                    <AnimatedTooltip items={people} />
                </div>
            </WavyBackground>
        </div>
    )
}

export default Instructors
