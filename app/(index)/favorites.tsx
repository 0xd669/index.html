'use client';

import { Dice1, Dice2, Dice3, Dice4, Dice5, Dice6 } from 'lucide-react';
import { useState } from 'react';

import { Button } from '@/components/ui/button';

const texts = ['1', '2', '3', '4', '5', '6'];

export function Favorites() {
  const [diceNumber, setDiceNumber] = useState(
    Math.floor(Math.random() * texts.length),
  );

  return (
    <div className="flex flex-col gap-8">
      <article className="text-muted-foreground text-base leading-relaxed">
        {texts[diceNumber]}
      </article>
      <Button
        variant="ghost"
        onClick={() => setDiceNumber(Math.floor(Math.random() * texts.length))}
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
