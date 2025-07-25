import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-40 h-40 border border-white rounded-full animate-float blur-sm"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 border border-white rounded-full animate-pulse-custom blur-sm"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-white rounded-full animate-rotate blur-lg"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Enhanced Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6 group">
              <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300 animate-glow">
                <span className="text-white font-bold text-xl">G</span>
              </div>
              <span className="text-2xl font-bold gradient-text-2">Giggaz</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed text-lg">
              Turn your free time into cash with Giggaz. Connect with opportunities, complete gigs, and earn money on
              your schedule. Join our thriving community today!
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="group">
                <div className="w-12 h-12 glass-effect rounded-full flex items-center justify-center hover:bg-blue-600 transition-all duration-300 group-hover:scale-110">
                  <Facebook className="w-5 h-5 group-hover:text-white transition-colors" />
                </div>
              </Link>
              <Link href="#" className="group">
                <div className="w-12 h-12 glass-effect rounded-full flex items-center justify-center hover:bg-blue-400 transition-all duration-300 group-hover:scale-110">
                  <Twitter className="w-5 h-5 group-hover:text-white transition-colors" />
                </div>
              </Link>
              <Link href="#" className="group">
                <div className="w-12 h-12 glass-effect rounded-full flex items-center justify-center hover:bg-pink-600 transition-all duration-300 group-hover:scale-110">
                  <Instagram className="w-5 h-5 group-hover:text-white transition-colors" />
                </div>
              </Link>
              <Link href="#" className="group">
                <div className="w-12 h-12 glass-effect rounded-full flex items-center justify-center hover:bg-blue-700 transition-all duration-300 group-hover:scale-110">
                  <Linkedin className="w-5 h-5 group-hover:text-white transition-colors" />
                </div>
              </Link>
            </div>
          </div>

          {/* Enhanced Quick Links */}
          <div className="space-y-6">
            <h3 className="font-bold text-xl mb-6 gradient-text">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/gigs" className="text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-2 inline-block">
                  Find Gigs
                </Link>
              </li>
              <li>
                <Link href="/post-gig" className="text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-2 inline-block">
                  Post a Gig
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-2 inline-block">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/success-stories" className="text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-2 inline-block">
                  Success Stories
                </Link>
              </li>
              <li>
                <Link href="/feed" className="text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-2 inline-block">
                  Video Feed
                </Link>
              </li>
            </ul>
          </div>

          {/* Enhanced Support */}
          <div className="space-y-6">
            <h3 className="font-bold text-xl mb-6 gradient-text-3">Support</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/help" className="text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-2 inline-block">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-2 inline-block">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/safety" className="text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-2 inline-block">
                  Safety Guidelines
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-2 inline-block">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-2 inline-block">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Signup Section */}
        <div className="border-t border-gray-800 mt-12 pt-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4 gradient-text-2">Stay Updated</h3>
            <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Get the latest updates on new features, gig opportunities, and earnings tips delivered to your inbox.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-8">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-xl glass-effect bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
            />
            <Button className="gradient-bg border-0 px-8 py-3 font-semibold btn-animate hover:shadow-xl">
              Subscribe
            </Button>
          </div>
        </div>

        {/* Enhanced Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-center sm:text-left mb-4 sm:mb-0">
            &copy; {new Date().getFullYear()} Giggaz. All rights reserved. Made with ❤️ for freelancers.
          </p>
          
          {/* Back to Top Button */}
          <Button
            onClick={scrollToTop}
            variant="outline"
            size="sm"
            className="glass-effect border-white/20 text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300 hover:scale-110"
          >
            <ArrowUp className="w-4 h-4 mr-2" />
            Back to Top
          </Button>
        </div>
      </div>
    </footer>
  )
}
