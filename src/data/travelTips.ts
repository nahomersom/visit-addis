export interface TravelTip {
  id: string
  title: string
  icon: string
  description: string
  detailedDescription: string
}

export const travelTips: TravelTip[] = [
  {
    id: "1",
    title: "Health",
    icon: "heart-pulse",
    description: "Important health information for travelers",
    detailedDescription: "Before traveling to Addis Ababa, ensure you're up to date with routine vaccinations.",
  },
  {
    id: "2",
    title: "Safety",
    icon: "shield-check",
    description: "Stay safe during your visit",
    detailedDescription: "Addis Ababa is generally safe for tourists, but exercise common sense precautions. Avoid walking alone at night in unfamiliar areas.",
  },
  {
    id: "3",
    title: "Emergency Numbers",
    icon: "phone",
    description: "Emergency contact information",
    detailedDescription: "In case of emergency, dial 911 for police, fire, or medical assistance. For tourist police, call .",
  },
  {
    id: "4",
    title: "Travel Documents",
    icon: "file-text",
    description: "Required documents for travel",
    detailedDescription: "All visitors need a valid passport with at least 6 months validity. Most nationalities require a visa.",
  },
  {
    id: "5",
    title: "Currency",
    icon: "dollar-sign",
    description: "Currency and payment information",
    detailedDescription: "The local currency is the Ethiopian Birr (ETB). US Dollars are widely accepted, but it's recommended to carry some local currency for smaller purchases.",
  },
  {
    id: "6",
    title: "Weather",
    icon: "cloud-sun",
    description: "Climate and weather patterns",
    detailedDescription: "Addis Ababa enjoys a mild climate year-round due to its high altitude. The city experiences two main seasons: dry season (October to May) and rainy season .",
  },
]

