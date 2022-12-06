import {API_URL, api} from "../config";

const LIKEBOOK_API_URL = `${API_URL}/likebook`;

export const likebook = async (info) => {
  const response = await api.post(`${LIKEBOOK_API_URL}/like`, info);
  return response.data;
}

export const unlikebook = async (lbid) => {
  const response = await api.delete(`${LIKEBOOK_API_URL}/unlike/${lbid}`);
  return response.data;
}

export const findUserLikeBook = async (uid, isbn) => {
  const response = await api.get(`${LIKEBOOK_API_URL}/user/${uid}/book/${isbn}`);
  return response.data;
}