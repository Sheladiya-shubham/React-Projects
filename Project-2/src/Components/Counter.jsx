import { useState } from "react";
import "./Counter.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);

  const decrement = () => {
    if (count <= 0) {
      alert("Counter can't be Negative");
      setCount(0);
    } else {
      setCount(count - 1);
    }
  };

  const reset = () => setCount(0);

  return (
    <div className="counter-wrapper">
      <div className="counter-glass">
        <h1 className="counter-title">Neo Counter</h1>
        <div className="count-display">{count}</div>
        <div className="button-group">
          <button className="btn btn-inc" onClick={increment}>+</button>
          <button className="btn btn-reset" onClick={reset}>Reset</button>
          <button className="btn btn-dec" onClick={decrement}>-</button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
