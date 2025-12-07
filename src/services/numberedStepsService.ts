import { api } from "@/lib/axios"
import type { NumberedStepsResponse } from "@/types/numberedSteps"

export const fetchNumberedSteps = async (): Promise<NumberedStepsResponse> => {
  const res = await api.get("/numbered-steps-section", {
    params: {
      populate: {
        header: {
          populate: "*",
        },
        steps: {
          populate: "*",
        },
      },
    },
  })

  return res.data
}

