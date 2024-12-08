'use client';

import React from 'react';
import { useMutation } from '@apollo/client'

import useTranslation from '@/app/hooks/useTranslation'; // Import the hook
import Avatar from '@/components/shared/Avatar';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';


function CreateChatbot() {
   const { t } = useTranslation(); // No arguments needed

   return (
      <>
         <div className="flex flex-col md:flex-row md:space-x-10 items-center justify-center bg-white p-10 m-10 rounded-md">
            <Avatar seed="create-chatbot" />

            <div className="">
               <h1 className="text-[18px] lg:text-[26px] font-semibold">{t('createBot.title')}</h1>
               <h2 className="tagline">{t('createBot.tagline')}</h2>

               <form className="flex flex-col md:flex-row gap-3 mt-5">
                  <Input 
                     type="text"
                     placeholder={t('createBot.chatbotName')}
                     required
                     className="max-w-lg px-3 text-[12px] text-gray-500 font-thin outline-none focus:ring-0"
                  />

                  <Button
                     className="create hover:bg-[#85C441]/60"
                  >
                     {t('createBot.btnCreate')}
                  </Button>
               </form>

               <p className="text-gray-300 mt-5 text-sm font-light">
                  {t('createBot.exampleChatbot')}
               </p>
            </div>
         </div>
      </>
   );
}

export default CreateChatbot;
