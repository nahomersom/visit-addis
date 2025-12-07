import { api } from "@/lib/axios";
import type { FlightResponse } from "@/types/flight";

export const fetchFlight = async (): Promise<FlightResponse> => {
  const res = await api.get("/flight", {
    params: {
      populate: {
        header: {
          populate: {
            action_link: {
              populate: "*",
            },
          },
        },
        logos: {
          populate: "*",
        },
      },
    },
  });

  return res.data;
};

