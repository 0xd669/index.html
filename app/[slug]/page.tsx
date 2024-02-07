import { allEssays } from 'contentlayer/generated';
import { format, parseISO } from 'date-fns';
import Image from 'next/image';
import { notFound } from 'next/navigation';

import { cn } from '@/lib/utils';

import styles from './styles.module.css';

export const generateStaticParams = async () =>
  allEssays.map((essay) => ({ slug: essay._raw.flattenedPath }));

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const essay = allEssays.find(
    (essay) => essay._raw.flattenedPath === params.slug,
  );
  if (!essay) throw new Error(`Essay not found for slug: ${params.slug}`);

  return {
    title: essay.title,
    description:
      essay.body.raw
        .replaceAll(/[^ㄱ-힣\s\w-._!*"']+/g, '')
        .replaceAll('\n', ' ')
        .slice(0, 160)
        .trim() + '...',
  };
};

export default function BlogPage({ params }: { params: { slug: string } }) {
  const essay = allEssays.find(
    (essay) => essay._raw.flattenedPath === params.slug,
  );
  if (!essay) notFound();

  return (
    <article className="mx-auto flex max-w-2xl flex-col items-center gap-8">
      <header className="space-y-2.5 text-center">
        <time
          dateTime={essay.date}
          className="text-sm text-muted-foreground xl:text-base"
        >
          {format(parseISO(essay.date), 'yyyy.MM.dd')}
        </time>
        <h1 className="text-3xl font-bold xl:text-4xl">{essay.title}</h1>
      </header>
      <Image
        src={essay.coverImageUrl}
        alt={essay.title}
        width={672}
        height={672}
        sizes="(max-width: 672px) 100vw, 672px"
        priority
      />
      <div
        className={cn(styles.article, '[&>*:last-child]:mb-0 [&>*]:mb-3')}
        dangerouslySetInnerHTML={{ __html: essay.body.html }}
      />
    </article>
  );
}
