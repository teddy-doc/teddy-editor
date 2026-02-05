import React from "react";
interface RulerTopProps {
    paddingLeft: number;
    paddingRight: number;
    onChange: (padding: {
        left: number;
        right: number;
    }) => void;
}
declare const RulerTop: React.FC<RulerTopProps>;
export default RulerTop;
