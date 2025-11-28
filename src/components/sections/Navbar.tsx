import { Link, useLocation } from "react-router-dom"
import { User, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { NAV_LINKS, SITE_CONFIG } from "@/config/constants"
import { ROUTES } from "@/config/routes"
import logo from "@/assets/icons/logo.svg"
import * as DropdownMenu from "@radix-ui/react-dropdown-menu"

export function Navbar() {
  const location = useLocation()

  return (
    <nav className="fixed top-3 left-6 right-6 z-50 container mx-auto rounded-[120px] max-h-[88px] p-4 backdrop-blur-[34px] bg-[rgba(0,0,0,0.1)] max-w-[1152px] ">
      <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to={ROUTES.HOME} className="flex items-center gap-3">
            <img 
              src={logo} 
              alt={`${SITE_CONFIG.name} logo`}
              className="w-10 h-10 lg:w-12 lg:h-12 object-contain"
            />
        
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-sm font-medium transition-colors px-2 ${
                  location.pathname === link.href
                    ? "text-gray-900 font-semibold"
                    : "text-white text-sm hover:text-gray-900"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3 lg:gap-2">
            <DropdownMenu.Root>
              <DropdownMenu.Trigger asChild>
                <button className="rounded-[91px] px-4 h-14 flex items-center gap-4 max-w-[78px] bg-[rgba(255,255,255,0.1)] backdrop-blur-[34px] text-white text-sm font-semibold outline-none focus:outline-none focus-visible:outline-none focus:ring-0">
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
            <button className="bg-[rgba(255,255,255,0.1)] backdrop-blur-[34px] h-14 w-14 rounded-full flex items-center justify-center text-white">
              <User className="w-5 h-5" />
            </button>
            <Button className="bg-theme-primary  text-sm  px-4 lg:px-6 text-white rounded-[105px] h-14">
              <span>Get App</span>
                  <ChevronDown className="w-4 h-4" />
            </Button>
          </div>
        </div>
    </nav>
  )
}

