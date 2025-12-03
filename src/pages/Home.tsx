import { Hero } from "@/components/sections/Hero"
import { TopAttractions } from "@/components/sections/TopAttractions"
import { ExploreLocations } from "@/components/sections/ExploreLocations"
import { ThingsToDo } from "@/components/sections/ThingsToDo"
import { ExperienceCarousel } from "@/components/sections/ExperienceCarousel"
import { VisitBanner } from "@/components/sections/VisitBanner" 
import { TravelTips } from "@/components/sections/TravelTips"
import { AdviceForTravelers } from "@/components/sections/AdviceForTravelers"
import { SocialHighlights } from "@/components/sections/SocialHighlights"
import { LatestStories } from "@/components/sections/LatestStories"
import { DownloadableHomeGuides } from "@/components/sections/home-section/DownloadbaleHomeGuide"

export function Home() {
  return (
    <main>
      <Hero />
      <TopAttractions />
      <ExploreLocations />
      <ThingsToDo />
      <ExperienceCarousel />
      <VisitBanner />
      <TravelTips />
      <AdviceForTravelers />
      <DownloadableHomeGuides />
      <SocialHighlights />
      <LatestStories />
    </main>
  )
}

