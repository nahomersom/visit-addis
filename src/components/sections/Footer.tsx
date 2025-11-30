import { Link } from "react-router-dom"
import { SITE_CONFIG, FOOTER_LINKS, SOCIAL_LINKS } from "@/config/constants"
import { ROUTES } from "@/config/routes"
import logo from "@/assets/icons/logo.svg"
import { ChevronRight } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#F0F0EE] text-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-12">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
            <Link to={ROUTES.HOME} className="flex items-center gap-3">
            <img 
              src={logo} 
              alt={`${SITE_CONFIG.name} logo`}
              className="w-10 h-10 lg:w-12 lg:h-12 object-contain"
            />
        
          </Link>
              <span className=" font-medium text-text-dark-100">
                {SITE_CONFIG.name}
              </span>
            </div>
            <p className="text-xs mb-1 text-text-dark-100">
            Discover your gateway to unforgettable travel experiences that will create lasting memories and inspire your wanderlust.
            </p>
            <p className="text-xs mb-1 text-text-dark-100">
              Socials
            </p>
            <div className="flex gap-3">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="size-9 rounded-full bg-white flex items-center justify-center "
                  aria-label={social.label}
                >
                  <img 
                    src={social.icon} 
                    alt={social.label}
                    className="w-5 h-5"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Explore Addis Ababa */}
          <div>
            <h3 className="font-medium text-text-dark-100 mb-2">
              Explore Addis Ababa
            </h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.explore.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Plan Your Trip */}
          <div>
            <h3 className="font-medium text-text-dark-100 mb-4">Plan Your Trip</h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.plan.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Information */}
          <div>
            <h3 className="font-medium text-text-dark-100 mb-4">Inspiration</h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.inspiration.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Email Subscription */}
          <div>
            <div className="space-y-1 mb-2">

            <h3 className="font-semibold text-text-dark-100 ">
            Join Our Travel Tribe!
            </h3>
            <p className="text-xs mb-1 text-text-dark-80">
            Subscribe to tips and inspiring blogs that will enhance your adventures!
            </p>
            </div>
            <form className="space-y-3">
            <div className="relative flex items-center rounded-[100px] bg-white p-3 pl-4 border border-[#E5E5E5]">
              <input
                type="text"
                placeholder="Enter your email"
                className="flex-1 bg-transparent text-white outline-none focus:outline-none focus-visible:outline-none focus:ring-0 text-sm md:text-base placeholder:text-sm placeholder:text-text-dark-80 px-4 pr-14"
              />
              <button className="absolute right-2 bg-theme-primary text-white flex items-center justify-center rounded-full size-9 shrink-0">
                <ChevronRight className="text-white" />
              </button>
            </div>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-300 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-[#758886]">
            © 2025 Tourism Commission. All rights reserved.
            </p>
            <div className="flex gap-6">
         
              <div className="flex items-center gap-2">
                <span className="text-sm text-text-dark-80">Powered by</span>
                <span className="text-sm font-medium text-text-dark-100 underline">

🔥 Ablazelabs
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

