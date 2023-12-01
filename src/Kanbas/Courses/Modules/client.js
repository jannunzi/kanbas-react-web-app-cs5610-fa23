import axios from "axios";

const client = axios.create({
  baseURL: "http://localhost:4000/api",
  withCredentials: true,
});

const COURSES_URL = "http://localhost:4000/api/courses";
const MODULES_URL = "http://localhost:4000/api/modules";

export const addModule = async (courseId, module) => {
  const response = await client.post(`/courses/${courseId}/modules`, module);
  return response.data;
};

export const findModulesForCourse = async (courseId) => {
  const response = await client.get(`/courses/${courseId}/modules`);
  return response.data;
};

export const updateModule = async (moduleId, module) => {
  const response = await axios.put(`${MODULES_URL}/${moduleId}`, module);
  return response.data;
};

export const deleteModule = async (moduleId) => {
  const response = await axios.delete(`${MODULES_URL}/${moduleId}`);
  return response.data;
};
