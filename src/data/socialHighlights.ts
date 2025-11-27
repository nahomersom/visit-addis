export interface SocialHighlight {
  id: string
  user: {
    name: string
    avatar: string
  }
  location: string
  rating: number
  image: string
}

export const socialHighlights: SocialHighlight[] = [
  {
    id: "1",
    user: { name: "Jon Adams", avatar: "/assets/images/avatar1.jpg" },
    location: "Addis Ababa Stadium",
    rating: 4.5,
    image: "/assets/images/stadium.jpg",
  },
  {
    id: "2",
    user: { name: "Veronica Mia", avatar: "/assets/images/avatar2.jpg" },
    location: "Unity Park, Addis Ababa",
    rating: 4.5,
    image: "/assets/images/unity-park.jpg",
  },
  {
    id: "3",
    user: { name: "Ethan Turner", avatar: "/assets/images/avatar3.jpg" },
    location: "Addis Ababa Museum",
    rating: 4.5,
    image: "/assets/images/museum.jpg",
  },
  {
    id: "4",
    user: { name: "Olivia Carter", avatar: "/assets/images/avatar4.jpg" },
    location: "Addis Ababa Culture",
    rating: 4.5,
    image: "/assets/images/culture.jpg",
  },
  {
    id: "5",
    user: { name: "Sophia King", avatar: "/assets/images/avatar5.jpg" },
    location: "St. George's Cathedral",
    rating: 4.5,
    image: "/assets/images/cathedral.jpg",
  },
  {
    id: "6",
    user: { name: "Noah Green", avatar: "/assets/images/avatar6.jpg" },
    location: "Addis Ababa City",
    rating: 4.5,
    image: "/assets/images/city.jpg",
  },
]

