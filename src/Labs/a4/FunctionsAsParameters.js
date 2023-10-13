import Add from "./Add";

function FunctionsAsParameters() {
  const add2 = (a, b) => {
    return parseInt(a) + parseInt(b);
  };
  return (
    <div>
      <h1>Functions As Parameters</h1>
      <Add a={3} b={4} add2={add2} />
    </div>
  );
}

export default FunctionsAsParameters;
