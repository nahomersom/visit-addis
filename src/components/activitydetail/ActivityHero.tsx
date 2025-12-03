import EventHeroPicture from "../../assets/images/EventHeroPicture.png"

const ActivityHero = () => {
  return (
    <div 
      className="relative w-full bg-center bg-cover flex justify-center items-center flex-col gap-10
      h-[400px] sm:h-[350px] 
      md:h-[200px] md:px-[120px]
      lg:h-[400px] lg:py-[200px] lg:px-[120px]"
      
      style={{ backgroundImage: `url(${EventHeroPicture})`}}
    >
        {/* overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
    </div>
  )
}

export default ActivityHero