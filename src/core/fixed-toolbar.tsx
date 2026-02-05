import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import EditorInsert from "./editor-insert";
import EditorInlineFormat from "./editor-inline-format";
import EditorInlineAlignment from "./editor-inline-alignment";
import EditorList from "./editor-list";
import EditorHistory from "./editor-history";
import EditorFont from "./editor-font";
import EditorTable from "./editor-table";

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

const FixedToolbar: React.FC<FixedToolbarProps> = ({
    config,
    activeFormats,
    currentTextFormat,
    updateActiveFormats,
    applyTextFormat,
    editorRef,
    undo,
    redo,
    canUndo,
    canRedo,
}) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const getButtonClass = (isActive: boolean) => {
        return `p-2 rounded transition-colors ${isActive
            ? "bg-blue-100 text-blue-600 hover:bg-blue-200"
            : "text-gray-600 hover:bg-gray-100"
            }`;
    };

    const Divider = () => <div className="w-px h-6 bg-gray-300 mx-1" />;

    const textFormats = [
        { value: "p", label: "Normal text", tag: "p" },
        { value: "h1", label: "Title", tag: "h1" },
        { value: "h2", label: "Subtitle", tag: "h2" },
        { value: "h3", label: "Heading 1", tag: "h3" },
        { value: "h4", label: "Heading 2", tag: "h4" },
        { value: "h5", label: "Heading 3", tag: "h5" },
        { value: "h6", label: "Heading 4", tag: "h6" },
    ];

    return (
        <div className="sticky top-0 z-50 w-full bg-white border-b border-gray-200 px-4 py-2 flex items-center justify-center border">
            <div className="flex flex-wrap items-center justify-center gap-1 max-w-7xl mx-auto w-full">

                {/* Undo / Redo */}
                <EditorHistory
                    getButtonClass={getButtonClass}
                    onUndo={undo}
                    onRedo={redo}
                    canUndo={canUndo}
                    canRedo={canRedo}
                />
                <Divider />

                {/* Text Format Dropdown */}
                {config.showTextFormat && (
                    <>
                        <div className="relative">
                            <button
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                onBlur={() => setTimeout(() => setIsDropdownOpen(false), 200)}
                                className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded min-w-[130px] justify-between transition-colors"
                            >
                                <span className="font-medium truncate max-w-[100px]">
                                    {textFormats.find((f) => f.value === currentTextFormat)
                                        ?.label || "Normal text"}
                                </span>
                                <ChevronDown size={14} className="text-gray-500" />
                            </button>

                            {isDropdownOpen && (
                                <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg z-50 min-w-[160px] max-h-[300px] overflow-y-auto w-full">
                                    {textFormats.map((format) => (
                                        <button
                                            key={format.value}
                                            onMouseDown={(e) => {
                                                e.preventDefault();
                                                applyTextFormat(format.tag);
                                            }}
                                            className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 ${currentTextFormat === format.value
                                                ? "bg-blue-50 text-blue-600 font-medium"
                                                : "text-gray-700"
                                                }`}
                                            title={`Format as ${format.label}`}
                                        >
                                            <span className={
                                                format.tag === 'p' ? '' :
                                                    format.tag === 'h1' ? 'text-2xl font-bold' :
                                                        format.tag === 'h2' ? 'text-xl font-bold' :
                                                            format.tag === 'h3' ? 'text-lg font-bold' :
                                                                'font-bold'
                                            }>
                                                {format.label}
                                            </span>
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                        <Divider />
                    </>
                )}

                {/* Font Controls */}
                <EditorFont
                    getButtonClass={getButtonClass}
                    updateActiveFormats={updateActiveFormats}
                />
                <Divider />

                {/* Inline Format Group */}
                {config.showInlineFormat && (
                    <>
                        <EditorInlineFormat
                            editorRef={editorRef}
                            activeFormats={{
                                bold: activeFormats.bold,
                                italic: activeFormats.italic,
                                underline: activeFormats.underline,
                                strikethrough: activeFormats.strikethrough,
                            }}
                            updateActiveFormats={updateActiveFormats}
                            getButtonClass={getButtonClass}
                        />
                        <Divider />
                    </>
                )}

                {/* Alignment Group */}
                {config.showAlignment && (
                    <>
                        <EditorInlineAlignment
                            activeFormats={{
                                alignLeft: activeFormats.alignLeft,
                                alignCenter: activeFormats.alignCenter,
                                alignRight: activeFormats.alignRight,
                                alignJustify: activeFormats.alignJustify,
                            }}
                            updateActiveFormats={updateActiveFormats}
                            getButtonClass={getButtonClass}
                        />
                        <Divider />
                    </>
                )}

                {/* List Style Group */}
                {config.showList && (
                    <>
                        <EditorList
                            editorRef={editorRef}
                            activeFormats={{
                                bulletList: activeFormats.bulletList,
                                numberedList: activeFormats.numberedList,
                            }}
                            updateActiveFormats={updateActiveFormats}
                            getButtonClass={getButtonClass}
                        />
                        <Divider />
                    </>
                )}

                {/* Insert Group */}
                {config.showInsert && (
                    <>
                        <EditorInsert />
                        <EditorTable getButtonClass={getButtonClass} />
                    </>
                )}
            </div>
        </div>
    );
};

export default FixedToolbar;
