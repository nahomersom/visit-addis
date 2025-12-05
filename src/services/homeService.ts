import { api } from "@/lib/axios";
import type { HomeResponse } from "@/types/home";

export const fetchHome = async (): Promise<HomeResponse> => {
  const res = await api.get("/home", {
    params: {
      populate: "*",
    },
  });

  return res.data;
};

