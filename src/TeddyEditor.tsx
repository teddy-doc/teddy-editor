import Editor from "./core/editor";
import "./style.css";

function TeddyEditor() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <Editor
        content="<p>Initial content</p>"
        onChange={(content) => console.log("Content changed:", content)}
        onBlur={(content) => console.log("Editor lost focus", content)}
        onFocus={() => console.log("Editor gained focus")}
      />
    </div>
  );
}

export default TeddyEditor;
