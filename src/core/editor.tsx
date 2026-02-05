import React, { useRef, useState, useEffect } from "react";
import { Code, ChevronDown } from "lucide-react";
import FloatingToolbar from "./floating-toolbar";
import EditorInsert from "./editor-insert";
import EditorInlineFormat from "./editor-inline-format";
import EditorInlineAlignment from "./editor-inline-alignment";
import EditorList from "./editor-list";

interface EditorProps {
  content?: string;
  onChange?: (content: string) => void;
  onBlur?: (content: string) => void;
  onFocus?: () => void;
  config?: {
    showTextFormat?: boolean;
    showInlineFormat?: boolean;
    showAlignment?: boolean;
    showList?: boolean;
    showInsert?: boolean;
    showCodeView?: boolean;
  };
}

const Editor: React.FC<EditorProps> = ({
  content = "",
  onChange,
  onBlur,
  onFocus,
  config = {
    showTextFormat: true,
    showInlineFormat: true,
    showAlignment: true,
    showList: true,
    showInsert: true,
    showCodeView: true,
  },
}) => {
  const editorRef = useRef<HTMLDivElement>(null);
  const [activeFormats, setActiveFormats] = useState({
    bold: false,
    italic: false,
    underline: false,
    strikethrough: false,
    alignLeft: false,
    alignCenter: false,
    alignRight: false,
    alignJustify: false,
    bulletList: false,
    numberedList: false,
  });
  const [currentTextFormat, setCurrentTextFormat] = useState("p");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isCodeView, setIsCodeView] = useState(false);
  const [htmlContent, setHtmlContent] = useState(content);

  const applyTextFormat = (tagName: string) => {
    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0) return;

    const range = selection.getRangeAt(0);
    let element = range.commonAncestorContainer;

    // If we're in a text node, get its parent
    if (element.nodeType === Node.TEXT_NODE) {
      element = element.parentNode as Node;
    }

    // Find the closest block element, but don't go beyond the editor
    let blockElement: HTMLElement | null = null;
    let current = element;

    while (current && current !== editorRef.current) {
      if (current.nodeType === Node.ELEMENT_NODE) {
        const el = current as HTMLElement;
        const tagName = el.tagName.toLowerCase();
        if (
          ["p", "h1", "h2", "h3", "h4", "h5", "h6", "div"].includes(tagName)
        ) {
          blockElement = el;
          break;
        }
      }
      current = current.parentNode as Node;
    }

    // If we found a valid block element and it's not the editor itself
    if (blockElement && blockElement !== editorRef.current) {
      // Create new element with the desired tag
      const newElement = document.createElement(tagName);
      newElement.innerHTML = blockElement.innerHTML;

      // Copy any existing styles (like text-align)
      if (blockElement.style.textAlign) {
        newElement.style.textAlign = blockElement.style.textAlign;
      }

      // Replace the old element
      blockElement.parentNode?.replaceChild(newElement, blockElement);

      // Update current format
      setCurrentTextFormat(tagName);

      // Restore selection
      const newRange = document.createRange();
      newRange.selectNodeContents(newElement);
      selection.removeAllRanges();
      selection.addRange(newRange);
    } else {
      // No existing block element found, or we're at the editor level
      // Create a new element and insert it
      const newElement = document.createElement(tagName);

      if (range.toString()) {
        // There's selected text, wrap it
        try {
          range.surroundContents(newElement);
        } catch (e) {
          // If surroundContents fails, extract and insert
          const contents = range.extractContents();
          newElement.appendChild(contents);
          range.insertNode(newElement);
        }
      } else {
        // No selection, create empty element
        newElement.innerHTML = "<br>"; // Add line break for empty elements
        range.insertNode(newElement);

        // Place cursor inside the new element
        const newRange = document.createRange();
        newRange.setStart(newElement, 0);
        newRange.collapse(true);
        selection.removeAllRanges();
        selection.addRange(newRange);
      }

      // Update current format
      setCurrentTextFormat(tagName);
    }

    // Update active formats after a short delay
    setTimeout(() => updateActiveFormats(), 10);
  };

  const toggleCodeView = () => {
    if (!editorRef.current) return;

    if (isCodeView) {
      // Switch from code view to visual view
      editorRef.current.innerHTML = htmlContent;
      editorRef.current.contentEditable = "true";
      setIsCodeView(false);
    } else {
      // Switch from visual view to code view
      const currentHtml = editorRef.current.innerHTML;
      setHtmlContent(currentHtml);
      editorRef.current.contentEditable = "false";
      editorRef.current.textContent = currentHtml;
      setIsCodeView(true);
    }
  };

  const handleContentChange = () => {
    if (editorRef.current && onChange) {
      const currentContent = isCodeView
        ? editorRef.current.textContent || ""
        : editorRef.current.innerHTML;
      onChange(currentContent);
    }
  };

  const handleCodeChange = () => {
    if (isCodeView && editorRef.current) {
      const newContent = editorRef.current.textContent || "";
      setHtmlContent(newContent);
      if (onChange) {
        onChange(newContent);
      }
    }
  };

  const handleBlur = () => {
    if (onBlur) {
      if (editorRef.current) {
        const newContent = editorRef.current.textContent || "";
        onBlur(newContent);
      }
    }
  };

  const handleFocus = () => {
    if (onFocus) {
      onFocus();
    }
  };

  // Initialize content when component mounts or content prop changes
  useEffect(() => {
    if (editorRef.current && content !== undefined) {
      if (isCodeView) {
        editorRef.current.textContent = content;
      } else {
        editorRef.current.innerHTML = content;
      }
      setHtmlContent(content);
    }
  }, [content, isCodeView]);

  const updateActiveFormats = () => {
    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0) {
      return;
    }

    const range = selection.getRangeAt(0);
    let element = range.commonAncestorContainer;

    // If we're in a text node, get its parent
    if (element.nodeType === Node.TEXT_NODE) {
      element = element.parentNode as Node;
    }

    // Find current text format
    let formatElement = element as HTMLElement;
    let currentFormat = "p";
    while (formatElement && formatElement !== editorRef.current) {
      if (
        ["H1", "H2", "H3", "H4", "H5", "H6", "P"].includes(
          formatElement.tagName
        )
      ) {
        currentFormat = formatElement.tagName.toLowerCase();
        break;
      }
      formatElement = formatElement.parentElement as HTMLElement;
    }
    setCurrentTextFormat(currentFormat);

    // Check for list formatting
    let listElement = element as HTMLElement;
    let inBulletList = false;
    let inNumberedList = false;
    while (listElement && listElement !== editorRef.current) {
      if (listElement.tagName === "UL") {
        inBulletList = true;
        break;
      } else if (listElement.tagName === "OL") {
        inNumberedList = true;
        break;
      }
      listElement = listElement.parentElement as HTMLElement;
    }

    // Check for inline formatting
    const hasFormat = (tagName: string) => {
      let current: Node | null = element;
      while (current && current !== editorRef.current) {
        if (current.nodeType === Node.ELEMENT_NODE) {
          const el = current as HTMLElement;
          if (el.tagName.toLowerCase() === tagName.toLowerCase()) {
            return true;
          }
        }
        current = current.parentNode;
      }
      return false;
    };

    // Check for text format (block elements)
    let blockElement: Node | null = element;
    while (blockElement && blockElement !== editorRef.current) {
      if (blockElement.nodeType === Node.ELEMENT_NODE) {
        const tagName = (blockElement as HTMLElement).tagName.toLowerCase();
        if (["h1", "h2", "h3", "h4", "h5", "h6", "p"].includes(tagName)) {
          setCurrentTextFormat(tagName);
          break;
        }
      }
      blockElement = blockElement.parentNode;
    }

    // If no block element found, default to paragraph
    if (blockElement === editorRef.current || !blockElement) {
      setCurrentTextFormat("p");
    }

    // Check for alignment
    let alignElement: Node | null = element;
    while (
      alignElement &&
      alignElement !== editorRef.current &&
      alignElement.nodeType !== Node.ELEMENT_NODE
    ) {
      alignElement = alignElement.parentNode;
    }

    const textAlign =
      alignElement && alignElement.nodeType === Node.ELEMENT_NODE
        ? (alignElement as HTMLElement).style.textAlign
        : "";

    setActiveFormats({
      bold: hasFormat("strong") || hasFormat("b"),
      italic: hasFormat("em") || hasFormat("i"),
      underline: hasFormat("u"),
      strikethrough: hasFormat("s") || hasFormat("strike") || hasFormat("del"),
      alignLeft: textAlign === "" || textAlign === "left",
      alignCenter: textAlign === "center",
      alignRight: textAlign === "right",
      alignJustify: textAlign === "justify",
      bulletList: inBulletList,
      numberedList: inNumberedList,
    });
  };

  const handleSelectionChange = () => {
    const selection = window.getSelection();
    if (selection && selection.rangeCount > 0) {
      const range = selection.getRangeAt(0);
      if (editorRef.current?.contains(range.commonAncestorContainer)) {
        updateActiveFormats();
      }
    }
  };

  useEffect(() => {
    document.addEventListener("selectionchange", handleSelectionChange);
    return () => {
      document.removeEventListener("selectionchange", handleSelectionChange);
    };
  }, []);

  const getButtonClass = (isActive: boolean) => {
    return `p-2 rounded transition-colors ${isActive
      ? "bg-blue-100 text-blue-600 hover:bg-blue-200"
      : "text-gray-600 hover:bg-gray-100"
      }`;
  };

  const Divider = () => <div className="w-px h-6 bg-gray-300 mx-1" />;

  const textFormats = [
    { value: "p", label: "Paragraph", tag: "p" },
    { value: "h1", label: "Heading 1", tag: "h1" },
    { value: "h2", label: "Heading 2", tag: "h2" },
    { value: "h3", label: "Heading 3", tag: "h3" },
    { value: "h4", label: "Heading 4", tag: "h4" },
    { value: "h5", label: "Heading 5", tag: "h5" },
    { value: "h6", label: "Heading 6", tag: "h6" },
  ];

  return (
    <div className="teddy-editor w-full min-h-screen bg-gray-100 flex flex-col items-center pb-8 relative">
      {/* Fixed Top Toolbar */}
      {!isCodeView && (
        <div className="sticky top-0 z-40 w-full bg-white border-b border-gray-200 shadow-sm px-4 py-2 flex items-center justify-center">
          <div className="flex flex-wrap items-center justify-center gap-1 max-w-5xl mx-auto w-full">

            {/* Text Format Dropdown */}
            {config.showTextFormat && (
              <>
                <div className="relative">
                  <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    onBlur={() => setTimeout(() => setIsDropdownOpen(false), 200)}
                    className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded min-w-[130px] justify-between transition-colors"
                  >
                    <span className="font-medium">
                      {textFormats.find((f) => f.value === currentTextFormat)?.label || "Paragraph"}
                    </span>
                    <ChevronDown size={14} className="text-gray-500" />
                  </button>

                  {isDropdownOpen && (
                    <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg z-50 min-w-[160px] max-h-[300px] overflow-y-auto w-full">
                      {textFormats.map((format) => (
                        <button
                          key={format.value}
                          onMouseDown={(e) => {
                            e.preventDefault();
                            applyTextFormat(format.tag);
                          }}
                          className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 ${currentTextFormat === format.value
                            ? "bg-blue-50 text-blue-600 font-medium"
                            : "text-gray-700"
                            }`}
                        >
                          {format.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                <Divider />
              </>
            )}

            {/* Font Style Group */}
            {config.showInlineFormat && (
              <>
                <EditorInlineFormat
                  editorRef={editorRef}
                  activeFormats={{
                    bold: activeFormats.bold,
                    italic: activeFormats.italic,
                    underline: activeFormats.underline,
                    strikethrough: activeFormats.strikethrough,
                  }}
                  updateActiveFormats={updateActiveFormats}
                  getButtonClass={getButtonClass}
                />
                <Divider />
              </>
            )}

            {/* Alignment Group */}
            {config.showAlignment && (
              <>
                <EditorInlineAlignment
                  activeFormats={{
                    alignLeft: activeFormats.alignLeft,
                    alignCenter: activeFormats.alignCenter,
                    alignRight: activeFormats.alignRight,
                    alignJustify: activeFormats.alignJustify,
                  }}
                  updateActiveFormats={updateActiveFormats}
                  getButtonClass={getButtonClass}
                />
                <Divider />
              </>
            )}

            {/* List Style Group */}
            {config.showList && (
              <>
                <EditorList
                  editorRef={editorRef}
                  activeFormats={{
                    bulletList: activeFormats.bulletList,
                    numberedList: activeFormats.numberedList,
                  }}
                  updateActiveFormats={updateActiveFormats}
                  getButtonClass={getButtonClass}
                />
                <Divider />
              </>
            )}

            {/* Insert Group */}
            {config.showInsert && (
              <>
                <EditorInsert />
                <Divider />
              </>
            )}

            {/* Code View Toggle */}
            {config.showCodeView && (
              <button
                onClick={toggleCodeView}
                className={getButtonClass(isCodeView)}
                title={isCodeView ? "Switch to Visual View" : "Switch to Code View"}
              >
                <Code size={18} />
              </button>
            )}
          </div>
        </div>
      )}

      {/* Floating Toolbar (appears on selection) */}
      {!isCodeView && (
        <FloatingToolbar
          editorRef={editorRef}
          activeFormats={activeFormats}
          currentTextFormat={currentTextFormat}
          updateActiveFormats={updateActiveFormats}
          applyTextFormat={applyTextFormat}
        />
      )}

      {/* Editor Page */}
      <div
        ref={editorRef}
        contentEditable={!isCodeView}
        className={`document-page outline-none focus:ring-0 ${isCodeView
          ? "font-mono text-sm bg-gray-50 whitespace-pre-wrap !p-8"
          : "prose prose-headings:mt-4 prose-headings:mb-2"
          }`}
        style={{
          whiteSpace: isCodeView ? "pre-wrap" : "pre-wrap",
          marginTop: "2rem", // spacing from fixed header
          minHeight: "1000px" // Ensure visual resemblance to A4
        }}
        onMouseUp={!isCodeView ? updateActiveFormats : undefined}
        onKeyUp={!isCodeView ? updateActiveFormats : undefined}
        onInput={isCodeView ? handleCodeChange : handleContentChange}
        onBlur={handleBlur}
        onFocus={handleFocus}
      />
    </div>
  );
};

export default Editor;
