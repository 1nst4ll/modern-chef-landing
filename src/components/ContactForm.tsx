import { FC, useState, FormEvent, ChangeEvent } from 'react';
import { motion } from 'framer-motion';
import { Send, Loader2 } from 'lucide-react';
import type { FormData, FormStatus } from '@/types';
import { validateForm } from '@/utils/validation';

interface ContactFormProps {
  isSpanish: boolean;
}

export const ContactForm: FC<ContactFormProps> = ({ isSpanish }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errors, setErrors] = useState<string[]>([]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const validation = validateForm(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setStatus('sending');
    setErrors([]);

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 3 seconds
      setTimeout(() => setStatus('idle'), 3000);
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear errors when user starts typing
    if (errors.length) setErrors([]);
  };

  return (
    <section id="contact" className="py-20 bg-[#2A2A2A]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl text-center text-white mb-12">
          {isSpanish ? 'Reserve su Experiencia' : 'Book Your Experience'}
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-white mb-2" htmlFor="name">
                {isSpanish ? 'Nombre *' : 'Name *'}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg bg-[#363636] text-white border border-[#4A6B8A]
                         focus:ring-2 focus:ring-[#FF9100]/20 focus:outline-none
                         transition-all duration-300"
              />
            </div>

            <div>
              <label className="block text-white mb-2" htmlFor="email">
                {isSpanish ? 'Correo Electrónico *' : 'Email *'}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg bg-[#363636] text-white border border-[#4A6B8A]
                         focus:ring-2 focus:ring-[#FF9100]/20 focus:outline-none
                         transition-all duration-300"
              />
            </div>

            <div>
              <label className="block text-white mb-2" htmlFor="message">
                {isSpanish ? 'Mensaje *' : 'Message *'}
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-2 rounded-lg bg-[#363636] text-white border border-[#4A6B8A]
                         focus:ring-2 focus:ring-[#FF9100]/20 focus:outline-none
                         transition-all duration-300 resize-none"
              />
            </div>

            {errors.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-500"
              >
                <ul className="list-disc list-inside">
                  {errors.map((error, index) => (
                    <li key={index}>{error}</li>
                  ))}
                </ul>
              </motion.div>
            )}

            <motion.button
              type="submit"
              disabled={status === 'sending'}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className="w-full bg-[#FF9100] text-white px-6 py-3 rounded-lg hover:bg-[#FFB649]
                       transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed
                       flex items-center justify-center space-x-2"
            >
              {status === 'sending' ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>{isSpanish ? 'Enviando...' : 'Sending...'}</span>
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  <span>{isSpanish ? 'Enviar Mensaje' : 'Send Message'}</span>
                </>
              )}
            </motion.button>

            {status === 'success' && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-green-500 text-center"
              >
                {isSpanish
                  ? '¡Mensaje enviado con éxito!'
                  : 'Message sent successfully!'}
              </motion.p>
            )}

            {status === 'error' && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-500 text-center"
              >
                {isSpanish
                  ? 'Error al enviar el mensaje. Por favor, inténtelo de nuevo.'
                  : 'Error sending message. Please try again.'}
              </motion.p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
};