// RootLayout.tsx
import { Metadata } from 'next';

import './globals.css';

import { Happy_Monkey } from 'next/font/google';

import { ThemeProvider } from '@/components/ThemeProvider';

const montserrat = Happy_Monkey({ subsets: ['latin'], weight: ['400'] });

export const metadata: Metadata = {
  title: 'MemeCoin',
  description: 'Meme Coin',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head></head>
      <body className={montserrat.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
