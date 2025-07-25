"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Bell, Menu, User, Wallet, LogOut, Settings, Coins, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

interface NavbarProps {
  userRole?: "worker" | "poster" | null
  isLoggedIn?: boolean
}

export function Navbar({ userRole = null, isLoggedIn = false }: NavbarProps) {
  const { theme, setTheme } = useTheme()
  const [notifications] = useState([
    { id: 1, message: "New gig available: Data Entry", time: "2m ago" },
    { id: 2, message: "Payment received: $25", time: "1h ago" },
    { id: 3, message: "Gig completed successfully", time: "3h ago" },
  ])

  const NavLinks = () => (
    <>
      <Link href="/" className="text-gray-700 hover:text-primary transition-all duration-300 font-medium hover:scale-105">
        Home
      </Link>
      <Link href="/gigs" className="text-gray-700 hover:text-primary transition-all duration-300 font-medium hover:scale-105">
        Find Gigs
      </Link>
      <Link href="/feed" className="text-gray-700 hover:text-primary transition-all duration-300 font-medium hover:scale-105">
        Video Feed
      </Link>
      {isLoggedIn && (
        <>
          <Link href="/dashboard" className="text-gray-700 hover:text-primary transition-all duration-300 font-medium hover:scale-105">
            Dashboard
          </Link>
          <Link href="/wallet" className="text-gray-700 hover:text-primary transition-all duration-300 font-medium hover:scale-105">
            Wallet
          </Link>
        </>
      )}
    </>
  )

  return (
    <nav className="glass-effect backdrop-blur-xl bg-white/90 dark:bg-black/90 border-b border-white/20 dark:border-white/10 sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Enhanced Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 gradient-bg rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300 animate-glow">
              <span className="text-white font-bold text-xl">G</span>
            </div>
            <span className="text-2xl font-bold gradient-text group-hover:scale-105 transition-all duration-300">Giggaz</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLinks />
          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="hover:scale-110 transition-all duration-300 glass-effect rounded-full"
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>

            {/* Enhanced Credits Display */}
            {isLoggedIn && (
              <div className="hidden md:flex items-center gap-2 mr-4 glass-card px-4 py-2 rounded-full hover:scale-105 transition-all duration-300">
                <Coins className="h-5 w-5 text-yellow-500 animate-bounce-custom" />
                <span className="text-sm font-bold gradient-text">245</span>
              </div>
            )}
            {isLoggedIn ? (
              <>
                {/* Enhanced Role Badge */}
                {userRole && (
                  <Badge 
                    variant={userRole === "worker" ? "default" : "secondary"} 
                    className="animate-pulse-custom font-medium px-3 py-1"
                  >
                    {userRole === "worker" ? "Worker" : "Poster"}
                  </Badge>
                )}

                {/* Enhanced Notifications */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="relative hover:scale-110 transition-all duration-300 glass-effect rounded-full">
                      <Bell className="h-5 w-5" />
                      {notifications.length > 0 && (
                        <Badge className="absolute -top-1 -right-1 h-6 w-6 rounded-full p-0 flex items-center justify-center text-xs animate-bounce-custom gradient-bg border-0">
                          {notifications.length}
                        </Badge>
                      )}
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-80 glass-card border-0 shadow-2xl">
                    <div className="p-3 font-semibold gradient-text">Notifications</div>
                    <DropdownMenuSeparator />
                    {notifications.map((notification) => (
                      <DropdownMenuItem key={notification.id} className="flex flex-col items-start p-4 hover:bg-gray-50/50 dark:hover:bg-gray-800/50 transition-all duration-300">
                        <span className="text-sm font-medium">{notification.message}</span>
                        <span className="text-xs text-muted-foreground">{notification.time}</span>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>

                {/* Enhanced User Menu */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="hover:scale-110 transition-all duration-300 glass-effect rounded-full">
                      <User className="h-5 w-5" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="glass-card border-0 shadow-2xl">
                    <DropdownMenuItem className="hover:bg-gray-50/50 dark:hover:bg-gray-800/50 transition-all duration-300">
                      <User className="mr-2 h-4 w-4" />
                      Profile
                    </DropdownMenuItem>
                    <DropdownMenuItem className="hover:bg-gray-50/50 dark:hover:bg-gray-800/50 transition-all duration-300">
                      <Wallet className="mr-2 h-4 w-4" />
                      Wallet
                    </DropdownMenuItem>
                    <DropdownMenuItem className="hover:bg-gray-50/50 dark:hover:bg-gray-800/50 transition-all duration-300">
                      <Settings className="mr-2 h-4 w-4" />
                      Settings
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="hover:bg-red-50/50 dark:hover:bg-red-900/50 transition-all duration-300 text-red-600">
                      <LogOut className="mr-2 h-4 w-4" />
                      Logout
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </>
            ) : (
              <div className="hidden md:flex items-center space-x-3">
                <Link href="/login">
                  <Button variant="ghost" className="font-medium hover:scale-105 transition-all duration-300">Login</Button>
                </Link>
                <Link href="/signup">
                  <Button className="btn-animate gradient-bg border-0 font-semibold px-6 shadow-lg hover:shadow-xl">Sign Up</Button>
                </Link>
              </div>
            )}

            {/* Enhanced Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden hover:scale-110 transition-all duration-300 glass-effect rounded-full">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent className="glass-effect border-0 backdrop-blur-xl">
                <div className="flex flex-col space-y-6 mt-8">
                  <NavLinks />
                  {!isLoggedIn && (
                    <>
                      <Link href="/login">
                        <Button variant="ghost" className="w-full justify-start font-medium hover:bg-gray-50/50 dark:hover:bg-gray-800/50 transition-all duration-300">
                          Login
                        </Button>
                      </Link>
                      <Link href="/signup">
                        <Button className="w-full gradient-bg border-0 font-semibold shadow-lg btn-animate">Sign Up</Button>
                      </Link>
                    </>
                  )}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}
