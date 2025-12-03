<<<<<<< HEAD
// import ActivityEvents from "@/components/activitydetail/ActivityEvents"
// import ActivityExploreLocations from "@/components/activitydetail/ActivityExplore"
// import ActivityHero from "@/components/activitydetail/ActivityHero"
// import ActivityNewLetter from "@/components/activitydetail/ActivityNewsLetter"
// import FaqSection from "@/components/activitydetail/FaqSection"
// import HikingPage from "@/components/activitydetail/HikingPage"
// import RelatedBlogs from "@/components/activitydetail/RelatedBlogs"



const WhereToStay = () => {
  return (
    <main>
      {/* <ActivityHero />
      <HikingPage />
      <ActivityEvents />
      <ActivityNewLetter />
      <ActivityExploreLocations />
      <RelatedBlogs />
      <FaqSection /> */}
    </main>
  )
}

export default WhereToStay
=======
import { FindThingsToDo } from "@/components/sections/FindThingsToDo"
import { MostLovedByTourists } from "@/components/sections/MostLovedByTourists"

import { IconicPlaces } from "@/components/sections/IconicPlaces"
import { WhatsHotThisMonth } from "@/components/sections/WhatsHotThisMonth"
import ThingToDoHero from "@/components/sections/ThingsToDoHero"

export function WhereToStay() {
  return (
    <main className="min-h-screen">
      <ThingToDoHero />
      <FindThingsToDo description="Lorem ipsum dolor sit amet consectetur. Leo adipiscing nibh risus aenean." />
      <MostLovedByTourists />
     
      <IconicPlaces />
      <WhatsHotThisMonth />
    </main>
  )
}
>>>>>>> 098dac6f4f162361d3367a741ae411ea06ead7c9
