import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const handler = (e) => {
    setInput(e.target.value);
  };
  const resetHandler = () => {
    setInput("");
    setResult("");
  };
  return (
    <div>
      <center>
        <h2>Calculator APP</h2>
      </center>
      <div className="App">
        <div className="calc-wrapper">
          <div className="input-wrapper">
            <h4 className="result">{result}</h4>
            <input
              className="text"
              type="text"
              value={input}
              name="input"
              onChange={handler}
            />
          </div>
          <div className="row">
            <button onClick={() => setInput(input + "7")}>7</button>
            <button onClick={() => setInput(input + "8")}>8</button>
            <button onClick={() => setInput(input + "9")}>9</button>
            <button
              onClick={() => setInput(input + "/")}
              style={{ backgroundColor: "#f2a33c" }}
            >
              /
            </button>
          </div>
          <div className="row">
            <button onClick={() => setInput(input + "4")}>4</button>
            <button onClick={() => setInput(input + "5")}>5</button>
            <button onClick={() => setInput(input + "6")}>6</button>
            <button
              onClick={() => setInput(input + "*")}
              style={{ backgroundColor: "#f2a33c" }}
            >
              *
            </button>
          </div>
          <div className="row">
            <button onClick={() => setInput(input + "1")}>1</button>
            <button onClick={() => setInput(input + "2")}>2</button>
            <button onClick={() => setInput(input + "3")}>3</button>
            <button
              onClick={() => setInput(input + "+")}
              style={{ backgroundColor: "#f2a33c" }}
            >
              +
            </button>
          </div>
          <div className="row">
            <button onClick={() => setInput(input + "0")}>0</button>
            <button onClick={() => setInput(input + ".")}>.</button>
            <button onClick={() => setInput(input + "-")}>-</button>
            <button
              onClick={() => setResult(eval(input))}
              style={{ backgroundColor: "#f2a33c" }}
            >
              =
            </button>
          </div>
          <div className="row">
            <button
              onClick={resetHandler}
              style={{ backgroundColor: "#f2a33c" }}
            >
              Clear
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default App;
