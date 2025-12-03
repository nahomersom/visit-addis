import { Download } from "lucide-react"
import { useState } from "react"
import airplaneImage from "@/assets/images/airplane.png"

export function SuggestedItineraries() {
  const [activeButton, setActiveButton] = useState("1 Week")

  const buttons = [
    { label: "1 Week", id: "1 Week" },
    { label: "1 Day", id: "1 Day" },
    { label: "3 Days", id: "3 Days" },
  ]

  return (
    <section className="py-0 px-6 lg:py-[60px] lg:px-[120px]">

      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-12">
        {/* Left Section - Text and Buttons */}
        <div className="flex flex-col items-center text-center md:items-start  md:text-left gap-2 flex-1 md:max-w-[1032px]">
          <h2 className="text-2xl font-bold text-text-dark-100">
            Suggested Itineraries
          </h2>
          
            <p className="text-sm text-text-dark-80">
            Lorem ipsum dolor sit amet consectetur. Feugiat nisi amet mattis neque ultrices nibh tempor ipsum aliquam. In cum ultricies placerat eleifend.
Diam cum blandit sed ipsum placerat commodo eget. Tristique faucibus leo malesuada ac facilisis arcu morbi suspendisse.
            </p>
          

          {/* Buttons */}
          <div className="flex flex-wrap gap-3 mt-2 justify-center md:justify-start">
            {buttons.map((button) => {
              const isActive = activeButton === button.id
              return (
                <button
                  key={button.id}
                  onClick={() => setActiveButton(button.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-[105px] min-h-[56px] text-sm transition-all ${
                    isActive
                      ? "bg-theme-primary text-white"
                      : "bg-accent-100 text-text-dark-100"
                  }`}
                >
                  <span>{button.label}</span>
                  <Download className="w-4 h-4" />
                </button>
              )
            })}
          </div>
        </div>

        {/* Right Section - Graphic */}
        <img
            src={airplaneImage}
            alt="Visit Addis App Preview"
            className="size-[200px] object-contain"
          />
      </div>
    </section>
  )
}

