import axios from "axios";

export const REACT_APP_API_URL = process.env.API_URL || "http://localhost:4000";
// "http://localhost:4000"
// "http://ec2-34-228-111-190.compute-1.amazonaws.com:4000"

export const api = axios.create({withCredentials: true});
