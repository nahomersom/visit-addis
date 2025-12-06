import { useQuery } from "@tanstack/react-query";
import { fetchHome } from "@/services/homeService";

export const useHome = () => {
  return useQuery({
    queryKey: ["home"],
    queryFn: fetchHome,
  });
};

