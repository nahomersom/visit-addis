import { useQuery } from "@tanstack/react-query"
import { fetchActivities } from "@/services/activityService"

export const useActivityTypes = () => {
  return useQuery({
    queryKey: ["activities"],
    queryFn: fetchActivities,
    staleTime: 1000 * 60 * 30, // 30 minutes - activities don't change frequently
    refetchOnWindowFocus: false,
  })
}

