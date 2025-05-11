
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import MissionSection from '@/components/MissionSection';
import HowToRequestSection from '@/components/HowToRequestSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <MissionSection />
        <HowToRequestSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
