/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  // Función para iniciar sesión 
  const login = () => {
    setIsAuthenticated(true);
    
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
