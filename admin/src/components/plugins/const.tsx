import {Options as ReactMarkdownOptions} from 'react-markdown';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeKatex, {Options as KatexOptions} from 'rehype-katex';
import rehypeSlug from 'rehype-slug';
import remarkBreaks from 'remark-breaks';
import remarkDirective from 'remark-directive';
import remarkDirectiveRehype from 'remark-directive-rehype';
import remarkMath from 'remark-math';
import remarkToc, {Options as RemarkTocOptions} from 'remark-toc';

export const locales = ['en', 'zh', 'ja', 'kr', 'de', 'es', 'fr'] as const;

export type Locale = (typeof locales)[number];

export const tableOfContentsText: {[locale in Locale]: string} = {
  zh: '索引',
  en: 'Table of Contents',
  ja: '目次',
  kr: '목차',
  de: 'Inhaltsverzeichnis',
  es: 'Tabla de contenido',
  fr: '',
};

export const remarkPlugins: ReactMarkdownOptions['remarkPlugins'] = [
  remarkBreaks,
  remarkDirective,
  remarkDirectiveRehype,
  remarkMath,
  [
    remarkToc,
    {
      heading: `(${Object.values(tableOfContentsText).join('|')})`,
    } satisfies RemarkTocOptions,
  ],
];

const rehypeKatexOptions: KatexOptions = {
  strict: 'ignore',
};

export const rehypePlugins: ReactMarkdownOptions['rehypePlugins'] = [
  rehypeAutolinkHeadings,
  [rehypeKatex, rehypeKatexOptions],
  rehypeSlug,
];
