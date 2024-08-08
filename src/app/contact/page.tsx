'use client'
import React from 'react'
import { Meteors } from "@/components/ui/meteors";

const Page = () => {
    return (
        <div className='w-full pt-32 min-h-screen '>
            <div className="flex justify-center text-center">
                <div>
                    <h1 className='text-4xl text-white font-bold'>Contact Us</h1>
                    <p className='max-w-lg mt-4'>We're here to help with any questions about our courses, programs, or events. Feach out and let us know how we can assist you in your musical journey.</p>
                   <div className="mt-4 mb-4">
                   <input type="email" className=' mt-5 mb-5 w-1/2 py-4 px-10 rounded-full' placeholder='your email address' />
                   </div>
                   <div className="mt-4 mb-4">
                   <input type="text" className='  mb-5 w-1/2 py-4 px-10 rounded-full' placeholder='Your message' />
                   </div>
                   <input type="submit" className='  mb-5 w-1/2 py-4 px-10 rounded-full bg-blue-500' placeholder='Your message' />
                </div>
            </div>

            <Meteors number={20} />
        </div>
    )
}

export default Page
