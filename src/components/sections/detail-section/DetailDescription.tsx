import { useNavigate, useLocation } from "react-router-dom"
import { ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { TravelTipItem } from "@/types/travelTips"
import type { StrapiMedia } from "@/types/home"

interface DetailDescriptionProps {
  travelTip?: TravelTipItem
}

// Helper function to get full image URL
const getImageUrl = (icon: StrapiMedia | null | undefined): string => {
  if (!icon) return ""
  
  const formats = icon.formats as any
  if (formats && typeof formats === 'object') {
    if (formats.thumbnail?.url) {
      const thumbnailUrl = formats.thumbnail.url
      if (thumbnailUrl.startsWith("http")) return thumbnailUrl
      const baseUrl = import.meta.env.VITE_BASE_URL || "https://api.visitaddisababa.et"
      return `${baseUrl}${thumbnailUrl}`
    }
    if (formats.medium?.url) {
      const mediumUrl = formats.medium.url
      if (mediumUrl.startsWith("http")) return mediumUrl
      const baseUrl = import.meta.env.VITE_BASE_URL || "https://api.visitaddisababa.et"
      return `${baseUrl}${mediumUrl}`
    }
  }
  
  const url = icon.url || ""
  if (url.startsWith("http")) return url
  const baseUrl = import.meta.env.VITE_BASE_URL || "https://api.visitaddisababa.et"
  return `${baseUrl}${url}`
}

export function DetailDescription({ travelTip }: DetailDescriptionProps) {
  const navigate = useNavigate()
  const location = useLocation()
  
  // Get the parent route from location state, default to Guide
  const fromRoute = (location.state as { from?: string })?.from || "/guide/"

  const handleBack = () => {
    navigate(fromRoute)
  }

  const iconSrc = travelTip?.icon ? getImageUrl(travelTip.icon) : null

  return (
    <section className="py-10 px-6 md:px-[48px] lg:py-[60px] lg:px-[120px] ">
      {/* Back Button */}
      <Button
        onClick={handleBack}
        type="button"
        className="bg-accent-100 text-sm px-6 py-4 text-text-dark-100 rounded-[105px] min-h-[50px] max-w-[115px] mt-2 self-center"
      >
        <ChevronLeft className="w-5 h-5" />
        <span className="text-sm font-medium">Back</span>
      </Button>

      {/* Heading with Icon */}
      <div className="flex items-center gap-2 mt-6 mb-4">
        {iconSrc && (
          <img
            src={iconSrc}
            alt={travelTip?.icon?.alternativeText || travelTip?.title || "Travel Tip"}
            className="md:size-12 size-6 object-contain"
          />
        )}
        <h1 className="text-sm md:text-2xl font-semibold text-text-dark-100">
          {travelTip?.title || "Travel Documents & Entry Requirement"}
        </h1>
      </div>

      {/* Description */}
      <div className="flex flex-col gap-4">
        {travelTip?.description ? (
          <p className="text-xs md:text-sm text-text-dark-80 leading-relaxed whitespace-pre-line">
            {travelTip.description}
          </p>
        ) : (
          <>
            <p className="text-xs md:text-sm text-text-dark-80 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. Pellentesque vestibulum sed est cum adipiscing gravida amet. At lobortis amet penatibus et sollicitudin. Magnis diam in euismod neque venenatis eu eu nullam mi. Est mauris proin nulla et id cursus neque non. Velit mus accumsan congue massa urna. Enim orci tincidunt vestibulum viverra sem sed. Integer tempus tristique gravida viverra nulla aliquam arcu ac in. Phasellus in vitae vel curabitur felis egestas ornare. Euismod in at turpis faucibus euismod gravida luctus magna. Ut sit varius purus lobortis viverra senectus varius. Cum egestas tristique quam nulla neque. Blandit in in turpis aliquam.
            </p>
            <p className="text-xs md:text-sm text-text-dark-80 leading-relaxed">
              Luctus vel metus sit ultrices massa tristique vulputate. Maecenas mauris nullam suspendisse malesuada viverra cras neque bibendum lectus. Elit ut magna et egestas lobortis nunc tellus commodo adipiscing. Mi nisl rutrum sed lectus. Orci erat nunc urna sagittis. Nec et elementum neque vitae luctus vitae mauris risus leo. Ullamcorper convallis ultrices sem odio maecenas nibh rhoncus vivamus tincidunt. Habitant facilisi ac imperdiet augue est et vitae. Volutpat sit orci dolor diam senectus pellentesque scelerisque sed. Fames dui tortor eget metus. Facilisis iaculis enim tincidunt dolor orci ipsum sed lectus platea. Sit sed nisi ultrices volutpat ac neque. Aliquet consequat augue mus et vel.
            </p>
          </>
        )}
      </div>
    </section>
  )
}

