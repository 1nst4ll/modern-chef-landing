import { FC } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Award, Star } from 'lucide-react';

interface AboutSectionProps {
  isSpanish: boolean;
}

interface Feature {
  icon: JSX.Element;
  text: string;
}

export const AboutSection: FC<AboutSectionProps> = ({ isSpanish }) => {
  const features: Feature[] = [
    {
      icon: <MapPin className="w-5 h-5" />,
      text: isSpanish ? 'Basado en Ibiza, Disponible Mundialmente' : 'Based in Ibiza, Available Worldwide'
    },
    {
      icon: <Award className="w-5 h-5" />,
      text: isSpanish ? 'Especializado en Cocina Italiana e Internacional' : 'Specialized in Italian & International Cuisine'
    },
    {
      icon: <Star className="w-5 h-5" />,
      text: isSpanish ? 'Menús Personalizados y Eventos Privados' : 'Customized Menus & Private Events'
    }
  ];

  return (
    <section id="about" className="py-20 bg-[#363636]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl text-center text-white mb-12">
          {isSpanish ? 'Sobre Chef Antonio' : 'About Chef Antonio'}
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-lg overflow-hidden group">
              <div className="absolute inset-0 bg-[url('/api/placeholder/800/1000')] bg-cover bg-center
                          group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF9100]/0 to-[#FF9100]/0 
                          group-hover:from-[#FF9100]/10 group-hover:to-transparent 
                          transition-all duration-300" />
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-[#E0E0E0] text-lg">
              {isSpanish 
                ? 'Nacido en la soleada región de Apulia, Italia, en el encantador pueblo de Ruvo di Puglia, traigo los auténticos sabores de la cocina del sur de Italia a tu mesa.'
                : 'Born in the sun-kissed region of Apulia, Italy, in the charming town of Ruvo di Puglia, I bring the authentic flavors of Southern Italian cuisine to your table.'}
            </p>

            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="flex items-center gap-3 text-[#FF9100]"
              >
                {feature.icon}
                <span>{feature.text}</span>
              </motion.div>
            ))}

            <p className="text-[#E0E0E0] text-lg">
              {isSpanish
                ? 'Mi filosofía culinaria es simple pero profunda: dejo que los ingredientes más frescos hablen por sí mismos, realzados por técnicas refinadas y lo que llamo mi "toque mágico de amor".'
                : 'My culinary philosophy is simple yet profound: I let the freshest ingredients speak for themselves, enhanced by refined techniques and what I call my "magic love touch".'
              }
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};