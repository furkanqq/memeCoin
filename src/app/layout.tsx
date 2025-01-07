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
      <head>
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={montserrat.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
