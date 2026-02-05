import React from "react";
interface EditorHistoryProps {
    getButtonClass: (isActive: boolean) => string;
    onUndo: () => void;
    onRedo: () => void;
    canUndo: boolean;
    canRedo: boolean;
}
declare const EditorHistory: React.FC<EditorHistoryProps>;
export default EditorHistory;
