import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_MY_PORTFOLIO_API_URL,
});

export default axiosInstance;
