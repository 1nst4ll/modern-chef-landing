import React, { useState } from 'react';
import { NavBar } from './components/NavBar';
import { HeroSection } from './components/HeroSection';
import { ServicesSection } from './components/ServicesSection';
import { AboutSection } from './components/AboutSection';
import { GallerySection } from './components/GallerySection';
import { ReviewsSection } from './components/ReviewsSection';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';

const App = () => {
  const [isSpanish, setIsSpanish] = useState(false);

  return (
    <div className="min-h-screen bg-[#2A2A2A]">
      <NavBar isSpanish={isSpanish} setIsSpanish={setIsSpanish} />
      <HeroSection isSpanish={isSpanish} />
      <ServicesSection isSpanish={isSpanish} />
      <AboutSection isSpanish={isSpanish} />
      <GallerySection isSpanish={isSpanish} />
      <ReviewsSection isSpanish={isSpanish} />
      <ContactForm isSpanish={isSpanish} />
      <Footer isSpanish={isSpanish} />
    </div>
  );
};

export default App;