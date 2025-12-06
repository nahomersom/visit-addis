import { useParams } from "react-router-dom"
import DetailHero from "@/components/sections/detail-section/DetailHero"
import { DetailDescription } from "@/components/sections/detail-section/DetailDescription"
import { UsefulContacts } from "@/components/sections/detail-section/UsefulContacts"
import { VisitBanner } from "@/components/sections/VisitBanner"
import { TravelChecklist } from "@/components/sections/detail-section/TravelChecklist"
import { FAQ } from "@/components/sections/detail-section/FAQ"
import { useTravelTips } from "@/hooks/useTravelTips"

export function Detail() {
  const { id } = useParams()
  const { data: travelTipsData } = useTravelTips()
  
  // Find the specific travel tip by ID
  const travelTip = travelTipsData?.data?.tips?.find(
    (tip) => tip.id === Number(id)
  )

  return (
    <main className="min-h-screen">
      <DetailHero />
      <DetailDescription travelTip={travelTip} />
      <UsefulContacts />
      <div className="hidden md:block">
        <VisitBanner />
      </div>
      <TravelChecklist />
      <FAQ />
    </main>
  )
}
  