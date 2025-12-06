import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/axios"; 

export const useEventsHero = () => {
  return useQuery({
    queryKey: ["events-hero"],
    queryFn: async () => {
      const { data } = await api.get("/events-and-festival?populate[hero][populate]=background_image");
      return data;
    },
  });
};