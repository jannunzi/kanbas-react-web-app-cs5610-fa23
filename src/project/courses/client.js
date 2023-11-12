import axios from "axios";

const API_BASE = process.env.REACT_APP_API_BASE_URL;
const COURSES_API = `${API_BASE}/api/courses`;
const AUTHORS_API = `${API_BASE}/api/authors`;

export const findCourseById = async (id) => {
  const response = await axios.get(`${COURSES_API}/${id}`);
  return response.data;
};

export const findAllCourses = async () => {
  const response = await axios.get(COURSES_API);
  return response.data;
};

export const findCoursesByAuthor = async (authorId) => {
  const response = await axios.get(`${AUTHORS_API}/${authorId}/courses`);
  return response.data;
};
