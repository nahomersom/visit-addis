import DetailHeroImage from "@/assets/images/detailBackground.jpg"

const DetailHero = () => {
  return (
    <div
      className="relative w-full h-[120px]  lg:h-[500px]
      flex justify-center items-center flex-col
      lg:py-[200px] lg:px-[120px]
      bg-center bg-cover
      gap-10
      "
      style={{ backgroundImage: `url(${DetailHeroImage})` }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* content */}
      
    </div>
  )
}

export default DetailHero

