'use client';

import { useEditor } from './editor-provider';

export function Preview() {
  const { snippetHTML } = useEditor();

  return (
    <div className="flex-grow content-center overflow-auto">
      <div id="twoslash-snippet" className="w-full bg-ts p-8">
        <div
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: snippetHTML ?? placeholder }}
          className="rounded-[4px] bg-background px-4 py-3"
          style={{
            boxShadow:
              'rgba(50, 50, 93, 0.3) 0px 13px 27px -5px, rgba(0, 0, 0, 0.45) 0px 8px 16px -8px',
          }}
        />
      </div>
    </div>
  );
}

const placeholder = `\
<pre class="shiki dark-plus twoslash lsp min-h-full" style="background-color: #1E1E1E;color: #D4D4D4" tabindex="0"><code><span class="line"><span style="color: #6A9955">// some comment</span></span></code></pre>`;
