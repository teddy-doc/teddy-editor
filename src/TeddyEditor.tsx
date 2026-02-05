import Editor from "./core/editor";
import "./style.css";

function TeddyEditor() {
  return (
    <div>
      <Editor
        content="<p>Initial content</p>"
        onChange={(content) => console.log("Content changed:", content)}
        onBlur={(editor) => console.log("Editor lost focus. Content:", editor.getContent())}
        onFocus={(editor) => {
          console.log("Editor gained focus");
          console.log("Current content:", editor.getContent());
        }}
        onReady={(editor) => {
          console.log("Editor is ready!");
          // Example: Set default content if empty
          if (!editor.getContent()) {
            editor.setContent("<p>Start typing...</p>");
          }
        }}
      />
    </div>
  );
}

export default TeddyEditor;
