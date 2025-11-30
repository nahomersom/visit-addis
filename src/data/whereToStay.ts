import hikingImage from "@/assets/images/hiking.png"
import buildingsImage from "@/assets/images/buildings.jpg"
import catholicChurchImage from "@/assets/images/catholicChurch.jpg"
import keberoImage from "@/assets/images/kebero.jpg"
import oldHouseImage from "@/assets/images/oldHouse.jpg"
import stadiumImage from "@/assets/images/stadium.jpg"
import womensquareImage from "@/assets/images/womensquare.jpg"
import attractionImageOne from "@/assets/images/attractionImageOne.jpg"
import attractionImageTwo from "@/assets/images/attractionImageTwo.jpg"
import attractionImageThree from "@/assets/images/attractionImageThree.png"
import attractionImageFour from "@/assets/images/attractionImageFour.png"
import hikingIcon from "@/assets/icons/hiking.svg"
import museumsIcon from "@/assets/icons/museums.svg"
import foodIcon from "@/assets/icons/food.svg"
import entertainmentIcon from "@/assets/icons/entertainment.svg"
import shoppingIcon from "@/assets/icons/shopping.svg"
import musicIcon from "@/assets/icons/music.svg"

export interface ActivityCategory {
  id: string
  name: string
  icon: string
  image: string
}

export interface MostLovedItem {
  id: string
  title: string
  description: string
  location: string
  rating: number
  tags: string[]
  image: string
}

export interface IconicPlace {
  id: string
  title: string
  description: string
  image: string
}

export interface WhatsHotItem {
  id: string
  title: string
  date: string
  category: string
  description: string
  image: string
}

export const activityCategories: ActivityCategory[] = [
  { id: "1", name: "Outdoor", icon: hikingIcon, image: hikingImage },
  { id: "2", name: "Cultural", icon: museumsIcon, image: buildingsImage },
  { id: "3", name: "Food & Drinks", icon: foodIcon, image: keberoImage },
  { id: "4", name: "Night Life", icon: musicIcon, image: stadiumImage },
  { id: "5", name: "Entertainment", icon: entertainmentIcon, image: womensquareImage },
  { id: "6", name: "Shopping", icon: shoppingIcon, image: oldHouseImage },
]

export const mostLovedItems: MostLovedItem[] = [
  {
    id: "1",
    title: "🏕️ Adventure & Outdoors",
    description: "Lorem ipsum dolor sit amet consectetur. Leo adipiscing nibh risus aenean et vitae et. Tristique urna leo nisl quisque. Sem massa elementum lacus ut volutpat interdum lectus purus quis. Eget magna at donec urna sit viverra porta tellus pellentesque.",
    location: "Addis Ababa, Ethiopia",
    rating: 4.9,
    tags: ["Momo's Kitchen", "Romina", "Tasty Triscuit", "Savory Bites", "Gourmet Delights", "Fresh Fare"],
    image: buildingsImage,
  },
  {
    id: "2",
    title: "Cultural Experience",
    description: "Lorem ipsum dolor sit amet consectetur. Leo adipiscing nibh risus aenean et vitae et. Tristique urna leo nisl quisque.",
    location: "Addis Ababa, Ethiopia",
    rating: 4.8,
    tags: ["Museum", "Art Gallery", "Traditional"],
    image: catholicChurchImage,
  },
  {
    id: "3",
    title: "Food & Dining",
    description: "Lorem ipsum dolor sit amet consectetur. Leo adipiscing nibh risus aenean et vitae et.",
    location: "Addis Ababa, Ethiopia",
    rating: 4.7,
    tags: ["Restaurant", "Cafe", "Local Cuisine"],
    image: keberoImage,
  },
  {
    id: "4",
    title: "Nightlife & Entertainment",
    description: "Lorem ipsum dolor sit amet consectetur. Leo adipiscing nibh risus aenean et vitae et. Tristique urna leo nisl quisque.",
    location: "Addis Ababa, Ethiopia",
    rating: 4.6,
    tags: ["Bars", "Clubs", "Live Music", "Dancing"],
    image: stadiumImage,
  },
]

export const iconicPlaces: IconicPlace[] = [
  {
    id: "1",
    title: "Natural Wonders",
    description: "Discover breathtaking landscapes and natural beauty",
    image: attractionImageOne,
  },
  {
    id: "2",
    title: "Entertainment Venues",
    description: "Experience the vibrant entertainment scene",
    image: attractionImageTwo,
  },
  {
    id: "3",
    title: "Cultural Heritage",
    description: "Explore traditional crafts and cultural artifacts",
    image: attractionImageThree,
  },
  {
    id: "4",
    title: "Performing Arts",
    description: "Witness traditional performances and modern shows",
    image: attractionImageFour,
  },
  {
    id: "5",
    title: "Local Dining",
    description: "Savor authentic Ethiopian cuisine",
    image: keberoImage,
  },
  {
    id: "6",
    title: "Community Events",
    description: "Join local celebrations and community gatherings",
    image: womensquareImage,
  },
]

export const whatsHotItems: WhatsHotItem[] = [
  {
    id: "1",
    title: "Art Gallery",
    date: "JAN 18, 2025",
    category: "EVENTS",
    description: "Lorem ipsum dolor sit amet consectetur. Nulla facilisis vel id morbi. Lectus id odio quam ut tincidunt commodo ut. Nisl eget elit pretium id adipiscing nunc ac volutpat amet. Et sed quam commodo tortor eget.",
    image: buildingsImage,
  },
  {
    id: "2",
    title: "Adwa Celebration",
    date: "JAN 18, 2025",
    category: "EVENTS",
    description: "Lorem ipsum dolor sit amet consectetur. Nulla facilisis vel id morbi Lectus id odio quam.",
    image: catholicChurchImage,
  },
  {
    id: "3",
    title: "Sport And Health",
    date: "JAN 18, 2025",
    category: "EVENTS",
    description: "Lorem ipsum dolor sit amet consectetur. Nulla facilisis vel id morbi Lectus id odio quam.",
    image: stadiumImage,
  },
]

