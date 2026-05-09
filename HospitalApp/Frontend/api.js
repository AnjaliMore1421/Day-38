import axios from "axios";

const API = axios.create({
  baseURL: "http://10.193.76.45:5000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

API.interceptors.request.use((request) => {
  console.log("➡️ REQUEST:", request.url);
  return request;
});
export default API;