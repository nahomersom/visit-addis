import { useQuery } from "@tanstack/react-query";
import { fetchThingsToDo } from "@/services/thingsToDoService";

export const useThingsToDo = () => {
  return useQuery({
    queryKey: ["things-to-do"],
    queryFn: fetchThingsToDo,
  });
};

