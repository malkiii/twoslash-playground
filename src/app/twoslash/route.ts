import { type NextRequest } from 'next/server';
import { transformerTwoslash, rendererRich } from '@shikijs/twoslash';
import { codeToHtml } from 'shiki';

export async function GET(request: NextRequest) {
  const code = request.nextUrl.searchParams.get('code') || '// some comment';

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

  return new Response(html, {
    status: 200,
    headers: {
      'Content-Type': 'text/html',
    },
  });
}
