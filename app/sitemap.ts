import { MetadataRoute } from 'next';

import { allInternalEssays } from '@/lib/essay';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://hwang.sh',
      lastModified: '2024-02-07',
      changeFrequency: 'monthly',
      priority: 0.4,
    },
    // @ts-ignore
    ...allInternalEssays.map((essay) => {
      return {
        url: `https://hwang.sh${essay.url}`,
        lastModified: essay.date,
        changeFrequency: 'monthly',
        priority: 0.8,
      };
    }),
  ];
}
