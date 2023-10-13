import React, { useState } from "react";
function ArrayState() {
  const [modules, setModules] = useState(["Module 1", "Module 2"]);
  const [newModule, setNewModule] = useState("");
  const [editModuleIndex, setEditModuleIndex] = useState(-1);

  const addModule = () => {
    const newModules = [...modules, newModule];
    setModules(newModules);
  };

  const deleteModule = (index) => {
    const newModules = modules.filter((module, i) => i !== index);
    setModules(newModules);
  };

  const updateModule = () => {
    const newModules = modules.map((module, index) => {
      if (index === editModuleIndex) {
        return newModule;
      } else {
        return module;
      }
    });
    setModules(newModules);
  };

  return (
    <div>
      <h2>Array State</h2>
      <button className="btn btn-primary float-end" onClick={updateModule}>
        Update
      </button>
      <button className="btn btn-success float-end" onClick={addModule}>
        Add
      </button>
      <input
        className="form-control w-50"
        value={newModule}
        onChange={(e) => setNewModule(e.target.value)}
      />
      <ul className="list-group">
        {modules.map((module, index) => (
          <li key={index} className="list-group-item">
            <button
              onClick={() => {
                setNewModule(module);
                setEditModuleIndex(index);
              }}
              className="btn btn-warning float-end"
            >
              Edit
            </button>
            <button
              onClick={() => deleteModule(index)}
              className="btn btn-danger float-end"
            >
              Delete
            </button>
            {index} {module}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ArrayState;
