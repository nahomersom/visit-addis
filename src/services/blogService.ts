import { api } from "@/lib/axios";
import type { BlogResponse } from "@/types/blog";

export const fetchBlogs = async (
  page: number = 1, 
  pageSize: number = 10, 
  isFeatured?: boolean 
): Promise<BlogResponse> => {
  
  const params: any = {
    populate: "*",
    sort: ["published_date:desc"],
    "pagination[page]": page,
    "pagination[pageSize]": pageSize,
  };

  if (isFeatured) {
    params["filters[is_featured][$eq]"] = true;
  }

  const res = await api.get("/blogs", { params });
  return res.data;
};


export const fetchBlog = async (documentId: string) => {
  const res = await api.get(`/blogs/${documentId}`, {
    params: { populate: "*" },
  });
  return res.data;
};