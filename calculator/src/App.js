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
    if (!expressions.includes(expression.at(-1))){
      // only support equals eval type for now
      if (evaluationType === "="){
        setOutput(eval(expression.join('')));
        setExpression([]);
      }
    }
  }

  return (
    <>
      <h1>{expression}</h1>
      <h1>{output}</h1>
      <div class="grid-container">
        <button class="grid-item button" onClick={() => handleOperationUpdate("+")}>+</button>
        <button class="grid-item button" onClick={() => handleOperationUpdate("-")}>-</button>
        <button class="grid-item button" onClick={() => handleOperationUpdate("*")}>*</button>
        <button class="grid-item button" onClick={() => handleOperationUpdate("/")}>/</button>
      </div>
      <div class="grid-container">
        <button class="grid-item button" onClick={() => handleNumberUpdate("1")}>1</button>
        <button class="grid-item button" onClick={() => handleNumberUpdate("2")}>2</button>
        <button class="grid-item button" onClick={() => handleNumberUpdate("3")}>3</button>
        <button class="grid-item button" onClick={() => handleNumberUpdate("4")}>4</button>
        <button class="grid-item button" onClick={() => handleNumberUpdate("5")}>5</button>
        <button class="grid-item button" onClick={() => handleNumberUpdate("6")}>6</button>
        <button class="grid-item button" onClick={() => handleNumberUpdate("7")}>7</button>
        <button class="grid-item button" onClick={() => handleNumberUpdate("8")}>8</button>
        <button class="grid-item button" onClick={() => handleNumberUpdate("9")}>9</button>
      </div>
      <div class="grid-container">
      <button class="grid-item button" onClick={() => handleEvaluateUpdate("=")}>=</button>
      </div>
    </>
  );
}

export default App;
