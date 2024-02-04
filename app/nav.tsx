import { allEssays } from 'contentlayer/generated';
import { compareDesc, format, parseISO } from 'date-fns';
import Link from 'next/link';

export function Nav() {
  const essays = allEssays.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date)),
  );

  return (
    <aside>
      <Link href="/">황성현·黃晟鉉</Link>
      <nav>
        <ol>
          {essays.map((essay) => (
            <li key={essay._id}>
              <Link
                href={essay.url}
                className="text-blue-700 hover:text-blue-900 dark:text-blue-400"
              >
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
