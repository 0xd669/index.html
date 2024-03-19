import { allEssays } from 'contentlayer/generated';
import { format, parseISO } from 'date-fns';
import Link from 'next/link';
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
    description: essay.description,
    metadataBase: new URL('https://hwang.sh'),
    alternates: {
      canonical: essay.url,
    },
    openGraph: {
      title: essay.title,
      description: essay.description,
      url: `https://hwang.sh${essay.url}`,
      site_name: 'hwang.sh',
      images: [
        {
          url: `https://hwang.sh${essay.coverImageUrl}`,
          width: 512,
          height: 512,
        },
      ],
      locale: 'ko_KR',
      type: 'article',
      publishedTime: essay.date,
      authors: ['황성현'],
    },
    twitter: {
      card: 'summary_large_image',
      title: essay.title,
      description: essay.description,
      siteId: '1723298788872499200',
      creator: '@hwangbyhwang',
      creatorId: '1723298788872499200',
      images: [`https://hwang.sh${essay.coverImageUrl}`],
    },
  };
};

export default function BlogPage({ params }: { params: { slug: string } }) {
  const essay = allEssays.find(
    (essay) => essay._raw.flattenedPath === params.slug,
  );
  if (!essay) notFound();

  return (
    <article className="flex flex-col gap-8">
      <header>
        <div className="flex items-center gap-8">
          <Link
            href="/"
            className="text-2xl font-medium no-underline hover:text-destructive"
            aria-label="뒤로 가기"
          >
            ←
          </Link>
          <h1 className="text-3xl font-bold">{essay.title}</h1>
        </div>
      </header>
      <div
        className={cn(styles.article, '[&>*:last-child]:mb-0 [&>*]:mb-3')}
        dangerouslySetInnerHTML={{ __html: essay.body.html }}
      />
      <time
        dateTime={essay.date}
        className="mt-8 self-end text-sm font-semibold text-muted-foreground opacity-90"
      >
        {format(parseISO(essay.date), 'yyyy.MM.dd')}에 작성함
      </time>
    </article>
  );
}
