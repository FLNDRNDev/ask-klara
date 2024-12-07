'use client';

import React from 'react';
import Link from 'next/link';

import { SignedIn, SignedOut, useClerk, UserButton } from '@clerk/nextjs';
import useTranslation from '@/app/hooks/useTranslation';
import { useTranslationContext } from '@/app/context/TranslationContext';

// import Avatar from '../shared/Avatar';
import LanguageSwitch from '../shared/LanguageSwitch';
import Image from 'next/image';

interface HeaderProps {
   className?: string;
}

function Header({ className }: HeaderProps) {
   const { language, setLanguage } = useTranslationContext();
   const { t } = useTranslation(language);

   // useClerk hook to access the Clerk instance
   const { openSignIn } = useClerk();

   return (
      <header className={`header ${className}`}>
         <Link href='/' className='flex items-center gap-4'>
            {/* Avatar */}
            {/* <Avatar seed='ask klara' /> */}
            <Image src={/images/Icon.svg} width={40} height={40} alt='ask Klara brand icon'/>

            <div className="-space-y-1">
               <h1 className="font-thin text-[14px]">
                  ask <span className="font-light text-4xl">Klara</span>
               </h1>
               <h2 className='text-xs font-thin'>{t('component.header.subtitle')}</h2>
            </div>
         </Link>

         <div className="flex items-center gap-3">
            {/* Dashboard Button when Signed In */}
            <SignedIn>
               <UserButton showName />
            </SignedIn>

            {/* Custom Sign In Button when Signed Out */}
            <SignedOut>
               <button
                  onClick={() => openSignIn()}
                  className="text-gray-700 text-sm font-thin hover:text-gray-900"
               >
                  {t('component.header.signIn')}
               </button>
            </SignedOut>

            {/* Language Switch button with global language state */}
            <LanguageSwitch currentLanguage={language} onLanguageChange={setLanguage} />
         </div>
      </header>
   );
}

export default Header;
