'use client';

import MonacoEditor from '@monaco-editor/react';

export function Editor(props: React.ComponentProps<typeof MonacoEditor>) {
  return (
    <MonacoEditor
      {...props}
      height="100dvh"
      theme="vs-dark"
      defaultLanguage="typescript"
      defaultValue="// some comment"
      loading="Spinner..."
      options={{
        fontSize: 16,
        padding: { top: 16, bottom: 16 },
      }}
    />
  );
}
