import type { RefObject } from "react";
interface InlineFormatProps {
    editorRef: RefObject<HTMLDivElement | null>;
    activeFormats: {
        bold: boolean;
        italic: boolean;
        underline: boolean;
        strikethrough: boolean;
    };
    updateActiveFormats: () => void;
    getButtonClass: (isActive: boolean) => string;
}
export declare const applyInlineFormat: (tagName: string, editorRef: RefObject<HTMLDivElement | null>, updateActiveFormats: () => void) => void;
declare const EditorInlineFormat: React.FC<InlineFormatProps>;
export default EditorInlineFormat;
