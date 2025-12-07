import { api } from "@/lib/axios";
import type { TravelChecklistResponse } from "@/types/travelChecklist";

export const fetchTravelChecklist = async (): Promise<TravelChecklistResponse> => {
  const res = await api.get("/travel-checklist", {
    params: {
      populate: {
        items: {
          populate: {
            icon: {
              populate: "*",
            },
          },
        },
        tip: {
          populate: {
            icon: {
              populate: "*",
            },
          },
        },
      },
    },
  });

  return res.data;
};

