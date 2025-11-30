import { CallToActionBanner } from "../common/CallToActionBanner"
import visitBackground from "@/assets/images/visitBackground.png"
import planImage from "@/assets/images/plan.png"

export function PlanYourDay() {
  return (
    <section className="py-10 px-[120px] rounded-4xl">
          <CallToActionBanner
            title={{
              coloredText: "Plan",
              regularText: "Your Day",
            }}
            description="Explore the vibrant city of Addis Ababa! Discover its rich culture, delicious cuisine, and stunning landscapes. Don't miss out on the chance to immerse yourself in this unique experience plan your visit today!"
            buttonText="Plan Your Trip"
            backgroundImage={visitBackground}
            overlayColor="#F7F8F7"
            showLogo
            logoImage={planImage}
          />
    </section>
  )
}
