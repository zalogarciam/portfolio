import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_MY_PORTFOLIO_API_URL,
});

export default axiosInstance;
