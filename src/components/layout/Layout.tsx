import { FC, ReactNode } from 'react';
import { NavBar } from '../NavBar';
import { Footer } from '../Footer';
import { SEO } from './SEO';

interface LayoutProps {
  children: ReactNode;
  isSpanish: boolean;
  setIsSpanish: (value: boolean) => void;
}

export const Layout: FC<LayoutProps> = ({ children, isSpanish, setIsSpanish }) => {
  return (
    <>
      <SEO isSpanish={isSpanish} />
      <NavBar isSpanish={isSpanish} setIsSpanish={setIsSpanish} />
      <main className="min-h-screen bg-[#2A2A2A]">{children}</main>
      <Footer isSpanish={isSpanish} />
    </>
  );
};