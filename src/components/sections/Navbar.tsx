import { Link, useLocation } from "react-router-dom"
import { Search, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { NAV_LINKS, SITE_CONFIG } from "@/config/constants"
import { ROUTES } from "@/config/routes"

export function Navbar() {
  const location = useLocation()

  return (
    <nav className="fixed top-0 left-0  right-0 z-50  backdrop-blur-sm">
      <div className="container py-3 px-6 mx-auto  sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to={ROUTES.HOME} className="flex items-center gap-3">
            <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-teal-500 to-yellow-400 rounded-lg flex items-center justify-center">
              <div className="w-6 h-6 lg:w-8 lg:h-8 bg-white rounded-full"></div>
            </div>
            <span className="text-lg lg:text-xl font-semibold text-gray-900">
              {SITE_CONFIG.name}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === link.href
                    ? "text-gray-900 font-semibold"
                    : "text-gray-700 hover:text-gray-900"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3 lg:gap-4">
            <button className="p-2 text-gray-600 hover:text-gray-900 transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button className="p-2 text-gray-600 hover:text-gray-900 transition-colors">
              <User className="w-5 h-5" />
            </button>
            <Button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-medium px-4 lg:px-6">
              Sign up
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}

