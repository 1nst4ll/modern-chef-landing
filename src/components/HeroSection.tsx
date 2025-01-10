import { FC } from 'react';
import { motion } from 'framer-motion';
import { fadeIn, scaleIn } from '@/utils/animations';

interface HeroSectionProps {
  isSpanish: boolean;
}

export const HeroSection: FC<HeroSectionProps> = ({ isSpanish }) => {
  return (
    <section id="home" className="relative h-screen">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center">
        <div className="text-center px-4">
          <motion.div
            variants={fadeIn}
            initial="initial"
            animate="animate"
            className="max-w-4xl mx-auto backdrop-blur-sm bg-black/10 p-8 rounded-lg border border-[#FF9100]/10"
          >
            <h1 className="text-4xl md:text-6xl text-white mb-6 font-serif tracking-wider">
              {isSpanish ? 'Experiencia Culinaria Excepcional' : 'Experience Culinary Excellence'}
            </h1>
            <motion.div
              variants={scaleIn}
              initial="initial"
              animate="animate"
            >
              <a
                href="#contact"
                className="inline-flex items-center px-8 py-4 bg-[#FF9100] text-white rounded-lg 
                         hover:bg-[#FFB649] transition-all duration-300 group"
              >
                <span className="text-lg">
                  {isSpanish ? 'Reservar Ahora' : 'Book Now'}
                </span>
                <svg 
                  className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};