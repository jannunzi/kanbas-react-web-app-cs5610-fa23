import React, { useState } from "react";
function Counter() {
  let [count, setCount] = useState(10);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <h3>{count}</h3>
    </div>
  );
}

export default Counter;
