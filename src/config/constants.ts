import { ROUTES } from "./routes"
import musicIcon from "@/assets/icons/music.svg"
import cuisineIcon from "@/assets/icons/cuisine.svg"
import coffeeIcon from "@/assets/icons/coffee.svg"
import historicSitesIcon from "@/assets/icons/historicSites.svg"
import facebookIcon from "@/assets/icons/facebook.svg"
import youtubeIcon from "@/assets/icons/youtube.svg"
import instagramIcon from "@/assets/icons/instagram.svg"
import linkedinIcon from "@/assets/icons/linkedin.svg"
import tiktokIcon from "@/assets/icons/tiktok.svg"
import climateImage from "@/assets/images/climate.png"
import womensquareImage from "@/assets/images/womensquare.jpg"
import oldHouseImage from "@/assets/images/oldHouse.jpg"
import hikingImage from "@/assets/images/hiking.png"

export const SITE_CONFIG = {
  name: "Visit Addis Ababa",
  description: "Discover the best places to visit and things to do in Addis Ababa",
  tagline: "The Vibrant Heart of Africa",
  heroDescription:"Picture a lively city where tradition meets modern life. Culture thrives everywhere, showcasing historical landmarks, contemporary art, and vibrant street performances that engage the senses."
} as const

export const NAV_LINKS = [
  { label: "Culture And Lifestyle", href: ROUTES.WHAT_TO_DO },
  { label: "Things To Do", href: ROUTES.WHERE_TO_STAY },
  { label: "Plan Your Trip", href: ROUTES.PLAN_YOUR_TRIP },
  { label: "Festivals And Events", href: ROUTES.EVENTS },
  { label: "Guide", href: ROUTES.ABOUT },
  { label: "Blogs", href: ROUTES.ABOUT },

] as const

export const EXPLORE_CATEGORIES = [
  {
    icon: musicIcon,
    label: "Live Music & Nightlife",
    alt: "music icon"
  },
  {
    icon: cuisineIcon,
    label: "Local Cuisine",
    alt: "cuisine icon"
  },
  {
    icon: coffeeIcon,
    label: "Coffee & Tea Culture",
    alt: "coffee icon"
  },
  {
    icon: historicSitesIcon,
    label: "Historic Sites & Architecture",
    alt: "historic sites icon"
  }
] as const

export interface AdviceItem {
  id: string
  number: string
  title: string
  description: string
}

export const ADVICE_ITEMS: AdviceItem[] = [
  {
    id: "1",
    number: "1",
    title: "Best Time To Visit",
    description:
      "Plan your visit during the dry season for the best weather and experiences.",
  },
  {
    id: "2",
    number: "2",
    title: "Transportation Options",
    description:
      "Explore various transportation methods available in the city for easy navigation.",
  },
  {
    id: "3",
    number: "3",
    title: "Hotels, Resorts",
    description:
      "Find the perfect accommodation that suits your needs and budget.",
  },
  {
    id: "4",
    number: "4",
    title: "Food & Drinks",
    description:
      "Discover the rich culinary culture and traditional Ethiopian cuisine.",
  },
]

export const STORY_IMAGES = [
  climateImage, // Main story
  womensquareImage, // Side story 1
  oldHouseImage, // Side story 2
  hikingImage, // Side story 3
]

export const FOOTER_LINKS = {
  explore: [
    { label: "Experiences", href: "#attractions" },
    { label: "Events & Festivals", href: "#events" },
    { label: "Plan Your Trip", href: "#food" },
    { label: "Travel Guides", href: "#plan" },
  ],
  plan: [
    { label: "Best Time To Visit", href: "#best-time" },
    { label: "Visa & Entry Info", href: "#transport" },
    { label: "Getting Around", href: "#hotels" },
    { label: "Travel Tips", href: "#food-drinks" },
  ],
  inspiration: [
    { label: "Featured Stories", href: "#health" },
    { label: "Suggested Itineraries", href: "#emergency" },
    { label: "Photo Gallery", href: "#documents" },
    { label: "Blogs", href: "#faqs" },
  ],
} as const

export const SOCIAL_LINKS = [
  { icon: facebookIcon, href: "#", label: "Facebook" },
  { icon: youtubeIcon, href: "#", label: "YouTube" },
  { icon: instagramIcon, href: "#", label: "Instagram" },
  { icon: linkedinIcon, href: "#", label: "LinkedIn" },
  { icon: tiktokIcon, href: "#", label: "TikTok" },
] as const

