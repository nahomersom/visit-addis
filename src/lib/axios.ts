import axios from "axios";
import qs from "qs";

export const api = axios.create({
  baseURL: "https://api.visitaddisababa.et/api",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
  paramsSerializer: (params) => {
    return qs.stringify(params, { arrayFormat: "brackets", encode: false });
  },
});
