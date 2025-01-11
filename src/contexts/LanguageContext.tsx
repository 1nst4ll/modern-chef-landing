import { createContext, useContext, FC, ReactNode, useState } from 'react';

interface LanguageContextType {
  isSpanish: boolean;
  setIsSpanish: (value: boolean) => void;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: FC<LanguageProviderProps> = ({ children }) => {
  const [isSpanish, setIsSpanish] = useState<boolean>(false);

  const toggleLanguage = () => setIsSpanish(prev => !prev);

  return (
    <LanguageContext.Provider value={{ isSpanish, setIsSpanish, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};