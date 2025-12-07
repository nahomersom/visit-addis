import { useMutation } from "@tanstack/react-query";
import { api } from "@/lib/axios"; 
import { AxiosError } from "axios";

interface SubscribeResponse {
  data: {
    id: number;
    attributes: {
      email: string;
      createdAt: string;
    };
  };
}

interface ErrorResponse {
  error: {
    message: string;
  };
}

export const useNewsletterSubscription = () => {
  return useMutation<SubscribeResponse, AxiosError<ErrorResponse>, string>({
    mutationFn: async (email: string) => {
      const response = await api.post("/subscribers", {
        data: { email },
      });
      return response.data;
    },
  });
};