import db from "../Database";
import { Link } from "react-router-dom";
function Dashboard() {
  const courses = db.courses;
  return (
    <div>
      <h1>Dashboard</h1>
      <hr />
      <h2>Published Courses ({courses.length})</h2>
      <div className="list-group">
        {courses.map((course, index) => (
          <Link
            key={course._id}
            to={`/Kanbas/Courses/${course._id}`}
            className="list-group-item"
          >
            {course.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
