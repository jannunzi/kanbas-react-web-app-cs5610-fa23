import React, { useState } from "react";
function BooleanState() {
  const [done, setDone] = useState(false);
  const handleClick = () => {
    setDone(!done);
  };
  return (
    <div>
      <h2>Boolean State</h2>
      <button onClick={handleClick}>Click Me</button>
      {done ? (
        <div>
          <h3>Done</h3>
        </div>
      ) : (
        "Not Done"
      )}
      <input type="checkbox" checked={done} onChange={handleClick} />
      {done && <div className="alert alert-success">Yay!!! you are done</div>}
    </div>
  );
}

export default BooleanState;
