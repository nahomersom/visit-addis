import { Outlet } from "react-router-dom"
import { Navbar } from "@/components/sections/Navbar"
import { Footer } from "@/components/sections/Footer"
import { ModalProvider } from "@/contexts/ModalContext"
import { GetAppModal } from "@/components/modals/GetAppModal"

export function MainLayout() {
  return (
    <ModalProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1">
          <Outlet />
        </div>
        <Footer />
        {/* Global Modals */}
        <GetAppModal />
      </div>
    </ModalProvider>
  )
}

