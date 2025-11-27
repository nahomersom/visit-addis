import { Outlet } from "react-router-dom"
import { Navbar } from "@/components/sections/Navbar"
import { Footer } from "@/components/sections/Footer"

export function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

