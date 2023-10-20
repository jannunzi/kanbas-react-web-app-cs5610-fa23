import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { increment1, decrement1 } from "./counter1Reducer";

function Counter1() {
  const { count1 } = useSelector((state) => state.counter1Reducer);
  const { count2 } = useSelector((state) => state.counter2Reducer);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Counter 1</h2>
      <button onClick={() => dispatch(increment1())}>increment1</button>
      <button onClick={() => dispatch(decrement1())}>Decrement1</button>
      <h3>{count1}</h3>
      <h3>{count2}</h3>
    </div>
  );
}

export default Counter1;
