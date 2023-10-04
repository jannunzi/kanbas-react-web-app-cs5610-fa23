function FindFunction() {
  let numberArray1 = [1, 2, 3, 4, 5];
  let stringArray1 = ["string1", "string2", "string3"];

  const four = numberArray1.find((a) => a === 4);
  const string3 = stringArray1.find((a) => a === "string3");

  const fourIndex = numberArray1.findIndex((a) => a === 4);
  const string3Index = stringArray1.findIndex((a) => a === "string3");

  const numbersGreaterThan2 = numberArray1.filter((a) => a > 2);
  const evenNumbers = numberArray1.filter((a) => a % 2 === 0);
  const oddNumbers = numberArray1.filter((a) => a % 2 !== 0);

  return (
    <div>
      <h4>FindFunction</h4>
      <p>numberArray1 = {JSON.stringify(numberArray1)}</p>
      <p>stringArray1 = {JSON.stringify(stringArray1)}</p>
      <p>numberArray1.find((a) => a === 4) = {four}</p>
      <p>stringArray1.find((a) => a === "string3") = {string3}</p>

      <p>numberArray1.findIndex((a) => a === 4) = {fourIndex}</p>
      <p>stringArray1.findIndex((a) => a === "string3") = {string3Index}</p>

      <p>
        numberArray1.filter((a) => a > 2) ={" "}
        {JSON.stringify(numbersGreaterThan2)}
      </p>
      <p>Even Numbers = {JSON.stringify(evenNumbers)}</p>
      <p>Odd Numbers = {JSON.stringify(oddNumbers)}</p>
    </div>
  );
}

export default FindFunction;
