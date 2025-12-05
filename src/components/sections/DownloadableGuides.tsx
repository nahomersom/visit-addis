import { Download } from "lucide-react"
import { DOWNLOADABLE_GUIDES, DOWNLOADABLE_GUIDES_CONFIG } from "@/config/constants"

export function DownloadableGuides() {

  return (
    <section className="py-10 px-6 lg:py-[60px] lg:px-[120px] ">

      <div
        className="relative p-4 rounded-[24px] overflow-hidden flex flex-col min-h-[500px]"
        style={{
          backgroundImage: `url(${DOWNLOADABLE_GUIDES_CONFIG.backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/45 z-0"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center mt-auto">
        {/* Title and Description */}
        <div className="text-center mb-4 max-w-[690px]">
          <h2 className="text-2xl lg:text-3xl  font-semibold text-white mb-2">
            {DOWNLOADABLE_GUIDES_CONFIG.title}
          </h2>
          <p className="text-xs md:text-sm text-white/80">
            {DOWNLOADABLE_GUIDES_CONFIG.description}
          </p>
        </div>

        {/* Guide Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-7xl">
          {DOWNLOADABLE_GUIDES.map((guide, index) => (
            <div
              key={index}
              className="rounded-[24px] p-4 backdrop-blur-[32px] bg-white/20 flex flex-col items-center justify-center gap-2"
             
            >
              <h3 className="text-lg font-semibold text-white ">
                {guide.title}
              </h3>
              <p className="text-xs text-white/80 text-center">
                {guide.description}
              </p>
              <button className="flex items-center gap-2 bg-theme-primary text-white text-sm px-6 py-3 rounded-[105px] font-medium text-sm hover:opacity-90 transition-opacity min-h-14">
                <span>Download</span>
                <Download className="w-5 h-5" />
              </button>
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  )
}
