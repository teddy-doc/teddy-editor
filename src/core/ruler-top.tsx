import React, { useRef, useState, useEffect } from "react";

interface RulerTopProps {
    paddingLeft: number;
    paddingRight: number;
    onChange: (padding: { left: number; right: number }) => void;
}

const RulerTop: React.FC<RulerTopProps> = ({ paddingLeft, paddingRight, onChange }) => {
    // A4 width is ~210mm or ~8.27 inches. 
    // At 96 DPI, that's ~794px. Since we use max-w-4xl (56rem = 896px), let's align roughly.
    // 1 tick = 10px roughly

    const rulerRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState<"left" | "right" | null>(null);

    // Generating ticks
    const ticks = [];
    for (let i = 0; i <= 90; i++) {
        const x = i * 10;
        const height = i % 10 === 0 ? 12 : i % 5 === 0 ? 8 : 4;
        ticks.push(
            <line
                key={i}
                x1={x}
                y1={20 - height}
                x2={x}
                y2={20}
                stroke="#ccc"
                strokeWidth="1"
            />
        );
        if (i % 10 === 0) {
            ticks.push(
                <text
                    key={`text-${i}`}
                    x={x + 2}
                    y={10}
                    fontSize="8"
                    fill="#999"
                >
                    {i}
                </text>
            );
        }
    }

    const handleMouseDown = (e: React.MouseEvent, type: "left" | "right") => {
        e.preventDefault();
        setIsDragging(type);
    };

    const handleMouseMove = (e: MouseEvent) => { // Native MouseEvent for document listener
        if (!isDragging || !rulerRef.current) return;

        const rect = rulerRef.current.getBoundingClientRect();
        const relativeX = e.clientX - rect.left;

        // Clamp values
        // assuming max width ~ 896px (max-w-4xl)
        const maxWidth = 896;

        if (isDragging === "left") {
            // Min 0, Max (width - right - 50)
            const newLeft = Math.max(0, Math.min(relativeX, maxWidth - paddingRight - 50));
            onChange({ left: newLeft, right: paddingRight });
        } else {
            // Right padding calculation: width - mouseX
            // Min 0, Max (width - left - 50)
            const newRight = Math.max(0, Math.min(maxWidth - relativeX, maxWidth - paddingLeft - 50));
            onChange({ left: paddingLeft, right: newRight });
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
    }, [isDragging, paddingLeft, paddingRight]); // Dependencies for closure values

    // Calculate marker positions
    // Left marker is at paddingLeft
    // Right marker is at (896 - paddingRight)
    const maxWidth = 896; // This should ideally be dynamic or passed as prop
    const rightMarkerX = maxWidth - paddingRight;

    return (
        <div ref={rulerRef} className="h-6 w-full bg-gray-50 border-b border-gray-300 relative select-none">
            <svg width="100%" height="100%" className="absolute left-0">
                {ticks}

                {/* Visualizing margins with background rects */}
                <rect x="0" y="0" width={paddingLeft} height="100%" fill="#e5e7eb" opacity="0.5" />
                <rect x={rightMarkerX} y="0" width={paddingRight} height="100%" fill="#e5e7eb" opacity="0.5" />

                {/* Interactive Markers */}
                <polygon
                    points={`${paddingLeft},0 ${paddingLeft + 6},0 ${paddingLeft + 6},10 ${paddingLeft},20 ${paddingLeft - 6},10 ${paddingLeft - 6},0`}
                    fill="#3b82f6"
                    cursor="ew-resize"
                    onMouseDown={(e) => handleMouseDown(e, "left")}
                />

                <polygon
                    points={`${rightMarkerX},0 ${rightMarkerX + 6},0 ${rightMarkerX + 6},10 ${rightMarkerX},20 ${rightMarkerX - 6},10 ${rightMarkerX - 6},0`}
                    fill="#3b82f6"
                    cursor="ew-resize"
                    onMouseDown={(e) => handleMouseDown(e, "right")}
                />
            </svg>
        </div>
    );
};

export default RulerTop;
