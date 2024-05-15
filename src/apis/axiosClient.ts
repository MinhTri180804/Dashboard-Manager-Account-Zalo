import axios from "axios";
import { message } from "antd";
import constants from "../utils/constants";

const baseUrl = import.meta.env.VITE_API_URL;

const axiosClient = axios.create({
  baseURL: `${baseUrl}/api/`,
  headers: {
    accept: "application/json",
    "Content-Type": "application/json",
  },
});

axiosClient.interceptors.request.use(
  (config) => {
    // const excludeApi = [urls.LOCAL, urls.REGISTER];
    // if (!excludeApi.includes(config.url ?? '')) {
    //   const accessToken = localStorage.getItem(constants.ACCESS_TOKEN);
    // }
    const accessToken = localStorage.getItem(constants.ACCESS_TOKEN);

    if (accessToken) {
      Object.assign(config.headers, { Authorization: `Bearer ${accessToken}` });
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

axiosClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const { status } = error.response;
    if (error.response.data) {
      // eslint-disable-next-line no-param-reassign
      error.response.data.status = status;
    }
    if (status === 401) {
      localStorage.removeItem(constants.ACCESS_TOKEN);
    } else if (status === 400) {
      message.error(error.response.data.messageDetail);
    }
    return Promise.reject(error);
  },
);

export interface ISelectOptions {
  label: string;
  value: string | number;
  options?: ISelectOptions[];
}
export default axiosClient;
