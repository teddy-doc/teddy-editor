import React, { useState } from "react";
import { Table, X } from "lucide-react";

interface EditorTableProps {
    getButtonClass: (isActive: boolean) => string;
}

const EditorTable: React.FC<EditorTableProps> = ({ getButtonClass }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [rows, setRows] = useState(2);
    const [cols, setCols] = useState(2);

    const insertTable = (e: React.FormEvent) => {
        e.preventDefault();

        // Create table HTML
        let tableHtml = '<table style="border-collapse: collapse; width: 100%; border: 1px solid #ccc;">';
        tableHtml += "<tbody>";

        for (let i = 0; i < rows; i++) {
            tableHtml += "<tr>";
            for (let j = 0; j < cols; j++) {
                tableHtml += '<td style="border: 1px solid #ccc; padding: 8px; min-width: 50px;">&nbsp;</td>';
            }
            tableHtml += "</tr>";
        }

        tableHtml += "</tbody></table><p>&nbsp;</p>";

        document.execCommand("insertHTML", false, tableHtml);
        setIsOpen(false);
    };

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={getButtonClass(isOpen)}
                title="Insert Table"
            >
                <Table size={18} />
            </button>

            {isOpen && (
                <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg z-50 p-4 w-64">
                    <div className="flex justify-between items-center mb-3">
                        <h3 className="text-sm font-semibold text-gray-700">Insert Table</h3>
                        <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-gray-600">
                            <X size={16} />
                        </button>
                    </div>

                    <form onSubmit={insertTable}>
                        <div className="flex gap-4 mb-4">
                            <div className="flex-1">
                                <label className="block text-xs font-medium text-gray-500 mb-1">Rows</label>
                                <input
                                    type="number"
                                    min="1"
                                    max="10"
                                    value={rows}
                                    onChange={(e) => setRows(parseInt(e.target.value) || 1)}
                                    className="w-full px-2 py-1 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 outline-none"
                                />
                            </div>
                            <div className="flex-1">
                                <label className="block text-xs font-medium text-gray-500 mb-1">Columns</label>
                                <input
                                    type="number"
                                    min="1"
                                    max="10"
                                    value={cols}
                                    onChange={(e) => setCols(parseInt(e.target.value) || 1)}
                                    className="w-full px-2 py-1 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 outline-none"
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full py-1.5 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition-colors"
                        >
                            Insert
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default EditorTable;
