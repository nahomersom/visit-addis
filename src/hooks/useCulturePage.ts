import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/axios"; 

interface Image {
  url: string;
}

interface HeroSection {
  id: number;
  title: string;
  subtitle: string;
  background_image: Image;
}

interface CulturePageData {
  id: number;
  hero: HeroSection;
}

interface CulturePageResponse {
  data: CulturePageData;
}


const fetchCulturePageData = async (): Promise<CulturePageResponse> => {
  const { data } = await api.get<CulturePageResponse>(
    "/culture-and-lifestyle?populate[hero][populate]=*"
  );
  return data;
};


export const useCulturePage = () => {
  return useQuery({
    queryKey: ["culture-page"],
    queryFn: fetchCulturePageData,
  });
};