import { Link, useLocation } from "react-router-dom"
import { User, ChevronDown, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { NAV_LINKS, SITE_CONFIG } from "@/config/constants"
import { ROUTES } from "@/config/routes"
import logo from "@/assets/icons/logo.svg"
import leftActiveFlower from "@/assets/icons/leftActiveFlower.svg"
import rightActiveFlower from "@/assets/icons/rightActiveFlower.svg"
import menuIcon from "@/assets/icons/menu.svg"
import * as DropdownMenu from "@radix-ui/react-dropdown-menu"
import { useModal } from "@/contexts/ModalContext"
import { GET_APP_MODAL_ID } from "@/components/modals/GetAppModal"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function Navbar() {
  const location = useLocation()
  const { openModal } = useModal()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <>
    <nav className="fixed top-[7px] md:top-3 left-4 right-4 md:left-6 md:right-6 z-50 mx-auto rounded-2xl lg:rounded-[120px] max-h-[88px] p-4 backdrop-blur-[34px] bg-[rgba(0,0,0,0.1)] max-w-[1152px] overflow-hidden">
      <div className="flex items-center justify-between w-full min-w-0">
          {/* Logo */}
          <Link to={ROUTES.HOME} className="flex items-center gap-3 shrink-0">
            <img 
              src={logo} 
              alt={`${SITE_CONFIG.name} logo`}
              className="w-[42px] h-[42px] lg:w-12 lg:h-12 object-contain"
            />
        
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-4">
            {NAV_LINKS.map((link) => {
              // Check if we're on Detail page and came from this link's route
              const isDetailPage = location.pathname === ROUTES.DETAIL
              const cameFromThisRoute = (location.state as { from?: string })?.from === link.href
              
              // Active if exact match, starts with (for nested routes), or Detail page came from this route
              const isActive = location.pathname === link.href 
                || location.pathname.startsWith(link.href + '/')
                || (isDetailPage && cameFromThisRoute)
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`text-sm font-medium cursor-pointer transition-colors px-2 flex items-center justify-center gap-2 ${
                    isActive
                      ? "text-theme-primary font-semibold"
                      : "text-white text-sm "
                  }`}
                >
                  {isActive && (
                    <img 
                      src={leftActiveFlower} 
                      alt="" 
                      className="w-2 h-2"
                    />
                  )}
                  <span>{link.label}</span>
                  {isActive && (
                    <img 
                      src={rightActiveFlower} 
                      alt="" 
                      className="w-2 h-2"
                    />
                  )}
                </Link>
              )
            })}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-2 lg:gap-2 shrink-0 min-w-0">
            {/* Get App Button - visible on mobile and desktop */}
            <Button 
              className="cursor-pointer! bg-theme-primary text-sm px-3 md:px-4 lg:px-6 text-white rounded-[105px] h-[42px] md:h-12 lg:h-14 shrink-0"
              onClick={() => openModal(GET_APP_MODAL_ID)}
            >
              <span className="whitespace-nowrap">Get App</span>
              <ChevronDown className="w-4 h-4 shrink-0" />
            </Button>
            
            {/* Language Selector - visible on mobile and desktop */}
            <DropdownMenu.Root>
              <DropdownMenu.Trigger asChild>
                <button className="rounded-[8px] lg:rounded-[91px] px-4 h-[42px] w-[56px] md:w-auto lg:h-14 flex items-center gap-2 bg-[rgba(255,255,255,0.1)] backdrop-blur-[34px] text-white text-sm font-semibold outline-none focus:outline-none focus-visible:outline-none focus:ring-0">
                  <span>EN</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
              </DropdownMenu.Trigger>
              <DropdownMenu.Portal>
                <DropdownMenu.Content
                  className="min-w-[120px] rounded-lg bg-white shadow-lg p-1 z-50"
                  sideOffset={8}
                >
                  <DropdownMenu.Item className="px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md cursor-pointer outline-none focus:outline-none focus-visible:outline-none focus:ring-0 focus:bg-gray-100">
                    English
                  </DropdownMenu.Item>
                  <DropdownMenu.Item className="px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md cursor-pointer outline-none focus:outline-none focus-visible:outline-none focus:ring-0 focus:bg-gray-100">
                    Amharic
                  </DropdownMenu.Item>
                  <DropdownMenu.Item className="px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md cursor-pointer outline-none focus:outline-none focus-visible:outline-none focus:ring-0 focus:bg-gray-100">
                    Oromo
                  </DropdownMenu.Item>
                </DropdownMenu.Content>
              </DropdownMenu.Portal>
            </DropdownMenu.Root>
            
            {/* Hamburger Menu - visible only on mobile */}
            <button 
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden bg-[rgba(255,255,255,0.1)] backdrop-blur-[34px] h-[42px] w-[42px] lg:h-14 lg:w-14 rounded-[8px] lg:rounded-full flex items-center justify-center text-white"
            >
              <img src={menuIcon} alt="Menu" className="w-5 h-5" />
            </button>
            
            {/* User Button - visible only on desktop */}
            <button className="hidden lg:flex bg-[rgba(255,255,255,0.1)] backdrop-blur-[34px] h-14 w-14 rounded-full items-center justify-center text-white">
              <User className="w-5 h-5" />
            </button>
          </div>
        </div>
    </nav>

    {/* Mobile Side Navigation */}
    <AnimatePresence>
      {isMobileMenuOpen && (
        <>
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsMobileMenuOpen(false)}
            className="fixed inset-0 bg-black/50 z-[60] lg:hidden"
          />
          
          {/* Side Navigation Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{ 
              willChange: "transform", 
              backfaceVisibility: "hidden",
              isolation: "isolate",
              contain: "layout style paint"
            }}
            className="fixed top-0 right-0 h-full w-full md:w-3/4 md:max-w-[580px] bg-black/40 backdrop-blur-[32px] z-[70] lg:hidden flex flex-col"
          >
            {/* Top Section - Logo and Close Button */}
            <div className="flex items-center justify-between p-6">
              <Link 
                to={ROUTES.HOME} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-3"
              >
                <img 
                  src={logo} 
                  alt={`${SITE_CONFIG.name} logo`}
                  className="w-[42px] h-[42px] object-contain"
                />
              </Link>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-[rgba(255,255,255,0.1)] backdrop-blur-[34px] h-[42px] w-[42px] rounded-[8px] flex items-center justify-center text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Navigation Links */}
            <div className="flex-1 flex flex-col items-start px-6 gap-6 overflow-y-auto border-0 mt-[135px]">
              {NAV_LINKS.map((link) => {
                const isDetailPage = location.pathname === ROUTES.DETAIL
                const cameFromThisRoute = (location.state as { from?: string })?.from === link.href
                
                const isActive = location.pathname === link.href 
                  || location.pathname.startsWith(link.href + '/')
                  || (isDetailPage && cameFromThisRoute)
                
                return (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-sm lg:text-lg lg:font-medium text-white transition-colors text-left border-0 outline-none ${
                      isActive ? "text-theme-primary" : ""
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              })}
            </div>

            {/* Bottom Section - Login and Get App Buttons */}
       
          </motion.div>
        </>
      )}
    </AnimatePresence>
    </>
  )
}

