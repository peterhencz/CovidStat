import axios from "axios";

const axiosInstance = axios.create({
  baseURL:
    "https://api.apify.com/v2/acts/tugkan~covid-hu/runs/last/dataset/items?token=3zF7rJbhRo48aZgTp8zH9ECTE",
  timeout: 50000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json; charset=UTF-8",
    "Access-Control-Allow-Origin": "*",
  },
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
