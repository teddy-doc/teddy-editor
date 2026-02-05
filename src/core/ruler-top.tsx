import React from "react";

const RulerTop: React.FC = () => {
    // A4 width is ~210mm or ~8.27 inches. 
    // At 96 DPI, that's ~794px. Since we use max-w-4xl (56rem = 896px), let's align roughly.
    // We'll create a simple SVG ruler.

    // Generating ticks
    const ticks = [];
    for (let i = 0; i <= 80; i++) {
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

    // Indicators for padding (assuming p-8 ~ 32px or 2rem)
    return (
        <div className="h-6 w-full bg-gray-50 border-b border-gray-300 relative overflow-hidden select-none">
            <svg width="100%" height="100%" className="absolute left-8">
                {/* Offset by padding left-8 (~32px) */}
                {ticks}
            </svg>

            {/* Margin Indicators (Visual only) */}
            {/* Left Margin */}
            <div className="absolute top-0 left-0 w-8 h-full bg-gray-200 border-r border-gray-300 opacity-50" />
            {/* Right Margin (approximate for display) */}
            <div className="absolute top-0 right-0 w-8 h-full bg-gray-200 border-l border-gray-300 opacity-50" />
        </div>
    );
};

export default RulerTop;
