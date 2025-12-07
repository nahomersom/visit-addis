import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/axios"; 

export interface CoffeeItem {
  id: number;
  title: string;
  description: string;
  image?: {
    url: string;
  };
}

interface CulturePageResponse {
  data: {
    coffee_culture_section: {
      items: CoffeeItem[];
    };
  };
}

// Fetcher 
const ENDPOINT = "culture-and-lifestyle?populate[0]=coffee_culture_section.items.image";

const fetchCoffeeData = async () => {
  const response = await api.get<CulturePageResponse>(`/${ENDPOINT}`);
  return response.data;
};

// Hook
export const useCoffeeCulture = () => {
  return useQuery({
    queryKey: ["culture-page", "coffee-culture"],
    queryFn: fetchCoffeeData,
    select: (data) => data?.data?.coffee_culture_section?.items || [],
    staleTime: 1000 * 60 * 5, // 5 minutes
    refetchOnWindowFocus: false,
    retry: 1, 
  });
};