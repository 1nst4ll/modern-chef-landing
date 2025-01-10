import { FC } from 'react';
import { motion } from 'framer-motion';
import { ChefHat, UtensilsCrossed, GraduationCap } from 'lucide-react';
import type { ServiceItem } from '@/types';

interface ServicesSectionProps {
  isSpanish: boolean;
}

export const ServicesSection: FC<ServicesSectionProps> = ({ isSpanish }) => {
  const services: ServiceItem[] = [
    {
      icon: <ChefHat className="w-12 h-12" />,
      title: isSpanish ? 'Chef Privado' : 'Private Chef',
      description: isSpanish 
        ? 'Experimente el arte culinario excepcional en la comodidad de su espacio.'
        : 'Experience exceptional culinary artistry in the comfort of your own space.'
    },
    {
      icon: <UtensilsCrossed className="w-12 h-12" />,
      title: isSpanish ? 'Catering para Eventos' : 'Event Catering',
      description: isSpanish
        ? 'Servicio completo de catering para ocasiones especiales y eventos corporativos.'
        : 'Full-service catering for special occasions and corporate events.'
    },
    {
      icon: <GraduationCap className="w-12 h-12" />,
      title: isSpanish ? 'Clases de Cocina' : 'Cooking Classes',
      description: isSpanish
        ? 'Sesiones interactivas de cocina italiana e internacional.'
        : 'Interactive cooking sessions featuring Italian and international cuisine.'
    }
  ];

  return (
    <section id="services" className="py-20 bg-[#2A2A2A]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl text-center text-white mb-12">
          {isSpanish ? 'Servicios' : 'Services'}
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#363636] p-8 rounded-lg group hover:-translate-y-2 transition-all duration-300
                        border border-transparent hover:border-[#FF9100]/20"
            >
              <div className="text-[#FF9100] mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-2xl text-white mb-4 group-hover:text-[#FF9100] transition-colors">
                {service.title}
              </h3>
              <p className="text-[#B0B0B0]">{service.description}</p>
              <div className="mt-6">
                <a
                  href="#contact"
                  className="inline-flex items-center text-[#FF9100] hover:text-[#FFB649] transition-colors group"
                >
                  <span className="mr-2">{isSpanish ? 'Reservar Ahora' : 'Book Now'}</span>
                  <svg
                    className="w-4 h-4 transform group-hover:translate-x-2 transition-transform"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};