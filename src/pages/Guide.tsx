import GuideHero from "@/components/sections/guide-section/GuideHero"
import { SuggestedItineraries } from "@/components/sections/SuggestedItineraries"
import { DownloadableGuides } from "@/components/sections/DownloadableGuides"
import { GettingAround } from "@/components/sections/GettingAround"
import { ExploreVideo } from "@/components/sections/ExploreVideo"
import { TravelTips } from "@/components/sections/TravelTips"
import { ExploreLocations } from "@/components/sections/ExploreLocations"

export function Guide() {
  return (
    <main className="min-h-screen">
      <GuideHero />
      <TravelTips isColumn />
      <ExploreLocations fullWidth isForPlanyourTrp />
      <SuggestedItineraries />
      <DownloadableGuides />
      <GettingAround />
      <ExploreVideo />
    </main>
  )
}
