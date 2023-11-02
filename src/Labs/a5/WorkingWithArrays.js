import React, { useState } from "react";
function WorkingWithArrays() {
  const [id, setId] = useState(1);
  const [title, setTitle] = useState("Go to work");
  return (
    <div>
      <h1>Working with Arrays</h1>
      <h2>Update item title</h2>
      <input
        className="form-control"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <a
        href={`http://localhost:4000/a5/todos/${id}/title/${title}`}
        className="btn btn-primary"
      >
        Update Todo Title
      </a>
      <h2>Fetch item by id</h2>
      <input
        className="form-control"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <a
        href={`http://localhost:4000/a5/todos/${id}`}
        className="btn btn-primary"
      >
        Fetch Todo {id}
      </a>
      <h2>Fetch Array</h2>
      <a href="http://localhost:4000/a5/todos" className="btn btn-primary">
        Fetch Todos
      </a>
    </div>
  );
}

export default WorkingWithArrays;
