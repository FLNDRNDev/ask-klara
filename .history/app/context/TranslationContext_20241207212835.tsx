'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react';


interface TranslationContextProps {
   language: string;
   setLanguage: (language: string) => void;
}

const TranslationContext = createContext<TranslationContextProps | undefined>(undefined);

export const TranslationProvider = ({ children }: { children: ReactNode }) => {
   const [language, setLanguage] = useState<string>('nl'); // Default language is Dutch

   return (
      <TranslationContext.Provider value={{ language, setLanguage }}>
         {children}
      </TranslationContext.Provider>
   );
};

// Custom hook for accessing the translation context
export const useTranslationContext = () => {
   const context = useContext(TranslationContext);
   if (!context) {
      throw new Error('useTranslationContext must be used within a TranslationProvider');
   }
   return context;
};
