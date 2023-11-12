import axios from "axios";

const API_BASE = process.env.REACT_APP_API_BASE_URL;
const COURSES_API = `${API_BASE}/api/courses`;
const MODULES_API = `${API_BASE}/api/modules`;

export const findModulesForCourse = async (courseId) => {
  const response = await axios.get(`${COURSES_API}/${courseId}/modules`);
  return response.data;
};
