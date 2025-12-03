import PlanTripHeroBgImage from "@/assets/images/planTripImage.png"

const PlanYourTripHero = () => {
  return (
    <div
      className="relative w-full h-[733px]  lg:h-[500px]
      flex justify-center items-center flex-col
      lg:py-[200px] lg:px-[120px]
      bg-center bg-cover
      gap-10
      "
      style={{ backgroundImage: `url(${PlanTripHeroBgImage})` }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* content */}
      <div className="relative flex flex-col items-center text-center w-full gap-3 px-4">
        <h1 className="font-bold text-white text-2xl lg:text-[64px] leading-tight">
          Your Adventure Starts Here
        </h1>
        <p className="text-white/80 text-[12px] sm:text-[16px] w-full sm:max-w-[600px] md:max-w-[700px] lg:max-w-[840px] mx-auto">
          From the moment you land at Bole International Airport to your first sip of Ethiopian coffee — everything you need to plan your trip to Addis Ababa starts right here.
        </p>
      </div>
    </div>
  )
}

export default PlanYourTripHero

