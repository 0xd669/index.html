import Image from 'next/image';
import Link from 'next/link';

import { allEssays } from '@/lib/essay';

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl p-0 sm:p-4 md:p-8">
      <article className="space-y-8 text-2xl">
        <p>
          안녕하세요, 황성현입니다. 반갑습니다.{' '}
          {animatedEmoji('1f636_200d_1f32b_fe0f', '😶‍🌫️')} 저는{' '}
          <Link href="https://corp.banksalad.com/">뱅크샐러드</Link>의
          공동창업자이며 초기에 CTO로 일했습니다. 이전에는{' '}
          <Link href="https://orderplus.kr/teamxbarx">스타트업 하나</Link>를
          공동창업해 1인 개발자로 일했습니다. 서버, 웹, 모바일을 가리지 않고
          무언가를 만들 수 있는 풀스택 개발을 선호합니다. 현재는 잠시 일을 쉬며
          앞으로 무엇을 하며 살아갈지 고민하고 있습니다.
        </p>
        <p>
          {new Date().getFullYear() - 2023}년 전에{' '}
          {animatedEmoji('1f415', '🐕')}
          <Link href="https://www.instagram.com/sansa_by_sansa/">산사</Link>를
          입양해 <Link href="https://jayoung.blog">배우자</Link>와 함께 서울의
          조용한 동네에서 지내고 있습니다. 취미는 코딩, 필라테스, 영화, 방탈출,
          어려운 텍스트 끙끙대며 읽어보기입니다. {animatedEmoji('1f9be', '🦾')}
          필라테스의{' '}
          <Link href="https://youtu.be/9dDGb1LWCv8?si=I2DJLGkuNfLorvPY&t=54">
            Jack Knife
          </Link>{' '}
          동작을 할 수 있는 사람이 되는 게 올해 목표 중 하나입니다. 한때{' '}
          {animatedEmoji('1f304', '🌄')}영화를 정말 좋아했는데, 오늘은{' '}
          {favoriteMovies[new Date().getDate() % favoriteMovies.length]}를 가장
          좋아한다고 말하고 싶네요. {animatedEmoji('1f9d0', '🧐')}방탈출을 너무
          좋아해서 언젠가 직접 방탈출 게임 공간을 만들어보고 싶습니다.
          프래그머티즘 철학을 좋아하는데, 그 시초가 된{' '}
          <Link href="https://x.com/philoelectroray/status/1367411748668469249?s=20">
            듀이의 「다윈이 철학에 미친 영향」
          </Link>
          을 운 좋게도 번역할 기회가 있었습니다. 언젠가 지하가 납골당인 도서관을
          운영하고 싶다는 꿈이 있습니다.
        </p>
        <p>
          이곳은 저의 사적인 글과 업무적인 글이 한데 섞인 저의 공간입니다.
          부족한 제 글을 모아둔 이곳에서 여러분이 쓸모를 찾으신다면 제게는 큰
          보람일 겁니다.
        </p>
      </article>
      <nav className="mt-10">
        <ol className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
          {allEssays.map((essay) => (
            <li key={essay._id} className="relative aspect-square">
              <Link
                href={essay.url}
                className="text-[0] font-medium hover:text-base"
              >
                <Image
                  src={essay.coverImageUrl}
                  alt={essay.title}
                  className="object-cover"
                  sizes="512px"
                  priority
                  fill
                />
              </Link>
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
}

const animatedEmoji = (id: string, alt: string) => (
  <picture>
    <source
      srcSet={`https://fonts.gstatic.com/s/e/notoemoji/latest/${id}/512.webp`}
      type="image/webp"
    />
    <Image
      className="inline"
      width={28}
      height={28}
      src={`https://fonts.gstatic.com/s/e/notoemoji/latest/${id}/512.gif`}
      alt={alt}
    />
  </picture>
);

const favoriteMovies = [
  <Link key="movie-1" href="https://pedia.watcha.com/ko-KR/contents/mOb2xNO">
    존 포드의 〈젊은 날의 링컨〉
  </Link>,
  <Link key="movie-2" href="https://pedia.watcha.com/ko-KR/contents/mOkv4pW">
    히치콕의 〈오명〉
  </Link>,
  <Link key="movie-3" href="https://pedia.watcha.com/ko-KR/contents/mWyVeKO">
    타르코프스키의 〈안드레이 루블료프〉
  </Link>,
  <Link key="movie-4" href="https://pedia.watcha.com/ko-KR/contents/mW93wld">
    자크 타티의 〈플레이타임〉
  </Link>,
  <Link key="movie-5" href="https://pedia.watcha.com/ko-KR/contents/mOk6AwW">
    멜빌의 〈그림자 군단〉
  </Link>,
  <Link key="movie-6" href="https://pedia.watcha.com/ko-KR/contents/md72aNO">
    조셉 로지의 〈무슈 클라인〉
  </Link>,
  <Link key="movie-7" href="https://pedia.watcha.com/ko-KR/contents/m85X415">
    허우 샤오시엔의 〈비정성시〉
  </Link>,
  <Link key="movie-8" href="https://pedia.watcha.com/ko-KR/contents/m5aKVNO">
    압바스 키아로스타미의 〈클로즈 업〉
  </Link>,
  <Link key="movie-9" href="https://pedia.watcha.com/ko-KR/contents/md7pDM5">
    요나스 메카스의 〈우연히 나는 아름다움의 섬광을 보았다〉
  </Link>,
  <Link key="movie-10" href="https://pedia.watcha.com/ko-KR/contents/mdBYqkO">
    레오 까락스의 〈홀리모터스〉
  </Link>,
];
