import React from "react";
import { Undo, Redo } from "lucide-react";

interface EditorHistoryProps {
    getButtonClass: (isActive: boolean) => string;
}

const EditorHistory: React.FC<EditorHistoryProps> = ({ getButtonClass }) => {
    const handleUndo = (e: React.MouseEvent) => {
        e.preventDefault();
        document.execCommand("undo");
    };

    const handleRedo = (e: React.MouseEvent) => {
        e.preventDefault();
        document.execCommand("redo");
    };

    return (
        <div className="flex gap-1">
            <button
                onMouseDown={handleUndo}
                className={getButtonClass(false)}
                title="Undo"
            >
                <Undo size={18} />
            </button>
            <button
                onMouseDown={handleRedo}
                className={getButtonClass(false)}
                title="Redo"
            >
                <Redo size={18} />
            </button>
        </div>
    );
};

export default EditorHistory;
