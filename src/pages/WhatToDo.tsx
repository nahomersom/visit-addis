import CoffeCulture from "@/components/culture/CoffeCulture"
import CulturalEtiquette from "@/components/culture/CulturalEtiquette"
import CultureCta from "@/components/culture/CultureCta"
import CultureHero from "@/components/culture/CultureHero"
import ModernLife from "@/components/culture/ModernLife"
// import TraditionAspires from "@/components/culture/TraditionAspires"

const WhatToDo = () => {
  return (
    <main>
      <CultureHero />
      {/* <TraditionAspires /> */}
      <ModernLife />
      <CoffeCulture />
      <CulturalEtiquette />
      <CultureCta />
    </main>
  )
}

export default WhatToDo