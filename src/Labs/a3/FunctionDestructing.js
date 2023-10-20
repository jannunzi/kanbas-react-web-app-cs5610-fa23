import React from "react";
import { useSelector } from "react-redux";
function FunctionDestructing() {
  const { message } = useSelector((state) => state.helloReducer);
  const { todos } = useSelector((state) => state.todosReducer);
  const add = (a, b) => a + b;
  const sum = add(1, 2);
  const subtract = ({ b, a }) => a - b;
  const difference = subtract({ a: 4, b: 2 });
  return (
    <div>
      <h2>Function Destructing {message}</h2>
      <pre>
        <code>{JSON.stringify(todos, null, 2)}</code>
      </pre>
      const add = (a, b) =&gt; a + b;
      <br />
      const sum = add(1, 2);
      <br />
      const subtract = (&#123; a, b &#125;) =&gt; a - b;
      <br />
      const difference = subtract(&#123; a: 4, b: 2 &#125;);
      <br />
      sum = {sum}
      <br />
      difference = {difference}
    </div>
  );
}
export default FunctionDestructing;
