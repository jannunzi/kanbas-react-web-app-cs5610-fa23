import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import * as client from "../Courses/client";

function Dashboard() {
  const { currentUser } = useSelector((state) => state.userReducer);
  const [courses, setCourses] = useState([]);
  const [course, setCourse] = useState({});
  const [allCourses, setAllCourses] = useState([]);

  const fetchMyCourses = async () => {
    const courses = await client.fetchMyCourses();
    setCourses(courses);
  };

  const fetchAllCourses = async () => {
    const courses = await client.fetchAllCourses();
    setAllCourses(courses);
  };

  const deleteCourse = async (id) => {
    try {
      await client.deleteCourse(id);
      setCourses(courses.filter((course) => course._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const updateCourse = async () => {
    try {
      await client.updateCourse(course);
      setCourses(courses.map((c) => (c._id === course._id ? course : c)));
    } catch (error) {
      console.log(error);
    }
  };

  const addCourse = async () => {
    const newCourse = await client.addCourse(course);
    setCourses([newCourse, ...courses]);
  };

  useEffect(() => {
    fetchMyCourses();
    fetchAllCourses();
  }, []);
  return (
    <div className="container">
      <h1>Dashboard</h1>
      {currentUser && <h2>Welcome {currentUser.username}</h2>}
      <hr />
      <h2>My Courses ({courses.length})</h2>
      <input
        type="text"
        placeholder="Course Name"
        value={course.name}
        onChange={(e) => setCourse({ ...course, name: e.target.value })}
      />
      <button onClick={updateCourse} className="btn btn-success">
        Update
      </button>
      <button onClick={addCourse} className="btn btn-success">
        Add
      </button>
      <div class="row">
        <div class="row row-cols-1 row-cols-md-5 g-4">
          {courses.map((course, index) => (
            <div class="col" style={{ width: 300 }}>
              <div class="card">
                <img src="/images/react.png" class="card-img-top" alt="..." />
                <div class="card-body">
                  <button
                    onClick={() => deleteCourse(course._id)}
                    className="btn btn-danger float-end"
                  >
                    Delete
                  </button>
                  <button onClick={() => setCourse(course)}>Edit</button>
                  <h5 class="card-title">{course.name}</h5>

                  <Link
                    key={course._id}
                    to={`/Kanbas/Courses/${course._id}`}
                    className="btn btn-primary"
                  >
                    {course.name}
                  </Link>
                  <p class="card-text">
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <h3>All Courses</h3>

      <div class="row">
        <div class="row row-cols-1 row-cols-md-5 g-4">
          {allCourses.map((course, index) => (
            <div class="col" style={{ width: 300 }}>
              <div class="card">
                <img src="/images/react.png" class="card-img-top" alt="..." />
                <div class="card-body">
                  <button
                    onClick={() => deleteCourse(course._id)}
                    className="btn btn-danger float-end"
                  >
                    Delete
                  </button>
                  <button onClick={() => setCourse(course)}>Edit</button>
                  <h5 class="card-title">{course.name}</h5>

                  <Link
                    key={course._id}
                    to={`/Kanbas/Courses/${course._id}`}
                    className="btn btn-primary"
                  >
                    {course.name}
                  </Link>
                  <p class="card-text">
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
