import { useQuery } from "@tanstack/react-query";
import { fetchTravelTips } from "@/services/travelTipsService";

export const useTravelTips = () => {
  return useQuery({
    queryKey: ["travel-tips"],
    queryFn: fetchTravelTips,
  });
};

