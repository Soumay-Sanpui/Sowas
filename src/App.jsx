import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/section/HeroSection';
import HomeSection from './components/section/HomeSection';
import ServiceSection from './components/section/ServiceSection';
import PortfolioSection from './components/section/PortfolioSection';
import CTASection from './components/section/CTASection';
import BlogSection from './components/section/BlogSection';
import Footer from './components/Footer';

function App() {
  return (
    <main className='font-inter w-screen h-screen bg-bkg flex transition-all duration-300 ease-linear'>
      {/* Navbar */}
      <div className='w-[6vw] h-full flex items-center justify-center p-2 fixed'>
        <Navbar />
      </div>
      {/* Body */}
      <div className='w-full p-10 pl-[4vw] flex flex-col gap-[7vw]'>
        <HeroSection />
        <HomeSection />
        <ServiceSection />
        <PortfolioSection />
        <CTASection />
        <BlogSection />
        <Footer />
      </div>
    </main>
  );
}

export default App;
