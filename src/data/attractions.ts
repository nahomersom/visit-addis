import attractionImageOne from "@/assets/images/attractionImageOne.jpg"
import attractionImageTwo from "@/assets/images/attractionImageTwo.jpg"
import attractionImageThree from "@/assets/images/attractionImageThree.png"
import attractionImageFour from "@/assets/images/attractionImageFour.png"


export interface Attraction {
  id: string
  title: string
  rating: number
  location: string
  tags: string[]
  image: string
}

export const attractions: Attraction[] = [
  {
    id: "1",
    title: "Entoto Natural Park",
    rating: 4.9,
    location: "Addis Ababa, Ethiopia",
    tags: ["Paintball", "Horse Riding", "Archery", "Gokart", "Zipline"],
    image: attractionImageOne,
  },
  {
    id: "2",
    title: "Lion Of Judah Monument",
    rating: 4.9,
    location: "Addis Ababa, Ethiopia",
    tags: ["Paintball", "Horse Riding", "Archery", "Gokart", "Zipline"],
    image: attractionImageTwo,
  },
  {
    id: "3",
    title: "Friendship Park",
    rating: 4.9,
    location: "Addis Ababa, Ethiopia",
    tags: ["Walk", "Ice-cream", "Lake", "Fish", "Restaurant"],
    image: attractionImageThree,
  },
  {
    id: "4",
    title: "Science Museum of Ethiopia",
    rating: 4.9,
    location: "Addis Ababa, Ethiopia",
    tags: ["Games", "Water History", "Science", "History"],
    image: attractionImageFour,
  },
]

