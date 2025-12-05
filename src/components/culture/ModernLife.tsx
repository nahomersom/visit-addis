import { ModernLifeData } from "@/constant"

const ModernLife = () => {
  return (
    <div className="w-full max-w-[1512px] mx-auto h-auto bg-[#F7F8F7] flex flex-col 
      py-10 px-6 gap-10 
      md:py-[60px] md:px-12 md:gap-[60px] 
      lg:gap-[120px] lg:px-[120px] lg:py-10">

      {ModernLifeData.map((items, index) => (
        <div
          key={index}
          className="flex justify-between items-center 
            flex-col gap-6 
            md:flex-row md:gap-[60px]"
        >
          {/* TEXT Section */}
          <div className="w-full h-auto 
            text-center 
            md:w-1/2 md:text-left
            lg:flex-1">
            
            <h1 className="text-[24px] font-semibold leading-[150%] text-[#10383A]">
              {items.title}
            </h1>

            <div className="bg-[#DAA112] w-[210px] h-0.5 
              mx-auto mt-6 
              md:mx-0 md:mt-4 
              lg:mt-6"></div>

            <p className="text-[#758886]
              mt-6 
              md:mt-4 
              lg:mt-6">
              {items.description}
            </p>
          </div>

          {/* IMAGE Section */}
          <div className="w-full shrink-0 flex 
            justify-center h-auto
            md:w-1/2 md:justify-end md:h-[262px]
            lg:h-[400px]">
            <img
              src={items.image}
              className="w-full h-full object-cover rounded-xl rounded-tl-[150px]"
              alt={items.title}
            />
          </div>
        </div>
      ))}
    </div>
  )
}

export default ModernLife