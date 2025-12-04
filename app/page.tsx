"use client";

import AnimatedBackground from '@/components/AnimatedBackground';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/sections/HeroSection';
import StorySection from '@/components/sections/StorySection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import CaseStudiesSection from '@/components/sections/CaseStudiesSection';
import ServicesSection from '@/components/sections/ServicesSection';
import ResourcesSection from '@/components/sections/ResourcesSection';
import BookCallSection from '@/components/sections/BookCallSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      <Navbar />
      <main>
        <HeroSection />
        <StorySection />
        <TestimonialsSection />
        <CaseStudiesSection />
        <ServicesSection />
        <ResourcesSection />
        <BookCallSection />
      </main>
      <Footer />
    </div>
  );
}
