import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import * as client from "./client";
function Enrollments() {
  const [enrollments, setEnrollments] = useState([]); // = db.courses.find((course) => course._id === courseId);
  const { sectionId } = useParams();
  const enroll = async () => {
    const enrollment = await client.enrollStudentInSection(sectionId);
    setEnrollments([...enrollments, enrollment]);
  };
  const fetchEnrollments = async () => {
    const enrollments = await client.findStudentsForSection(sectionId);
    setEnrollments(enrollments);
  };

  useEffect(() => {
    fetchEnrollments();
  }, []);

  return (
    <div>
      <h1>Enrollments</h1>
      <button onClick={enroll} className="btn btn-success">
        Enroll
      </button>
      <div className="list-group">
        {enrollments.map((enrollment) => (
          <div className="list-group-item">{enrollment.student.username}</div>
        ))}
      </div>
    </div>
  );
}

export default Enrollments;
