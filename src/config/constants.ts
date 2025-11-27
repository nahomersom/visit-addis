import { ROUTES } from "./routes"

export const SITE_CONFIG = {
  name: "Visit Addis Ababa",
  description: "Discover the best places to visit and things to do in Addis Ababa",
  tagline: "The Vibrant Heart of Africa",
} as const

export const NAV_LINKS = [
  { label: "What to do", href: ROUTES.WHAT_TO_DO },
  { label: "Where to stay", href: ROUTES.WHERE_TO_STAY },
  { label: "Events", href: ROUTES.EVENTS },
  { label: "Plan your trip", href: ROUTES.PLAN_YOUR_TRIP },
  { label: "About us", href: ROUTES.ABOUT },
] as const

