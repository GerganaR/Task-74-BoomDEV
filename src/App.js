import { useMemo, useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [valid, setValid] = useState(false);

  useMemo(() => {
    isTextNumber(text);
  }, [text]);

  return (
    <div className="App">
      <div className="control has-icons-right">
        <input
          className="input is-large"
          type="text"
          placeholder="Enter number..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <span className="icon is-small is-right">
          <i className={valid ? "fas fa-check" : "fas fa-times"} />
        </span>
      </div>
    </div>
  );

  function isTextNumber(text) {
    const reg = new RegExp("^\\d+$");
    setValid(reg.test(text));
  }
}

export default App;
