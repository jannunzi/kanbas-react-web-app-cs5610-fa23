import * as client from "./client";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";
function CourseList() {
  const [courses, setCourses] = useState([]);
  const fetchCourses = async () => {
    const courses = await client.findAllCourses();
    setCourses(courses);
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <div className="w-50">
      <h1>Courses</h1>
      <div className="list-group">
        {courses.map((course) => (
          <Link
            to={`/project/courses/${course._id}`}
            key={course._id}
            className="list-group-item"
          >
            <AiOutlineArrowRight className="float-end fs-4 text" />
            {course.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CourseList;
