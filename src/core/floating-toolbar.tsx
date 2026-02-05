import React, { useEffect, useState, useRef } from "react";
import { ChevronDown } from "lucide-react";
import EditorInlineFormat from "./editor-inline-format";
import EditorInlineAlignment from "./editor-inline-alignment";
import EditorList from "./editor-list";

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

const FloatingToolbar: React.FC<FloatingToolbarProps> = ({
    editorRef,
    activeFormats,
    currentTextFormat,
    updateActiveFormats,
    applyTextFormat,
}) => {
    const [position, setPosition] = useState({ top: 0, left: 0 });
    const [isVisible, setIsVisible] = useState(false);
    const [showFormatDropdown, setShowFormatDropdown] = useState(false);
    const toolbarRef = useRef<HTMLDivElement>(null);

    const textFormats = [
        { value: "p", label: "Paragraph", tag: "p" },
        { value: "h1", label: "Heading 1", tag: "h1" },
        { value: "h2", label: "Heading 2", tag: "h2" },
        { value: "h3", label: "Heading 3", tag: "h3" },
        { value: "h4", label: "Heading 4", tag: "h4" },
        { value: "h5", label: "Heading 5", tag: "h5" },
        { value: "h6", label: "Heading 6", tag: "h6" },
    ];

    useEffect(() => {
        const updatePosition = () => {
            const selection = window.getSelection();

            // Check if we have a valid selection within the editor
            if (
                !selection ||
                selection.rangeCount === 0 ||
                selection.isCollapsed ||
                !editorRef.current ||
                !editorRef.current.contains(selection.anchorNode)
            ) {
                setIsVisible(false);
                setShowFormatDropdown(false);
                return;
            }

            const range = selection.getRangeAt(0);
            const rect = range.getBoundingClientRect();

            // Calculate position (centered above selection)
            // We rely on fixed positioning relative to the viewport
            const toolbarHeight = toolbarRef.current?.offsetHeight || 50;
            const top = rect.top - toolbarHeight - 45; // increased spacing to 45px
            const left = rect.left + rect.width / 2;

            setPosition({ top, left });
            setIsVisible(true);
        };

        document.addEventListener("selectionchange", updatePosition);
        // Also update on scroll to keep it attached
        window.addEventListener("scroll", updatePosition, true);
        window.addEventListener("resize", updatePosition);

        return () => {
            document.removeEventListener("selectionchange", updatePosition);
            window.removeEventListener("scroll", updatePosition, true);
            window.removeEventListener("resize", updatePosition);
        };
    }, [editorRef]);

    const getButtonClass = (isActive: boolean) => {
        return `p-1.5 rounded transition-colors ${isActive
            ? "bg-blue-100 text-blue-600 hover:bg-blue-200"
            : "text-gray-600 hover:bg-gray-100"
            }`;
    };

    const handleFormatClick = (tag: string) => {
        applyTextFormat(tag);
        setShowFormatDropdown(false);
    };

    if (!isVisible) return null;

    return (
        <div
            ref={toolbarRef}
            className="fixed z-50 flex items-center gap-1 p-1 bg-white rounded-lg shadow-lg border border-gray-200 animate-in fade-in zoom-in-95 duration-200"
            style={{
                top: `${position.top}px`,
                left: `${position.left}px`,
                transform: "translateX(-50%)",
            }}
            onMouseDown={(e) => {
                // Prevent losing focus from editor when clicking toolbar
                e.preventDefault();
            }}
        >
            {/* Format Type Dropdown */}
            <div className="relative">
                <button
                    onClick={() => setShowFormatDropdown(!showFormatDropdown)}
                    className="flex items-center gap-1 px-2 py-1.5 text-sm text-gray-700 hover:bg-gray-100 rounded min-w-[100px] justify-between"
                >
                    <span className="truncate max-w-[80px]">
                        {textFormats.find((f) => f.value === currentTextFormat)?.label || "Paragraph"}
                    </span>
                    <ChevronDown size={12} />
                </button>

                {showFormatDropdown && (
                    <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-md shadow-xl overflow-hidden min-w-[140px] max-h-[300px] overflow-y-auto">
                        {textFormats.map((format) => (
                            <button
                                key={format.value}
                                onClick={() => handleFormatClick(format.tag)}
                                className={`w-full text-left px-3 py-2 text-sm hover:bg-gray-50 ${currentTextFormat === format.value ? "bg-blue-50 text-blue-600" : "text-gray-700"
                                    }`}
                            >
                                {format.label}
                            </button>
                        ))}
                    </div>
                )}
            </div>

            <div className="w-px h-5 bg-gray-200 mx-1" />

            {/* Inline Formatting */}
            <EditorInlineFormat
                editorRef={editorRef}
                activeFormats={activeFormats}
                updateActiveFormats={updateActiveFormats}
                getButtonClass={getButtonClass}
            />

            <div className="w-px h-5 bg-gray-200 mx-1" />

            {/* Lists */}
            <EditorList
                editorRef={editorRef}
                activeFormats={{
                    bulletList: activeFormats.bulletList,
                    numberedList: activeFormats.numberedList
                }}
                updateActiveFormats={updateActiveFormats}
                getButtonClass={getButtonClass}
            />

            <div className="w-px h-5 bg-gray-200 mx-1" />

            {/* Alignment */}
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
        </div>
    );
};

export default FloatingToolbar;
