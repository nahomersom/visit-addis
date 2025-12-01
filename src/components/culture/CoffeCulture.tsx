import { CultureCoffeData } from "@/constant"

const CoffeCulture = () => {
  return (
    <div className="w-full max-w-[1512px] mx-auto h-auto bg-[#F7F8F7] py-10 px-6 md:px-[120px] flex flex-col gap-10 lg:gap-[120px]">
      
      {CultureCoffeData.map((items, index) => (
        <div
          key={index}
          className="flex flex-col lg:flex-row-reverse justify-between items-center gap-6 lg:gap-[60px]"
        >

          {/* TEXT */}
          <div className="w-full lg:flex-1 h-auto text-center lg:text-left">
            <h1 className="text-[24px] font-semibold leading-[150%] text-[#10383A]">
              {items.title}
            </h1>

            {/* Separator Line */}
            <div className="bg-[#DAA112] w-[210px] h-0.5 mt-6 mx-auto lg:mx-0"></div>

            <p className="mt-6 text-[#758886]">
              {items.description}
            </p>
          </div>

          {/* IMAGE */}
          <div className="w-full lg:w-1/2 h-auto lg:h-[400px] shrink-0">
            <img
              src={items.image}
              className="w-full h-full object-cover rounded-xl rounded-tr-[150px]"
              alt={items.title}
            />
          </div>

        </div>
      ))}

    </div>
  )
}

export default CoffeCulture