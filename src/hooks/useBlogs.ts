import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { fetchBlogs, fetchBlog } from "@/services/blogService";

export const useBlogs = (
  page: number = 1, 
  pageSize: number = 10, 
  isFeatured: boolean = false
) => {
  return useQuery({
    queryKey: ["blogs", page, pageSize, isFeatured], 
    queryFn: () => fetchBlogs(page, pageSize, isFeatured),
    placeholderData: keepPreviousData,
  });
};

export const useBlog = (id: string | undefined) => {
  return useQuery({
    queryKey: ["blog", id],
    queryFn: () => fetchBlog(id!),
    enabled: !!id,
  });
};