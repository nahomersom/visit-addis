import CultureHeroBgImage from "../../assets/images/CultureHeroAttachement.png"

const CultureHero = () => {

  return (
    <div 
      className="relative w-full 
      h-[400px] 
      md:h-auto
      lg:h-[500px]

      flex justify-center items-center flex-col
      bg-center bg-cover

      gap-10 md:gap-10

      md:py-[120px] md:px-12
      
      lg:py-[200px] lg:px-[120px]
      " 
      style={{ backgroundImage: `url(${CultureHeroBgImage})`}}
    >
        
        {/* overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* content */}
        <div className="relative flex flex-col items-center text-center w-full px-4 md:px-0
          md:max-w-[738px]
          lg:max-w-[840px]
          gap-3
        ">
            <h1 className="font-bold text-white text-[28px] sm:text-[36px] md:text-[48px] lg:text-[64px] leading-tight">
              Culture & Lifestyle
            </h1>
            <p className="text-white/80 text-[12px] sm:text-[16px] w-full mx-auto">
             Addis Ababa is where tradition meets transformation — a city alive with stories, rhythm, and creativity. Explore how the people, culture, and way of life blend heritage and modern energy into a truly unique experience.
            </p>
        </div>
    </div>
  )
}

export default CultureHero