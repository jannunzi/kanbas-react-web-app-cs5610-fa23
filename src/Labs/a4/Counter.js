import React, { useState } from "react";
function Counter() {
  let [count, setCount] = useState(7);
  console.log(count);
  return (
    <div>
      <h2>Counter: {count}</h2>
      <button
        onClick={() => {
          //   count++;
          setCount(count + 1);
          console.log(count);
        }}
      >
        Up {count}
      </button>
      <button
        onClick={() => {
          //   count--;
          setCount(count - 1);
          console.log(count);
        }}
      >
        Down {count}
      </button>
      <button onClick={() => setCount(0)}>Reset</button>
      <h3>Counter: {count}</h3>
    </div>
  );
}
export default Counter;
