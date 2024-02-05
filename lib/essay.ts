import { Essay } from 'contentlayer/generated';

interface makeExternalEssayProps {
  id: string;
  title: string;
  date: Date;
  url: string;
  coverImageUrl: string;
}

export function isExternalEssay(essay: Essay): boolean {
  return essay._raw.sourceFilePath === '';
}

export function makeExternalEssay({
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
    _raw: {
      sourceFilePath: '',
      sourceFileName: '',
      sourceFileDir: '',
      contentType: 'markdown',
      flattenedPath: '',
    },
  };
}
