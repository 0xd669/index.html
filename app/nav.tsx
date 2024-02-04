import { allEssays } from 'contentlayer/generated';
import { compareDesc, format, parseISO } from 'date-fns';
import Link from 'next/link';

import { cn } from '@/lib/utils';

export function Nav({ className }: { className?: string }) {
  const essays = allEssays.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date)),
  );

  return (
    <aside className={cn(className)}>
      <Link
        href="/"
        className="text-3xl font-medium tracking-tight text-primary"
      >
        황성현·黃晟鉉
      </Link>
      <nav className="mt-10">
        <ol className="flex flex-col">
          {essays.map((essay) => (
            <li key={essay._id}>
              <Link href={essay.url} className="font-medium text-primary">
                {essay.title}
              </Link>
              <time
                dateTime={essay.date}
                className="mb-2 block text-xs text-gray-600"
              >
                {format(parseISO(essay.date), 'yyyy.MM.dd')}
              </time>
            </li>
          ))}
        </ol>
      </nav>
    </aside>
  );
}
