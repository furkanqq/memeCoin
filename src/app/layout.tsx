// RootLayout.tsx
import { Metadata } from 'next';

import './globals.css';

import { Aguafina_Script, Caveat, Happy_Monkey, Inter, Jersey_15, Montserrat, Permanent_Marker } from 'next/font/google';

import { ThemeProvider } from '@/components/ThemeProvider';

const montserrat = Happy_Monkey({ subsets: ['latin'], weight: ['400'] });

const inter = Inter({ subsets: ['cyrillic'] });

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
