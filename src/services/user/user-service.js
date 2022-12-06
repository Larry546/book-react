import axios from "axios";

const API_URL = "http://localhost:4000";
// "http://localhost:4000"
// "https://book-server.onrender.com"
const USER_API_URL = `${API_URL}/user`

const api = axios.create({withCredentials: true});

export const login = async (user) => {
  const response = await api.post(`${API_URL}/login`, user);
  return response.data;
}

export const logout = async () => {
  const response = await api.post(`${API_URL}/logout`);
  return response.data
}

export const updateUser = async (uid, updateInfo) => {
  const response = await api.put(`${USER_API_URL}/updateProfile/${uid}`, updateInfo);
  return response.data;
}