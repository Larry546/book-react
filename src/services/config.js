import axios from "axios";

export const API_URL = "https://book-server.onrender.com";
// "http://localhost:4000"
// "https://book-server.onrender.com"

export const api = axios.create({withCredentials: true});
