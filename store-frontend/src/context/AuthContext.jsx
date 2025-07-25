import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from '../services/axiosInstance';

const AuthContext = createContext();


/**
 * The AuthProvider component manages authentication state and provides authentication-related
 * functions to its children.
 * @returns The `AuthProvider` component is being returned, which is a context provider component for
 * handling authentication state in a React application. It includes state variables for
 * `authenticated` and `loading`, a function `checkAuth` for verifying authentication status, and
 * provides these values and functions through the `AuthContext.Provider` to its children components.
 */
export const AuthProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  const checkAuth = async () => {
    try {
      await axios.get('/auth/me');
      setAuthenticated(true);
    } catch {
      setAuthenticated(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <AuthContext.Provider value={{ authenticated, loading, checkAuth, setAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
