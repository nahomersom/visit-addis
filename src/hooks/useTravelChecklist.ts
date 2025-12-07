import { useQuery } from "@tanstack/react-query";
import { fetchTravelChecklist } from "@/services/travelChecklistService";

export const useTravelChecklist = () => {
  return useQuery({
    queryKey: ["travel-checklist"],
    queryFn: fetchTravelChecklist,
  });
};

