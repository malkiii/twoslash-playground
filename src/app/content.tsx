'use client';

import { Editor } from '~/components/editor';
import { Preview } from '~/components/preview';
import { EditorProvider, useEditor } from '~/components/editor-provider';
import { PanelGroup, Panel, PanelResizeHandle } from 'react-resizable-panels';
import { useMediaQuery } from 'react-pre-hooks';

export default function Content() {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <EditorProvider>
      <PanelGroup direction={isMobile ? 'vertical' : 'horizontal'} className="h-full items-center">
        <Panel defaultSize={50} minSize={25} className="size-full">
          <Editor />
        </Panel>
        <PanelResizeHandle className="h-full w-1.5 bg-neutral-500 transition-colors hover:bg-neutral-200 max-md:h-1.5 max-md:w-full" />
        <Panel defaultSize={50} minSize={25} className="flex size-full flex-col">
          <ActionBar />
          <Preview />
        </Panel>
      </PanelGroup>
    </EditorProvider>
  );
}

function ActionBar() {
  const { generateSnippet, isGenerating } = useEditor();

  return (
    <div className="flex w-full items-center justify-between gap-2 p-3 font-semibold">
      <button onClick={generateSnippet}>{isGenerating ? 'Refreshing...' : 'Refresh'}</button>
      <div className="flex items-center gap-[inherit]">
        <a href="https://github.com/malkiii/twoslash-snippet" target="_blank" rel="noopener">
          GitHub
        </a>
        <a
          title="Twoslash Notation References"
          href="https://twoslash.netlify.app/refs/notations"
          target="_blank"
          rel="noopener noreferrer"
          className="content-center"
        >
          <span className="inline-flex aspect-square size-5 items-center justify-center rounded-full border-2 text-sm">
            !
          </span>
        </a>
      </div>
    </div>
  );
}
