import { useQuery } from "@tanstack/react-query";
import { fetchFlight } from "@/services/flightService";

export const useFlight = () => {
  return useQuery({
    queryKey: ["flight"],
    queryFn: fetchFlight,
  });
};

