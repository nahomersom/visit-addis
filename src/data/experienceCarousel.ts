import stadiumImage from "@/assets/images/stadium.jpg"
import womensquareImage from "@/assets/images/womensquare.jpg"
import keberoImage from "@/assets/images/kebero.jpg"

export interface ExperienceSlide {
  id: string
  title: string
  description: string
  image: string
  thumbnail: string
}

export const experienceSlides: ExperienceSlide[] = [
  {
    id: "1",
    title: "EXPERIENCE ADDIS ABABA FROM A WHOLE NEW PERSPECTIVE",
    description:
      "Discover the best places to visit and things to do in Addis Ababa. We have a wide range of experiences to make your trip memorable.",
    image: stadiumImage,
    thumbnail: stadiumImage,
  },
  {
    id: "2",
    title: "EXPERIENCE ADDIS ABABA FROM A WHOLE NEW PERSPECTIVE",
    description:
      "Discover the best places to visit and things to do in Addis Ababa. We have a wide range of experiences to make your trip memorable.",
    image: womensquareImage,
    thumbnail: womensquareImage,
  },
  {
    id: "3",
    title: "EXPERIENCE ADDIS ABABA FROM A WHOLE NEW PERSPECTIVE",
    description:
      "Discover the best places to visit and things to do in Addis Ababa. We have a wide range of experiences to make your trip memorable.",
    image: keberoImage,
    thumbnail: keberoImage,
  },
]

