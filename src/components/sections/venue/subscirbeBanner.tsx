
import visitBackground from "@/assets/images/visitBackground.png"
import { CallToActionBanner } from "@/components/common/CallToActionBanner"
export function SubscribeBanner() {
  return (
    <section className="py-10 px-6 md:px-12 lg:px-[120px] rounded-4xl">
          <CallToActionBanner
            title={{
              coloredText: "Subscribe",
              regularText: "to our newsletter",
            }}
            className="py-[60px] md:py-10"
            description="Stay connected and don’t miss our exciting updates and exclusive deals! Sign up for our
newsletter to receive the latest news directly in your inbox."
            backgroundImage={visitBackground}
            overlayColor="#F7F8F7"
            customContent={
                   <form className="flex flex-col md:flex-row items-center justify-center gap-2 w-full md:w-auto mt-2 md:mt-0">
            
            <input 
              type="email" 
              placeholder="Enter Email Address" 
              className="w-full md:w-[320px] rounded-[100px] border border-[#E0E0E0] bg-white 
                         py-3 px-6 text-[14px] text-[#758886] outline-none min-h-[53px]
                         focus:border-[#DAA520] transition-colors placeholder:text-[#B0B0B0]"
            />
            
            <button
              type="button"
              className="w-auto rounded-[105px] bg-[#DAA520] hover:bg-[#C59216] 
                         text-white font-medium py-3 px-8 transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
            }
          />
    </section>
  )
}

