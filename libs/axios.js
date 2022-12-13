import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3030/",
});

export const getFetcher = (resource, init) =>
  axiosInstance.get(resource, init).then((res) => res.data);

export const postFetcher = (resource, init) =>
  axiosInstance.post(resource, init).then((res) => res.data);

export default axiosInstance;
