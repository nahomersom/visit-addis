import phoneTwoImage from "@/assets/images/phoneTwo.png"
import { USEFUL_CONTACTS } from "@/config/constants"
import { GETTING_AROUND_CONFIG } from "@/config/constants"

export function UsefulContacts() {
  return (
    <section className="py-10 px-6 md:px-[48px] md:py-0 lg:py-[60px] lg:px-[120px]">
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 items-start">
        {/* Left Side - Phone Icon and Title */}
        <div className="flex flex-col items-center text-center md:items-start gap-1 h-full md:pt-[14.5px]">
          <img
            src={phoneTwoImage}
            alt="Phone"
            className="size-[86px] object-contain "
          />
            <h2 className="text-2xl font-semibold">
              <span className="text-theme-secondary">Useful</span>{" "}
              <span className="text-text-dark-100">Contacts</span>
            </h2>
          <p className="text-sm text-text-dark-80 max-w-md">
            Please retain these numbers for any emergencies that may arise.
          </p>
        </div>

        {/* Right Side - Contact Cards Grid */}
        <div className="grid grid-cols-2 gap-2 md:gap-4 flex-1 py-4">
          {USEFUL_CONTACTS.map((contact, index) => (
            <div
              key={index}
              className="rounded-2xl p-4 bg-white relative overflow-hidden min-h-[97px] md:min-h-[82px]"
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
              <div className="relative z-10 flex flex-col items-center text-center md:items-start md:text-left gap-2">
                <p className="text-sm text-text-dark-80">
                  {contact.service}
                </p>
                <p className="text-sm font-semibold text-text-dark-100">
                  {contact.contact}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

