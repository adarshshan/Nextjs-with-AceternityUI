'use client'
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
    console.log('this is the code' + codeParam);
    if (codeParam) fetchVideo(codeParam)
  }, [])
  useEffect(() => {
    const handleScroll = () => {
      // Calculate how much the user has scrolled
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      // Get the total scrollable height of the document
      const documentHeight = document.documentElement.scrollHeight;
      // Get the viewport height
      const windowHeight = window.innerHeight;
      // Check if the user has scrolled down 20%
      if (scrollTop > documentHeight * 0.20 - windowHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const fetchVideo = async (code: string) => {
    console.log('function is invoked......');
    try {
      const { data } = await axios.get(`http://localhost:5000/api/v-uploader/${code}`);
      console.log(data);
      if (data.success) setVideoLink(data.videoData.videoLink);
      else console.log(data.message);
    } catch (error) {
      console.log(error);
    }
  }
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
