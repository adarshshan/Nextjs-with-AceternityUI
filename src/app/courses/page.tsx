'use client'
import { Course } from "@/components/FeaturedCources";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import courceData from '@/data/music_courses.json'
import Image from "next/image";
import React from "react";

const Page = () => {
    return (
        <div className="min-h-screen bg-black py-12 pt-36">
            <h1 className="text-lg md:text-7xl text-center font-sans font-bold mb-8 text-white">
                All Cources ({courceData.cources.length})
            </h1>
            <div className="flex flex-wrap justify-center">
                {courceData.cources.map((cource: Course) => (
                    <CardContainer key={Math.random()} className="inter-var m-4">
                        <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-2 border  ">
                            <CardItem
                                translateZ="50"
                                className="text-xl font-bold text-neutral-600 dark:text-white"
                            >
                                {cource.title}
                            </CardItem>
                            <CardItem
                                as="p"
                                translateZ="60"
                                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                            >
                                {cource.description}
                            </CardItem>
                            <CardItem translateZ="100" className="w-full mt-4">
                                <Image
                                    src={cource.image}
                                    height="1000"
                                    width="1000"
                                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                    alt={cource.title}
                                />
                            </CardItem>
                        </CardBody>
                    </CardContainer>
                ))}
            </div>
        </div>
    )
}

export default Page
