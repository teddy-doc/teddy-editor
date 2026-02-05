interface HistoryState {
    html: string;
    caret?: number;
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
export declare const useHistory: (initialContent: string) => UseHistoryReturn;
export {};
