import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: process.env.REACT_APP_DEFAULT_TIMEOUT,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
  },
});

export default axiosInstance;
