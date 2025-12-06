import checklistIcon from "@/assets/icons/checklist.png"
import { TRAVEL_CHECKLIST_ITEMS } from "@/config/constants"

export function TravelChecklist() {
  return (
    <section className="py-6 px-6 md:px-[48px] lg:py-[60px] lg:px-[120px] ">
      <div className="flex flex-col items-center">
        {/* Title */}
        <div className="text-center mb-4">
          <h2 className="text-2xl font-semibold mb-1">
            <span className="text-theme-secondary">Before You</span>{" "}
            <span className="text-text-dark-100">Travel Checklist</span>
          </h2>
          <p className="text-xs md:text-sm text-text-dark-80">
            Essential Tips to Consider Before You Embark on Your Journey.
          </p>
        </div>

        {/* Checklist Items Grid */}
        <div className="flex flex-col gap-2 md:gap-4 w-full max-w-6xl mt-6">
          {/* Top Row - 4 items */}
          <div className="flex flex-wrap justify-center gap-4">
            {TRAVEL_CHECKLIST_ITEMS.slice(0, 4).map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-white rounded-[32px] p-2 pr-4 border border-accent-80"
                style={{
                  boxShadow: `
                    0px 2px 4px 0px rgba(209, 209, 209, 0.1),
                    0px 8px 8px 0px rgba(209, 209, 209, 0.09),
                    0px 17px 10px 0px rgba(209, 209, 209, 0.05),
                    0px 31px 12px 0px rgba(209, 209, 209, 0.01),
                    0px 49px 14px 0px rgba(209, 209, 209, 0)
                  `,
                }}
              >
                <div className="shrink-0">
                  <img src={checklistIcon} alt="check" className="w-5 h-5 object-contain" />
                </div>
                <span className="text-[10px] md:text-sm text-text-dark-100 font-medium">
                  {item}
                </span>
              </div>
            ))}
          </div>
          {/* Bottom Row - 3 items centered */}
          <div className="flex flex-wrap justify-center gap-4">
            <div className="hidden lg:block"></div>
            {TRAVEL_CHECKLIST_ITEMS.slice(4).map((item, index) => (
              <div
                key={index + 4}
                className="flex items-center gap-2 bg-white rounded-[32px] p-2 pr-4 border border-accent-80 min-h-[52px]"
                style={{
                  boxShadow: `
                    0px 2px 4px 0px rgba(209, 209, 209, 0.1),
                    0px 8px 8px 0px rgba(209, 209, 209, 0.09),
                    0px 17px 10px 0px rgba(209, 209, 209, 0.05),
                    0px 31px 12px 0px rgba(209, 209, 209, 0.01),
                    0px 49px 14px 0px rgba(209, 209, 209, 0)
                  `,
                }}
              >
                <div className="shrink-0">
                  <img src={checklistIcon} alt="check" className="w-6 h-6 object-contain" />
                </div>
                <span className="text-[10px] md:text-xs text-text-dark-100 font-medium">
                  {item}
                </span>
              </div>
            ))}
            <div className="hidden lg:block"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

