import qatarAirline from "../../assets/images/QatarAriline.png"
import turkishAirline from "../../assets/images/TurkishAirline.png"
import emiratesAirline from "../../assets/images/EmiratesAirline.png"
import franceAirline from "../../assets/images/FranceAirline.png"
import ethadAirline from "../../assets/images/EthadAirline.png"
import britishAirline from "../../assets/images/BiritishAirline.png"

export function FlightsAndGettingHere() {
  const airlines = [
    { image: qatarAirline },
    { image: turkishAirline },
    { image: emiratesAirline },
    { image: franceAirline },
    { image: ethadAirline },
    { image: britishAirline },
  ]

  // Duplicate airlines for seamless loop
  const duplicatedAirlines = [...airlines, ...airlines]

  return (
    <section className="py-10 md:py-[60px] bg-white relative">
       <div className="flex flex-col items-center text-center mb-6 gap-4 px-6 lg:px-[120px]">
          <h2 className="text-2xl font-semibold text-text-dark-100">
           Flights And Getting Here
          </h2>
          <span className="text-sm  text-text-dark-80 max-w-[1272px] font-medium">
         
            <a
              href="https://www.ethiopianairlines.com/et"
              target="_blank"
              rel="noopener noreferrer"
              className="text-theme-secondary underline"
            >
            Ethiopian Airlines 
            </a> makes traveling to Addis Ababa a seamless experience, being one of Africa's busiest airlines. With daily flights from major international carriers connecting Europe, the Middle East, Asia, and various African destinations, getting to Addis is effortless. Upon landing at Bole International Airport, you're just a short ride from the city center, where modern architecture meets the rich tapestry of Ethiopian culture. Here, you can easily catch a taxi, exchange currency, acquire a local SIM card, and kick off your journey.
          </span>
        </div>

        <div className="relative overflow-hidden -mx-4 sm:-mx-6 lg:-mx-[120px]">
          <p className="text-center text-text-dark-100 text-sm font-medium mb-4 px-6 md:px-0">Fly directly into Addis with these international and regional carriers offering frequent routes to and from Ethiopia.</p>
          <div 
            className="flex gap-8 sm:gap-12 lg:gap-16 px-4 sm:px-6 lg:px-[120px]"
            style={{
              animation: "marquee 5s linear infinite"
            }}
          >
            {duplicatedAirlines.map((airline, index) => (
              <div
                key={`forward-${index}`}
                className="shrink-0"
              >
                <img 
                  src={airline.image} 
                  alt="airline" 
                  className="w-[90px] h-[60px] object-contain"
                />
              </div>
            ))}
          </div>
          {/* Left gradient overlay */}
          <div
            className="pointer-events-none absolute top-0 h-full w-[100px] md:w-[150px] z-30 transition-opacity duration-300 left-4 sm:left-6 lg:left-[120px]"
            style={{
              background: `
                linear-gradient(
                  90deg,
                  #FFFFFF 0%,
                  rgba(255, 255, 255, 0.6) 40%,
                  rgba(255, 255, 255, 0) 100%
                )
              `,
            }}
          />
          {/* Right gradient overlay */}
          <div
            className="pointer-events-none absolute top-0 h-full w-[100px] md:w-[150px] z-30 transition-opacity duration-300 right-4 sm:right-6 lg:right-[120px]"
            style={{
              background: `
                linear-gradient(
                  270deg,
                  #FFFFFF 0%,
                  rgba(255, 255, 255, 0.6) 40%,
                  rgba(255, 255, 255, 0) 100%
                )
              `,
            }}
          />
        </div>

        <style>{`
          @keyframes marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          @keyframes marquee-reverse {
            0% {
              transform: translateX(-50%);
            }
            100% {
              transform: translateX(0);
            }
          }
        `}</style>
    </section>
  )
}

