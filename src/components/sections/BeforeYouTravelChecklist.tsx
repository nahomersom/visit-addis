import { Check, Lightbulb } from "lucide-react"

const checklistItems = [
  "Valid passport (6+ months)",
  "eVisa printout or confirmation email",
  "Return ticket",
  "Hotel or host contact info",
]

export function BeforeYouTravelChecklist() {
  return (
    <section className="py-[60px] px-4 sm:px-6 lg:px-[120px] bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center text-center mb-10 gap-2">
          <h2 className="text-2xl sm:text-3xl font-semibold text-text-dark-100">
            Before You Travel Checklist
          </h2>
          <p className="text-sm sm:text-base text-text-dark-80 max-w-2xl">
            Essential Tips to Consider Before You Embark on Your Journey.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {checklistItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 bg-accent-80 rounded-xl p-4"
            >
              <div className="flex-shrink-0 size-6 rounded-full bg-green flex items-center justify-center">
                <Check className="size-4 text-white" />
              </div>
              <span className="text-sm sm:text-base text-text-dark-100 font-medium">
                {item}
              </span>
            </div>
          ))}
        </div>

        <div className="flex items-start gap-3 bg-accent-80 rounded-xl p-4 max-w-2xl mx-auto">
          <div className="flex-shrink-0 size-6 rounded-full bg-theme-primary flex items-center justify-center mt-0.5">
            <Lightbulb className="size-4 text-white" />
          </div>
          <div>
            <p className="text-sm font-semibold text-text-dark-100 mb-1">Tip:</p>
            <p className="text-sm text-text-dark-80">
              Save a digital copy of your passport and visa before you travel.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

