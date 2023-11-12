import * as client from "./client";
import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";
import ModulesForCourse from "../modules/list";
function CourseDetails() {
  const { cid } = useParams();
  const [course, setCourse] = useState(null);
  const fetchCourse = async (id) => {
    const course = await client.findCourseById(id);
    setCourse(course);
  };
  useEffect(() => {
    fetchCourse(cid);
  }, []);

  return (
    <div className="w-50">
      <h1>Course Details</h1>
      {course && (
        <div>
          <h2>{course.name}</h2>
          <p>{course.description}</p>
          <ModulesForCourse />
        </div>
      )}
    </div>
  );
}

export default CourseDetails;
