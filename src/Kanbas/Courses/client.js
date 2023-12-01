import axios from "axios";

const client = axios.create({
  baseURL: "http://localhost:4000/api",
  withCredentials: true,
});

export const fetchMyCourses = async () => {
  // const promise = axios.get("http://localhost:4000/api/courses");
  // promise.then((response) => {
  //   setCourses(response.data);
  // });

  const response = await client.get("/courses");
  return response.data;
};

export const fetchAllCourses = async () => {
  const response = await client.get("/courses/all");
  return response.data;
};

export const fetchCourse = async (id) => {
  const response = await client.get(`/courses/${id}`);
  return response.data;
};

export const deleteCourse = async (id) => {
  const response = await axios.delete(
    `http://localhost:4000/api/courses/${id}`
  );
  return response.data;
};

export const updateCourse = async (course) => {
  const response = await axios.put(
    `http://localhost:4000/api/courses/${course._id}`,
    course
  );
  return response.data;
};

export const addCourse = async (course) => {
  const response = await client.post("/courses", course);
  return response.data;
};
