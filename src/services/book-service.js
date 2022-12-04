import axios from "axios";

const REMOTE_API = "https://api.itbook.store/1.0";
const BOOK_API = `${REMOTE_API}/books`;

export const getBookInfo = async (isbn) => {
  const response = await axios.get(`${BOOK_API}/${isbn}`);
  return response.data;
}