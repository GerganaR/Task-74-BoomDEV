import React, { useState, useRef } from "react";
import "./App.css";

function App() {
  const number = useRef();
  const [useMemo, setUseMemo] = useState(true);
  const re = new RegExp("^[0-9]");
  let result;

  const checkNumberHandler = () => {
    if ((result = re.test(number.current.value))) {
      setUseMemo(true);
    } else {
      setUseMemo(false);
    }
  };

  return (
    <div className="App">
      <div className="control has-icons-right">
        <input
          onChange={checkNumberHandler}
          className="input is-large"
          type="text"
          placeholder="Enter number..."
          ref={number}
        />
        <span className="icon is-small is-right">
          {useMemo && <i className="fas fa-check" />}
          {!useMemo && <i className="fas fa-times" />}
        </span>
      </div>
    </div>
  );
}

export default App;
