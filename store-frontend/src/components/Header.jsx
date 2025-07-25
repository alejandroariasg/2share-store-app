import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../services/authService';
import { useAuth } from '../context/AuthContext';

export default function Header() {

  const navigate = useNavigate();
  const { authenticated, setAuthenticated } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
        setAuthenticated(false); // ← actualiza el contexto global  
        navigate('/login');
      } catch (err) {
        console.error('Logout failed:', err);
    }
  };
  
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <Link className="navbar-brand" to="/">2Share Store</Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ms-auto">
          {authenticated && (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/shopping-list">My List</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/products">Products</Link>
              </li>
              <li className="nav-item">
                <button className="btn btn-link nav-link" onClick={handleLogout}>
                  Logout
                </button>
              </li>
            </>
          )}
          {!authenticated && (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/register">Register</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
} 