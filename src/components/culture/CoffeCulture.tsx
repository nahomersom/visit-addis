import { CultureCoffeData } from "@/constant"

const CoffeCulture = () => {
  return (
    <div className="w-full max-w-[1512px] mx-auto h-auto py-[60px] px-6 md:px-[120px] bg-[#F7F8F7]">

      {CultureCoffeData.map((items, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row-reverse justify-between items-center gap-6 md:gap-[60px]"
        >

          {/* TEXT */}
          <div className="w-full md:max-w-[606px] h-auto text-center md:text-left">
            <h1 className="text-[24px] font-semibold leading-[150%] text-[#10383A]">
              {items.title}
            </h1>

            <div className="bg-[#DAA112] w-[210px] h-0.5 mt-6 mx-auto md:mx-0"></div>

            <p className="mt-6 text-[#758886]">
              {items.description}
            </p>
          </div>

          {/* IMAGE */}
          <div className="w-full max-w-[606px] mx-auto h-auto md:h-[400px] flex justify-center md:justify-start">
            <img
              src={items.image}
              className="rounded-tr-[150px] rounded-xl"
              alt={items.title}
            />
          </div>

        </div>
      ))}

    </div>
  )
}

export default CoffeCulture
