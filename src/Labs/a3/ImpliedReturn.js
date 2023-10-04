function ImpliedReturn() {
  function divide(a, b) {
    return a / b;
  }
  const multiply = (a, b) => a * b;
  const fourTimesFive = multiply(4, 5);
  console.log(fourTimesFive);
  return (
    <>
      <h3>Implied Return</h3>
      fourTimesFive = {fourTimesFive}
      <br />
      multiply(4, 5) = {multiply(4, 5)}
      <br />
      divide(4, 5) = {divide(4, 5)}
      <br />
    </>
  );
}

export default ImpliedReturn;
