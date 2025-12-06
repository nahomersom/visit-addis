import { api } from "@/lib/axios";
import type { HomeResponse } from "@/types/home";

export const fetchHome = async (): Promise<HomeResponse> => {
  const res = await api.get("/home", {
    params: {
      populate: {
        top_attractions: {
          populate: {
            header: {
              populate: "*",
            },
            featured_cards: {
              populate: "*",
            },
          },
        },
        downloadable_guides: {
          populate: {
            header: {
              populate: "*",
            },
            background_image: {
              populate: "*",
            },
            guides: {
              populate: {
                file: {
                  populate: "*",
                },
              },
            },
          },
        },
        promotional_banner: {
          populate: "*",
        },
        hero: {
          populate: "*",
        },
        seo: {
          populate: "*",
        },
      },
    },
  });

  return res.data;
};

