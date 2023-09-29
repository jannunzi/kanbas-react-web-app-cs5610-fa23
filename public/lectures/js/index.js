import { add, subtract } from "./math.js";

console.log(add(2, 3));
document.getElementById("hello").innerHTML = subtract(5, 2);

function renderTodos(todos) {
  document.write("<ul>");
  todos.forEach((todo) => {
    document.write(`<li>${todo.text}</li>`);
  });
  document.write("</ul>");
}

const todos = [
  { id: 1, text: "Learn JavaScript", isCompleted: false },
  { id: 2, text: "Learn React", isCompleted: false },
  { id: 3, text: "Learn Node", isCompleted: false },
];

renderTodos(todos);

const todos2 = [
  { id: 1, text: "Pick up kids", isCompleted: false },
  { id: 2, text: "Grocery shopping", isCompleted: false },
  { id: 3, text: "Do laundry", isCompleted: false },
];

renderTodos(todos2);
