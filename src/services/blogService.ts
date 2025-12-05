import { api } from "@/lib/axios";
import type { BlogResponse } from "@/types/blog";

export const fetchBlogs = async (): Promise<BlogResponse> => {
  const res = await api.get("/blogs", {
    params: {
      sort: ["published_date:desc"],
      pagination: { page: 1, pageSize: 10 },
      populate: "*",
    },
  });

  return res.data;
};