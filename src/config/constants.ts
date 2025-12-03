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
import hikingIcon from "@/assets/icons/hikingWhite.svg"
import piassaBackground from "@/assets/images/piassa-background.jpg"
import trainImage from "@/assets/images/train.png"
import busImage from "@/assets/images/bus.png"
import bicycleImage from "@/assets/images/biceycle.png"
import minibusImage from "@/assets/images/minibus.png"
import taxidriverImage from "@/assets/images/taxidriver.png"
import exploreBackgroundImage from "@/assets/images/exploreBackground.png"
import kidImage from "@/assets/images/kid.png"
import visaImage from "@/assets/images/visa.png"
import planeTicketImage from "@/assets/images/planeTicket.png"

export const SITE_CONFIG = {
  name: "Visit Addis Ababa",
  description: "Discover the best places to visit and things to do in Addis Ababa",
  tagline: "The Vibrant Heart of Africa",
  heroDescription:"Picture a lively city where tradition meets modern life. Culture thrives everywhere, showcasing historical landmarks, contemporary art, and vibrant street performances that engage the senses."
} as const

export const NAV_LINKS = [
  { label: "Culture And Lifestyle", href: ROUTES.WHAT_TO_DO },
  // { label: "Things To Do", href: ROUTES.WHERE_TO_STAY },
  { label: "Plan Your Trip", href: ROUTES.PLAN_YOUR_TRIP },
  { label: "Festivals And Events", href: ROUTES.EVENTS },
  { label: "Guide", href: ROUTES.GUIDE },
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
    icon: hikingIcon,
    label: "Hiking",
    alt: "hiking icon"
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
      "Lorem ipsum dolor sit amet consectetur. Nulla facilisis vel id morbi. Lectus id odio quam ut tincidunt commodo ut. Nisi eget elit pretium id adipiscing nunc ac volutpat amet. Et sed quam commodo tortor eget.",
  },
  {
    id: "2",
    number: "2",
    title: "Transportation Options",
    description:
      "Lorem ipsum dolor sit amet consectetur. Nulla facilisis vel id morbi. Lectus id odio quam ut tincidunt commodo ut. Nisi eget elit pretium id adipiscing nunc ac volutpat amet. Et sed quam commodo tortor eget.",
  },
  {
    id: "3",
    number: "3",
    title: "Hotels, Resorts",
    description:
      "Lorem ipsum dolor sit amet consectetur. Nulla facilisis vel id morbi. Lectus id odio quam ut tincidunt commodo ut. Nisi eget elit pretium id adipiscing nunc ac volutpat amet. Et sed quam commodo tortor eget.",
  },
  {
    id: "4",
    number: "4",
    title: "Food & Drinks",
    description:
      "Lorem ipsum dolor sit amet consectetur. Nulla facilisis vel id morbi. Lectus id odio quam ut tincidunt commodo ut. Nisi eget elit pretium id adipiscing nunc ac volutpat amet. Et sed quam commodo tortor eget.",
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

export interface DownloadableGuide {
  title: string
  description: string
}

export const DOWNLOADABLE_GUIDES: DownloadableGuide[] = [
  {
    title: "First-time Visitor Guide",
    description: "Everything you need to know before arriving — travel essentials, safety tips, transport options, and must-see spots to make your first Addis experience unforgettable.",
  },
  {
    title: "Cultural Etiquette Guide",
    description: "Learn how to greet, dine, and connect with locals respectfully. This guide helps you navigate traditions and customs with confidence and cultural awareness.",
  },
  {
    title: "Addis Food Map",
    description: "Discover the taste of Addis! Explore traditional dishes, local markets, and modern cafés with our curated food map — your passport to authentic Ethiopian flavors.",
  },
] as const

export const DOWNLOADABLE_GUIDES_CONFIG = {
  title: "Downloadable Guides",
  description: "Plan your visit with our easy-to-read travel guides. Whether it's your first time in Addis, learning local etiquette, or exploring where to eat, these PDFs help you experience the city confidently and respectfully.",
  backgroundImage: piassaBackground,
} as const

export interface GettingAroundItem {
  title: string
  description: string
  icon: string
}

export const GETTING_AROUND_ITEMS: GettingAroundItem[] = [
  {
    title: "Light Rail Transit (LRT)",
    description: "The Addis Ababa Light Rail is the first of its kind in sub-Saharan Africa — a fast and affordable way to travel across the city. It runs north-south and east-west, connecting major areas and landmarks.",
    icon: trainImage,
  },
  {
    title: "City Buses",
    description: "Public buses operated by Anbessa City Bus provide extensive coverage across Addis. They're the most economical option, but can be crowded during rush hours. Routes are numbered and displayed in Amharic.",
    icon: busImage,
  },
  {
    title: "Walking And Biking",
    description: "Central Addis is walkable, especially in areas like Bole, Piassa, and around Meskel Square. Biking is less common but growing, with new paths emerging in parks and modern districts.",
    icon: bicycleImage,
  },
  {
    title: "Minibuses",
    description: "The famous blue-and-white minibuses are the backbone of Addis transportation. They're affordable and frequent, though routes are often unmarked — just listen to the conductor calling destinations.",
    icon: minibusImage,
  },
  {
    title: "Meter Taxi And Ride",
    description: "Yellow taxis are available in major areas, while ride-hailing apps like Ride, Feres, and ZayRide offer more convenience and transparency with pricing.",
    icon: taxidriverImage,
  },
] as const

export const GETTING_AROUND_CONFIG = {
  title: "Getting Around Addis Ababa",
  backgroundImage: exploreBackgroundImage,
} as const

export interface UsefulContact {
  service: string
  contact: string
}

export const USEFUL_CONTACTS: UsefulContact[] = [
  {
    service: "Immigration, Nationality & Vital Events Agency",
    contact: "www.invea.gov.et",
  },
  {
    service: "Ethiopian Airlines Helpdesk",
    contact: "+251 11 665 6666",
  },
  {
    service: "Bole International Airport Info Desk",
    contact: "+251 11 665 0400",
  },
  {
    service: "Emergency (Police)",
    contact: "991",
  },
] as const

export const TRAVEL_CHECKLIST_ITEMS = [
  "Hotel or host contact info",
  "Visa Information",
  "Business & Long-Stay Visas",
  "Health & Vaccination Requirements",
  "Customs & Declarations",
  "On Arrival at Bole International Airport",
  "Useful Contacts",
] as const

export interface FAQItem {
  question: string
  answer?: string
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Lorem Ipsum Dolor Sit Amet Consectetur. Orci Netus Velit Pulvinar Neque Pulvinar Elementum Aliquet Scelerisque.",
    answer: "Lorem ipsum dolor sit amet consectetur. Pellentesque vestibulum sed est cum adipiscing gravida amet. At lobortis amet penatibus et sollicitudin. Magnis diam in euismod neque venenatis eu eu nullam mi.",
  },
  {
    question: "Lorem Ipsum Dolor Sit Amet Consectetur. Orci Netus Velit Pulvinar Neque Pulvinar Elementum Aliquet Scelerisque.",
    answer: "Lorem ipsum dolor sit amet consectetur. Pellentesque vestibulum sed est cum adipiscing gravida amet. At lobortis amet penatibus et sollicitudin. Magnis diam in euismod neque venenatis eu eu nullam mi.",
  },
  {
    question: "Lorem Ipsum Dolor Sit Amet Consectetur. Orci Netus Velit Pulvinar Neque Pulvinar Elementum Aliquet Scelerisque.",
    answer: "Lorem ipsum dolor sit amet consectetur. Pellentesque vestibulum sed est cum adipiscing gravida amet. At lobortis amet penatibus et sollicitudin. Magnis diam in euismod neque venenatis eu eu nullam mi.",
  },
] as const

// Addis Ababa center coordinates: 9.1450° N, 38.7617° E
export const ADDIS_ABABA_CENTER: [number, number] = [9.1450, 38.7617]

export type LocationType = "eatery" | "hotel" | "museum" | "hiking" | "shopping" | "entertainment"

export interface Location {
  name: string
  type: LocationType
  lat: number
  lng: number
}

export const LOCATIONS: Location[] = [
  { name: "Toro Grill and Lounge", type: "eatery", lat: 9.1350, lng: 38.7517 },
  { name: "HOTTO", type: "eatery", lat: 9.1400, lng: 38.7567 },
  { name: "The Hacienda Restaurant", type: "eatery", lat: 9.1420, lng: 38.7587 },
  { name: "Berlin Bar & Restaurant", type: "eatery", lat: 9.1440, lng: 38.7607 },
  { name: "URAEL", type: "eatery", lat: 9.1460, lng: 38.7627 },
  { name: "Ye Tiru Kitfo", type: "eatery", lat: 9.1380, lng: 38.7717 },
  { name: "Zemera Cultural Bar and Restaurant", type: "eatery", lat: 9.1500, lng: 38.7557 },
  { name: "مطعم بكري BAKRI RESTAURANT", type: "eatery", lat: 9.1480, lng: 38.7637 },
  { name: "Senayit Restaurant - مطعم سانایت", type: "eatery", lat: 9.1520, lng: 38.7507 },
  { name: "Beemnet Restaurant No. 4", type: "eatery", lat: 9.1360, lng: 38.7747 },
  { name: "Blue Sky hotel", type: "hotel", lat: 9.1540, lng: 38.7487 },
] as const

export interface VisaType {
  id: string
  name: string
  image: string
  description: string
}

export const VISA_TYPES: VisaType[] = [
  {
    id: "tourist",
    name: "Tourist",
    image: kidImage,
    description: "Lorem ipsum dolor sit amet consectetur. Leo adipiscing nibh risus aenean et vitae et. Tristique urna leo nisl quisque.",
  },
  {
    id: "business",
    name: "Business",
    image: visaImage,
    description: "Lorem ipsum dolor sit amet consectetur. Leo adipiscing nibh risus aenean et vitae et. Tristique urna leo nisl quisque.",
  },
  {
    id: "transit",
    name: "Transit",
    image: planeTicketImage,
    description: "Lorem ipsum dolor sit amet consectetur. Leo adipiscing nibh risus aenean et vitae et. Tristique urna leo nisl quisque.",
  },
] as const

