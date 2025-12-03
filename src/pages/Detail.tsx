import DetailHero from "@/components/sections/detail-section/DetailHero"
import { DetailDescription } from "@/components/sections/detail-section/DetailDescription"
import { UsefulContacts } from "@/components/sections/detail-section/UsefulContacts"
import { VisitBanner } from "@/components/sections/VisitBanner"
import { TravelChecklist } from "@/components/sections/detail-section/TravelChecklist"
import { FAQ } from "@/components/sections/detail-section/FAQ"

export function Detail() {
    return (
      <main className="min-h-screen">
        <DetailHero />
        <DetailDescription />
        <UsefulContacts />
        <div className="hidden md:block">
          <VisitBanner />
        </div>
        <TravelChecklist />
        <FAQ />
      </main>
    )
  }
  