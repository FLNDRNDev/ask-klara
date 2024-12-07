'use client'

import Link from 'next/link';

import { BotMessageSquare, PencilLine, SearchIcon } from 'lucide-react';

import useTranslation from '@/app/hooks/useTranslation';
import { useTranslationContext } from '@/app/context/TranslationContext';


function Sidebar() {
   // Get language from the Translation Context
   const { language } = useTranslationContext();
   const { t } = useTranslation(language);

   return (
      <>
         <div className="bg-white text-white p-5">
            <ul className="flex flex-row lg:flex-col gap-5">
               <li className="flex-1">
                  <Link
                     href="/create-chatbot"
                     className="hover:opacity-60 flex flex-col text-center lg:text-left lg:flex-row items-center gap-2 p-5 rounded-md bg-[#3189C9]"
                  >
                     <BotMessageSquare className="w-6 h-6 lg:w-8 lg:h-8" />
                     <div className="hidden md:inline">
                        <p className="text-[18px]">{t('component.sidebar.btnCreate')}</p>
                        <p className="text-sm text-gray-200 font-extralight">{t('component.sidebar.btnCreateSub')}</p>
                     </div>
                  </Link>
               </li>
               <li className="flex-1">
                  <Link 
                     href="/view-chatbots"
                     className="hover:opacity-60 flex flex-col text-center lg:text-left lg:flex-row items-center gap-2 p-5 rounded-md bg-[#3189C9]"
                  >
                     <PencilLine className='w-6 h-6 lg:w-8 lg:h-8' />
                     <div className="hidden md:inline">
                        <p className="text-[18px]">{t('component.sidebar.btnEdit')}</p>
                        <p className="text-sm text-gray-200 font-extralight">{t('component.sidebar.btnEditSub')}</p>
                     </div>
                  </Link>
               </li>
               <li className="flex-1">
                  <Link 
                     href="/review-sessions"
                     className="hover:opacity-60 flex flex-col text-center lg:text-left lg:flex-row items-center gap-2 p-5 rounded-md bg-[#3189C9]"
                  >
                     <SearchIcon className='w-6 h-6 lg:w-8 lg:h-8' />
                     <div className="hidden md:inline">
                        <p className="text-[18px]">{t('component.sidebar.btnReview')}</p>
                        <p className="text-sm text-gray-200 font-extralight">{t('component.sidebar.btnReviewSub')}</p>
                     </div>
                     
                  </Link>
               </li>
            </ul>
         </div>
      </>
   );
}

export default Sidebar;