import axios from "axios";

const API_BASE = "http://localhost:4000/api";

const USERS_API = `${API_BASE}/users`;
const LIKES_API = `${API_BASE}/likes`;

export const findAllLikes = async () => {};
export const createUserLikesAlbum = async (userId, albumId) => {
  const response = await axios.post(`${USERS_API}/${userId}/likes/${albumId}`);
  return response.data;
};
export const deleteUserLikesAlbum = async (userId, albumId) => {};
export const findUsersThatLikeAlbum = async (albumId) => {
  const response = await axios.get(`${LIKES_API}/${albumId}/users`);
  return response.data;
};
export const findAlbumsThatUserLikes = async (userId) => {
  const response = await axios.get(`${USERS_API}/${userId}/likes`);
  return response.data;
};
