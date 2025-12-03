
import { CallToActionBanner } from "../common/CallToActionBanner"
import visitBackground from "@/assets/images/visitBackground.png"
export function VisitBanner() {
  return (
    <section className="py-10 px-6 md:px-[120px] rounded-4xl">
          <CallToActionBanner
            title={{
              coloredText: "Visit",
              regularText: "Addis Ababa",
            }}
            className="py-[60px] md:py-10"
            description="Explore the vibrant city of Addis Ababa! Discover its rich culture, delicious cuisine, and stunning landscapes. Don't miss out on the chance to immerse yourself in this unique experience plan your visit today!"
            buttonText="Plan Your Trip"
            backgroundImage={visitBackground}
            overlayColor="#F7F8F7"
            showLogo
          />
    </section>
  )
}

