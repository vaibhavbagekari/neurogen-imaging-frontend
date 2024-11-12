import axios from "axios";
import toast from "react-hot-toast";
import * as Utils from "../Utils";

const client = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Response interceptor to handle errors and responses
client.interceptors.response.use(
  (response) => {
    return {
      data: response.data,
      status: response.status,
      error: null,
    };
  },
  (error) => {
    if (error.response?.data?.errors) {
      toast.error(Object.values(error.response.data.errors))
    }

    return {
      data: null,
      status: error.response.status,
      error: error.response.data,
    };
  }
);

// Request interceptor to handle requests
client.interceptors.request.use((config) => {
  if (Utils.getUser()) {
    const userToken = Utils.getUser().token;
    config.headers = {
      Authorization: "token " + userToken,
      ...config.headers
    };
  }
  return config
});

export default client;
