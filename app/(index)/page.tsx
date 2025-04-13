import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '👋',
  description: '안녕하세요, 황성현입니다. 반갑습니다.',
  metadataBase: new URL('https://hwang.sh'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'hwang.sh',
    description: '안녕하세요, 황성현입니다. 반갑습니다.',
    url: 'https://hwang.sh',
    locale: 'ko_KR',
    type: 'profile',
    firstName: '성현',
    lastName: '황',
    username: '0xd669',
    gender: 'male',
    images: [
      {
        url: `https://hwang.sh/og.png`,
        width: 1536,
        height: 768,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'hwang.sh',
    description: '안녕하세요, 황성현입니다. 반갑습니다.',
    siteId: '1723298788872499200',
    creator: '@0xd669',
    creatorId: '1723298788872499200',
    images: [`https://hwang.sh/og.png`],
  },
};

export default function Home() {
  return (
    <>
      <h1 className="font-title mt-6 text-center text-5xl font-bold tracking-tight">
        100% Brewed by Hwang
      </h1>
      <section className="my-6 flex flex-1 flex-wrap items-center justify-center gap-4">
        <Image
          src="/careers.png"
          alt="Careers"
          width={256}
          height={384}
          className="cursor-not-allowed -rotate-4 transition-transform duration-300 hover:rotate-0"
        />
        <Image
          src="/favorites.png"
          alt="Favorites"
          width={256}
          height={384}
          className="cursor-not-allowed rotate-3 transition-transform duration-300 hover:rotate-0"
        />
        <Image
          src="/projects.png"
          alt="Projects"
          width={256}
          height={384}
          className="cursor-not-allowed -rotate-5 transition-transform duration-300 hover:rotate-0"
        />
        <Link href="https://0xd669.substack.com">
          <Image
            src="/newsletter.png"
            alt="Newsletter"
            width={256}
            height={384}
            className="rotate-4 transition-transform duration-300 hover:rotate-0"
          />
        </Link>
      </section>
    </>
  );
}
