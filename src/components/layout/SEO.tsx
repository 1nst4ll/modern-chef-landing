import { FC } from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  isSpanish: boolean;
}

export const SEO: FC<SEOProps> = ({ isSpanish }) => {
  const title = isSpanish 
    ? 'Chef Antonio Ruta - Servicios de Chef Privado'
    : 'Chef Antonio Ruta - Private Chef Services';

  const description = isSpanish
    ? 'Experimente la excelencia culinaria con el Chef Antonio Ruta. Servicios de chef privado, catering para eventos y clases de cocina en Ibiza y mundialmente.'
    : 'Experience culinary excellence with Chef Antonio Ruta. Private chef services, event catering, and cooking classes in Ibiza and worldwide.';

  return (
    <Helmet>
      <html lang={isSpanish ? 'es' : 'en'} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="/og-image.jpg" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <link rel="canonical" href="https://www.chefantonioruta.com" />
      {isSpanish && <link rel="alternate" href="https://www.chefantonioruta.com/en" hrefLang="en" />}
      {!isSpanish && <link rel="alternate" href="https://www.chefantonioruta.com/es" hrefLang="es" />}
    </Helmet>
  );
};