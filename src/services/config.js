import axios from "axios";

export const API_URL = "http://ec2-34-228-111-190.compute-1.amazonaws.com:4000";
// "http://localhost:4000"
// "https://book-server.onrender.com"
// "http://ec2-34-228-111-190.compute-1.amazonaws.com:4000"

export const api = axios.create({withCredentials: true});
