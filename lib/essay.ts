import { Essay, allEssays as internalEssays } from 'contentlayer/generated';
import { compareDesc } from 'date-fns';

interface makeExternalEssayProps {
  id: string;
  title: string;
  date: Date;
  url: string;
  coverImageUrl: string;
}

function isExternalEssay(essay: Essay): boolean {
  return essay._raw.sourceFilePath === '';
}

function makeExternalEssay({
  id,
  title,
  date,
  url,
  coverImageUrl,
}: makeExternalEssayProps): Essay {
  return {
    type: 'Essay',
    _id: id,
    title,
    date: date.toISOString(),
    url,
    coverImageUrl,
    body: {
      raw: '',
      html: '',
    },
    description: '',
    _raw: {
      sourceFilePath: '',
      sourceFileName: '',
      sourceFileDir: '',
      contentType: 'markdown',
      flattenedPath: '',
    },
  };
}

const externalEssays: Essay[] = [
  makeExternalEssay({
    id: 'how-banksalald-decomposes-legacy-services',
    title: '뱅크샐러드는 어떻게 레거시 서비스를 박살 내는가',
    date: new Date('2020-09-21'),
    url: 'https://blog.banksalad.com/tech/how-banksalald-decomposes-legacy-services/',
    coverImageUrl: '/covers/2020-banksalad-decomp.webp',
  }),
];

export const allInternalEssays = internalEssays.sort((a, b) =>
  compareDesc(new Date(a.date), new Date(b.date)),
);

export const allEssays = [...internalEssays, ...externalEssays].sort((a, b) =>
  compareDesc(new Date(a.date), new Date(b.date)),
);
