import { allEssays } from 'contentlayer/generated';
import { compareDesc, format, parseISO } from 'date-fns';
import Link from 'next/link';

export default function Home() {
  const essays = allEssays.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date)),
  );

  return (
    <main className="flex flex-col gap-12 p-24">
      {essays.map((essay) => (
        <div key={essay._id} className="mb-8">
          <h2 className="mb-1 text-xl">
            <Link
              href={essay.url}
              className="text-blue-700 hover:text-blue-900 dark:text-blue-400"
            >
              {essay.title}
            </Link>
          </h2>
          <time
            dateTime={essay.date}
            className="mb-2 block text-xs text-gray-600"
          >
            {format(parseISO(essay.date), 'yyyy.MM.dd')}
          </time>
        </div>
      ))}
    </main>
  );
}
