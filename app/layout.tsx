import { GoogleAnalytics } from '@next/third-parties/google';
import { Analytics } from '@vercel/analytics/react';
import { ReactNode } from 'react';

import './globals.css';
import { Nav } from './nav';
import { ThemeProvider } from './theme-provider';

export const runtime = 'edge';

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className="flex flex-col overflow-y-scroll md:max-h-dvh md:flex-row md:overflow-hidden">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Nav className="relative z-0 shrink-0 grow-0 basis-auto border-b border-b-accent p-6 md:max-h-dvh md:w-[340px] md:overflow-y-scroll md:border-r md:border-r-accent md:p-10 md:pr-8" />
          <main className="relative z-10 grow p-5 shadow-2xl dark:shadow-white sm:p-10 md:max-h-dvh md:overflow-y-scroll md:shadow-lg">
            {children}
          </main>
        </ThemeProvider>
        <Analytics />
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID!} />
      </body>
    </html>
  );
}
