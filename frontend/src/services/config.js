import axios from "axios";

export const api = axios.create({
  baseURL: "https://padelplanet.onrender.com/api/",
});