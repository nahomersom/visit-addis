import { FindThingsToDo } from "@/components/sections/FindThingsToDo"
import { MostLovedByTourists } from "@/components/sections/MostLovedByTourists"

import { IconicPlaces } from "@/components/sections/IconicPlaces"
import { WhatsHotThisMonth } from "@/components/sections/WhatsHotThisMonth"
import ThingToDoHero from "@/components/sections/ThingsToDoHero"

export function WhereToStay() {
  return (
    <main className="min-h-screen">
      <ThingToDoHero />
      <FindThingsToDo isForThingsTodo description="Lorem ipsum dolor sit amet consectetur. Leo adipiscing nibh risus aenean." />
      <MostLovedByTourists />
     
      <IconicPlaces />
      <WhatsHotThisMonth />
    </main>
  )
}
