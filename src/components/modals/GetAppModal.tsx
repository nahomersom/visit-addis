import { useState } from "react"
import { Modal, ModalTitle, ModalDescription } from "@/components/ui/modal"
import { useModal } from "@/contexts/ModalContext"
import { Button } from "@/components/ui/button"
import phoneImage from "@/assets/images/phone.png"

const MODAL_ID = "get-app"

export function GetAppModal() {
  const { isOpen, closeModal } = useModal()
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
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
    <Modal
      open={isOpen(MODAL_ID)}
      onOpenChange={(open) => {
        if (!open) closeModal(MODAL_ID)
      }}
      className="md:min-w-[715px] p-0 overflow-hidden rounded-4xl"
    >
      <div className="flex flex-col-reverse md:flex-row">
        {/* Left Side - Form */}
        <div className="flex-1 p-6 md:p-10">
          <div className="flex flex-col gap-4 md:gap-6">
            {/* Coming Soon Badge */}
            <div 
              className="inline-flex items-center justify-center w-fit px-3 py-2 rounded-[48px] border-[0.5px] border-theme-secondary"
              style={{ backgroundColor: 'rgba(30, 170, 157, 0.08)' }}
            >
              <span className="text-xs  text-theme-secondary">Coming Soon</span>
            </div>
            <div className="gap-2 md:gap-6">

            {/* Title */}
            <ModalTitle className="md:text-2xl font-semibold text-white md:text-text-dark-100">
              The Visit Addis App
            </ModalTitle>

            {/* Description */}
            <ModalDescription className="text-white/80 md:text-text-dark-60 text-xs">
            Be the first to explore Addis Ababa! Get notified when the Visit Addis app launches.
            </ModalDescription>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-2">
              {/* Full Name */}
              <div className="flex flex-col gap-2">
                <label htmlFor="fullName" className="text-xs text-white md:text-text-dark-100 ">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="e.g. Dave Ha."
                  className="w-full px-4 py-3 rounded-[8px] bg-white/20 md:bg-accent-80 md:placeholder:text-text-dark-80 placeholder:text-white/80 placeholder:text-xs"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-xs text-white md:text-text-dark-100 ">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="e.g. dev@example.com"
                  className="w-full px-4 py-3 rounded-[8px] bg-white/20 md:bg-accent-80 md:placeholder:text-text-dark-80 placeholder:text-white/80 placeholder:text-xs"

              />
              </div>

              {/* Phone Number */}
              <div className="flex flex-col gap-2">
                <label htmlFor="phoneNumber" className="text-xs text-white md:text-text-dark-100 ">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  placeholder="e.g. 0987654321"
                  className="w-full px-4 py-3 rounded-[8px] bg-white/20 md:bg-accent-80 md:placeholder:text-text-dark-80 placeholder:text-white/80 placeholder:text-xs"
              
              />
              </div>

              {/* Checkbox */}
              <div className="flex items-start gap-2 mt-2">
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
          className="bg-theme-primary text-sm px-4 py-4 text-white rounded-[105px] min-h-[50px] md:max-w-[115px]"
        >
          <span>Notify Me!</span>
        </Button>
            </form>
          </div>
        </div>

    <div className="block md:hidden bg-white min-h-[234px] rounded-bl-2xl rounded-br-2xl w-full ">
    <img
            src={phoneImage}
            alt="Visit Addis App Preview"
            className="w-full h-[234px] max-w-full object-contain"
          />
    </div>
        {/* Right Side - Phone Mockups */}
        <div className="flex-1  items-center justify-center p-6 relative overflow-hidden hidden md:flex">
          <img
            src={phoneImage}
            alt="Visit Addis App Preview"
            className="w-full h-auto max-w-full object-contain"
          />
        </div>
      </div>
    </Modal>
  )
}

// Export the modal ID for use in other components
export { MODAL_ID as GET_APP_MODAL_ID }

