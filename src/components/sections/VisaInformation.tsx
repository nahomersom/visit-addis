import { Backpack, Briefcase, Plane } from "lucide-react"

const visaTypes = [
  {
    id: "tourist",
    name: "Tourist",
    icon: Backpack,
    description: "Lorem ipsum dolor sit amet consectetur. Leo adipiscing nibh risus aenean et vitae et. Tristique urna leo nisl quisque.",
  },
  {
    id: "business",
    name: "Business",
    icon: Briefcase,
    description: "Lorem ipsum dolor sit amet consectetur. Leo adipiscing nibh risus aenean et vitae et. Tristique urna leo nisl quisque.",
  },
  {
    id: "transit",
    name: "Transit",
    icon: Plane,
    description: "Lorem ipsum dolor sit amet consectetur. Leo adipiscing nibh risus aenean et vitae et. Tristique urna leo nisl quisque.",
  },
]

export function VisaInformation() {
  return (
    <section className="py-[60px] px-4 sm:px-6 lg:px-[120px] bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center text-center mb-10 gap-4">
          <h2 className="text-2xl sm:text-3xl font-semibold text-text-dark-100">
            Visa information
          </h2>
          <p className="text-sm sm:text-base text-text-dark-80 max-w-3xl">
            Securing your Ethiopian visa is straightforward and can be done online through the official government website{" "}
            <a
              href="https://www.evisa.gov.et"
              target="_blank"
              rel="noopener noreferrer"
              className="text-theme-secondary hover:underline"
            >
              evisa.gov.et
            </a>
            . The process involves completing an application form, uploading required documents, making a payment, and receiving your electronic visa via email.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold text-text-dark-100 text-center mb-6">
            Visa Types
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {visaTypes.map((visa) => {
              const IconComponent = visa.icon
              return (
                <div
                  key={visa.id}
                  className="bg-accent-80 rounded-2xl p-6 flex flex-col items-center text-center gap-4"
                >
                  <div className="size-16 rounded-full bg-theme-secondary/10 flex items-center justify-center">
                    <IconComponent className="size-8 text-theme-secondary" />
                  </div>
                  <h4 className="text-lg font-semibold text-text-dark-100">
                    {visa.name}
                  </h4>
                  <p className="text-sm text-text-dark-80">
                    {visa.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

