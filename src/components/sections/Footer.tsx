import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"
import { SITE_CONFIG } from "@/config/constants"
import { Button } from "@/components/ui/button"

const footerLinks = {
  explore: [
    { label: "Attractions", href: "#attractions" },
    { label: "Events & Festivals", href: "#events" },
    { label: "Food & Drink", href: "#food" },
    { label: "Plan Your Trip", href: "#plan" },
  ],
  plan: [
    { label: "Best Time To Visit", href: "#best-time" },
    { label: "Transportation Options", href: "#transport" },
    { label: "Hotels, Resorts", href: "#hotels" },
    { label: "Food & Drinks", href: "#food-drinks" },
  ],
  information: [
    { label: "Health & Safety", href: "#health" },
    { label: "Emergency Services", href: "#emergency" },
    { label: "Travel Documents", href: "#documents" },
    { label: "FAQs", href: "#faqs" },
  ],
}

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Youtube, href: "#", label: "YouTube" },
]

export function Footer() {
  return (
    <footer className="bg-[#F5F5DC] text-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-12">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-teal-500 to-yellow-400 rounded-lg flex items-center justify-center">
                <div className="w-6 h-6 lg:w-8 lg:h-8 bg-white rounded-full"></div>
              </div>
              <span className="text-lg lg:text-xl font-semibold">
                {SITE_CONFIG.name}
              </span>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              Discover the vibrant heart of Africa. Your gateway to amazing
              experiences in Addis Ababa.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-gray-100 transition-colors"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5 text-gray-700" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Explore Addis Ababa */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">
              Explore Addis Ababa
            </h3>
            <ul className="space-y-2">
              {footerLinks.explore.map((link) => (
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
            <h3 className="font-semibold text-gray-900 mb-4">Plan Your Trip</h3>
            <ul className="space-y-2">
              {footerLinks.plan.map((link) => (
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
            <h3 className="font-semibold text-gray-900 mb-4">Information</h3>
            <ul className="space-y-2">
              {footerLinks.information.map((link) => (
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
            <h3 className="font-semibold text-gray-900 mb-4">
              Join Our Email List
            </h3>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm"
              />
              <Button
                type="submit"
                className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-300 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-600">
              © 2023 {SITE_CONFIG.name}. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="#privacy"
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#terms"
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                Terms & Conditions
              </a>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">Powered by</span>
                <span className="text-sm font-semibold text-gray-900">
                  Webflow
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

