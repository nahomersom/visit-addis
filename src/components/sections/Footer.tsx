import { Link } from "react-router-dom"
import { SITE_CONFIG, FOOTER_LINKS, SOCIAL_LINKS } from "@/config/constants"
import { ROUTES } from "@/config/routes"
import logo from "@/assets/icons/logo.svg"
import { ChevronRight } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-accent-80 md:bg-[#F0F0EE] text-text-dark-100">
      <div className="px-6 py-10 md:px-[48px] lg:px-[120px] md:py-10">
        <div className="grid grid-cols-2 md:grid-cols-[260px_224px_224px_224px_224px] gap-x-4 md:gap-x-[45px] gap-y-6 md:gap-y-10 lg:gap-y-8 mb-12">
          {/* Logo and Description - Full width on mobile */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
            <Link to={ROUTES.HOME} className="flex items-center gap-3">
            <img 
              src={logo} 
              alt={`${SITE_CONFIG.name} logo`}
              className="size-[60px] lg:size-10 object-contain"
            />
        
          </Link>
              <span className="hidden md:block font-medium text-text-dark-100">
                {SITE_CONFIG.name}
              </span>
              <span className="md:hidden text-text-dark-80 text-sm">
                Your gateway to unforgettable travel experiences. 
              </span>
            </div>
            <p className="hidden md:block text-xs mb-1 text-text-dark-100 ">
            Discover your gateway to unforgettable travel experiences that will create lasting memories and inspire your wanderlust.
            </p>
            <p className="hidden md:block text-xs mb-1 text-text-dark-100">
              Socials
            </p>
            <div className="hidden  md:flex gap-3">
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
          <div className="col-span-1 md:col-span-1">
            <h3 className="font-medium text-text-dark-100 mb-2">
              Explore Addis Ababa
            </h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.explore.map((link) => (
                <li key={link.href}>
                  {link.href.startsWith('#') ? (
                    <a
                      href={link.href}
                      className="text-sm text-text-dark-80 transition-colors"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      to={link.href}
                      className="text-sm text-text-dark-80 transition-colors"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Plan Your Trip */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="font-medium text-text-dark-100 mb-4">Plan Your Trip</h3>
            <ul className="space-y-2 text-left">
              {FOOTER_LINKS.plan.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-text-dark-80 transition-colors "
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Inspiration - Full width on mobile, items in 2 columns */}
          <div className="col-span-2 md:col-span-1 md:col-start-1 lg:col-start-auto">
            <h3 className="font-medium text-text-dark-100 mb-4">Inspiration</h3>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2 md:grid-cols-1 md:space-y-2 md:gap-x-0">
              {FOOTER_LINKS.inspiration.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-text-dark-80 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Email Subscription - Full width on mobile, new line */}
          <div className="col-span-2 lg:col-span-1 overflow-hidden">
            <div className="space-y-1 mb-2">

            <h3 className="font-semibold text-text-dark-100 font-sans text-sm md:text-base text-center md:text-start">
            Join Our Travel Tribe!
            </h3>
            <p className="text-xs mb-1 text-text-dark-80">
            Subscribe to tips and inspiring blogs that will enhance your adventures!
            </p>
            </div>
            <form className="space-y-3">
            <div className="min-h-[60px] max-w-full md:max-w-[369px] lg:max-w-max relative flex items-center rounded-[100px] bg-white p-3 pl-4 border border-accent-100 md:border-[#E5E5E5]">
              <input
                type="text"
                placeholder="Enter your email"
                className="flex-1 bg-transparent text-text-dark-100 outline-none focus:outline-none focus-visible:outline-none focus:ring-0 text-sm md:text-base placeholder:text-sm placeholder:text-text-dark-80 px-4 pr-14 min-w-0"
              />
              <button className="absolute right-2 bg-theme-primary text-white flex items-center justify-center rounded-full size-9 shrink-0">
                <ChevronRight className="text-white" />
              </button>
            </div>
            <div className="flex flex-col items-center justify-center gap-1 md:hidden">
  <p className=" text-sm  text-text-dark-100">
              Socials
            </p>
            <div className="flex gap-2 ">
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
           
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-accent-100 md:border-black/10 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-[#758886] font-sans md:font-Euclid text-xs md:text-base">
            © 2025 Tourism Commission. All rights reserved.
            </p>
            <div className="flex gap-6">
         
              <div className="flex items-center gap-2">
                <span className="text-xs md:text-sm text-text-dark-80">Powered by</span>
                <span className="text-xs md:text-sm font-medium text-text-dark-100 underline">

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

