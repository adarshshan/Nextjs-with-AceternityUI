import FeaturedCources from "@/components/FeaturedCources";
import HeroSection from "@/components/HeroSection";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <h1 className="text-2xl text-center">Chai Aur Code</h1>
      <HeroSection />
      <FeaturedCources />
    </main>
  );
}
