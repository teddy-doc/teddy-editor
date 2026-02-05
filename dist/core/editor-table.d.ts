import React from "react";
interface EditorTableProps {
    getButtonClass: (isActive: boolean) => string;
}
declare const EditorTable: React.FC<EditorTableProps>;
export default EditorTable;
