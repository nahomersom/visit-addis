import { useState } from "react"
import { Button } from "@/components/ui/button"
import phoneImage from "@/assets/images/phone.png"
import leadingImage from "@/assets/images/Leading.svg"
import trailingImage from "@/assets/images/Traling.svg"
import leadingMobileImage from "@/assets/images/leadingMobileVersion.svg"
import trailingMobileImage from "@/assets/images/trailingMobileVersion.svg"

export function DownloadTheApp() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    agreeToUpdates: false,
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    // You can add API call here
  }

  return (
    <section className="py-10 px-6 lg:py-[60px] lg:px-[120px] relative overflow-hidden">

      {/* Desktop Leading image - left side */}
      <img 
        src={leadingImage} 
        alt="Leading"
        className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 h-full max-h-full object-contain object-left pointer-events-none z-0"
        style={{ width: 'auto', maxWidth: '366px' }}
      />
      {/* Desktop Trailing image - right side */}
      <img 
        src={trailingImage} 
        alt="Trailing"
        className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-full max-h-full object-contain object-right pointer-events-none z-0"
        style={{ width: 'auto', maxWidth: '366px' }}
      />
        <div className="flex flex-col  md:items-center gap-6 md:gap-0">
          {/* Left Side - Phone Mockups */}
          <div className="flex-1 flex items-center md:justify-center relative">
            <div className="w-full md:block flex justify-between items-center">
              {/* Mobile Leading image - left bottom */}
              <img 
                src={leadingMobileImage} 
                alt="Leading Mobile"
                className="md:hidden object-contain object-left pointer-events-none z-0 self-end -mt-6"
              />
              <img
                src={phoneImage}
                alt="Visit Addis App Preview"
                className="h-auto object-contain max-w-[216px] md:max-w-[400px] md:w-full flex-1"
              />
              {/* Mobile Trailing image - right top */}
              <img 
                src={trailingMobileImage} 
                alt="Trailing Mobile"
                className="md:hidden object-contain object-right pointer-events-none z-0 self-start -mt-6"
              />
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="md:flex-1 ">
            <div className="flex flex-col items-center gap-1">
              {/* Coming Soon Badge */}
              <div
                className="inline-flex items-center justify-center w-fit px-3 py-2 rounded-[48px] border-[0.5px] border-theme-secondary"
                style={{ backgroundColor: "rgba(30, 170, 157, 0.08)" }}
              >
                <span className="text-xs text-theme-secondary">Coming Soon</span>
              </div>

              {/* Title */}
              <h2 className="text-2xl  font-medium text-text-dark-100">
                Download The App
              </h2>

              {/* Description */}
              <p className="text-text-dark-80 text-xs  text-center md:text-left">
             Be the first to explore Addis Ababa! Get notified when the Visit Addis app launches.
              </p>

              {/* Form */}
              <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-6 ">
               <div className="flex gap-2 w-full">

                {/* Full Name */}
                <div className="flex flex-col gap-2 w-full">
                  <label htmlFor="fullName" className="text-xs text-text-dark-100">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="e.g. Dave Ho"
                    className="w-full px-4 py-3 rounded-[8px] bg-accent-80 placeholder:text-text-dark-80 placeholder:text-xs border border-transparent focus:border-theme-primary focus:outline-none"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2 w-full">
                  <label htmlFor="email" className="text-xs text-text-dark-100">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="e.g. dave@example.com"
                    className="w-full px-4 py-3 rounded-[8px] bg-accent-80 placeholder:text-text-dark-80 placeholder:text-xs border border-transparent focus:border-theme-primary focus:outline-none"
                  />
                </div>
               </div>

                {/* Checkbox */}
                <div className="flex items-center gap-2 mt-2">
               <input
  type="checkbox"
  id="agreeToUpdates"
  name="agreeToUpdates"
  checked={formData.agreeToUpdates}
  onChange={handleInputChange}
  className="
    size-5 
    shrink-0
    appearance-none
    bg-accent-80 
    border border-accent-100
    rounded-sm
    checked:bg-theme-primary 
    checked:border-theme-primary
    focus:ring-theme-primary
  "
/>

                  <label htmlFor="agreeToUpdates" className="text-xs text-text-dark-80">
                    I agree to receive updates, promotions, and relevant information tailored to my interests.
                  </label>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="bg-theme-primary text-sm px-6 py-4 text-white rounded-[105px] min-h-[50px] w-full md:max-w-[115px] mt-2 self-center"
                >
                  <span>Notify Me!</span>
                </Button>
              </form>
            </div>
          </div>
        </div>
    </section>
  )
}

