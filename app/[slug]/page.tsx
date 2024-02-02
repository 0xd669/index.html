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
    <article className="mx-auto max-w-xl py-8">
      <div className="mb-8 text-center">
        <time dateTime={essay.date} className="mb-1 text-xs text-gray-600">
          {format(parseISO(essay.date), 'LLLL d, yyyy')}
        </time>
        <h1 className="text-3xl font-bold">{essay.title}</h1>
      </div>
      <Image src={essay.coverImageUrl} alt="." width={512} height={512} />
      <div
        className="[&>*:last-child]:mb-0 [&>*]:mb-3"
        dangerouslySetInnerHTML={{ __html: essay.body.html }}
      />
    </article>
  );
}
