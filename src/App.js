import React, { useState, useMemo } from "react";
import "./App.css";

function App() {
  const [number, setNumber] = useState("");
  const [isRendered, setIsRendered] = useState(true);
  const re = new RegExp("^[0-9]");

  const checkNumberHandler = () => {
    if (re.test(number)) {
      setIsRendered(true);
    } else {
      setIsRendered(false);
    }
    return isRendered;
  };

  const showIcon = useMemo(() => checkNumberHandler(), [number]);

  return (
    <div className="App">
      <div className="control has-icons-right">
        <input
          onChange={(e) => {
            setNumber(e.target.value);
          }}
          className="input is-large"
          type="text"
          placeholder="Enter number..."
          value={number}
        />
        <span className="icon is-small is-right">
          {isRendered && <i className="fas fa-check" />}
          {!isRendered && <i className="fas fa-times" />}
        </span>
      </div>
    </div>
  );
}

export default App;
