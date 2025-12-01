import { Etiquette } from "@/constant"

const CulturalEtiquette = () => {
  return (
    // MAIN CONTAINER
    <section className="w-full max-w-[1512px] mx-auto flex flex-col gap-6 px-6 py-10 md:px-[120px] md:py-[60px]">
      
      {/* HEADER */}
      <div className="flex flex-col md:flex-row justify-between text-center md:items-center w-full max-w-[1272px] mx-auto gap-4 md:gap-0">
        <h1 className="text-[#10383A] text-[24px] font-semibold">
          Cultural Etiquette
        </h1>

        <p className="text-[#758886] text-[14px] max-w-[500px] mx-auto lg:mx-0 text-left md:text-left leading-[150%]">
          Lorem ipsum dolor sit amet consectetur. Nulla facilisis vel id morbi. Lectus id odio quam ut tincidunt commodo ut. Nisi eget elit pretium id adipiscing nunc ac volutpat amet.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-[1272px] mx-auto">
        {Etiquette.map((items, index) => {
          const [firstWord, ...restWords] = items.title.split(" ")

          return (
            <div
              key={index}
              className="relative w-full h-full min-h-[253px] md:min-h-[242px] rounded-3xl overflow-hidden p-4 md:p-6 flex flex-col justify-center gap-4 bg-white shadow-sm md:shadow-none"
            >
              {/* BACKGROUND IMAGE */}
              <div
                className="absolute inset-0 bg-cover bg-center pointer-events-none"
                style={{
                  backgroundImage: `url(${items.image})`,
                  opacity: 0.08,
                }}
              />

              {/* CARD CONTENT */}
              <div className="relative z-10 flex flex-col gap-4">
                
                {/* HEADING */}
                <h2 className="font-semibold text-[#10383A] text-xl md:text-2xl text-center">
                  <span className="text-[#1EAA9D]">{firstWord} </span>
                  {restWords.join(" ")}
                </h2>

                {/* DESCRIPTION */}
                <p className="text-[#10383A] text-sm md:text-base leading-[150%] text-center">
                  {items.description}
                </p>

                {/* TIP */}
                <div className="text-[#10383A] text-[12px] md:text-base text-center">
                  <span className="font-semibold">Tip:</span> {items.tip}
                </div>

              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default CulturalEtiquette