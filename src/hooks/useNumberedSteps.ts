import { useQuery } from "@tanstack/react-query"
import { fetchNumberedSteps } from "@/services/numberedStepsService"

export const useNumberedSteps = () => {
  return useQuery({
    queryKey: ["numbered-steps"],
    queryFn: fetchNumberedSteps,
    staleTime: 1000 * 60 * 30, // 30 minutes
    refetchOnWindowFocus: false,
  })
}

