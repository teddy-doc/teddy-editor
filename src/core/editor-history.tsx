import React from "react";
import { Undo, Redo } from "lucide-react";

interface EditorHistoryProps {
    getButtonClass: (isActive: boolean) => string;
    onUndo: () => void;
    onRedo: () => void;
    canUndo: boolean;
    canRedo: boolean;
}

const EditorHistory: React.FC<EditorHistoryProps> = ({
    getButtonClass,
    onUndo,
    onRedo,
    canUndo,
    canRedo,
}) => {
    const handleUndo = (e: React.MouseEvent) => {
        e.preventDefault();
        if (canUndo) {
            onUndo();
        }
    };

    const handleRedo = (e: React.MouseEvent) => {
        e.preventDefault();
        if (canRedo) {
            onRedo();
        }
    };

    return (
        <div className="flex gap-1">
            <button
                onMouseDown={handleUndo}
                className={`${getButtonClass(false)} ${!canUndo ? "opacity-50 cursor-not-allowed" : ""}`}
                title="Undo"
                disabled={!canUndo}
            >
                <Undo size={18} />
            </button>
            <button
                onMouseDown={handleRedo}
                className={`${getButtonClass(false)} ${!canRedo ? "opacity-50 cursor-not-allowed" : ""}`}
                title="Redo"
                disabled={!canRedo}
            >
                <Redo size={18} />
            </button>
        </div>
    );
};

export default EditorHistory;
