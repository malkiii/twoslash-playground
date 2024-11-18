'use client';

import { useEditor } from './editor-provider';
import MonacoEditor from '@monaco-editor/react';

export function Editor(props: React.ComponentProps<typeof MonacoEditor>) {
  const { editorRef } = useEditor();

  return (
    <MonacoEditor
      {...props}
      height="100dvh"
      theme="vs-dark"
      defaultLanguage="typescript"
      defaultValue="// some comment"
      loading={<>LOADING...</>}
      options={{
        fontSize: 16,
        padding: { top: 16, bottom: 16 },
      }}
      onMount={(editor) => {
        editorRef.current = editor;
      }}
    />
  );
}
