import ThingToDoHeroBgImage from "@/assets/images/ThingToDoHeroBgImage.png"
const ThingToDoHero = () => {

    return (
      <div className="relative w-full h-[400px] sm:h-[450px] lg:h-[500px]
      flex justify-center items-center flex-col
      lg:py-[200px] lg:px-[120px]
      bg-center bg-cover
      gap-10
      " style={{ backgroundImage: `url(${ThingToDoHeroBgImage})`}}>
          
          {/* overlay */}
          <div className="absolute inset-0 bg-black/50"></div>
  
          {/* content */}
          <div className="relative flex flex-col items-center text-center w-full gap-3 px-4">
              <h1 className="font-bold text-white text-[28px] sm:text-[36px] md:text-[48px] lg:text-[64px] leading-tight">
                Explore a World of <span className="text-theme-primary">Activities</span> in Addis Ababa
              </h1>
              <p className="text-white/80 text-[12px] sm:text-[16px] w-full sm:max-w-[600px] md:max-w-[700px] lg:max-w-[840px] mx-auto">
              Addis Ababa blends rich traditions with a lively nightlife. Whether you want to explore history, enjoy local cuisine, dance, or meet friendly locals, this city has something for everyone.
              </p>
          </div>
      </div>
    )
  }
  
  export default ThingToDoHero