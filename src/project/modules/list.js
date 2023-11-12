import * as client from "./client";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import { AiOutlineArrowRight } from "react-icons/ai";

function ModulesForCourse() {
  const [modules, setModules] = useState([]);
  const { cid } = useParams();
  const fetchModules = async () => {
    const modules = await client.findModulesForCourse(cid);
    setModules(modules);
  };

  useEffect(() => {
    fetchModules();
  }, []);
  return (
    <div className="">
      <h2>Modules</h2>
      <div className="list-group">
        {modules.map((module) => (
          <Link
            to={`/project/courses/${cid}/modules/${module._id}`}
            key={module._id}
            className="list-group-item"
          >
            <AiOutlineArrowRight className="float-end fs-4 text" />
            {module.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ModulesForCourse;
