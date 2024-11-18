import { useRef, useContext, createContext } from 'react';
import type { OnMount } from '@monaco-editor/react';

type Editor = Parameters<OnMount>[0];

type EditorContextValue = {
  editorRef: React.MutableRefObject<Editor | undefined>;
  getCurrentCode: () => string;
  generateSnippet: () => void;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const EditorContext = createContext<EditorContextValue>({} as any);

export function useEditor() {
  return useContext(EditorContext);
}

export function EditorProvider({ children }: React.PropsWithChildren) {
  const editorRef = useRef<Editor>();

  const getCurrentCode = () => editorRef.current?.getValue() ?? '';
  const generateSnippet = () => {};

  return (
    <EditorContext.Provider value={{ editorRef, getCurrentCode, generateSnippet }}>
      {children}
    </EditorContext.Provider>
  );
}
