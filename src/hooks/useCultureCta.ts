import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/axios";

interface CtaButton {
  id: number;
  label: string;
  url: string;
  icon: string | null;
}

interface CtaImage {
  url: string;
}

interface CtaSection {
  id: number;
  title: string;
  description: string;
  buttons: CtaButton[];
  background_image?: CtaImage;
}

interface CulturePageResponse {
  data: {
    cta_section: CtaSection;
  };
}

// Fetcher
const ENDPOINT = "culture-and-lifestyle?populate[10]=cta_section.background_image&populate[11]=cta_section.buttons.icon";

const fetchCtaData = async () => {
  const response = await api.get<CulturePageResponse>(`/${ENDPOINT}`);
  return response.data;
};

// Hook
export const useCultureCta = () => {
  return useQuery({
    queryKey: ["culture-page", "cta"],
    queryFn: fetchCtaData,
    select: (data) => data?.data?.cta_section,
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
    retry: 1,
  });
};