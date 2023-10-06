import Add from "./Add";
import JavaScript from "./JavaScript";
import PathParameters from "./PathParameters";
import TodoItem from "./todo/TodoItem";
import TodoList from "./todo/TodoList";

function Assignment3() {
  return (
    <div>
      <h2>Assignment 3</h2>
      <TodoList />
      <hr />
      <ul className="list-group">
        <TodoItem
          todo={{
            title: "Buy milk",
            done: true,
            status: "COMPLETE",
          }}
        />
        <TodoItem
          todo={{
            title: "Pick up kids",
            done: false,
            status: "IN_PROGRESS",
          }}
        />
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </ul>
      <TodoItem />
      <PathParameters />
      <JavaScript />
    </div>
  );
}

export default Assignment3;
