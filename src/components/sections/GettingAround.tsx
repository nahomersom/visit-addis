import { GETTING_AROUND_ITEMS, GETTING_AROUND_CONFIG } from "@/config/constants"

export function GettingAround() {
  return (
    <section className="py-0 px-6 lg:py-[60px] lg:px-[120px] ">
   
      <div className="flex flex-col gap-6 items-start mb-6">
        <h2 className="text-2xl font-semibold text-text-dark-100 mb-2">
          {GETTING_AROUND_CONFIG.title}
        </h2>
        <div className="w-[210px] h-0.5 bg-theme-primary self-center md:self-start"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 justify-center md:justify-start">
        {GETTING_AROUND_ITEMS.map((item, index) => (
          <div
            key={index}
            className="rounded-2xl p-4 bg-white relative overflow-hidden"
          >
            {/* Base color */}
            <div
              className="absolute inset-0"
              style={{
                backgroundColor: "#f9f9f9",
              }}
            ></div>
            {/* Background image with 8% opacity */}
            <div
              className="absolute inset-0 opacity-[0.08]"
              style={{
                backgroundImage: `url(${GETTING_AROUND_CONFIG.backgroundImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            ></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center text-center md:items-start md:text-left gap-4 md:gap-2">
              {/* Icon */}
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-[60px] h-[60px] object-contain"
                />

              {/* Title */}
              <h3 className="font-semibold text-text-dark-100">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-xs text-text-dark-80 leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

