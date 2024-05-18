import { LoginRequest, RegisterRequest } from "../types/Api/Request/Auth";
import { LoginResponse } from "../types/Api/Response/Auth";
import axiosClient from "./axiosClient";

const authApi = {
  login(data: LoginRequest) {
    const formData = new FormData();
    formData.append("username", data.username);
    formData.append("password", data.password);
    return axiosClient.post<LoginResponse>("/authenticate/login", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },
  register: (data: RegisterRequest) => {
    return axiosClient.post<LoginResponse>("/authenticate/register", data);
  },
};

export default authApi;
