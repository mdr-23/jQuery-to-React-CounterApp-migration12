import { useState } from 'react';
import './App.css';

function App() {

  const [count, setCount] = useState(0)

  let num = 1

  const add = () => {
    setCount(count+num)
  }

  const subtract = () => {
    if(count>0){
      setCount(count-num)
    }else{
      setCount(0)
    }
  }

  return (
    <div className="App">
      <h1>Counter App</h1>
      <div id="counter-container">
        <button id="decrement-btn" onClick={subtract}>-</button>
        <span id="counter-value">{count}</span>
        <button id="increment-btn" onClick={add}>+</button>
      </div>
    </div>
  );
}

export default App;
