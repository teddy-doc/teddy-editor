import React, { useRef, useState, useEffect } from "react";

interface RulerLeftProps {
    paddingTop: number;
    paddingBottom: number;
    onChange: (padding: { top: number; bottom: number }) => void;
}

const RulerLeft: React.FC<RulerLeftProps> = ({ paddingTop, paddingBottom, onChange }) => {
    // Vertical ruler

    const rulerRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState<"top" | "bottom" | null>(null);

    const ticks = [];
    for (let i = 0; i <= 100; i++) {
        const y = i * 10;
        const width = i % 10 === 0 ? 12 : i % 5 === 0 ? 8 : 4;
        ticks.push(
            <line
                key={i}
                x1={20 - width}
                y1={y}
                x2={20}
                y2={y}
                stroke="#ccc"
                strokeWidth="1"
            />
        );
        if (i % 10 === 0 && i !== 0) {
            ticks.push(
                <text
                    key={`text-${i}`}
                    x={2}
                    y={y + 8}
                    fontSize="8"
                    fill="#999"
                    className="rotate-[-90deg] origin-center"
                >
                    {i}
                </text>
            );
        }
    }

    const handleMouseDown = (e: React.MouseEvent, type: "top" | "bottom") => {
        e.preventDefault();
        setIsDragging(type);
    };

    const handleMouseMove = (e: MouseEvent) => {
        if (!isDragging || !rulerRef.current) return;

        const rect = rulerRef.current.getBoundingClientRect();
        const apiHeight = 1123; // Approximate A4 height @ 96 DPI
        const relativeY = e.clientY - rect.top;

        if (isDragging === "top") {
            // Min 0, Max (height - bottom - 50)
            const newTop = Math.max(0, Math.min(relativeY, apiHeight - paddingBottom - 50));
            onChange({ top: newTop, bottom: paddingBottom });
        } else {
            // Bottom padding calculation: height - mouseY
            const newBottom = Math.max(0, Math.min(apiHeight - relativeY, apiHeight - paddingTop - 50));
            onChange({ top: paddingTop, bottom: newBottom });
        }
    };

    const handleMouseUp = () => {
        setIsDragging(null);
    };

    useEffect(() => {
        if (isDragging) {
            document.addEventListener("mousemove", handleMouseMove);
            document.addEventListener("mouseup", handleMouseUp);
        }
        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
        };
    }, [isDragging, paddingTop, paddingBottom]);

    const apiHeight = 1123;
    const bottomMarkerY = apiHeight - paddingBottom;

    return (
        <div ref={rulerRef} className="w-6 h-full bg-gray-50 border-r border-gray-300 relative select-none flex-shrink-0">
            <svg width="100%" height="2000px" className="absolute top-0">
                {ticks}

                {/* Visualizing margins */}
                <rect x="0" y="0" width="100%" height={paddingTop} fill="#e5e7eb" opacity="0.5" />
                <rect x="0" y={bottomMarkerY} width="100%" height={paddingBottom} fill="#e5e7eb" opacity="0.5" />

                {/* Interactive Markers - Rotated for vertical */}
                {/* Top Marker */}
                <polygon
                    points={`0,${paddingTop} 0,${paddingTop + 6} 10,${paddingTop + 6} 20,${paddingTop} 10,${paddingTop - 6} 0,${paddingTop - 6}`}
                    fill="#3b82f6"
                    cursor="ns-resize"
                    onMouseDown={(e) => handleMouseDown(e, "top")}
                />

                {/* Bottom Marker */}
                <polygon
                    points={`0,${bottomMarkerY} 0,${bottomMarkerY + 6} 10,${bottomMarkerY + 6} 20,${bottomMarkerY} 10,${bottomMarkerY - 6} 0,${bottomMarkerY - 6}`}
                    fill="#3b82f6"
                    cursor="ns-resize"
                    onMouseDown={(e) => handleMouseDown(e, "bottom")}
                />

            </svg>
        </div>
    );
};

export default RulerLeft;
