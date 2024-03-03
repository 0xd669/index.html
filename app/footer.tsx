'use client';

import { allEssays } from '@/lib/essay';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

export function Footer() {
  const pathName = usePathname();

  return (
    <footer className="mt-20 -z-10 bg-muted p-8">
      <ol className="space-y-2 text-muted-foreground">
        {allEssays.map((essay) => (
          <li key={essay._id}>
            <Link
              href={essay.url}
              className={cn("text-base font-medium hover:text-destructive", {
                "text-destructive font-semibold": pathName === essay.url,
              })}
              aria-label={`${essay.title} 글 읽기`}
            >
              {essay.title}
            </Link>
          </li>
        ))}
      </ol>
      <p className="text-sm opacity-50 mt-8">&copy; {new Date().getFullYear()}. <Link href='/' aria-label='홈으로 돌아가기' className='no-underline hover:underline'>황성현</Link>. All rights reserved.</p>
    </footer>
  );
}
