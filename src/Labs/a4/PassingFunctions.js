function PassingFunctions({ theFunction }) {
  return (
    <div>
      <h2>Passing Functions</h2>
      <button onClick={theFunction} className="btn btn-primary">
        Invoke the Function
      </button>
    </div>
  );
}
export default PassingFunctions;
