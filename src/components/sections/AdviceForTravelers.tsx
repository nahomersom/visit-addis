import visitBackground from "@/assets/images/visitBackground.png"
import { ADVICE_ITEMS } from "@/config/constants"
import locationTextOne from "@/assets/images/LocationTextOne.png"
import locationTextTwo from "@/assets/images/LocationTextTwo.png"
import locationTextThree from "@/assets/images/LocationTextThree.png"
import locationTextFour from "@/assets/images/LocationTextFour.png"
import { SectionHeader } from "../common/SectionHeader"

const locationTextMap: Record<string, string> = {
  "1": locationTextOne,
  "2": locationTextTwo,
  "3": locationTextThree,
  "4": locationTextFour,
}

export function AdviceForTravelers() {
  return (
    <section className="py-10 md:pb-[60px] md:pt-0 lg:pt-10 px-6 md:px-[48px] lg:px-[120px]">

        
         <SectionHeader
        title=" Advice for Travelers"
        description="Lorem ipsum dolor sit amet consectetur. Nulla facilisis vel id morbi. Lectus id odio quam ut tincidunt commodo ut. Nisi eget elit pretium id adipiscing nunc ac volutpat amet. Et sed quam commodo tortor eget."
      />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
          {ADVICE_ITEMS.map((item) => (
            <div
              key={item.id}
      
            >
              <div 
                className="h-full  relative rounded-2xl p-4 md:p-6"
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
                      className="w-[15.53px] md:w-[31.06px] h-[37.1px] md:h-[74.2px] self-center "
                    />
                  <div className="space-y-1 md:space-y-2">
                    <h3 className="text-theme-dark text-sm md:text-lg font-semibold font-sans">
                      {item.title}
                    </h3>
                    <p className="text-text-dark-80 text-xs md:text-sm font-sans">{item.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
    </section>
  )
}

