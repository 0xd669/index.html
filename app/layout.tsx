import { GoogleAnalytics } from '@next/third-parties/google';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { ReactNode } from 'react';

import './globals.css';
import { ThemeProvider, ThemeToggleButton } from './theme-provider';
import { Footer } from './footer';

export const runtime = 'edge';

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <div className="mx-auto max-w-3xl px-8 py-12">
          {children}
          <aside className="fixed z-50 bottom-8 right-8">
            <ThemeToggleButton />
          </aside>
          <Footer />
        </div>
      </ThemeProvider>
      <SpeedInsights />
      <Analytics />
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID!} />
      </body>
    </html>
  );
}
