import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import { useHome } from "@/hooks/useHome"
import { Loader2 } from "lucide-react"

// Helper function to get image URL
const getImageUrl = (image: any): string => {
  if (!image) return ""
  
  // Check if it's a Cloudinary URL (starts with https://res.cloudinary.com)
  if (image.url?.startsWith("http")) {
    return image.url
  }
  
  // Check for different format sizes
  if (image.formats?.large?.url) {
    return image.formats.large.url.startsWith("http") 
      ? image.formats.large.url 
      : image.formats.large.url
  }
  if (image.formats?.medium?.url) {
    return image.formats.medium.url.startsWith("http")
      ? image.formats.medium.url
      : image.formats.medium.url
  }
  if (image.formats?.small?.url) {
    return image.formats.small.url.startsWith("http")
      ? image.formats.small.url
      : image.formats.small.url
  }
  
  // Fallback to base URL
  return image.url || ""
}

// Helper function to get file URL for download
const getFileUrl = (file: any): string => {
  if (!file) return ""
  
  const baseUrl = import.meta.env.VITE_BASE_URL || 'https://api.visitaddisababa.et'
  
  // Check if it's already a full URL (Cloudinary or external)
  if (file.url?.startsWith("http")) {
    return file.url
  }
  
  // Construct URL for local files
  return `${baseUrl}${file.url}`
}

// Helper function to trigger file download
const handleDownload = async (file: any, fileName: string) => {
  if (!file) {
    console.error("No file available for download")
    return
  }

  const fileUrl = getFileUrl(file)
  
  if (!fileUrl) {
    console.error("Invalid file URL")
    return
  }

  try {
    // For external URLs (Cloudinary, etc.), fetch and create blob
    if (fileUrl.startsWith("http")) {
      const response = await fetch(fileUrl)
      if (!response.ok) {
        throw new Error("Failed to fetch file")
      }
      
      const blob = await response.blob()
      const blobUrl = window.URL.createObjectURL(blob)
      
      const link = document.createElement('a')
      link.href = blobUrl
      link.download = fileName || file.name || 'download'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      
      // Clean up the blob URL
      window.URL.revokeObjectURL(blobUrl)
    } else {
      // For local files, use direct download
      const link = document.createElement('a')
      link.href = fileUrl
      link.download = fileName || file.name || 'download'
      link.target = '_blank'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }
  } catch (error) {
    console.error("Error downloading file:", error)
    // Fallback: open in new tab if download fails
    window.open(fileUrl, '_blank')
  }
}

export function DownloadableHomeGuides() {
  const { data: homeData, isLoading } = useHome()

  if (isLoading) {
    return (
      <section className="py-10 md:py-[60px] px-6 md:px-[48px] lg:px-[120px] bg-white flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-theme-secondary" />
      </section>
    )
  }

  const downloadableGuides = homeData?.data?.downloadable_guides
  const header = downloadableGuides?.header
  const guides = downloadableGuides?.guides || []
  const backgroundImage = downloadableGuides?.background_image

  const title = header?.title || "Downloadable Guides"
  const description = header?.description || ""

  // Get the first guide for the download button
  const firstGuide = guides[0]

  return (
    <section className="py-10 md:py-[60px] px-6 md:px-[48px] lg:px-[120px] bg-white flex flex-col-reverse md:flex-row justify-between gap-6 md:gap-[60px] items-center">
      <div className="flex flex-col justify-center items-center md:items-start">
        <h2 className="text-dark-100 font-semibold text-2xl mb-4">
          {title}
        </h2>
        {description && (
          <p className="text-sm md:text-xs lg:text-sm text-text-dark-80 mb-8 text-center md:text-left">
            {description}
          </p>
        )}
        <div className="flex flex-wrap gap-x-4 gap-y-8">
          {firstGuide ? (
            firstGuide.file ? (
              <Button 
                onClick={() => handleDownload(firstGuide.file, firstGuide.title)}
                className="bg-theme-primary cursor-pointer text-sm px-4 lg:px-6 text-white rounded-[105px] h-14 hover:bg-theme-primary/90 transition-colors"
              >
                <span>{firstGuide.button_text || firstGuide.title}</span>
                <Download className="w-4 h-4" />
              </Button>
            ) : (
              <Button 
                disabled
                className="bg-gray-300 cursor-not-allowed text-sm px-4 lg:px-6 text-gray-500 rounded-[105px] h-14"
              >
                <span>{firstGuide.button_text || firstGuide.title}</span>
                <Download className="w-4 h-4" />
              </Button>
            )
          ) : null}
          <Button className="bg-[#F0F0EE] cursor-pointer text-sm px-4 lg:px-6 text-text-dark-100 rounded-[105px] h-14 hover:bg-[#E0E0DE] transition-colors">
            <span>View More</span>
          </Button>
        </div>
      </div>

      {backgroundImage && (
        <img 
          src={getImageUrl(backgroundImage)} 
          alt={title} 
          className="w-[168px] h-[121px] md:w-[200px] md:h-[200px] lg:w-[306px] lg:h-[306px] object-cover rounded-lg"
        />
      )}
    </section>
  )
}

