import React from "react";
interface RulerLeftProps {
    paddingTop: number;
    paddingBottom: number;
    onChange: (padding: {
        top: number;
        bottom: number;
    }) => void;
}
declare const RulerLeft: React.FC<RulerLeftProps>;
export default RulerLeft;
