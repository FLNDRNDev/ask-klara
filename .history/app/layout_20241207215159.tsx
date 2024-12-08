import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import localFont from 'next/font/local';

import { ClerkProvider } from '@clerk/nextjs';
import ApolloProviderWrapper from '@/components/ApolloProvider';
import ClientLanguageProvider from '@/components/ClientLanguageProvider';

import "./styles/globals.css";
import "./styles/theme.css";

const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
});

const agremFont = localFont({
  src: "./fonts/Agrem.woff",
  variable: "--font-agrem",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "ask Klara™",
  description: "Uw persoonlijke AI assistent agent",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ApolloProviderWrapper>
      <ClerkProvider>
        <ClientLanguageProvider>
          <html lang="en">
            <body className={`${inter.variable} ${agremFont.variable} min-h-screen`}>
              <main>{children}</main>
            </body>
          </html>
        </ClientLanguageProvider>
      </ClerkProvider>
    </ApolloProviderWrapper>
  );
}
