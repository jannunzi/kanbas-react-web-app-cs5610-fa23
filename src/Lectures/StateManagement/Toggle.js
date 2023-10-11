import { useState } from "react";

function Toggle() {
  const [isOn, setIsOn] = useState(false);
  const toggle = () => {
    setIsOn(!isOn);
  };
  return (
    <div>
      <h2>Toggle</h2>
      <button onClick={toggle}>{isOn ? "ON" : "OFF"}</button>
      <br />
      <input type="checkbox" checked={isOn} onChange={toggle} />
      {isOn && (
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        </p>
      )}
    </div>
  );
}

export default Toggle;
