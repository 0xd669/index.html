import { allInternalEssays } from '@/lib/essay';

export const dynamic = 'force-dynamic';

export const runtime = 'edge';

export async function GET() {
  const essays = allInternalEssays
    .map((essay) => {
      return `<item>
  <title>${essay.title}</title>
  <link>https://hwang.sh${essay.url}</link>
  <description>${essay.description}</description>
  <pubDate>${new Date(essay.date).toUTCString()}</pubDate>
</item>`.trim();
    })
    .join('\n');
  return new Response(
    `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
<channel>
  <title>hwang.sh</title>
  <link>https://hwang.sh</link>
  <description>안녕하세요, 글 쓰는 황성현입니다. 반갑습니다.</description>
  ${essays}
</channel>
</rss>`,
    {
      headers: {
        'Content-Type': 'text/xml',
      },
    },
  );
}
