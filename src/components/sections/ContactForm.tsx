import { FC, useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Loader2 } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';
import { contactFormSchema, type ContactFormData } from '@/types/schema';

interface ContactFormProps {
  isSpanish: boolean;
}

export const ContactForm: FC<ContactFormProps> = ({ isSpanish }) => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema)
  });

  const onSubmit = async (data: ContactFormData) => {
    setStatus('sending');
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setStatus('success');
      reset();
      setTimeout(() => setStatus('idle'), 3000);
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
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
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <Input
              label={isSpanish ? 'Nombre *' : 'Name *'}
              error={errors.name?.message}
              {...register('name')}
            />

            <Input
              label={isSpanish ? 'Correo Electrónico *' : 'Email *'}
              type="email"
              error={errors.email?.message}
              {...register('email')}
            />

            <div className="space-y-1">
              <label className="block text-white text-sm font-medium">
                {isSpanish ? 'Mensaje *' : 'Message *'}
              </label>
              <textarea
                className={`w-full px-4 py-2 rounded-lg bg-[#363636] text-white 
                  border border-[#4A6B8A] focus:ring-2 focus:ring-[#FF9100]/20 
                  focus:outline-none transition-all duration-300 resize-none
                  ${errors.message ? 'border-red-500' : ''}`}
                rows={4}
                {...register('message')}
              />
              {errors.message && (
                <p className="text-red-500 text-sm">{errors.message.message}</p>
              )}
            </div>

            <Button
              type="submit"
              isLoading={status === 'sending'}
              disabled={status === 'sending'}
              className="w-full"
            >
              {status === 'sending' ? (
                isSpanish ? 'Enviando...' : 'Sending...'
              ) : (
                <>
                  <Send className="w-5 h-5 mr-2" />
                  {isSpanish ? 'Enviar Mensaje' : 'Send Message'}
                </>
              )}
            </Button>

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