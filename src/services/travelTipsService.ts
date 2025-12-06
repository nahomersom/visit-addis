import { api } from "@/lib/axios";
import type { TravelTipResponse } from "@/types/travelTips";

export const fetchTravelTips = async (): Promise<TravelTipResponse> => {
  const res = await api.get("/travel-tip", {
    params: {
      populate: {
        header: {
          populate: {
            action_link: "*",
          },
        },
        tips: {
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

