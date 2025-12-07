import { useQuery } from "@tanstack/react-query";
import { fetchPlanYourTrip } from "@/services/planYourTripService";

export const usePlanYourTrip = () => {
  return useQuery({
    queryKey: ["plan-your-trip"],
    queryFn: fetchPlanYourTrip,
  });
};

