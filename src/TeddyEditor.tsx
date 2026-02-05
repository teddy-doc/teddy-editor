import Editor from "./core/editor";
import "./style.css";

function TeddyEditor() {
  return (
    <Editor
      content="<p>Initial content</p>"
      onChange={(content) => console.log("Content changed:", content)}
      onBlur={(content) => console.log("Editor lost focus", content)}
      onFocus={() => console.log("Editor gained focus")}
    />
  );
}

export default TeddyEditor;
