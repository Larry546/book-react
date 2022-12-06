import {REACT_APP_API_RUL, api} from "../config";

const USER_API_URL = `${REACT_APP_API_RUL}/user`

export const login = async (user) => {
  const response = await api.post(`${REACT_APP_API_RUL}/login`, user);
  return response.data;
}

export const logout = async () => {
  const response = await api.post(`${REACT_APP_API_RUL}/logout`);
  return response.data
}

export const updateUser = async (uid, updateInfo) => {
  const response = await api.put(`${USER_API_URL}/updateProfile/${uid}`, updateInfo);
  return response.data;
}