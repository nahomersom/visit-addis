import { api } from "@/lib/axios";
import type { FAQResponse } from "@/types/faq";

export const fetchFAQ = async (): Promise<FAQResponse> => {
  const res = await api.get("/faq-section", {
    params: {
      populate: {
        items: "*",
      },
    },
  });

  return res.data;
};

