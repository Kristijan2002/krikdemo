import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'mk';

type LanguageContextType = {
  language: Language;
  changeLanguage: (newLanguage: Language) => void;
};

const defaultValue: LanguageContextType = {
  language: 'mk',
  changeLanguage: () => {},
};

const LanguageContext = createContext<LanguageContextType | undefined>(defaultValue);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

type LanguageProviderProps = {
  children: React.ReactNode;
};

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('mk');

  const changeLanguage = (newLanguage: Language) => {
    setLanguage(newLanguage);
  };

  const value: LanguageContextType = {
    language,
    changeLanguage,
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export default LanguageContext;
