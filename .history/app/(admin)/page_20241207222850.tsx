'use client';

import React from 'react';
import useTranslation from '@/app/hooks/useTranslation';


export default function AdminHome() {
	// Use the translation hook
	const { t } = useTranslation();

	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<h1>{t('home.test')}</h1>
		</main>
	);
}
