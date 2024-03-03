'use client';

import { useRouter } from 'next/navigation';

export function BackButton() {
  const router = useRouter();

  return (
    <button onClick={() => router.back()} className="text-2xl font-medium hover:text-destructive" aria-label="뒤로 가기">
      ←
    </button>
  )
}
