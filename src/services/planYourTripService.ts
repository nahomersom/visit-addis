import { api } from "@/lib/axios";
import type { PlanYourTripResponse } from "@/types/planYourTrip";

export const fetchPlanYourTrip = async (): Promise<PlanYourTripResponse> => {
  const res = await api.get("/plan-your-trip", {
    params: {
      populate: {
        hero: {
          populate: {
            background_image: {
              populate: "*",
            },
            search_bar: {
              populate: "*",
            },
            quick_links: {
              populate: "*",
            },
          },
        },
        visa_section: {
          populate: {
            header: {
              populate: {
                action_link: {
                  populate: "*",
                },
              },
            },
            visa_types: {
              populate: {
                icon: {
                  populate: "*",
                },
              },
            },
          },
        },
      },
    },
  });

  return res.data;
};

