import { ModernLifeData } from "@/constant"

const ModernLife = () => {
  return (
    <div className="w-full max-w-[1512px] mx-auto h-auto gap-[60px] md:py-[60px] md:px-[120px] py-10 px-6 bg-[#F7F8F7]">

      {ModernLifeData.map((items, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-[60px]"
        >
          {/* LEFT SIDE */}
          <div className="w-full md:max-w-[606px] h-auto text-center md:text-left">
            <h1 className="text-[24px] font-semibold leading-[150%] text-[#10383A]">
              {items.title}
            </h1>

            <div className="bg-[#DAA112] w-[210px] h-0.5 mt-6 mx-auto md:mx-0"></div>

            <p className="mt-6 text-[#758886]">
              {items.description}
            </p>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="w-full h-auto md:h-[400px] flex justify-center md:justify-end">
            <img
              src={items.image}
              className="rounded-tl-[150px] rounded-xl"
              alt="Museum"
            />
          </div>
        </div>
      ))}

    </div>
  )
}

export default ModernLife
