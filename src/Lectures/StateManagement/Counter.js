import React, { useState } from "react";
function Counter() {
  const [count, setCount] = useState(0);
  //   let count = 0;
  const decrement = () => {
    // count--;
    setCount(count - 1);
    console.log(count);
  };
  const increment = () => {
    // count++;
    setCount(count + 1);
    console.log(count);
  };
  return (
    <div>
      <h2
        onClick={() => {
          alert("click");
        }}
      >
        Counter: {count}
      </h2>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </div>
  );
}

export default Counter;
