import type { Metadata } from 'next';
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
    <main>
      <p className="mt-8 text-lg leading-normal xl:text-xl">
        안녕하세요, 황성현입니다. 반갑습니다. 저는{' '}
        <Link href="https://corp.banksalad.com/">뱅크샐러드</Link>의
        공동창업자로서 초기에는 CTO로 일했습니다. 그 이전에는{' '}
        <Link href="https://orderplus.kr/teamxbarx">엑스바엑스</Link>의
        공동창업자이자 CTO로 일했습니다. 주도적으로 무언가를 만들고, 가치를
        전달하는 일을 좋아합니다. 현재는{' '}
        <Link href="https://theventures.vc/">더벤처스</Link>에서 EIR이자
        테크리드로서 AI 심사역을 만들고 있습니다. 일하며 드는 생각을 종종{' '}
        <Link href="https://0xd669.substack.com/">Substack</Link>에 글로
        옮깁니다. <Link href="https://x.com/0xd669">Twitter</Link>,{' '}
        <Link href="https://github.com/0xd669">GitHub</Link>,{' '}
        <Link href="https://www.linkedin.com/in/0xd669/">LinkedIn</Link>도 하고
        있어요.
      </p>
    </main>
  );
}
