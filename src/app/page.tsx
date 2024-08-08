'use client';

import FeaturedCources from "@/components/FeaturedCources";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import MusicSchoolTestimonials from "@/components/TestimonialCards";
import UpcomingWebinar from "@/components/UpcomingWebinar";
import WhyChooseUs from "@/components/WhyChooseUs";
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from "react";
import axios from "axios";
import VideoPlayer from "@/components/VideoPlay";

export default function Home() {
  const [videoLink, setVideoLink] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const searchParams = useSearchParams();

  const codeParam = searchParams.get('code');

  useEffect(() => {
    if (codeParam) fetchVideo(codeParam);
  }, [codeParam]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const documentHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;
      if (scrollTop > documentHeight * 0.20 - windowHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fetchVideo = async (code: string) => {
    try {
      const { data } = await axios.get(`https://www.sparekit.shop/api/v-uploader/${code}`);
      if (data.success) {
        setVideoLink(data.videoData.videoLink);
      } else {
        console.log(`API error: ${data.message}`);
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
      {videoLink && isVisible && <VideoPlayer videoLink={videoLink} />}
    </main>
  );
}
