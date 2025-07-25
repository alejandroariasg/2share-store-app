import React, { useState } from 'react';
import axios from '../services/axiosInstance';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import qs from 'qs';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const { checkAuth } = useAuth();

  

  /* This `handleLogin` function in the code snippet is responsible for handling the login process
  when the user submits the login form. Here's a breakdown of what it does: */
  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    try {
        const data = qs.stringify({ username, password });
        await axios.post('/login', data, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
        /* The code snippet you provided is from a React component for a login page. Let's break down
        the following lines of code: */
        await checkAuth(); // refreshes global status
        const from = location.state?.from || '/products';
        navigate(from);
    } catch (err) {
      if (err.response?.status === 401) {
        setError('Credenciales inválidas. Inténtalo de nuevo.');
      } else {
        setError('Error inesperado. Intenta más tarde.');
      }
    }
  };

  return (
    <div className="container mt-5">
      <h2>Login</h2>
      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}
      <form onSubmit={handleLogin}>
        <div className="mb-3">
          <label className="form-label">Username</label>
          <input className="form-control" value={username}
            onChange={(e) => setUsername(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input type="password" className="form-control" value={password}
            onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button className="btn btn-primary">Login</button>
      </form>
    </div>
  );
}