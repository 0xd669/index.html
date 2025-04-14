'use client';

import { useState } from 'react';

const texts = ['1', '2', '3', '4', '5', '6'];

export function Favorites() {
  const [diceNumber, setDiceNumber] = useState(
    Math.floor(Math.random() * texts.length),
  );

  return (
    <div className="flex flex-col gap-4">
      <article className="text-base leading-relaxed">
        {texts[diceNumber]}
      </article>
    </div>
  );
}
