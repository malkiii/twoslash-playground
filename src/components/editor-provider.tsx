import { useRef, useContext, createContext, useState, useEffect } from 'react';
import { type OnMount } from '@monaco-editor/react';
import { useAsyncCallback } from 'react-pre-hooks';

type Editor = Parameters<OnMount>[0];

type EditorContextValue = {
  editorRef: React.MutableRefObject<Editor | undefined>;
  getCurrentCode: () => string;
  generateSnippet: () => Promise<void>;
  isGenerating: boolean;
  snippetHTML: string | null;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const EditorContext = createContext<EditorContextValue>({} as any);

export function useEditor() {
  return useContext(EditorContext);
}

export function EditorProvider({ children }: React.PropsWithChildren) {
  const editorRef = useRef<Editor>();
  const [savedSnippet, setSavedSnippet] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const getCurrentCode = () => editorRef.current?.getValue() ?? '';

  const {
    data: generatedSnippet,
    isPending: isGenerating,
    callback: generateSnippet,
  } = useAsyncCallback(async () => {
    const code = getCurrentCode();
    if (!code) return '';

    window.onbeforeunload = () => true;

    const response = await fetch('/api/twoslash', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ code }),
    });

    window.onbeforeunload = null;

    if (!response.ok) throw new Error('Failed to generate snippet!');

    const html = await response.text();

    window.localStorage.setItem('snippet', html);

    return html;
  });

  useEffect(() => {
    setSavedSnippet(window.localStorage.getItem('snippet'));
  }, []);

  return (
    <EditorContext.Provider
      value={{
        editorRef,
        getCurrentCode,
        generateSnippet,
        isGenerating,
        snippetHTML: generatedSnippet ?? savedSnippet,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
      {isLoading && <Loading />}
    </EditorContext.Provider>
  );
}

function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex min-h-dvh items-center justify-center bg-background">
      <div className="aspect-square w-[4%] animate-spin rounded-full border-8 border-neutral-700 border-r-white"></div>
    </div>
  );
}
