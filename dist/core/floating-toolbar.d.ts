import React from "react";
interface FloatingToolbarProps {
    editorRef: React.RefObject<HTMLDivElement | null>;
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
}
declare const FloatingToolbar: React.FC<FloatingToolbarProps>;
export default FloatingToolbar;
