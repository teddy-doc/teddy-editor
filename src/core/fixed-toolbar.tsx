import React, { useState } from "react";
import { Code, ChevronDown } from "lucide-react";
import EditorInsert from "./editor-insert";
import EditorInlineFormat from "./editor-inline-format";
import EditorInlineAlignment from "./editor-inline-alignment";
import EditorList from "./editor-list";

interface FixedToolbarProps {
    config: {
        showTextFormat?: boolean;
        showInlineFormat?: boolean;
        showAlignment?: boolean;
        showList?: boolean;
        showInsert?: boolean;
        showCodeView?: boolean;
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
    toggleCodeView: () => void;
    isCodeView: boolean;
    editorRef: React.RefObject<HTMLDivElement | null>;
}

const FixedToolbar: React.FC<FixedToolbarProps> = ({
    config,
    activeFormats,
    currentTextFormat,
    updateActiveFormats,
    applyTextFormat,
    toggleCodeView,
    isCodeView,
    editorRef,
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
        { value: "p", label: "Paragraph", tag: "p" },
        { value: "h1", label: "Heading 1", tag: "h1" },
        { value: "h2", label: "Heading 2", tag: "h2" },
        { value: "h3", label: "Heading 3", tag: "h3" },
        { value: "h4", label: "Heading 4", tag: "h4" },
        { value: "h5", label: "Heading 5", tag: "h5" },
        { value: "h6", label: "Heading 6", tag: "h6" },
    ];

    return (
        <div className="sticky top-0 z-40 w-full bg-white border-b border-gray-200 px-4 py-2 flex items-center justify-center border">
            <div className="flex flex-wrap items-center justify-center gap-1 max-w-5xl mx-auto w-full">
                {/* Text Format Dropdown */}
                {config.showTextFormat && (
                    <>
                        <div className="relative">
                            <button
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                onBlur={() => setTimeout(() => setIsDropdownOpen(false), 200)}
                                className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded min-w-[130px] justify-between transition-colors"
                            >
                                <span className="font-medium">
                                    {textFormats.find((f) => f.value === currentTextFormat)
                                        ?.label || "Paragraph"}
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
                                        >
                                            {format.label}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                        <Divider />
                    </>
                )}

                {/* Font Style Group */}
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
                        <Divider />
                    </>
                )}

                {/* Code View Toggle */}
                {/* {config.showCodeView && (
                    <button
                        onClick={toggleCodeView}
                        className={getButtonClass(isCodeView)}
                        title={isCodeView ? "Switch to Visual View" : "Switch to Code View"}
                    >
                        <Code size={18} />
                    </button>
                )} */}
            </div>
        </div>
    );
};

export default FixedToolbar;
