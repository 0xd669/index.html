import { notFound, permanentRedirect } from 'next/navigation';

const prevBlogSlugs = [
  'always-startup',
  'an-essential-experience',
  'grounded',
  'motivation-behind-the-startup',
  'startup-vs-giants',
  'the-mindset-for-early-stage-founders',
  'when-either-a-or-b-fails',
  'working-remote-is-hard',
];

export default async function BlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (prevBlogSlugs.includes(slug)) {
    permanentRedirect(`https://0xd669.substack.com/p/${slug}`);
  }

  notFound();
}
