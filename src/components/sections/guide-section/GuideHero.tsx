import GuideHeroImage from "@/assets/images/GuideHeroImage.png"

const GuideHero = () => {
  return (
    <div
    className="relative w-full h-[733px]  md:h-[488px] lg:h-[500px]
    flex justify-center items-center flex-col
    lg:py-[200px] lg:px-[120px]
    bg-center bg-cover
    gap-10
    "
      style={{ backgroundImage: `url(${GuideHeroImage})` }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* content */}
      <div className="relative flex flex-col items-center text-center w-full gap-3 px-4">

      
 <h1 className="text-2xl md:text-[64px] font-bold mb-2 hidden md:block lg:hidden">
            <span className="text-white">  Your Guide to  <span className="text-theme-primary">Addis</span> </span>
            <div className="text-theme-primary">Ababa</div>
          </h1>
      <h1 className="font-bold text-white text-2xl md:text-[64px] leading-tight md:hidden lg:block">
       
          Your Guide to <span className="text-theme-primary">Addis Ababa</span>
        </h1>
        <p className="text-white/80 text-[12px] md:text-[16px] w-full  md:max-w-[738px] lg:max-w-[840px] mx-auto">

        
         Plan your visit with confidence. From travel tips and transportation to local customs and must-know essentials, this guide helps you explore Addis Ababa smoothly and experience the city like a local.
        </p>
      </div>
    </div>
  )
}

export default GuideHero

