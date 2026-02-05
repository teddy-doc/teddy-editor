import React, { useRef, useState, useEffect } from "react";
import FloatingToolbar from "./floating-toolbar";
import FixedToolbar from "./fixed-toolbar";
import DOMPurify from "dompurify";
import { useHistory } from "../hooks/use-history";
import RulerTop from "./ruler-top";
import RulerLeft from "./ruler-left";

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

  // Custom History Hook
  const { pushState, undo, redo, canUndo, canRedo } = useHistory(content);

  const performUndo = () => {
    const previousHtml = undo();
    if (previousHtml !== null && editorRef.current) {
      editorRef.current.innerHTML = previousHtml;
      if (onChange) onChange(previousHtml);
      updateActiveFormats();
    }
  };

  const performRedo = () => {
    const nextHtml = redo();
    if (nextHtml !== null && editorRef.current) {
      editorRef.current.innerHTML = nextHtml;
      if (onChange) onChange(nextHtml);
      updateActiveFormats();
    }
  };

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

    // Capture history immediately for format changes
    if (editorRef.current) {
      pushState(editorRef.current.innerHTML, true);
    }

    // Update active formats after a short delay
    setTimeout(() => updateActiveFormats(), 10);
  };

  const handleContentChange = () => {
    if (editorRef.current && onChange) {
      const currentContent = editorRef.current.innerHTML;
      onChange(currentContent);
      pushState(currentContent);
    }
  };

  const handleBlur = () => {
    if (onBlur) {
      if (editorRef.current) {
        const newContent = editorRef.current.innerHTML;
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
      // Sanitize initial content
      const cleanContent = DOMPurify.sanitize(content);
      // Only update if content is different to avoid cursor jumping/loops
      // but for initial load or external update we might need it
      if (editorRef.current.innerHTML !== cleanContent) {
        editorRef.current.innerHTML = cleanContent;
      }
      // setHtmlContent(cleanContent);
    }
  }, [content]);

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

  return (
    <div className="teddy-editor w-full h-screen bg-gray-100 flex flex-col overflow-hidden">
      {/* Fixed Top Toolbar */}
      <FixedToolbar
        config={config}
        activeFormats={activeFormats}
        currentTextFormat={currentTextFormat}
        updateActiveFormats={updateActiveFormats}
        applyTextFormat={applyTextFormat}
        editorRef={editorRef}
        undo={performUndo}
        redo={performRedo}
        canUndo={canUndo}
        canRedo={canRedo}
      />

      {/* Main Content Area with Rulers */}
      <div className="flex-1 overflow-auto flex justify-center p-4 relative">
        <div className="flex flex-col gap-1 w-full max-w-4xl">
          {/* Top Ruler */}
          <div className="pl-6 select-none bg-gray-100 sticky top-0 z-10 pt-2">
            <RulerTop />
          </div>

          <div className="flex">
            {/* Left Ruler */}
            <div className="pr-1 select-none pt-8 hidden sm:block h-full">
              <RulerLeft />
            </div>

            {/* Editor Page */}
            <div
              ref={editorRef}
              contentEditable
              className="document-page outline-none focus:ring-0 prose prose-headings:mt-4 prose-headings:mb-2 w-full bg-white shadow-sm p-8 min-h-[1000px]"
              style={{
                whiteSpace: "pre-wrap",
              }}
              onMouseUp={updateActiveFormats}
              onKeyUp={updateActiveFormats}
              onInput={handleContentChange}
              onBlur={handleBlur}
              onFocus={handleFocus}
            />
          </div>
        </div>
      </div>

      {/* Floating Toolbar (appears on selection) */}
      <FloatingToolbar
        editorRef={editorRef}
        activeFormats={activeFormats}
        currentTextFormat={currentTextFormat}
        updateActiveFormats={updateActiveFormats}
        applyTextFormat={applyTextFormat}
      />
    </div>
  );
};

export default Editor;
