import axios from "axios";
import qs from "qs";


export const BASE_URL = "https://api.visitaddisababa.et";

export const api = axios.create({
  baseURL: `${BASE_URL}/api`,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
  paramsSerializer: (params) => {
    return qs.stringify(params, { arrayFormat: "brackets", encode: false });
  },
});

export const getImageUrl = (url: string | undefined | null) => {
  if (!url) return 'https://placehold.co/600x400?text=No+Image';
  if (url.startsWith('http')) return url;
  return `${BASE_URL}${url}`;
};