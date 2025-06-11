import client from "./axiosConfig";

export const Generate3DModel = (data) => {
  const config = {
    url: "/media_generator/generate-3d-model/",
    method: "POST",
    data
  };
  const response = client(config);
  return response;
};
