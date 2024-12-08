'use client'

import { useEffect, useState } from 'react';


const useDetectLanguage = () => {
   const [language, setLanguage] = useState<string>('en'); // Default to English

   useEffect(() => {
      const userLanguage = navigator.language || navigator.userLanguage;
      if (userLanguage.startsWith('nl')) {
         setLanguage('nl');
      } else {
         setLanguage('en');
      }
   }, []);

   return language;
};

export default useDetectLanguage;
