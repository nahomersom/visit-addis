import { api } from "@/lib/axios";
import type { ThingsToDoResponse } from "@/types/thingsToDo";

export const fetchThingsToDo = async (): Promise<ThingsToDoResponse> => {
  const res = await api.get("/things-to-do", {
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
        activities: {
          populate: {
            header: {
              populate: "*",
            },
            activity_types: {
              populate: "*",
            },
          },
        },
        seo: {
          populate: "*",
        },
        most_loved: {
          populate: {
            header: {
              populate: "*",
            },
            featured_cards: {
              populate: {
                image: {
                  populate: "*",
                },
                tags: {
                  populate: "*",
                },
                cta_button: {
                  populate: "*",
                },
                metadata: {
                  populate: "*",
                },
              },
            },
          },
        },
        plan_your_day: {
          populate: {
            background_image: {
              populate: "*",
            },
            buttons: {
              populate: {
                icon: {
                  populate: "*",
                },
              },
            },
          },
        },
        iconic_places: {
          populate: {
            items: {
              populate: {
                image: {
                  populate: "*",
                },
                action_link: {
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

