import axios from "axios";

const client = axios.create({
  baseURL: "http://localhost:4000/api",
  withCredentials: true,
});

export const createSectionForCourse = async (courseId, section) => {
  const response = await client.post(`/courses/${courseId}/sections`, section);
  return response.data;
};

export const findSectionsForCourse = async (courseId) => {
  const response = await client.get(`/courses/${courseId}/sections`);
  return response.data;
};
