import { useState, useCallback } from "react";
import "./App.css";
import Editor from "./components/Editor";

function App() {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");

  const handleHtmlChange = useCallback((newHtml) => setHtml(newHtml), []);
  const handleCssChange = useCallback((newCss) => setCss(newCss), []);
  const handleJsChange = useCallback((newJs) => setJs(newJs), []);

  console.log('App component rendering');

  return (
    <>
      <div className="pane top-pane">
        <Editor
          language="xml"
          displayName="HTML"
          value={html}
          onChange={handleHtmlChange}
        />
        <Editor
          language="css"
          displayName="CSS"
          value={css}
          onChange={handleCssChange}
        />
        <Editor
          language="javascript"
          displayName="JAVA SCRIPT"
          value={js}
          onChange={handleJsChange}
        />
      </div>
      <div className="pane">
        <iframe
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
        />
      </div>
    </>
  );
}

export default App;
