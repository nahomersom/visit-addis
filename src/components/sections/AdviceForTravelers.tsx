import visitBackground from "@/assets/images/visitBackground.png"
import numberBackground from "@/assets/images/numberBackground.png"
import { useNumberedSteps } from "@/hooks/useNumberedSteps"
import { AdviceForTravelersSkeleton } from "@/layouts/skeleton/AdviceForTravelersSkeleton"
import { SectionHeader } from "../common/SectionHeader"

export function AdviceForTravelers() {
  const { data: numberedStepsData, isLoading } = useNumberedSteps()

  if (isLoading) {
    return <AdviceForTravelersSkeleton />
  }

  const header = numberedStepsData?.data?.header
  const steps = numberedStepsData?.data?.steps || []

  const title = header?.title || "Advice for Travelers"
  const description = header?.description || ""

  return (
    <section className="py-10 md:pb-[60px] md:pt-0 lg:pt-10 px-6 md:px-[48px] lg:px-[120px]">
      <SectionHeader
        title={title}
        description={description}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
        {steps.map((step) => (
          <div key={step.id}>
            <div 
              className="h-full relative rounded-2xl p-4 md:p-6"
              style={{
                backgroundColor: '#f7f8f7',
              }}
            >
              <div 
                className="absolute inset-0 rounded-2xl opacity-10"
                style={{
                  backgroundImage: `url(${visitBackground})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                }}
              />
              <div className="relative z-10 flex gap-6">
                <div 
                  className="self-center flex items-center justify-center"
                  style={{
                    width: '31.058px',
                    height: '74.2px',
                  }}
                >
                  <span 
                    className="font-bold font-sans"
                    style={{
                      backgroundImage: `url(${numberBackground})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      color: 'transparent',
                      fontSize: '74.2px',
                      lineHeight: '1',
                      fontFamily: 'sans-serif',
                    }}
                  >
                    {step.number}
                  </span>
                </div>
                <div className="space-y-1 md:space-y-2">
                  <h3 className="text-theme-dark text-sm md:text-lg font-semibold font-sans">
                    {step.title}
                  </h3>
                  <p className="text-text-dark-80 text-xs md:text-sm font-sans">{step.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

