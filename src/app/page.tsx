'use client';

import { Suspense, useEffect, useState } from 'react';
import Footer from "@/components/Footer";
import FeaturedCources from "@/components/FeaturedCources";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import MusicSchoolTestimonials from "@/components/TestimonialCards";
import UpcomingWebinar from "@/components/UpcomingWebinar";
import WhyChooseUs from "@/components/WhyChooseUs";
import VideoPlayer from "@/components/VideoPlay";
import { useSearchParams } from 'next/navigation';
import axios from 'axios';

function HomeContent() {
  const [videoLink, setVideoLink] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [position,setPosition]=useState('bottom-right');
  const searchParams = useSearchParams();

  const codeParam = searchParams.get('code');


  useEffect(() => {
    if (codeParam) {
      fetchVideo(codeParam);
    }
  }, [codeParam]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const documentHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;
      setIsVisible(scrollTop > documentHeight * 0.20 - windowHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fetchVideo = async (code: string) => {
    try {
      const { data } = await axios.get(`https://www.sparekit.shop/api/v-uploader/${code}`);
      if (data.success) {
        setVideoLink(data.videoData.videoLink);
        setPosition(data.videoData.position)
      } else {
        console.error(`API error: ${data.message}`);
      }
    } catch (error) {
      console.error('Error fetching video:', error);
    }
  };

  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <FeaturedCources />
      <WhyChooseUs />
      <MusicSchoolTestimonials />
      <UpcomingWebinar />
      <Instructors />
      <Footer />
      {videoLink && isVisible && <VideoPlayer position={position} videoLink={videoLink} />}
    </main>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HomeContent />
    </Suspense>
  );
}
