import EventHeroPicture from "../../assets/images/EventHeroPicture.png"

const ActivityHero = () => {
  return (
    <div className="relative w-full h-[400px] sm:h-[350px] lg:h-[400px]
    flex justify-center items-center flex-col
    lg:py-[200px] lg:px-[120px]
    bg-center bg-cover
    gap-10
    " style={{ backgroundImage: `url(${EventHeroPicture})`}}>
        {/* overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
    </div>
  )
}

export default ActivityHero