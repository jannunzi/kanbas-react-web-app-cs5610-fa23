import React, { useState } from "react";
function BooleanStateVariables() {
  const [done, setDone] = useState(true);
  return (
    <div>
      <h2>Boolean State Variables</h2>
      <h4>{done ? "Done" : "Not done"}</h4>
      <label className="form-control">
        <input checked={done} onChange={() => setDone(!done)} type="checkbox" />
        Done
      </label>

      <input
        checked={done}
        onChange={(e) => setDone(e.target.checked)}
        type="checkbox"
      />

      {done && <div className="alert alert-success">Yay! you are done</div>}
    </div>
  );
}
export default BooleanStateVariables;
