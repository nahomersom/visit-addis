import { ROUTES } from "./routes"
import musicIcon from "@/assets/icons/music.svg"
import cuisineIcon from "@/assets/icons/cuisine.svg"
import coffeeIcon from "@/assets/icons/coffee.svg"
import historicSitesIcon from "@/assets/icons/historicSites.svg"

export const SITE_CONFIG = {
  name: "Visit Addis Ababa",
  description: "Discover the best places to visit and things to do in Addis Ababa",
  tagline: "The Vibrant Heart of Africa",
  heroDescription:"Picture a lively city where tradition meets modern life. Culture thrives everywhere, showcasing historical landmarks, contemporary art, and vibrant street performances that engage the senses."
} as const

export const NAV_LINKS = [
  { label: "Culture And Lifestyle", href: ROUTES.WHAT_TO_DO },
  // { label: "Things To Do", href: ROUTES.WHERE_TO_STAY },
  { label: "Plan Your Trip", href: ROUTES.EVENTS },
  { label: "Festivals And Events", href: ROUTES.PLAN_YOUR_TRIP },
  { label: "Guide", href: ROUTES.ABOUT },
  { label: "Blogs", href: ROUTES.BLOGS },

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

