import axios from "axios";

const client = axios.create({
  baseURL: "http://localhost:4000/api",
  withCredentials: true,
});

export const enrollStudentInSection = async (sectionId) => {
  const response = await client.post(`/sections/${sectionId}/enrollments`);
  return response.data;
};

export const findStudentsForSection = async (sectionId) => {
  const response = await client.get(`/sections/${sectionId}/enrollments`);
  return response.data;
};
