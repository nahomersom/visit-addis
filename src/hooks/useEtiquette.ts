import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/axios"; 

interface EtiquetteTip {
  id: number;
  text: string;
}

interface EtiquetteCard {
  id: number;
  title_highlight: string | null;
  title: string;
  description: string;
  tip: EtiquetteTip | null;
}

interface EtiquetteHeader {
  id: number;
  title: string;
  subtitle: string;
}

interface EtiquetteSection {
  id: number;
  header: EtiquetteHeader;
  cards: EtiquetteCard[];
}

interface CulturePageResponse {
  data: {
    etiquette_section: EtiquetteSection;
  };
}

const ENDPOINT = "culture-and-lifestyle?populate[8]=etiquette_section.header.action_link&populate[9]=etiquette_section.cards.tip.icon";

const fetchEtiquetteData = async () => {
  const response = await api.get<CulturePageResponse>(`/${ENDPOINT}`);
  return response.data;
};

//Hook 
export const useEtiquette = () => {
  return useQuery({
    queryKey: ["culture-page", "etiquette"],
    queryFn: fetchEtiquetteData,
    select: (data) => {
      const section = data?.data?.etiquette_section;
      return {
        header: section?.header,
        // limit to 4 cards as requested
        cards: section?.cards?.slice(0, 4) || [],
      };
    },
    staleTime: 1000 * 60 * 5, 
    refetchOnWindowFocus: false,
    retry: 1,
  });
};