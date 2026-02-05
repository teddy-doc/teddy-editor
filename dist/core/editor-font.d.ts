import React from "react";
interface EditorFontProps {
    getButtonClass: (isActive: boolean) => string;
    updateActiveFormats: () => void;
}
declare const EditorFont: React.FC<EditorFontProps>;
export default EditorFont;
