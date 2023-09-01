import "./App.css";
import { useState } from "react";
import { evaluate } from "mathjs";

import logo from "./assets/react.svg";
import Button from "./components/Button";
import Display from "./components/Display";
import Clear from "./components/Clear";

function App() {
  let [number, setNumber] = useState("");

  const addNumber = (val) => {
    setNumber(number + val);
  };

  const clearDisplay = () => {
    setNumber("");
  };

  const calcular = () => {
    if (number) {
      setNumber(evaluate(number));
    } else {
      alert("Ingrese valores a operar")
    }
  };

  return (
    <>
      <div className="app">
        <div className="container-logo">
          <img className="logo" src={logo} alt="logo" />
        </div>
        <div className="principal">
          <Display input={number} />
          <div className="fila">
            <Button handleClick={addNumber}>1</Button>
            <Button handleClick={addNumber}>2</Button>
            <Button handleClick={addNumber}>3</Button>
            <Button handleClick={addNumber}>+</Button>
          </div>
          <div className="fila">
            <Button handleClick={addNumber}>4</Button>
            <Button handleClick={addNumber}>5</Button>
            <Button handleClick={addNumber}>6</Button>
            <Button handleClick={addNumber}>-</Button>
          </div>
          <div className="fila">
            <Button handleClick={addNumber}>7</Button>
            <Button handleClick={addNumber}>8</Button>
            <Button handleClick={addNumber}>9</Button>
            <Button handleClick={addNumber}>*</Button>
          </div>
          <div className="fila">
            <Button handleClick={calcular}>=</Button>
            <Button handleClick={addNumber}>0</Button>
            <Button handleClick={addNumber}>.</Button>
            <Button handleClick={addNumber}>/</Button>
          </div>
          <div className="fila">
            <Clear handleClick={() => clearDisplay("")}>Limpiar</Clear>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
