import type { RefObject } from "react";
interface ListProps {
    editorRef: RefObject<HTMLDivElement | null>;
    activeFormats: {
        bulletList: boolean;
        numberedList: boolean;
    };
    updateActiveFormats: () => void;
    getButtonClass: (isActive: boolean) => string;
}
export declare const applyListFormat: (listType: "ul" | "ol", editorRef: RefObject<HTMLDivElement | null>, updateActiveFormats: () => void) => void;
declare const EditorList: React.FC<ListProps>;
export default EditorList;
