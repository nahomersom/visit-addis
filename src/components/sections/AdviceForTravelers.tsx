import visitBackground from "@/assets/images/visitBackground.png"
import { ADVICE_ITEMS } from "@/config/constants"
import locationTextOne from "@/assets/images/LocationTextOne.png"
import locationTextTwo from "@/assets/images/LocationTextTwo.png"
import locationTextThree from "@/assets/images/LocationTextThree.png"
import locationTextFour from "@/assets/images/LocationTextFour.png"

const locationTextMap: Record<string, string> = {
  "1": locationTextOne,
  "2": locationTextTwo,
  "3": locationTextThree,
  "4": locationTextFour,
}

export function AdviceForTravelers() {
  return (
    <section className="py-10 px-[120px] bg-white">
            <div
          className="flex justify-between mb-10 "
        >
          <h2 className="text-2xl font-semibold ">
          Advice for Travelers
          </h2>
          <p className="text-sm text-[#758886] max-w-[400px] ">
          Lorem ipsum dolor sit amet consectetur. Nulla facilisis vel id morbi. Lectus id odio quam ut tincidunt commodo ut. Nisi eget elit pretium id adipiscing nunc ac volutpat amet. Et sed quam commodo tortor eget.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {ADVICE_ITEMS.map((item) => (
            <div
              key={item.id}
      
            >
              <div 
                className="h-full  relative rounded-2xl p-6"
                style={{
                  backgroundColor: '#f7f8f7',
                }}
              >
                <div 
                  className="absolute inset-0 rounded-2xl opacity-10"
                  style={{
                    backgroundImage: `url(${visitBackground})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                  }}
                />
                <div className="relative z-10 flex  gap-6">
                    <img 
                      src={locationTextMap[item.number]} 
                      alt={`Location ${item.number}`}
                      className="w-[31.06px] h-[74.2px] "
                    />
                  <div className="space-y-2">
                    <h3 className="text-theme-dark text-lg font-semibold">
                      {item.title}
                    </h3>
                    <p className="text-text-dark-80 text-sm">{item.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
    </section>
  )
}

