import { defineDocumentType, makeSource } from '@contentlayer2/source-files';
import remarkGfm from 'remark-gfm';

export const Essay = defineDocumentType(() => ({
  name: 'Essay',
  filePathPattern: `**/*.md`,
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (essay) => `/${essay._raw.flattenedPath}`,
    },
    coverImageUrl: {
      type: 'string',
      resolve: (essay) => `/covers/${essay._raw.flattenedPath}.webp`,
    },
    description: {
      type: 'string',
      resolve: (essay) =>
        essay.body.raw
          .replaceAll(/[^ㄱ-힣\s\w-._!*"']+/g, '')
          .replaceAll('\n', ' ')
          .slice(0, 160)
          .trim() + '...',
    },
  },
}));

export default makeSource({
  contentDirPath: 'blog',
  documentTypes: [Essay],
  date: {
    timezone: 'Asia/Seoul',
  },
  markdown: {
    remarkPlugins: [remarkGfm],
  },
});
