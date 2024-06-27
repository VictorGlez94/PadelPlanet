import axios from "axios";

export const api = axios.create({
  baseURL: "https://padelplanet.onrender.com/api/", //Falta especificar la url para conectar a la base de datos
});