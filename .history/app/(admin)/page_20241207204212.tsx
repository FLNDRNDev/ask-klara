'use client';

import React from 'react';
import { useTranslationContext } from '@/app/context/TranslationContext'; // Import the context hook
import useTranslation from '@/app/hooks/useTranslation';


export default function AdminHome() {
	// Use the global translation context
	const { language } = useTranslationContext();
	const { t } = useTranslation(language);

	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<h1>{t('home.test')}</h1>
		</main>
	);
}
