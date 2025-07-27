import axios from 'axios';

/* This code snippet is creating an instance of Axios with specific configurations. Here's what each
configuration option does: */
const axiosInstance = axios.create({
  baseURL: 'http://localhost:8081', 
  withCredentials: true, 
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;