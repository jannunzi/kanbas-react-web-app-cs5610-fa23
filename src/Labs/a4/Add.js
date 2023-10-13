function Add({ a, b, add2 }) {
  const add = (a, b) => {
    return parseInt(a) + parseInt(b);
  };
  return (
    <div>
      <h3>
        Add({a}, {b}) = {add2(a, b)}
      </h3>
    </div>
  );
}

export default Add;
