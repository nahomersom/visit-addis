import { useQuery } from "@tanstack/react-query";
import { fetchSocialHighlights } from "@/services/socialHighlightsService";

export const useSocialHighlights = () => {
  return useQuery({
    queryKey: ["social-highlights"],
    queryFn: fetchSocialHighlights,
  });
};

