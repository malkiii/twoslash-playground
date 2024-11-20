'use client';

import { useEditor } from './editor-provider';
import MonacoEditor from '@monaco-editor/react';

export function Editor(props: React.ComponentProps<typeof MonacoEditor>) {
  const { editorRef, setIsLoading } = useEditor();

  return (
    <MonacoEditor
      {...props}
      theme="vs-dark"
      defaultLanguage="typescript"
      defaultValue="// some comment"
      loading={null}
      options={{
        fontSize: 16,
        padding: { top: 16, bottom: 16 },
      }}
      onMount={(editor) => {
        editorRef.current = editor;

        // Restore code from localStorage
        const code = window.localStorage.getItem('code');
        if (code) editor.setValue(code);

        // disable the Ctrl+S shortcut
        window.addEventListener('keydown', (e) => {
          if (e.key.toLowerCase() === 's' && (e.metaKey || e.ctrlKey)) {
            e.preventDefault();
          }
        });

        // Remove loading state
        setIsLoading(false);
      }}
      onChange={(value) => {
        window.localStorage.setItem('code', value ?? '');
      }}
    />
  );
}
