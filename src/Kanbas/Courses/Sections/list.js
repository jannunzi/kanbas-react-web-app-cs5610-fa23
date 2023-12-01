import { useParams } from "react-router";
import { useState, useEffect } from "react";
import * as client from "./client";
import { Link } from "react-router-dom";
function SectionList() {
  const [section, setSection] = useState({
    name: "",
  }); // = db.sections.find((section) => section._id === sectionId);
  const [sections, setSections] = useState([]); // = db.sections.find((section) => section._id === sectionId);
  const { courseId } = useParams();
  const addSection = async () => {
    const newSection = await client.createSectionForCourse(courseId, section);
    setSections([newSection, ...sections]);
  };
  const fetchSections = async () => {
    const sections = await client.findSectionsForCourse(courseId);
    setSections(sections);
  };
  useEffect(() => {
    fetchSections();
  }, []);
  return (
    <div>
      <h1>Section List</h1>
      <input
        type="text"
        placeholder="Section Name"
        value={section.name}
        onChange={(e) => setSection({ ...section, name: e.target.value })}
        className="form-control"
      />
      <button onClick={addSection} className="btn btn-success">
        Add
      </button>
      <div className="list-group">
        {sections.map((section) => (
          <Link
            to={`/Kanbas/Courses/${courseId}/Sections/${section._id}`}
            className="list-group-item"
          >
            {section.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default SectionList;
