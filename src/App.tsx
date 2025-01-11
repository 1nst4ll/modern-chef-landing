import { FC } from 'react';
import { Layout } from './components/layout/Layout';
import { HeroSection } from './components/sections/HeroSection';
import { ServicesSection } from './components/sections/ServicesSection';
import { AboutSection } from './components/sections/AboutSection';
import { GallerySection } from './components/sections/GallerySection';
import { ReviewsSection } from './components/sections/ReviewsSection';
import { ContactForm } from './components/sections/ContactForm';
import { useLanguage } from './contexts/LanguageContext';

const App: FC = () => {
  const { isSpanish, setIsSpanish } = useLanguage();

  return (
    <Layout isSpanish={isSpanish} setIsSpanish={setIsSpanish}>
      <HeroSection isSpanish={isSpanish} />
      <ServicesSection isSpanish={isSpanish} />
      <AboutSection isSpanish={isSpanish} />
      <GallerySection isSpanish={isSpanish} />
      <ReviewsSection isSpanish={isSpanish} />
      <ContactForm isSpanish={isSpanish} />
    </Layout>
  );
};

export default App;