import { api } from "@/lib/axios"
import type { ActivityTypeResponse } from "@/types/activityType"
import type { ActivityResponse } from "@/types/activityType"

export const fetchActivityTypes = async (): Promise<ActivityTypeResponse> => {
  const res = await api.get("/activity-typess", {
    params: {
      populate: {
        activities: {
          populate: "*",
        },
        icon: {
          populate: "*",
        },
      },
    },
  })

  return res.data
}

export const fetchActivities = async (): Promise<ActivityResponse> => {
  const res = await api.get("/activities", {
    params: {
      populate: {
        bannerImage: {
          populate: "*",
        },
        activity_type: {
          populate: "*",
        },
        images: {
          populate: "*",
        },
      },
    },
  })

  return res.data
}

