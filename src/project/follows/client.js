import axios from "axios";
const client = axios.create({
  withCredentials: true,
  baseURL: "http://localhost:4000/api/users",
});

export const userFollowsUser = async (followed) => {
  const response = await client.post(`/${followed}/follows`);
  return response.data;
};

export const userUnfollowsUser = async (followed) => {
  const response = await client.delete(`/${followed}/follows`);
  return response.data;
};

export const findFollowersOfUser = async (followed) => {
  const response = await client.get(`/${followed}/followers`);
  return response.data;
};

export const findFollowedUsersByUser = async (follower) => {
  const response = await client.get(`/${follower}/following`);
  return response.data;
};
