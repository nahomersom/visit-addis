import PlanYourTripHero from "@/components/sections/PlanYourTripHero"
import { VisaInformation } from "@/components/sections/VisaInformation"
import { BeforeYouTravelChecklist } from "@/components/sections/BeforeYouTravelChecklist"
import { FlightsAndGettingHere } from "@/components/sections/FlightsAndGettingHere"
import { FindThingsToDo } from "@/components/sections/FindThingsToDo"
import { CompareHotelPrices } from "@/components/sections/CompareHotelPrices"
import { WeatherInAddisAbaba } from "@/components/sections/WeatherInAddisAbaba"
import { DownloadTheApp } from "@/components/sections/DownloadTheApp"

export function PlanYourTrip() {
  return (
    <main className="min-h-screen">
      <PlanYourTripHero />
      <VisaInformation />
      <BeforeYouTravelChecklist />
      <FlightsAndGettingHere />
      <FindThingsToDo 
        title="Activities To Inspire You"
        description="Discover exciting activities and experiences that will make your trip to Addis Ababa unforgettable."
      />
      <CompareHotelPrices />
      <WeatherInAddisAbaba />
      <DownloadTheApp />
    </main>
  )
}

