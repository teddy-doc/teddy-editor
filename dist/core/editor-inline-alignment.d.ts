interface AlignmentProps {
    activeFormats: {
        alignLeft: boolean;
        alignCenter: boolean;
        alignRight: boolean;
        alignJustify: boolean;
    };
    updateActiveFormats: () => void;
    getButtonClass: (isActive: boolean) => string;
}
export declare const applyAlignment: (alignment: "left" | "center" | "right" | "justify", updateActiveFormats: () => void) => void;
declare const EditorInlineAlignment: React.FC<AlignmentProps>;
export default EditorInlineAlignment;
