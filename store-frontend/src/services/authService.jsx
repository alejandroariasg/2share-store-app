import axios from './axiosInstance';

export const logout = async () => {
  await axios.post('/logout');
};