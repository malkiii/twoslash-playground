import { type NextRequest } from 'next/server';
import { transformerTwoslash, rendererRich } from '@shikijs/twoslash';
import { codeToHtml } from 'shiki';

export async function POST(request: NextRequest) {
  const res = (await request.json()) as { code?: string };

  const code = res.code ?? '// some code';

  const html = await codeToHtml(code, {
    lang: 'ts',
    theme: 'dark-plus',
    transformers: [
      transformerTwoslash({
        renderer: rendererRich(),
        throws: false,
        cache: true,
      }),
    ],
  });

  return new Response(
    html
      .replace(/<\/span>\n/g, '</span>')
      .replaceAll(`<span class="line"></span>`, '<span class="line"> </span>'),
    {
      status: 200,
      headers: {
        'Content-Type': 'text/html',
      },
    },
  );
}
