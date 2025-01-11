import { FC, useState } from 'react';
import { Layout } from './components/layout/Layout';
import { HeroSection } from './components/HeroSection';
import { ServicesSection } from './components/ServicesSection';
import { AboutSection } from './components/AboutSection';
import { GallerySection } from './components/GallerySection';
import { ReviewsSection } from './components/ReviewsSection';
import { ContactForm } from './components/ContactForm';

const App: FC = () => {
  const [isSpanish, setIsSpanish] = useState<boolean>(false);

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