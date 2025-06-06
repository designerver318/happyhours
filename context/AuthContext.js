// context/AuthContext.js
"use client";
import { createContext, useState, useContext } from "react";

const AuthContext = createContext(null); // Initialize with null

export default function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => {
    setIsAuthenticated(true);
    document.cookie = "admin-auth=true; path=/; max-age=86400";
  };

  const logout = () => {
    setIsAuthenticated(false);
    document.cookie = "admin-auth=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook must be named with "use" prefix
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};