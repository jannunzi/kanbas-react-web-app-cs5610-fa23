function IfElse() {
  let true1 = true;
  let false1 = false;

  console.log("If else");
  if (true1) {
    console.log("true1");
  }

  if (!false1) {
    console.log("!false1");
  } else {
    console.log("false1");
  }
  return (
    <div>
      <h2>If Else</h2>
      {true1 && <p>true1</p>}
      {!false1 ? <p>!false1</p> : <p>false1</p>}
      {true1 && (
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

export default IfElse;
