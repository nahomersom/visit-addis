import badgeCheckIcon from "../../assets/icons/badgeCheck.svg"
import ideaIcon from "../../assets/icons/idea.svg"

const checklistItems = [
  "Hotel or host contact info",
  "Return ticket",
  "eVisa printout or confirmation email",
  "Valid passport (6+ months)"
]

export function BeforeYouTravelChecklist() {
  return (
       <section className="py-10 px-6 lg:py-[60px] lg:px-[120px] bg-accent-80">

        <div className="flex flex-col items-center text-center mb-6 md:mb-10 gap-2">
          <h2 className="text-2xl font-semibold text-text-dark-100">
            Before <span className="text-theme-secondary">You Travel</span> Checklist
          </h2>
          <p className="text-sm text-text-dark-80 max-w-2xl">
            Essential Tips to Consider Before You Embark on Your Journey.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {checklistItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-2 bg-theme-secondary rounded-4xl p-3 md:p-4 w-fit"
            >
                <img src={badgeCheckIcon} alt="check" className="size-5" />
              <span className="text-[10px] md:text-sm text-white font-medium">
                {item}
              </span>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-2 bg-white rounded-3xl md:rounded-[72px] px-6 py-8 md:p-4 w-fit md:mx-auto min-h-auto">
            <img src={ideaIcon} alt="idea" className="size-4" />
            <p className="text-xs font-bold text-text-dark-100">Tip:</p>
            <p className="text-xs text-text-dark-80 text-center">
             Save a digital copy of your passport and visa before you travel.
            </p>
        </div>
    </section>
  )
}

