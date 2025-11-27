export interface Attraction {
  id: string
  title: string
  rating: number
  reviews: number
  images: number
  tags: string[]
  image: string
}

export const attractions: Attraction[] = [
  {
    id: "1",
    title: "Goro Race Way Parc",
    rating: 4.5,
    reviews: 24,
    images: 120,
    tags: ["Family", "Outdoor", "Sport", "Fun"],
    image: "/assets/images/goro-race-way.jpg",
  },
  {
    id: "2",
    title: "Lion of Judah Monument",
    rating: 4.5,
    reviews: 24,
    images: 120,
    tags: ["History", "Culture", "Landmark"],
    image: "/assets/images/lion-of-judah.jpg",
  },
  {
    id: "3",
    title: "Friendship Park",
    rating: 4.5,
    reviews: 24,
    images: 120,
    tags: ["Nature", "Relax", "Park"],
    image: "/assets/images/friendship-park.jpg",
  },
]

