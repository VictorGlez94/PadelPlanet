/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";
import { api } from "../services/config"

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState("");
  const [userId, setUserId] = useState(null);
  

  // Function to login
  const login = async (email, password) => {
    setIsAuthenticated(false);
    try {
      const response = await api.post("auth/login", {
        password: password,
        email: email,
      });
      if (response.data.result.token) {
        setToken(response.data.result.token);
        setIsAuthenticated(true);
        localStorage.setItem("token", response.data.result.token);
        setUserId(parseInt(response.data.result.userId));
        localStorage.setItem('userId', parseInt(response.data.result.userId))
        return true;
      }
    } catch (error) {
      console.error("User is not authenticated", error);
      return false;
    }
  };

  // Function to logout
  const logout = () => {
    setIsAuthenticated(false);
    setToken("");
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, token, userId, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
