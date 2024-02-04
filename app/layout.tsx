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
      <body className="flex flex-col-reverse sm:flex-row">
        <Nav />
        <main>{children}</main>
        <Analytics />
      </body>
    </html>
  );
}
