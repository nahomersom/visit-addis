import stadiumImage from "@/assets/images/stadium.jpg"
import womensquareImage from "@/assets/images/womensquare.jpg"
import keberoImage from "@/assets/images/kebero.jpg"
import oldHouseImage from "@/assets/images/oldHouse.jpg"
import catholicChurchImage from "@/assets/images/catholicChurch.jpg"
import buildingsImage from "@/assets/images/buildings.jpg"

export interface Venue {
  id: string
  title: string
  description: string
  image: string
}

export const venues: Venue[] = [
  {
    id: "1",
    title: "Addis International Convention Center",
    description: "Located just 15 minutes from Bole International Airport and the city center, AICC offers unmatched accessibility and world-class facilities tailored for international delegates.",
    image: stadiumImage,
  },
  {
    id: "2",
    title: "Adwa Victory Memorial Museum",
    description: "The Adwa Victory Memorial Museum is more than a tribute to Ethiopia's historic triumph at the Battle of Adwa, it's a state-of-the-art venue for conferences, cultural events, and global dialogues.",
    image: womensquareImage,
  },
  {
    id: "3",
    title: "UNECA Conference Center",
    description: "The United Nations Conference Center in Addis Ababa (UNCC-AA) is a premier venue for high-level meetings and international events. Featuring two spacious halls of 1,200 m² each.",
    image: keberoImage,
  },
  {
    id: "4",
    title: "African Union Conference Center",
    description: "The African Union Conference Center is one of Addis Ababa's most iconic venues for high-level meetings and global summits. Designed for diplomacy and international collaboration.",
    image: oldHouseImage,
  },
  {
    id: "5",
    title: "Addis International Convention Center",
    description: "Located just 15 minutes from Bole International Airport and the city center, AICC offers unmatched accessibility and world-class facilities tailored for international delegates.",
    image: catholicChurchImage,
  },
  {
    id: "6",
    title: "Addis International Convention Center",
    description: "Located just 15 minutes from Bole International Airport and the city center, AICC offers unmatched accessibility and world-class facilities tailored for international delegates.",
    image: buildingsImage,
  },
]

