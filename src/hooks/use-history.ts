import { useState, useCallback, useRef } from 'react';

interface HistoryState {
  html: string;
  caret?: number; // Potential future enhancement for caret position
}

interface UseHistoryReturn {
  history: HistoryState[];
  pointer: number;
  pushState: (html: string, immediate?: boolean) => void;
  undo: () => string | null;
  redo: () => string | null;
  canUndo: boolean;
  canRedo: boolean;
}

export const useHistory = (initialContent: string): UseHistoryReturn => {
  const [history, setHistory] = useState<HistoryState[]>([{ html: initialContent }]);
  const [pointer, setPointer] = useState(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const pushState = useCallback((html: string, immediate = false) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    if (immediate) {
      setHistory((prev) => {
        const current = prev[pointer];
        if (current.html === html) return prev;

        const newHistory = prev.slice(0, pointer + 1);
        return [...newHistory, { html }];
      });
      setPointer((prev) => prev + 1);
      return;
    }

    // Debounce history updates to avoid capturing every keystroke individually
    timeoutRef.current = setTimeout(() => {
      setHistory((prev) => {
        const current = prev[pointer];
        if (current.html === html) return prev;

        // If we are not at the end of history, discard future states
        const newHistory = prev.slice(0, pointer + 1);
        return [...newHistory, { html }];
      });
      setPointer((prev) => prev + 1);
    }, 500); // 500ms debounce
  }, [pointer]);

  // Immediate push for significant actions (like paste or formatting)
  // functionality could be added later or handled by caller force-pushing.

  const undo = useCallback(() => {
    if (pointer > 0) {
      const newPointer = pointer - 1;
      setPointer(newPointer);
      return history[newPointer].html;
    }
    return null;
  }, [pointer, history]);

  const redo = useCallback(() => {
    if (pointer < history.length - 1) {
      const newPointer = pointer + 1;
      setPointer(newPointer);
      return history[newPointer].html;
    }
    return null;
  }, [pointer, history]);

  const canUndo = pointer > 0;
  const canRedo = pointer < history.length - 1;

  return {
    history,
    pointer,
    pushState,
    undo,
    redo,
    canUndo,
    canRedo,
  };
};
