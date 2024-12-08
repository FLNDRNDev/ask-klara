import { useState, useEffect } from 'react';


// Define a type for the structure of the JSON translations
interface TranslationData {
  	[key: string]: string | TranslationData; // Support nested translations or string values
}

// Define the type for the translations object
type TranslationFiles = {
  	[key: string]: () => Promise<{ default: TranslationData }>;
};

// Define translations object
const translations: TranslationFiles = {
	en: () => import('../translations/en/language.json'),
	nl: () => import('../translations/nl/language.json'),
};

const useTranslation = (language: string) => {
	const [translation, setTranslation] = useState<TranslationData>({});

	useEffect(() => {
		const loadTranslation = async () => {
			if (translations[language]) {
			const langModule = await translations[language]();
			setTranslation(langModule.default); // Access `default` to get the JSON object
			}
		};
		loadTranslation();
	}, [language]);

	const t = (key: string): string => {
		const keys = key.split('.');
		let result: TranslationData | string | undefined = translation;

		for (const part of keys) {
			if (result && typeof result === 'object' && part in result) {
			result = result[part];
			} else {
			return key; // Return the key itself if not found
			}
		}

		return typeof result === 'string' ? result : key;
	};

	return { t };
};

export default useTranslation;
