import Counter from "./Counter";
import Login from "./Login";
import Toggle from "./Toggle";
import User from "./User";

function StateManagement() {
  return (
    <div className="container">
      <h1>State Management</h1>
      <User />
      <Login />
      <Toggle />
      <Counter />
    </div>
  );
}

export default StateManagement;
