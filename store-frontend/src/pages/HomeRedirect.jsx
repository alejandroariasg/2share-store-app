import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../services/axiosInstance';

export default function HomeRedirect() {
  const navigate = useNavigate();

  /* The `useEffect` hook in the provided code snippet is used to perform side effects in a functional
  component. In this case, it is making an HTTP GET request to the `/auth/me` endpoint using Axios
  to check if the user is authenticated. */
  useEffect(() => {
    axios.get('/auth/me')
      .then(res => {
        if (res.data.authenticated) {
          navigate('/shopping-list');
        } else {
          navigate('/login');
        }
      })
      .catch(() => {
        navigate('/login'); // If you are not authenticated
      });
  }, []);

  return null;
}
