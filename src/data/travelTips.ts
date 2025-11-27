export interface TravelTip {
  id: string
  title: string
  icon: string
  description: string
}

export const travelTips: TravelTip[] = [
  {
    id: "1",
    title: "Health",
    icon: "heart-pulse",
    description: "Important health information for travelers",
  },
  {
    id: "2",
    title: "Safety",
    icon: "shield-check",
    description: "Stay safe during your visit",
  },
  {
    id: "3",
    title: "Emergency Services",
    icon: "phone",
    description: "Emergency contact information",
  },
  {
    id: "4",
    title: "Travel Documents",
    icon: "file-text",
    description: "Required documents for travel",
  },
  {
    id: "5",
    title: "Money",
    icon: "dollar-sign",
    description: "Currency and payment information",
  },
  {
    id: "6",
    title: "Weather",
    icon: "cloud-sun",
    description: "Climate and weather patterns",
  },
]

