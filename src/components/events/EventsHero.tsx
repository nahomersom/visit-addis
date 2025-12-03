import EventHeroPicture from "../../assets/images/EventHeroPicture.png"

const EventsHero = () => {
  
  return (
    <div 
      className="relative w-full flex justify-center items-center flex-col bg-center bg-cover
                                
      h-[500px] sm:h-[450px] gap-10
      
      md:h-auto md:py-[120px] md:px-12 md:gap-10
      
      lg:h-[500px] lg:py-[200px] lg:px-[120px]"
      
      style={{ backgroundImage: `url(${EventHeroPicture})`}}
    >
        
        {/* overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* content */}
        <div className="relative flex flex-col items-center text-center w-full gap-3 px-4 md:px-0">
            <h1 className="font-bold text-white text-[28px] sm:text-[36px] md:text-[48px] lg:text-[64px] leading-tight">
              There’s Always Something Happening in <span className="text-[#DAA112]">Addis Ababa</span>
            </h1>
            <p className="text-white/80 text-[12px] sm:text-[16px] w-full sm:max-w-[600px] md:max-w-[700px] lg:max-w-[840px] mx-auto">
             Addis Ababa is where tradition meets transformation — a city alive with stories, rhythm, and creativity. Explore how the people, culture, and way of life blend heritage and modern energy into a truly unique experience.
            </p>
        </div>
    </div>
  )
}

export default EventsHero