import React, { useState } from 'react';
import axios from '../services/axiosInstance';
import { useNavigate } from 'react-router-dom';

export default function RegisterPage() {
    const [username, setUsername] = useState('');
    const [fullName, setFullName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();

    /**
     * The handleRegister function is an asynchronous function that handles user registration by
     * sending a POST request to the '/auth/register' endpoint and displaying success or error messages
     * accordingly.
     */
    const handleRegister = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        try {
        await axios.post('/auth/register', {
            username,
            fullName,
            password,
        });

        setSuccess('User registered successfully. You can now log in.');
        setTimeout(() => navigate('/login'), 2000);
        } catch (err) {
        if (err.response?.data?.message) {
            setError(err.response.data.message);
        } else {
            setError('Registration failed');
        }
        }
    };

    return (
        <div className="container mt-5" style={{ maxWidth: '400px' }}>
        <h2 className="mb-4">Register</h2>

        {error && <div className="alert alert-danger">{error}</div>}
        {success && <div className="alert alert-success">{success}</div>}

        <form onSubmit={handleRegister}>
            <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input
                className="form-control"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
            />
            </div>

            <div className="mb-3">
            <label className="form-label">Username</label>
            <input
                className="form-control"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
            />
            </div>

            <div className="mb-3">
            <label className="form-label">Password</label>
            <input
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            </div>

            <button className="btn btn-primary w-100" type="submit">
            Register
            </button>
        </form>
        </div>
    );
}