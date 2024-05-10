import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [expression, setExpression] = useState([]);
  const [output, setOutput] = useState();
  const expressions = ["+", "-", "*", "/"];

  function handleOperationUpdate(operation){
    if (!(expressions.includes(expression.at(-1)) | expression.length == 0)){
      setExpression([...expression, operation]);
    }
    console.log(expression);
  }

  function handleNumberUpdate(number){
    if (expressions.includes(expression.at(-1)) | expression.length == 0){
      setExpression([...expression, number]);
    } else { 
      var lastNumber = expression.pop();
      setExpression([...expression, lastNumber + number]);
    }
    console.log(expression);
  }

  function handleEvaluateUpdate(evaluationType){
    // only support equals eval type for now
    if (evaluationType === "="){
      setOutput(eval(expression.join('')));
      setExpression([]);
    }
  }

  return (
    <>
      <h1>{expression}</h1>
      <h1>{output}</h1>
      <button onClick={() => handleOperationUpdate("+")}>+</button>
      <button onClick={() => handleOperationUpdate("-")}>-</button>
      <button onClick={() => handleOperationUpdate("*")}>*</button>
      <button onClick={() => handleOperationUpdate("/")}>/</button>

      <button onClick={() => handleNumberUpdate("1")}>1</button>
      <button onClick={() => handleNumberUpdate("2")}>2</button>
      <button onClick={() => handleNumberUpdate("3")}>3</button>
      <button onClick={() => handleNumberUpdate("4")}>4</button>
      <button onClick={() => handleNumberUpdate("5")}>5</button>
      <button onClick={() => handleNumberUpdate("6")}>6</button>
      <button onClick={() => handleNumberUpdate("7")}>7</button>
      <button onClick={() => handleNumberUpdate("8")}>8</button>
      <button onClick={() => handleNumberUpdate("9")}>9</button>

      <button onClick={() => handleEvaluateUpdate("=")}>=</button>
    </>
  );
}

export default App;