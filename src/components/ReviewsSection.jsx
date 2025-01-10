import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export const ReviewsSection = ({ isSpanish = false }) => {
  const reviews = [
    {
      text: isSpanish
        ? '"El Chef Antonio creó una experiencia gastronómica inolvidable para nuestro aniversario. Su atención al detalle y pasión por la cocina se reflejó en cada plato."'
        : '"Chef Antonio created an unforgettable dining experience for our anniversary. His attention to detail and passion for cooking truly showed in every dish."',
      author: isSpanish ? 'María y Jaime, Ibiza' : 'Maria & James, Ibiza'
    },
    {
      text: isSpanish
        ? '"Su fusión de sabores mediterráneos y caribeños fue innovadora y deliciosa. ¡Un verdadero artista culinario!"'
        : '"His fusion of Mediterranean and Caribbean flavors was innovative and delicious. A true culinary artist!"',
      author: 'Sarah Thompson, NYC'
    },
    {
      text: isSpanish
        ? '"La clase de cocina fue educativa y entretenida. Su conocimiento de la cocina italiana y sus técnicas son impresionantes."'
        : '"The cooking class was both educational and entertaining. His knowledge of Italian cuisine and techniques is impressive."',
      author: isSpanish ? 'David y Lisa, Londres' : 'David & Lisa, London'
    }
  ];

  return (
    <section id="reviews" className="py-20 bg-[#363636]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl text-center text-white mb-12">
          {isSpanish ? 'Opiniones de Clientes' : 'Client Reviews'}
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#2A2A2A] p-6 rounded-lg group hover:-translate-y-2 transition-all duration-300
                        border border-transparent hover:border-[#FF9100]/20"
            >
              <div className="flex items-center mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-[#FF9100] group-hover:scale-105 transition-transform"
                    fill="currentColor"
                  />
                ))}
              </div>
              <p className="text-[#E0E0E0] mb-4">{review.text}</p>
              <p className="text-[#B0B0B0] group-hover:text-[#FF9100] transition-colors">
                {review.author}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};