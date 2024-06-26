/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";
import { api } from "../services/config"

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState("");
  const [user, setUser] = useState(null);

  // Function to log in
  const login = (email, password) => {
    setIsAuthenticated(false);
    console.log(email, password);
    api
      .post("auth/login", {
        password: password,
        email: email,
      })
      .then((response) => {
        console.log(response.data);
        if (response.data.result.token) {
          console.log("Logged in successfully");
          setToken(response.data.result.token);
          setIsAuthenticated(true);
          localStorage.setItem("token", response.data.result.token);
          setUser({ id: response.data.result.id, name: response.data.result.name });
        }
      })
      .catch((error) => {
        console.error("User is not authenticated", error);
      });
  };

  // Function to log out
  const logout = () => {
    setIsAuthenticated(false);
    setToken("");
    setUser(null);
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, token, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
