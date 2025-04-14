'use client';

import { Dice1, Dice2, Dice3, Dice4, Dice5, Dice6 } from 'lucide-react';
import { useState } from 'react';

import { Button } from '@/components/ui/button';

const texts = [
  '이곳에 널브러진 맥주 캔을 보고 눈치채셨겠지만, (술자리가 아닌) 술 자체를 좋아합니다. 가장 좋아하는 건 맥주입니다. 그중에서도 Hazy IPA를 가장 좋아합니다만 요즘엔 거의 무알콜 맥주만 마십니다. 화이트 와인은 페삭-레오냥 지역의 와인과 샴페인을, 레드 와인은 부르고뉴 피노누아를 가장 좋아합니다. 위스키보다는 꼬냑이나 깔바도스를 선호하지만, 위스키도 늘 좋습니다. 칵테일은 맨해튼을 가장 좋아합니다. 한국 술은 삼해소주를 제일로 꼽습니다. 사케와 백주는 취향을 찾아가는 중입니다.',
  '레오스 카락스의 〈홀리모터스〉를 계기로 영화에 빠져 살았습니다. 애정하는 영화가 너무 많지만, 가이 매딘의 〈녹색 안개〉, 요나스 메카스의 〈우연히 나는 아름다움의 섬광을 보았다〉, 압바스 키아로스타미의 〈클로즈업〉, 허우 샤오시엔의 〈비정성시〉, 장피에르 멜빌의 〈그림자 군단〉, 알프레드 히치콕의 〈오명〉을 가장 좋아합니다. 한국 영화는 홍상수의 거의 모든 작품을 좋아하고, 그의 영화 중 〈북촌방향〉을 가장 좋아합니다. 영화에 대한 열정이 예전 같지는 못하지만, 그래도 매년 전주에 들르려 합니다.',
  '삶이 바빠지면 저에게서 가장 먼저 떼어내는 것이 게임이지만, 그럼에도 늘 여유가 생기면 찾는 것 역시 게임입니다. 오프라인 방탈출, 보드게임, 비디오 게임 모두 아주 좋아합니다. 오프라인 방탈출은 〈네드〉와 〈제로〉를 가장 좋아합니다. 보드게임은 어려운 난이도의 협력 게임을 좋아합니다. 비디오 게임은 너무 무겁지 않은 게임을 좋아하는데 〈그라운디드〉를 정말 좋아하고, 〈슬레이 더 스파이어〉, 〈하데스〉, 〈발라트로〉, 〈다키스트 던전〉과 같은 게임들 역시 좋아합니다.',
  '주말 아침마다 커피를 내리며 명상하곤 합니다. 라이트 로스팅된 커피를 좋아하고, 가장 좋아하는 커피는 비 오는 날 아침에 마시는 예멘 모카 마타리입니다. 산미가 도드라지는 커피도 좋아하지만, 커피 본연의 단맛이 풍부하게 느껴지는 커피를 선호합니다. 아주 예외적인 원두 몇을 제외하면, 무산소 발효 커피를 그리 즐기지는 않습니다. 최근에는 상하이로 커피 여행을 다녀오기도 했습니다. 커피를 안주 삼아 위스키 마시는 걸 정말 좋아합니다. 어쩌면 위스키를 안주 삼는 걸 수도 있겠네요.',
  '문학 읽는 취미는 없지만, 나쓰메 소세키와 코맥 매카시를 좋아합니다. 한때 철학을 전공하고 싶었던 마음에 철학 텍스트를 짬짬이 읽곤 합니다. 고대철학은 재치 있다고 생각하지만, 썩 저랑 잘 맞지는 않습니다. 하지만 고대 회의주의는 좀 재밌어합니다. 현대철학에서는 실용주의와 언어철학을 좋아합니다. 텍스트를 읽으면 꼭 어딘가 메모를 해둬야 하는 저장 강박이 있어 고생인데 주로 Obsidian에 기록합니다. 책갈피를 모읍니다만 글은 주로 아이패드 미니나 오닉스 팔마로 읽습니다.',
  '배우자와 함께 주말에 드라마를 몰아서 보는 걸 좋아합니다. 스포일러를 피하고자 그때그때 남들이 재밌다는 제철 드라마를 보는 편인데, Apple TV 오리지널 시리즈를 대체로 선호합니다. 지금까지 본 드라마 중 가장 좋아하는 작품은 〈트윈픽스〉 시리즈이고, 〈뉴스룸〉 시리즈는 DVD까지 사서 여러 번 돌려봤으며, 〈이블〉은 수상할 정도로 제 취향을 너무 잘 버무려놓은 시리즈라 언젠가 다음 시즌이 제작되기를 기다립니다. 그 외에도 〈테드 래소〉, 〈세브란스〉, 〈지하창고 사일로의 비밀〉 등을 좋아합니다.',
];

export function Favorites() {
  const [diceNumber, setDiceNumber] = useState(
    Math.floor(Math.random() * texts.length),
  );

  return (
    <div className="flex flex-col gap-4 sm:gap-8">
      <article className="text-muted-foreground text-base leading-relaxed">
        {texts[diceNumber]}
      </article>
      <Button
        variant="ghost"
        onClick={() => {
          let newDiceNumber = Math.floor(Math.random() * texts.length);
          while (newDiceNumber === diceNumber) {
            newDiceNumber = Math.floor(Math.random() * texts.length);
          }
          setDiceNumber(newDiceNumber);
        }}
        size="icon"
        className="self-end"
      >
        {diceNumber === 0 && <Dice1 className="size-4" />}
        {diceNumber === 1 && <Dice2 className="size-4" />}
        {diceNumber === 2 && <Dice3 className="size-4" />}
        {diceNumber === 3 && <Dice4 className="size-4" />}
        {diceNumber === 4 && <Dice5 className="size-4" />}
        {diceNumber === 5 && <Dice6 className="size-4" />}
      </Button>
    </div>
  );
}
