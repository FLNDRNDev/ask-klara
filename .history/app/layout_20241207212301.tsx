// app/layout.tsx
import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import localFont from 'next/font/local';

import { ClerkProvider } from '@clerk/nextjs';
import { TranslationProvider } from '@/app/context/TranslationContext'; // Import TranslationProvider
import ApolloProviderWrapper from '@/components/ApolloProvider';

import "./styles/globals.css";
import "./styles/theme.css";


// Load Inter font from Google Fonts with all weights
const inter = Inter({
	subsets: ['latin'],
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	variable: '--font-inter',
});

// Load Agrem as a local font
const agremFont = localFont({
	src: "./fonts/Agrem.woff",
	variable: "--font-agrem",
	weight: "100 900",
});

// Metadata definition for the layout
export const metadata: Metadata = {
	title: "ask Klara™",
	description: "Uw persoonlijke AI assistent agent",
	icons: {
		icon: "/favicon.svg", // Favicon added here
	},
};

export default function RootLayout({
  	children,
}: Readonly<{
  	children: React.ReactNode;
}>) {
	console.log("Publishable Key:", process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY);

	return (
		<ApolloProviderWrapper>
			<ClerkProvider>
				<TranslationProvider>
				<html lang="nl">
					<body className={`${inter.variable} ${agremFont.variable} min-h-screen`}>
						<main>
							{children}
							{/* Toaster */}
						</main>
					</body>
				</html>
				</TranslationProvider>
			</ClerkProvider>
		</ApolloProviderWrapper>
	);
}
