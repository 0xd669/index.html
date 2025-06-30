import type { Metadata } from 'next';

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
    <section className="flex flex-1 flex-wrap items-center justify-center gap-4">
      안녕하세요, 이곳은 현재 새 단장 중이라 잠시 휑합니다. 여름이 너무 많이
      가기 전에 새로운 소개 글로 교체해 두겠습니다.
    </section>
  );
}
