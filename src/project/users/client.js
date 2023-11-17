import axios from "axios";
const API_BASE = process.env.REACT_APP_API_BASE_URL || "http://localhost:3000";
const USERS_API = `${API_BASE}/api/users`;

export const signin = async (credentials) => {
  const response = await axios.post(`${USERS_API}/signin`, credentials);
  return response.data;
};
export const signout = async () => {
  const response = await axios.post(`${USERS_API}/signout`);
  return response.data;
};

export const account = async () => {
  const response = await axios.post(`${USERS_API}/account`);
  return response.data;
};

export const findAllUsers = async () => {
  const response = await axios.get(USERS_API);
  return response.data;
};

export const findUserById = async (id) => {
  const response = await axios.get(`${USERS_API}/${id}`);
  return response.data;
};

export const updateUser = async (id, user) => {
  const response = await axios.put(`${USERS_API}/${id}`, user);
  return response.data;
};

export const deleteUser = async (id) => {
  const response = await axios.delete(`${USERS_API}/${id}`);
  return response.data;
};
