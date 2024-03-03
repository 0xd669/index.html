import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '👋',
  description: '안녕하세요, 글 쓰는 황성현입니다. 반갑습니다.',
  metadataBase: new URL('https://hwang.sh'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'hwang.sh',
    description: '안녕하세요, 글 쓰는 황성현입니다. 반갑습니다.',
    url: 'https://hwang.sh',
    locale: 'ko_KR',
    type: 'profile',
    firstName: '성현',
    lastName: '황',
    username: 'sunghyunhwang',
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
    description: '안녕하세요, 글 쓰는 황성현입니다. 반갑습니다.',
    siteId: '1723298788872499200',
    creator: '@hwangbyhwang',
    creatorId: '1723298788872499200',
    images: [`https://hwang.sh/og.png`],
  },
};

export default function Home() {
  return (
    <article className="pt-8 space-y-8 text-lg xl:text-xl">
      <p className="leading-normal">
        안녕하세요, 황성현입니다. 반갑습니다. 저는{' '}
        <Link href="https://corp.banksalad.com/">뱅크샐러드</Link>의
        공동창업자로서 초기에는 CTO로 일했습니다. 그 이전에는{' '}
        <Link href="https://orderplus.kr/teamxbarx">엑스바엑스</Link>의
        공동창업자이자 1인 개발자로 일했습니다. 서버, 웹, 모바일을 가리지 않고
        무언가를 만들 수 있는 풀스택 개발을 선호합니다. 현재는 뱅크샐러드에서 새로운 제품을 만들고 있습니다.
      </p>
      <p className="leading-normal">
        이곳은 저의 사적인 글과 업무적인 글이 한데 섞인 저의 공간입니다.
        부족한 제 글을 모아둔 이곳에서 여러분이 쓸모를 찾으신다면 제게는 큰
        보람일 겁니다.
      </p>
    </article>
  );
}
