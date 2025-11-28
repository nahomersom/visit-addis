import { Etiquette } from "@/constant"

const CulturalEtiquette = () => {
  return (
    <div className="w-full max-w-[1512px] mx-auto h-auto md:py-[60px] px-6 md:px-[120px] gap-6 my-10">

      {/* HEADER */}
      <div className="flex flex-col md:flex-row justify-between text-center md:items-center w-full max-w-[1272px] mx-auto mt-10 mb-6 gap-4 md:gap-0">
        <h1 className="text-[#10383A] text-[24px] font-semibold">
          Cultural Etiquette
        </h1>

        <p className="text-[#758886] text-[14px] max-w-[500px] text-left md:text-right leading-[150%]">
          Lorem ipsum dolor sit amet consectetur. Nulla facilisis vel id morbi. Lectus id odio quam ut tincidunt commodo ut. Nisi eget elit pretium id adipiscing nunc ac volutpat amet. Et sed quam commodo tortor eget.
        </p>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-4 w-full max-w-[1272px] mx-auto">
        {Etiquette.map((items, index) => {
          const [firstWord, ...restWords] = items.title.split(" ")

          return (
            <div
              key={index}
              className="relative rounded-3xl overflow-hidden p-6 w-full h-full"
            >
              {/* BACKGROUND IMAGE */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${items.image})`, opacity: 0.08 }}
              />

              {/* TEXT */}
              <div className="relative z-10 text-center">
                <h2 className="font-semibold mb-2 text-[#10383A] text-xl md:text-2xl">
                  <span className="text-[#1EAA9D]">{firstWord} </span>
                  {restWords.join(" ")}
                </h2>

                <p className="text-[#10383A] text-sm md:text-base leading-[150%]">
                  {items.description}
                </p>

                <p className="text-[#10383A] mt-4 text-[12px] md:text-base">
                  <span className="font-semibold">Tip:</span> {items.tip}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default CulturalEtiquette
