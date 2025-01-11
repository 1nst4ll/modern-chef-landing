export * from './schema';

export interface NavItem {
  href: string;
  label: string;
}

export interface ServiceItem {
  icon: JSX.Element;
  title: string;
  description: string;
}

export interface ReviewItem {
  text: string;
  author: string;
  rating?: number;
}

export interface ContactInfo {
  icon: JSX.Element;
  text: string;
  href?: string;
  flag?: string;
}

export interface SocialLink {
  icon: JSX.Element;
  href: string;
  label: string;
}

export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
}

export type FormStatus = 'idle' | 'sending' | 'success' | 'error';

export interface LanguageContextType {
  isSpanish: boolean;
  setIsSpanish: (value: boolean) => void;
  toggleLanguage: () => void;
};
