import { useQuery } from "@tanstack/react-query";
import { fetchFAQ } from "@/services/faqService";

export const useFAQ = () => {
  return useQuery({
    queryKey: ["faq"],
    queryFn: fetchFAQ,
  });
};

