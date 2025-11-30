import { FindThingsToDo } from "@/components/sections/FindThingsToDo"
import { MostLovedByTourists } from "@/components/sections/MostLovedByTourists"
import { PlanYourDay } from "@/components/sections/PlanYourDay"
import { IconicPlaces } from "@/components/sections/IconicPlaces"
import { WhatsHotThisMonth } from "@/components/sections/WhatsHotThisMonth"
import ThingToDoHero from "@/components/sections/ThingsToDoHero"

export function WhereToStay() {
  return (
    <main className="min-h-screen">
      <ThingToDoHero />
      <FindThingsToDo />
      <MostLovedByTourists />
      <PlanYourDay />
      <IconicPlaces />
      <WhatsHotThisMonth />
    </main>
  )
}
