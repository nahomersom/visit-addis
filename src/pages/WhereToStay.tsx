import { FindThingsToDo } from "@/components/sections/FindThingsToDo"
import { MostLovedByTourists } from "@/components/sections/MostLovedByTourists"
import { IconicPlaces } from "@/components/sections/IconicPlaces"
import { WhatsHotThisMonth } from "@/components/sections/WhatsHotThisMonth"
import ThingToDoHero from "@/components/sections/ThingsToDoHero"
import { useThingsToDo } from "@/hooks/useThingsToDo"

export default function WhereToStay() {
  const { data } = useThingsToDo();
  
  const activitiesTitle = data?.data?.activities?.header?.title || "Find Things To Do";
  const activitiesSubtitle = data?.data?.activities?.header?.subtitle || "";

  return (
    <main className="min-h-screen">
      <ThingToDoHero />
      <FindThingsToDo 
        isForThingsTodo 
        title={activitiesTitle}
        description={activitiesSubtitle} 
      />
      <MostLovedByTourists />
      <IconicPlaces />
      <WhatsHotThisMonth />
    </main>
  )
}
