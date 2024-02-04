import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from 'next';
import { ReactNode } from 'react';

import './globals.css';
import { Nav } from './nav';

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
    <html lang="ko">
      <body className="flex flex-col-reverse overflow-y-scroll md:max-h-dvh md:flex-row md:overflow-hidden">
        <Nav className="shrink-0 grow-0 basis-auto p-10 md:max-h-dvh md:overflow-y-scroll md:border-r md:border-r-accent" />
        <main className="grow p-10 shadow-lg md:max-h-dvh md:overflow-y-scroll">
          {children}
        </main>
        <Analytics />
      </body>
    </html>
  );
}
