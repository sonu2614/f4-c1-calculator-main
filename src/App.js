import "./style.css";
import { useState } from "react";

function App() {
  let [num1, setNum1] = useState("");
  let [num2, setNum2] = useState("");
  let [message, setMsg] = useState("");
  let [resultMessage, setResultMessage] = useState("");

  function validate() {
    if (num1 === "" || num2 === "") {
      setMsg("Error!");
      if (num1 === "" && num2 === "") {
        setResultMessage("Inputs cannot be empty");
      } 
      else if (num1 === "") setResultMessage("Num1 cannot be empty");
      else if (num2 === "") setResultMessage("Num2 cannot be empty");
      return false;
    }
    setMsg("Success!");
    return true;
  }

  function cacl(operator) {
    if (validate()) {
      const n1 = parseFloat(num1);
      const n2 = parseFloat(num2);

      let calculation;
      if (operator === "+") {
        calculation = n1 + n2;
      } else if (operator === "-") {
        calculation = n1 - n2;
      } else if (operator === "*") {
        calculation = n1 * n2;
      } else if (operator === "/") {
        calculation = n1 / n2;
      }
      setResultMessage(`Result : ${calculation}`);
    }
  }

  return (
    <div className="container">
      <main>
        <section>
          <h1>React Calculator</h1>
          <div className="input-section">
            <input
              placeholder="Num 1"
              value={num1}
              onChange={(e) => {
                setNum1(e.target.value);
              }}
            />
            <input
              placeholder="Num 2"
              value={num2}
              onChange={(e) => {
                setNum2(e.target.value);
              }}
            />
          </div>
          <div className="button-section">
            <button symbol="+" onClick={() => cacl("+")}>
              +
            </button>
            <button symbol="+" onClick={() => cacl("-")}>
              -
            </button>
            <button symbol="+" onClick={() => cacl("*")}>
              *
            </button>
            <button symbol="+" onClick={() => cacl("/")}>
              /
            </button>
          </div>
          <span
            className={`message ${message === "Error!" ? "error" : "success"}`}
          >
            {message}
          </span>
          <p className="result">{resultMessage}</p>
        </section>
      </main>
    </div>
  );
}
export default App;