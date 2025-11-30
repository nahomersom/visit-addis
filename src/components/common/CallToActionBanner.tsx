import { Button } from "@/components/ui/button"
import logoIcon from "@/assets/icons/logo.svg"

interface CallToActionBannerProps {
  title: {
    coloredText: string
    regularText: string
  }
  description: string
  buttonText: string
  onButtonClick?: () => void
  showLogo?: boolean
  logoImage?: string // Custom logo image path
  backgroundImage?: string
  imageOpacity?: number // Opacity of the background image (0-1, default: 1)
  overlayColor?: string // Full rgba/rgb/hex color (e.g., "rgba(0, 0, 0, 0.5)" or "#000000")
  overlayOpacity?: number // Opacity value 0-1 (used with default white color if overlayColor not provided)
  overlayColorBase?: "white" | "black" // Base color to use with overlayOpacity (default: "white")
  className?: string
}

export function CallToActionBanner({
  title,
  description,
  buttonText,
  onButtonClick,
  showLogo = false,
  logoImage,
  backgroundImage,
  imageOpacity = 1,
  overlayColor,
  overlayOpacity,
  overlayColorBase = "white",
  className = "",
}: CallToActionBannerProps) {
  // Determine the overlay background color
  const getOverlayColor = () => {
    // If overlayColor is provided, check if it's rgba/rgb (has transparency) or solid color
    if (overlayColor) {
      // If it's already rgba/rgb, use it directly
      if (overlayColor.includes('rgba') || overlayColor.includes('rgb(')) {
        return overlayColor
      }
      // If it's a solid color (hex or named), apply the overlayOpacity to it
      // If overlayOpacity is not provided, use 0.8 as default for solid colors to make them visible
      const opacity = overlayOpacity !== undefined ? overlayOpacity : 0.8
      
      // Convert hex to rgb if needed
      if (overlayColor.startsWith('#')) {
        const hex = overlayColor.replace('#', '')
        const r = parseInt(hex.substring(0, 2), 16)
        const g = parseInt(hex.substring(2, 4), 16)
        const b = parseInt(hex.substring(4, 6), 16)
        return `rgba(${r}, ${g}, ${b}, ${opacity})`
      }
      // For named colors or other formats, try to apply opacity
      // This is a fallback - might not work for all color formats
      return overlayColor
    }
    // Otherwise, use the base color (white or black) with the specified opacity
    // Default opacity is 0.2 if not provided
    const opacity = overlayOpacity !== undefined ? overlayOpacity : 0.2
    const rgb = overlayColorBase === "white" ? "255, 255, 255" : "0, 0, 0"
    return `rgba(${rgb}, ${opacity})`
  }

  return (
    <div
      className={`flex flex-col items-center justify-center p-10 gap-4 relative rounded-4xl overflow-hidden ${className}`}
    >
      {/* Background image layer with opacity */}
      {backgroundImage && (
        <div
          className="absolute inset-0 rounded-4xl bg-cover bg-center bg-no-repeat z-0"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            opacity: imageOpacity,
          }}
        ></div>
      )}
      
      {/* Overlay layer - show if overlayColor is provided or overlayOpacity is set and > 0 */}
      {backgroundImage && (overlayColor || (overlayOpacity !== undefined && overlayOpacity > 0)) && (
        <div
          className="absolute inset-0 rounded-4xl z-10"
          style={{
            backgroundColor: getOverlayColor(),
          }}
        ></div>
      )}
      
      <div className="relative z-20 flex flex-col items-center justify-center gap-4">
        {showLogo && (
          <div className="mb-2">
            <img src={logoImage || logoIcon} alt="Logo" className="size-[100px]" />
          </div>
        )}
        
        <h1 className="text-2xl font-semibold">
          <span className="text-theme-secondary">{title.coloredText} </span>
          <span className="text-text-dark-100">{title.regularText}</span>
        </h1>
        
        <p className="text-text-dark-80 text-sm max-w-[838px] text-center">{description}</p>
        
        <Button
          className="bg-theme-primary text-sm px-6 py-4 text-white rounded-[105px] min-h-[50px]"
          onClick={onButtonClick}
        >
          <span>{buttonText}</span>
        </Button>
      </div>
    </div>
  )
}

