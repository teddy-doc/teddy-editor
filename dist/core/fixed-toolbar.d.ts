import React from "react";
interface FixedToolbarProps {
    config: {
        showTextFormat?: boolean;
        showInlineFormat?: boolean;
        showAlignment?: boolean;
        showList?: boolean;
        showInsert?: boolean;
    };
    activeFormats: {
        bold: boolean;
        italic: boolean;
        underline: boolean;
        strikethrough: boolean;
        alignLeft: boolean;
        alignCenter: boolean;
        alignRight: boolean;
        alignJustify: boolean;
        bulletList: boolean;
        numberedList: boolean;
    };
    currentTextFormat: string;
    updateActiveFormats: () => void;
    applyTextFormat: (tag: string) => void;
    editorRef: React.RefObject<HTMLDivElement | null>;
    undo: () => void;
    redo: () => void;
    canUndo: boolean;
    canRedo: boolean;
}
declare const FixedToolbar: React.FC<FixedToolbarProps>;
export default FixedToolbar;
