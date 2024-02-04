import { Analytics } from '@vercel/analytics/react';
import { allEssays } from 'contentlayer/generated';
import { compareDesc, format, parseISO } from 'date-fns';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ReactNode } from 'react';

import './globals.css';

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
  const essays = allEssays.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date)),
  );

  return (
    <html lang="ko">
      <body className="flex flex-row">
        <aside>
          <Link href="/">황성현·黃晟鉉</Link>
          <nav>
            <ul>
              {essays.map((essay) => (
                <li key={essay._id}>
                  <span className="mb-1 text-xl">
                    <Link
                      href={essay.url}
                      className="text-blue-700 hover:text-blue-900 dark:text-blue-400"
                    >
                      {essay.title}
                    </Link>
                  </span>
                  <time
                    dateTime={essay.date}
                    className="mb-2 block text-xs text-gray-600"
                  >
                    {format(parseISO(essay.date), 'yyyy.MM.dd')}
                  </time>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
        <main>{children}</main>
        <Analytics />
      </body>
    </html>
  );
}
