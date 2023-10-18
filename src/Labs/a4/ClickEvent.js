function ClickEvent() {
  const hello = (message) => {
    alert(`Message: ${message}`);
  };
  const good = () => {
    alert("Life is Good!");
  };
  return (
    <div>
      <h2>Click Event</h2>
      <button onClick={hello}>Click Hello 1 </button>
      <button onClick={() => hello("Hello World")}>Click Hello 2 </button>
      <button
        onClick={() => {
          hello();
          console.log("Hello World!");
          good();
        }}
      >
        Click Hello 3
      </button>
    </div>
  );
}
export default ClickEvent;
