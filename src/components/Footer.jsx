import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Instagram, Facebook, Linkedin } from 'lucide-react';

export const Footer = ({ isSpanish = false }) => {
  const contactInfo = [
    {
      icon: <Phone className="w-5 h-5" />,
      text: '+34 655 16 22 59',
      href: 'tel:+34655162259',
      flag: './images/es-sm.png'
    },
    {
      icon: <Phone className="w-5 h-5" />,
      text: '+1 649 246 3585',
      href: 'tel:+16492463585',
      flag: './images/tc-sm.png'
    },
    {
      icon: <Mail className="w-5 h-5" />,
      text: 'contact@chefantonioruta.com',
      href: 'mailto:contact@chefantonioruta.com'
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      text: 'Ibiza (IB) Spain'
    }
  ];

  const socialLinks = [
    { icon: <Instagram className="w-6 h-6" />, href: '#', label: 'Instagram' },
    { icon: <Facebook className="w-6 h-6" />, href: '#', label: 'Facebook' },
    { icon: <Linkedin className="w-6 h-6" />, href: '#', label: 'LinkedIn' }
  ];

  return (
    <footer className="bg-[#363636] py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">Chef Antonio</h3>
            <p className="text-[#B0B0B0]">
              {isSpanish
                ? 'Llevando la excelencia culinaria a sus ocasiones especiales.'
                : 'Bringing culinary excellence to your special occasions.'}
            </p>
          </div>

          {/* Contact Column */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">
              {isSpanish ? 'Contacto' : 'Contact'}
            </h3>
            <div className="space-y-3">
              {contactInfo.map((item, index) => (
                item.href ? (
                  <a
                    key={index}
                    href={item.href}
                    className="flex items-center text-[#B0B0B0] hover:text-[#FF9100]
                             transition-colors group"
                  >
                    <span className="text-[#FF9100] mr-3 group-hover:scale-110 transition-transform">
                      {item.icon}
                    </span>
                    {item.flag && (
                      <img src={item.flag} alt="flag" className="w-5 h-5 mr-2" />
                    )}
                    {item.text}
                  </a>
                ) : (
                  <div
                    key={index}
                    className="flex items-center text-[#B0B0B0]"
                  >
                    <span className="text-[#FF9100] mr-3">{item.icon}</span>
                    {item.text}
                  </div>
                )
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">
              {isSpanish ? 'Redes Sociales' : 'Connect'}
            </h3>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  whileHover={{ scale: 1.1 }}
                  className="text-[#B0B0B0] hover:text-[#FF9100] transition-colors"
                  aria-label={link.label}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 mt-8 border-t border-[#4A6B8A]/30 text-center text-[#B0B0B0] text-sm">
          © {new Date().getFullYear()} Chef Antonio Ruta. {isSpanish ? 'Todos los derechos reservados.' : 'All rights reserved.'}
        </div>
      </div>
    </footer>
  );
};