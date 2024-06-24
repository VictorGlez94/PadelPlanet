/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";
import { api } from "../services/config"

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState("");

  // Función para iniciar sesión 
  const login = (email, password) => {
    setIsAuthenticated(false);
    console.log(email, password)
    api
      .post("auth/login", {
        password: password,
        email: email,
      })
      .then((response) => {
        console.log(response.data)
        if (response.data.result.token) {
          console.log("dentro")
          setToken(response.data.result.token);
          setIsAuthenticated(true);
          localStorage.setItem("token", response.data.result.token);
        }
      })
      .catch((error) => {
        console.error("User is not authenticated", error);
      });
  };

  // Función para cerrar sesión
  const logout = () => {
    setIsAuthenticated(false);
    
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
