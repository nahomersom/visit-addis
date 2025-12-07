import { useQuery } from "@tanstack/react-query";
import { fetchGuide } from "@/services/guideService";

export const useGuide = () => {
  return useQuery({
    queryKey: ["guide"],
    queryFn: fetchGuide,
  });
};

