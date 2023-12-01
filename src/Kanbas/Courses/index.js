import React, { useState, useEffect } from "react";
import {
  useParams,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import JsonPre from "../../Labs/a3/JsonPre";
import db from "../Database";
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";
import * as client from "./client";
import SectionList from "./Sections/list";
import Enrollments from "./Enrollments/list";

function Courses() {
  const { courseId } = useParams();
  const { pathname } = useLocation();
  const [empty, kanbas, courses, id, screen] = pathname.split("/");
  const [course, setCourse] = useState({}); // = db.courses.find((course) => course._id === courseId);
  const fetchCourse = async () => {
    const course = await client.fetchCourse(courseId);
    setCourse(course);
  };

  useEffect(() => {
    fetchCourse();
  }, []);

  return (
    <div className="container">
      <h1>
        Courses {course.name} / {screen}
      </h1>
      <CourseNavigation />
      <div>
        <div
          className="overflow-y-scroll position-fixed bottom-0 end-0"
          style={{
            left: "320px",
            top: "50px",
          }}
        >
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route
              path="Assignments/:assignmentId"
              element={<AssignmentEditor />}
            />
            <Route path="Grades" element={<Grades />} />
            <Route path="Sections" element={<SectionList />} />
            <Route path="Sections/:sectionId" element={<Enrollments />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Courses;
