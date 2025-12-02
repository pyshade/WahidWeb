import { useState } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import Header from "@/components/Header";
import LogoBadge from "@/components/LogoBadge";
import WatchVideoBadge from "@/components/WatchVideoBadge";
import SideTags from "@/components/SideTags";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import PortfolioSection from "@/components/sections/PortfolioSection";

export default function Index() {
  const [isLoading, setIsLoading] = useState(true);

  if (isLoading) {
    return <LoadingScreen onComplete={() => setIsLoading(false)} />;
  }

  return (
    <div className="relative bg-gleamy-black min-h-screen">
      <Header />
      <LogoBadge />
      <WatchVideoBadge />
      <SideTags />
      
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <PortfolioSection />
      </main>
    </div>
  );
}
