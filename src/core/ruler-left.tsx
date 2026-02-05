import React from "react";

const RulerLeft: React.FC = () => {
    // Vertical ruler

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

    return (
        <div className="w-6 h-full bg-gray-50 border-r border-gray-300 relative overflow-hidden select-none flex-shrink-0">
            <svg width="100%" height="2000px" className="absolute top-8">
                {/* Offset by padding top-8 */}
                {ticks}
            </svg>
            {/* Top Margin Indicator */}
            <div className="absolute top-0 left-0 w-full h-8 bg-gray-200 border-b border-gray-300 opacity-50" />
        </div>
    );
};

export default RulerLeft;
