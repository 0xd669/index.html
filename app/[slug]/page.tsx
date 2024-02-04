import { allEssays } from 'contentlayer/generated';
import { format, parseISO } from 'date-fns';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export const generateStaticParams = async () =>
  allEssays.map((essay) => ({ slug: essay._raw.flattenedPath }));

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const essay = allEssays.find(
    (essay) => essay._raw.flattenedPath === params.slug,
  );
  if (!essay) throw new Error(`Essay not found for slug: ${params.slug}`);

  return { title: essay.title };
};

export default function BlogPage({ params }: { params: { slug: string } }) {
  const essay = allEssays.find(
    (essay) => essay._raw.flattenedPath === params.slug,
  );
  if (!essay) notFound();

  return (
    <article className="mx-auto flex max-w-2xl flex-col gap-8 py-8">
      <header>
        <time
          dateTime={essay.date}
          className="mb-1 text-xs text-muted-foreground"
        >
          {format(parseISO(essay.date), 'yyyy.MM.dd')}
        </time>
        <h1 className="text-3xl font-bold">{essay.title}</h1>
      </header>
      <Image
        src={essay.coverImageUrl}
        alt={essay.title}
        width={512}
        height={512}
        sizes="(max-width: 512px) 100vw, 512px"
        priority={true}
      />
      <div
        className="[&>*:last-child]:mb-0 [&>*]:mb-3"
        dangerouslySetInnerHTML={{ __html: essay.body.html }}
      />
    </article>
  );
}
