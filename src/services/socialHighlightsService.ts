import { api } from "@/lib/axios";
import type { SocialHighlightsResponse } from "@/types/socialHighlights";

export const fetchSocialHighlights = async (): Promise<SocialHighlightsResponse> => {
  const res = await api.get("/social-highlights", {
    params: {
      populate: {
        image: {
          populate: "*",
        },
        author_avatar: {
          populate: "*",
        },
        action_link: "*",
      },
    },
  });

  return res.data;
};

