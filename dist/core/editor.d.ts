import React from "react";
export interface TeddyEditorInstance {
    getContent: () => string;
    setContent: (content: string) => void;
}
export interface EditorProps {
    content?: string;
    onChange?: (content: string, editor: TeddyEditorInstance) => void;
    onBlur?: (editor: TeddyEditorInstance) => void;
    onFocus?: (editor: TeddyEditorInstance) => void;
    onReady?: (editor: TeddyEditorInstance) => void;
    config?: {
        showTextFormat?: boolean;
        showInlineFormat?: boolean;
        showAlignment?: boolean;
        showList?: boolean;
        showInsert?: boolean;
        showCodeView?: boolean;
    };
}
declare const Editor: React.FC<EditorProps>;
export default Editor;
