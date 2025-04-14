import { EllipsisVertical } from 'lucide-react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

import { Favorites } from './favorites';

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
      <section className="flex flex-1 flex-wrap items-center justify-center gap-4">
        <Dialog>
          <DialogTrigger asChild>
            <Image
              src="/careers.png"
              alt="Careers"
              width={256}
              height={384}
              className="-rotate-4 cursor-pointer transition-transform duration-300 hover:rotate-0"
            />
          </DialogTrigger>
          <DialogContent overlayClassName="bg-[#E2B520]/50">
            <DialogHeader>
              <DialogTitle>Careers</DialogTitle>
            </DialogHeader>
            <DialogDescription className="text-base leading-relaxed">
              저는 코딩을 기초로 다양한 사업을 그려왔습니다. 스무 살에{' '}
              <Link href="https://www.besuccess.com/ohmybeer/">엑스바엑스</Link>{' '}
              공동창업자로 일을 시작했고, 스물한 살부터는{' '}
              <Link href="https://corp.banksalad.com/">뱅크샐러드</Link>의
              공동창업자이자 CTO로 8년간 일했습니다. 이후{' '}
              <Link href="https://0xd669.substack.com/p/an-essential-experience">
                세 번째 창업
              </Link>
              을 준비하다가 중단하고, 현재는{' '}
              <Link href="https://theventures.vc/">더벤처스</Link>의
              테크리드·EIR로서{' '}
              <Link href="https://www.mk.co.kr/news/it/11284660">
                AI 심사역
              </Link>
              을 만들고 있습니다.
            </DialogDescription>
          </DialogContent>
        </Dialog>
        <Dialog>
          <DialogTrigger asChild>
            <Image
              src="/favorites.png"
              alt="Favorites"
              width={256}
              height={384}
              className="rotate-3 cursor-pointer transition-transform duration-300 hover:rotate-0"
            />
          </DialogTrigger>
          <DialogContent overlayClassName="bg-[#D48B3A]/50">
            <DialogHeader>
              <DialogTitle>Favorites</DialogTitle>
            </DialogHeader>
            <Favorites />
          </DialogContent>
        </Dialog>
        <Dialog>
          <DialogTrigger asChild>
            <Image
              src="/projects.png"
              alt="Projects"
              width={256}
              height={384}
              className="-rotate-5 cursor-pointer transition-transform duration-300 hover:rotate-0"
            />
          </DialogTrigger>
          <DialogContent overlayClassName="bg-[#1A0D0B]/50">
            <DialogHeader>
              <DialogTitle>Projects</DialogTitle>
            </DialogHeader>
            <ol className="text-muted-foreground space-y-3 text-base leading-relaxed">
              <li className="grid grid-cols-4">
                <span className="text-primary col-span-1 font-semibold">
                  2025
                </span>
                <span className="col-span-3">
                  <Link href="https://0xd669.substack.com/">
                    황성현의 벽난로
                  </Link>{' '}
                  뉴스레터 및 팟캐스트(준비 중)
                </span>
              </li>
              <li className="grid grid-cols-4">
                <span className="text-primary col-span-1 font-semibold">
                  2021
                </span>
                <span className="col-span-3">
                  존 듀이,{' '}
                  <Link href="https://www.gutenberg.org/ebooks/51525">
                    「다윈이 철학에 미친 영향」
                  </Link>{' '}
                  번역 (
                  <Link href="https://www.instagram.com/p/CMbeyVSJixs/">
                    전기가오리
                  </Link>
                  )
                </span>
              </li>
            </ol>
            <EllipsisVertical className="text-muted-foreground mx-auto my-3 size-4" />
            <p className="text-muted-foreground leading-relaxed">
              현생을 핑계로 업무 외적으로 그다지 생산적이지 못했네요. 앞으로는
              좀 더 재미나게 살아봐야겠습니다.
            </p>
          </DialogContent>
        </Dialog>
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
