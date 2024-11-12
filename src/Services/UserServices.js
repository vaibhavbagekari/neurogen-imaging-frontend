import client from "./axiosConfig";

export const LogIn = (data) => {
  const config = {
    url: "/auth/login/",
    method: "POST",
    data
  };
  const response = client(config);
  return response;
};

export const signup = (data) => {
  const config = {
    url: "/users/signup/",
    method: "POST",
    data
  };
  const response = client(config);
  return response;
};


export const getUser = () => {
  const config = {
    url: "/users/",
    method: "GET",
  };
  const response = client(config);
  return response;
};
