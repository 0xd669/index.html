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

export default function BlogPage({ params }: { params: { slug: string } }) {
  if (prevBlogSlugs.includes(params.slug)) {
    permanentRedirect(`https://0xd669.substack.com/p/${params.slug}`);
  }

  notFound();
}
