import "./App.css";
import React, {useState, useMemo} from "react";

function App() {
  const [text, setText] = useState('');
  const checkIfValid = (string) => {
    const numbers = /^\d+$/;
    return numbers.test(string);
  };

  const validator = useMemo(() => checkIfValid(text));


  return (
    <div className="App">
     <div className="control has-icons-right">
        <input
          className="input is-large"
          type="text"
          placeholder="Enter number..."
          value={text}
          onChange={(e)=> {
            setText(e.target.value);
          }}

        />
        <span className="icon is-small is-right">
          <i className={ validator? "fa-check" : "fas fa-times"} />
        </span> 
      </div>
    </div>
  );
}

export default App;
