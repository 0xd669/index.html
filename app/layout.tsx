import { GoogleAnalytics } from '@next/third-parties/google';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { ReactNode } from 'react';

import { Footer } from './footer';
import './globals.css';
import { ThemeProvider, ThemeToggleButton } from './theme-provider';

export const runtime = 'edge';

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="mx-auto max-w-3xl px-8 py-12">
            {children}
            <aside className="fixed bottom-8 right-8 z-50">
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
