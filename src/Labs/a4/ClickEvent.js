function ClickEvent() {
  const handleClickNoArguments = () => {
    alert("You clicked the button!");
  };
  const alertAdd = (a, b) => {
    alert(a + b);
  };
  return (
    <div>
      <h2>Click Event</h2>
      <button onClick={handleClickNoArguments}>Click No Arguments</button>
      <br />
      <button onClick={() => handleClickNoArguments()}>
        Click No Arguments, embedded and parentheses
      </button>
      <br />
      <button onClick={() => alertAdd(1, 2)}>
        Click Add, embedded and parentheses
      </button>
      <br />

      <button
        onClick={function () {
          alertAdd(1, 2);
        }}
      >
        Click Add, function
      </button>
    </div>
  );
}

export default ClickEvent;
