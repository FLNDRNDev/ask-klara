'use client';

import React from 'react';

interface LanguageSwitchProps {
	currentLanguage: string;
	onLanguageChange: (language: string) => void;
}

const LanguageSwitch: React.FC<LanguageSwitchProps> = ({ currentLanguage, onLanguageChange }) => {
	const handleSwitch = () => {
		// Toggle between 'nl' and 'en' directly
		const newLanguage = currentLanguage === 'nl' ? 'en' : 'nl';
		onLanguageChange(newLanguage);
	};

	return (
		<button
			onClick={handleSwitch}
			style={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				width: '28px',
				height: '28px',
				backgroundColor: '#4A90E2',
				color: '#FFFFFF',
				border: 'none',
				fontSize: '13px',
				fontWeight: 400,
				borderRadius: '100px',
				cursor: 'pointer',
				transition: 'background-color 0.3s ease',
			}}
			onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#357ABD')}
			onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#4A90E2')}
		>
			{currentLanguage === 'nl' ? 'NL' : 'EN'}
		</button>
	);
};

export default LanguageSwitch;
