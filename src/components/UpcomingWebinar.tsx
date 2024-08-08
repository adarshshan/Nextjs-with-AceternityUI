'use client'
import Link from 'next/link'
import React from 'react'
import { HoverEffect } from "./ui/card-hover-effect";

const UpcomingWebinar = () => {
    const featuredWebinars = [
        {
            title: 'Understanding Music Theory part-1',
            description: 'Dive deep into fundamentals of music theory and enheance your musical skills.',
            slug: 'Understanding-music-theory1',
            isFeatured: true
        },
        {
            title: 'Understanding Music Theory part-2',
            description: 'Dive deep into fundamentals of music theory and enhance yoeur musical skills.',
            slug: 'Understanding-music-theory2',
            isFeatured: true
        },
        {
            title: 'Understanding Music Theory part-3',
            description: 'Dive deep into fundamentals of music theory and enhance dyour musical skills.',
            slug: 'Understanding-music-theory3',
            isFeatured: true
        },
        {
            title: 'Understanding Music Theory part-4',
            description: 'Dive deep into fundamendtals of music theory and enhance your musical skills.',
            slug: 'Understanding-music-theory4',
            isFeatured: true
        },
        {
            title: 'Understanding Music Theory part-5',
            description: 'Dive deep into fundamentadls of music theory and enhance your musical skills.',
            slug: 'Understanding-music-theory5',
            isFeatured: true
        },
        {
            title: 'Understanding Music Theory part-6',
            description: 'Dive deep into fundamentdals of music theory and enhance your musical skills.',
            slug: 'Understanding-music-theory6',
            isFeatured: true
        }
    ]
    return (
        <div className='p-12 bg-gray-900'>
            <div className="max-w-7xl mx-auto px-4 sm:px-6">

                <div className='text-center'>
                    <h2 className='text-base text-teal-600 font-semibold tracking-wide uppercase'>FEATURED WEBINARS</h2>
                    <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl'>Enhance Your Musical Journey</p>
                </div>

                <div className='mt-10'>
                    <HoverEffect items={featuredWebinars.map(webinar => (
                        {
                            title: webinar.title,
                            description: webinar.description,
                            link: `/webinars/${webinar.slug}`
                        }
                    ))} />
                </div>

                <div className='mt-10 text-center'>
                    <Link href={'/'} className='px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200'>
                        View All Webinars
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default UpcomingWebinar
