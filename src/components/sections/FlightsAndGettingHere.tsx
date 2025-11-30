export function FlightsAndGettingHere() {
  const airlines = [
    { name: "Qatar Airways", logo: "🇶🇦" },
    { name: "Turkish Airlines", logo: "🇹🇷" },
    { name: "Emirates", logo: "🇦🇪" },
    { name: "Air France", logo: "🇫🇷" },
    { name: "Etihad Airways", logo: "🇦🇪" },
    { name: "British Airways", logo: "🇬🇧" },
  ]

  return (
    <section className="py-[60px] px-4 sm:px-6 lg:px-[120px] bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center text-center mb-10 gap-4">
          <h2 className="text-2xl sm:text-3xl font-semibold text-text-dark-100">
            Flights And Getting Here
          </h2>
          <p className="text-sm sm:text-base text-text-dark-80 max-w-3xl">
            Ethiopian Airlines, the country's flagship carrier, offers extensive international and domestic routes, making Addis Ababa easily accessible from major cities worldwide. Bole International Airport, located just 6 kilometers from the city center, provides a convenient gateway to the capital. Upon arrival, you'll find various services including taxis, currency exchange, and SIM card vendors to help you get started.
          </p>
          <p className="text-sm sm:text-base text-text-dark-80 max-w-3xl mt-2">
            Fly directly into Addis with these international and regional carriers offering frequent routes to and from Ethiopia.
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 lg:gap-12">
          {airlines.map((airline, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-2 min-w-[100px]"
            >
              <div className="text-4xl sm:text-5xl mb-2">{airline.logo}</div>
              <span className="text-sm sm:text-base text-text-dark-80 font-medium text-center">
                {airline.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

