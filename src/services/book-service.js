import axios from "axios";

const REMOTE_API = "https://api.itbook.store/1.0";

export const getBookInfo = async (isbn) => {
  const response = await axios.get(`${REMOTE_API}/books/${isbn}`);
  return response.data;
}

export const searchBook = async (keyword, pages = 1) => {
  const response = await axios.get(`${REMOTE_API}/search/keyword?page=${pages}`);
  return response.data;
}