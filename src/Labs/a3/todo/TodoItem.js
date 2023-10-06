const TodoItem = ({
  title = "Unnamed to do",
  done = true,
  todo = {
    title: "Unnamed to do",
    done: false,
    status: "INCOMPLETE",
  },
}) => {
  return (
    <>
      {todo && (
        <li className="list-group-item">
          <input type="checkbox" defaultChecked={todo.done} />
          {todo.title}
        </li>
      )}
    </>
  );
};
export default TodoItem;
