import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

/**
 * The `RequireAuth` function ensures that the user is authenticated before rendering the children
 * components, redirecting to the login page if necessary.
 * @returns The `RequireAuth` component returns the `children` components if the user is authenticated,
 * otherwise it redirects to the '/login' page with the current location pathname as the state if the
 * user is not authenticated. If the authentication status is still loading, it returns `null`.
 */
export default function RequireAuth({ children }) {
  const { authenticated, loading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!loading && !authenticated) {
      navigate('/login', { state: { from: location.pathname } });
    }
  }, [loading, authenticated]);

  if (loading) return null;

  return authenticated ? children : null;
}