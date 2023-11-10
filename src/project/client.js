import axios from "axios";
export const NAPSTER_API = "https://api.napster.com/v2.2";
export const API_KEY = process.env.REACT_APP_NAPSTER_API_KEY;

export const findAlbums = async (searchTerm) => {
  const response = await axios.get(
    `${NAPSTER_API}/search?query=${searchTerm}&type=albums&apikey=${API_KEY}`
  );
  return response.data.search.data.albums;
};

export const findAlbumById = async (albumId) => {
  const response = await axios.get(
    `${NAPSTER_API}/albums/${albumId}?apikey=${API_KEY}`
  );
  return response.data.albums[0];
};

export const findTracksByAlbumId = async (albumId) => {
  const response = await axios.get(
    `${NAPSTER_API}/albums/${albumId}/tracks?apikey=${API_KEY}`
  );
  return response.data.tracks;
};
