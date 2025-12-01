import EventHeroPicture from "../../assets/images/EventHeroPicture.png"

const BlogHero = () => {
  return (
    <div className="relative w-full h-[500px] sm:h-[450px] lg:h-[500px]
    flex justify-center items-center flex-col
    lg:py-[200px] lg:px-[120px]
    bg-center bg-cover
    gap-10
    " style={{ backgroundImage: `url(${EventHeroPicture})`}}>
        
        {/* overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* content */}
        <div className="relative flex flex-col items-center text-center w-full gap-3 px-4">
            <h1 className="font-bold text-white text-[28px] sm:text-[36px] md:text-[48px] lg:text-[64px] leading-tight">Stories from<span className="text-[#DAA112]">Addis Ababa</span></h1>
            <p className="text-white/80 text-[12px] sm:text-[16px] w-full sm:max-w-[600px] md:max-w-[700px] lg:max-w-[840px] mx-auto">
             Discover the people, places, and moments that bring Addis Ababa to life. From cultural insights to travel inspiration and local updates, explore stories that capture the true essence of our city.
            </p>
        </div>
    </div>
  )
}

export default BlogHero