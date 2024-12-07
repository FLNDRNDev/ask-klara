'use client'

import React from 'react'

import Avatar from '@/components/shared/Avatar';
import { Input } from '@/components/ui/input';
import useTranslation from '@/app/hooks/useTranslation';
import { useTranslationContext } from '@/app/context/TranslationContext';
import { Button } from '@/components/ui/button';


function CreateChatbot() {
   const { language } = useTranslationContext(); // Removed setLanguage
   const { t } = useTranslation(language);
   
   return (
      <>
         <div className="flex flex-col md:flex-row md:space-x-10 items-center justify-center bg-white p-10 m-10 rounded-md">
            <Avatar seed="create-chatbot" />

            <div className="">
               <h1 className="text-[18px] lg:text-[26px] font-semibold">{t('createBot.title')}</h1>
               <h2 className="text-[12px] text-gray-400 font-light">{t('createBot.tagline')}</h2>

               <form className="flex flex-col md:flex-row gap-3 mt-5">
                  <Input 
                     type="text"
                     placeholder={t('createBot.chatbotName')}
                     required
                     className="max-w-lg px-3 text-[12px] text-gray-500 font-thin outline-none focus:ring-0"
                  />

                  <Button
                     className="text-[13px] font-light bg-[#85C441] hover:bg-[#85C441]/60"
                  >
                     {t('createBot.btnCreate')}
                  </Button>
               </form>
            </div>
         </div>
      </>
   );
}

export default CreateChatbot;
