import React from 'react'

const Footer = () => {
    return (
        <footer className='bg-black text-gray-400 py-12'>
            <div className='max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8'>
                <div>
                    <h2 className='text-2xl text-white mb-2 ms-0'>About Us</h2>
                    <p>Music School is a premier istitution dedicated to learning the art and science of music. We nature talent from the ground up, fostering a vibrant community of musicians.</p>
                </div>

                <div>
                    <h2 className='text-2xl text-white mb-2 ms-0'>Quick Links</h2>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">About</a></li>
                        <li><a href="/">Courses</a></li>
                        <li><a href="/">Contact</a></li>
                    </ul>
                </div>

                <div>
                    <h2 className='text-2xl text-white mb-2 ms-0'>Follow Us</h2>
                    <ul>
                        <li><a href="#">FaceBook</a></li>
                        <li><a href="#">Twitter</a></li>
                        <li><a href="#">Instagram</a></li>
                        <li><a href="#">Linkedin</a></li>
                        <li><a href="#">Github</a></li>
                    </ul>
                </div>

                <div>
                    <h2 className='text-2xl text-white mb-2 ms-0'>Contact Us</h2>
                    <p>New Delhi</p>
                    <p>1000000</p>
                    <p>adarshshanu3@gmail.com</p>
                    <p>7356899987</p>
                </div>
            </div>
            <p className='text-center text-xs mt-5'>@2024 Music School. All rights reserved.</p>
        </footer>
    )
}

export default Footer
