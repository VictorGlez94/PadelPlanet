import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3001/api/", //Falta especificar la url para conectar a la base de datos
});