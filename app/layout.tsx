import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from 'next';
import { ReactNode } from 'react';

import './globals.css';
import { Nav } from './nav';
import { ThemeProvider } from './theme-provider';

export const runtime = 'edge';

export const metadata: Metadata = {
  title: '👋',
  description: '👋👋👋',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className="flex flex-col-reverse overflow-y-scroll md:max-h-dvh md:flex-row md:overflow-hidden">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Nav className="relative z-0 shrink-0 grow-0 basis-auto p-10 md:max-h-dvh md:w-[340px] md:overflow-y-scroll md:border-r md:border-r-accent md:pr-8" />
          <main className="relative z-10 grow p-10 shadow-lg dark:shadow-white md:max-h-dvh md:overflow-y-scroll">
            {children}
          </main>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
