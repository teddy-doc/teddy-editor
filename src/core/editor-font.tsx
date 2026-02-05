import React, { useState } from "react";
import { Palette, ChevronDown } from "lucide-react";

interface EditorFontProps {
    getButtonClass: (isActive: boolean) => string;
    updateActiveFormats: () => void;
}

const EditorFont: React.FC<EditorFontProps> = ({
    getButtonClass,
    updateActiveFormats,
}) => {
    const [showColorPicker, setShowColorPicker] = useState(false);
    const [showFontFamily, setShowFontFamily] = useState(false);
    const [showFontSize, setShowFontSize] = useState(false);
    const [customFontSize, setCustomFontSize] = useState("");

    const colors = [
        "#000000", "#434343", "#666666", "#999999", "#b7b7b7", "#cccccc", "#d9d9d9", "#efefef", "#f3f3f3", "#ffffff",
        "#980000", "#ff0000", "#ff9900", "#ffff00", "#00ff00", "#00ffff", "#4a86e8", "#0000ff", "#9900ff", "#ff00ff",
        "#e6b8af", "#f4cccc", "#fce5cd", "#fff2cc", "#d9ead3", "#d0e0e3", "#c9daf8", "#cfe2f3", "#d9d2e9", "#ead1dc",
        "#dd7e6b", "#ea9999", "#f9cb9c", "#ffe599", "#b6d7a8", "#a2c4c9", "#a4c2f4", "#9fc5e8", "#b4a7d6", "#d5a6bd",
        "#cc4125", "#e06666", "#f6b26b", "#ffd966", "#93c47d", "#76a5af", "#6d9eeb", "#6fa8dc", "#8e7cc3", "#c27ba0",
        "#a61c00", "#cc0000", "#e69138", "#f1c232", "#6aa84f", "#45818e", "#3c78d8", "#3d85c6", "#674ea7", "#a64d79",
    ];

    const fonts = [
        { name: "Sans Serif", value: "Arial, Helvetica, sans-serif" },
        { name: "Serif", value: "Times New Roman, Times, serif" },
        { name: "Monospace", value: "Courier New, Courier, monospace" },
    ];

    const fontSizes = [8, 9, 10, 11, 12, 14, 18, 24, 30, 36, 48, 60, 72, 96];

    const applyColor = (color: string) => {
        document.execCommand("foreColor", false, color);
        setShowColorPicker(false);
        updateActiveFormats();
    };

    const applyFontFamily = (font: string) => {
        document.execCommand("fontName", false, font);
        setShowFontFamily(false);
        updateActiveFormats();
    };

    const applyFontSize = (size: string | number) => {
        // 1. Apply a temporary font size (7 is rarely used naturally in this context, or use a marker)
        document.execCommand("fontSize", false, "7");

        // 2. Find all font elements with size="7"
        const fontElements = document.getElementsByTagName("font");

        // 3. Iterate and replace with span
        for (let i = fontElements.length - 1; i >= 0; i--) {
            const fontEl = fontElements[i];
            if (fontEl.getAttribute("size") === "7") {
                const span = document.createElement("span");
                span.style.fontSize = `${size}px`;
                span.innerHTML = fontEl.innerHTML;
                fontEl.parentNode?.replaceChild(span, fontEl);
            }
        }

        setShowFontSize(false);
        setCustomFontSize("");
        updateActiveFormats();
    };

    const handleCustomFontSize = (e: React.FormEvent) => {
        e.preventDefault();
        if (customFontSize) {
            applyFontSize(customFontSize);
        }
    };

    return (
        <div className="flex gap-1 items-center relative">
            {/* Font Family */}
            <div className="relative">
                <button
                    onClick={() => setShowFontFamily(!showFontFamily)}
                    onBlur={() => setTimeout(() => setShowFontFamily(false), 200)}
                    className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded min-w-[100px] justify-between transition-colors"
                    title="Font Family"
                >
                    <span className="font-medium truncate max-w-[80px]">Font</span>
                    <ChevronDown size={14} className="text-gray-500" />
                </button>
                {showFontFamily && (
                    <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg z-50 min-w-[160px]">
                        {fonts.map((font) => (
                            <button
                                key={font.name}
                                onMouseDown={(e) => {
                                    e.preventDefault();
                                    applyFontFamily(font.value);
                                }}
                                className="w-full text-left px-4 py-2 text-sm hover:bg-gray-50 text-gray-700 font-medium"
                                style={{ fontFamily: font.value }}
                            >
                                {font.name}
                            </button>
                        ))}
                    </div>
                )}
            </div>

            {/* Font Size */}
            <div className="relative">
                <button
                    onClick={() => setShowFontSize(!showFontSize)}
                    onBlur={() => {
                        // Delay closing so input click doesn't close it immediately
                        setTimeout(() => {
                            // We don't auto close here rely on click outside or selection
                            // Actually standard blur handling is tricky with input inside
                            // Let's simplify and just rely on interaction
                            setShowFontSize(false);
                        }, 200)
                    }}
                    className="flex items-center gap-2 px-2 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded min-w-[60px] justify-between transition-colors"
                    title="Font Size"
                >
                    <span className="font-medium">Size</span>
                    <ChevronDown size={14} className="text-gray-500" />
                </button>
                {showFontSize && (
                    <div
                        className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg z-50 min-w-[100px] max-h-[300px] overflow-y-auto"
                        onMouseDown={(e) => e.preventDefault()} // Prevent blur on click
                    >
                        <div className="p-2 border-b border-gray-100">
                            <form onSubmit={handleCustomFontSize} className="flex gap-1">
                                <input
                                    type="number"
                                    value={customFontSize}
                                    onChange={(e) => setCustomFontSize(e.target.value)}
                                    placeholder="px"
                                    className="w-12 text-sm border border-gray-300 rounded px-1"
                                    onMouseDown={(e) => e.stopPropagation()}
                                />
                                <button type="submit" className="text-xs bg-blue-50 text-blue-600 px-1 rounded">
                                    Go
                                </button>
                            </form>
                        </div>
                        {fontSizes.map((size) => (
                            <button
                                key={size}
                                onMouseDown={(e) => {
                                    e.preventDefault();
                                    applyFontSize(size);
                                }}
                                className="w-full text-left px-4 py-2 text-sm hover:bg-gray-50 text-gray-700 hover:text-blue-600"
                            >
                                {size}
                            </button>
                        ))}
                    </div>
                )}
            </div>

            {/* Font Color */}
            <div className="relative">
                <button
                    onClick={() => setShowColorPicker(!showColorPicker)}
                    onBlur={() => setTimeout(() => setShowColorPicker(false), 200)}
                    className={getButtonClass(showColorPicker)}
                    title="Text Color"
                >
                    <Palette size={18} />
                </button>

                {showColorPicker && (
                    <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg z-50 p-2 w-[180px] flex flex-wrap gap-1">
                        {colors.map((color) => (
                            <button
                                key={color}
                                onMouseDown={(e) => {
                                    e.preventDefault();
                                    applyColor(color);
                                }}
                                className="w-5 h-5 rounded border border-gray-300 hover:scale-110 transition-transform"
                                style={{ backgroundColor: color }}
                                title={color}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default EditorFont;
