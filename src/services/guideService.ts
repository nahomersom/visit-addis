import { api } from "@/lib/axios";
import type { GuideResponse } from "@/types/guide";

export const fetchGuide = async (): Promise<GuideResponse> => {
  const res = await api.get("/guide", {
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
        itineraries: {
          populate: {
            header: {
              populate: {
                action_link: {
                  populate: "*",
                },
              },
            },
            duration_buttons: {
              populate: {
                icon: {
                  populate: "*",
                },
              },
            },
          },
        },
        downloadable_guides: {
          populate: {
            background_image: {
              populate: "*",
            },
            header: {
              populate: {
                action_link: {
                  populate: "*",
                },
              },
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
        getting_around: {
          populate: {
            header: {
              populate: {
                action_link: {
                  populate: "*",
                },
              },
            },
            transport_methods: {
              populate: {
                icon: {
                  populate: "*",
                },
              },
            },
          },
        },
        video_section: {
          populate: "*",
        },
      },
    },
  });

  return res.data;
};

