import { VISA_TYPES } from "@/config/constants"

export function VisaInformation() {
  return (
    <section className="py-10 px-6 lg:py-[60px] lg:px-[120px] ">
        <div className="flex flex-col items-center text-center mb-6 gap-4">
          <h2 className="text-2xl font-semibold text-text-dark-100">
            Visa information
          </h2>
          <p className="text-sm  text-text-dark-80 max-w-[1272px] font-medium font-sans">
          If you're considering a trip to Addis Ababa, Ethiopia, whether for tourism or business, securing a visa is essential. The good news is that the process is quite simple! You can conveniently apply for your Ethiopian visa online via the official government website evisa.gov.et.{" "}
            <a
              href="https://www.evisa.gov.et"
              target="_blank"
              rel="noopener noreferrer"
              className="text-theme-secondary hover:underline"
            >
              evisa.gov.et
            </a>
            .  Start by completing the application form, then upload the necessary documents, and pay the required fee. Once your application is approved, you'll receive your visa electronically, which streamlines your travel plans. As you prepare for your journey, be sure to explore the vibrant culture, delicious cuisine, and rich history that Addis Ababa has to offer. Enjoy every moment of your adventure in this beautiful city!
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-sm md:text-xl font-semibold text-text-dark-100 text-center">
            Visa Types
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {VISA_TYPES.map((visa) => {
              return (
                <div
                  key={visa.id}
                  className="bg-white rounded-2xl p-6 flex flex-col items-center text-center gap-2 border border-accent-80 shadow-[0px_4px_16px_0px_#0000000A,0px_0px_8px_0px_#00000005]"
                >
                    <img 
                      src={visa.image} 
                      alt={visa.name}
                      className="size-[60px] md:size-[76px] object-contain"
                    />
                  <h4 className="text-lg font-semibold text-text-dark-100">
                    {visa.name}
                  </h4>
                  <p className="text-xs md:text-sm text-text-dark-80">
                    {visa.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
    </section>
  )
}

