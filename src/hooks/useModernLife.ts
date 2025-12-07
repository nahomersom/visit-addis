import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/axios"; 

export interface ModernLifeItem {
  id: number;
  title: string;
  description: string;
  image?: {
    url: string;
  };
}

interface CulturePageResponse {
  data: {
    modern_life_section: {
      items: ModernLifeItem[];
    };
  };
}

// Fetcher
const ENDPOINT = "culture-and-lifestyle?populate[0]=modern_life_section.items.image";

const fetchModernLifeData = async () => {
  const response = await api.get<CulturePageResponse>(`/${ENDPOINT}`);
  return response.data;
};

// Hook
export const useModernLifeData = () => {
  return useQuery({
    queryKey: ["culture-page", "modern-life"],
    queryFn: fetchModernLifeData,
    select: (data) => data?.data?.modern_life_section?.items || [],
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
    retry: 1, // Fail fast after 1 retry
  });
};