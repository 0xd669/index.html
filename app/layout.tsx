import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from 'next';
import { ReactNode } from 'react';

import './globals.css';

export const runtime = 'edge';

export const metadata: Metadata = {
  title: '👋 | hwang.sh',
  description: '🚧',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
