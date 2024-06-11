import axios from "axios";

export const api = axios.create({
  baseURL:'http://localhost:3000/' //Falta especificar la url para conectar a la base de datos
})