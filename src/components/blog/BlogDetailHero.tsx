import EventHeroPicture from "../../assets/images/EventHeroPicture.png"

const BlogDetailHero = () => {
  return (
    <div className="relative w-full 
    h-[400px] sm:h-[350px]
    md:h-[200px] md:px-12 md:gap-10
    lg:h-[400px] lg:py-[200px] lg:px-[120px]
    
    flex justify-center items-center flex-col
    bg-center bg-cover
    gap-10
    " style={{ backgroundImage: `url(${EventHeroPicture})`}}>
        
        {/* overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
    </div>
  )
}

export default BlogDetailHero