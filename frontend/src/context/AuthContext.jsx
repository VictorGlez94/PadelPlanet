/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [user, setUser] = useState({ id: 3, name: "John Doe" }); 

  const login = () => {
    setIsAuthenticated(true);
    setUser({ id: 1, name: "John Doe" }); 
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null); 
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
