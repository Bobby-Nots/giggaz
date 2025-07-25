"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Bell, Menu, User, Wallet, LogOut, Settings, Coins } from "lucide-react"
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
  const [notifications] = useState([
    { id: 1, message: "New gig available: Data Entry", time: "2m ago" },
    { id: 2, message: "Payment received: $25", time: "1h ago" },
    { id: 3, message: "Gig completed successfully", time: "3h ago" },
  ])

  const NavLinks = () => (
    <>
      <Link href="/" className="text-gray-700 hover:text-primary transition-colors">
        Home
      </Link>
      <Link href="/gigs" className="text-gray-700 hover:text-primary transition-colors">
        Find Gigs
      </Link>
      <Link href="/feed" className="text-gray-700 hover:text-primary transition-colors">
        Video Feed
      </Link>
      {isLoggedIn && (
        <>
          <Link href="/dashboard" className="text-gray-700 hover:text-primary transition-colors">
            Dashboard
          </Link>
          <Link href="/wallet" className="text-gray-700 hover:text-primary transition-colors">
            Wallet
          </Link>
        </>
      )}
    </>
  )

  return (
    <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">G</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Giggaz</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLinks />
          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-4">
            {/* Credits Display */}
            {isLoggedIn && (
              <div className="hidden md:flex items-center gap-2 mr-4">
                <Coins className="h-4 w-4 text-yellow-500" />
                <span className="text-sm font-semibold">245</span>
              </div>
            )}
            {isLoggedIn ? (
              <>
                {/* Role Badge */}
                {userRole && (
                  <Badge variant={userRole === "worker" ? "default" : "secondary"}>
                    {userRole === "worker" ? "Worker" : "Poster"}
                  </Badge>
                )}

                {/* Notifications */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="relative">
                      <Bell className="h-5 w-5" />
                      {notifications.length > 0 && (
                        <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
                          {notifications.length}
                        </Badge>
                      )}
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-80">
                    <div className="p-2 font-semibold">Notifications</div>
                    <DropdownMenuSeparator />
                    {notifications.map((notification) => (
                      <DropdownMenuItem key={notification.id} className="flex flex-col items-start p-3">
                        <span className="text-sm">{notification.message}</span>
                        <span className="text-xs text-muted-foreground">{notification.time}</span>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>

                {/* User Menu */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <User className="h-5 w-5" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>
                      <User className="mr-2 h-4 w-4" />
                      Profile
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Wallet className="mr-2 h-4 w-4" />
                      Wallet
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Settings className="mr-2 h-4 w-4" />
                      Settings
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <LogOut className="mr-2 h-4 w-4" />
                      Logout
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </>
            ) : (
              <div className="hidden md:flex items-center space-x-2">
                <Link href="/login">
                  <Button variant="ghost">Login</Button>
                </Link>
                <Link href="/signup">
                  <Button>Sign Up</Button>
                </Link>
              </div>
            )}

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col space-y-4 mt-8">
                  <NavLinks />
                  {!isLoggedIn && (
                    <>
                      <Link href="/login">
                        <Button variant="ghost" className="w-full justify-start">
                          Login
                        </Button>
                      </Link>
                      <Link href="/signup">
                        <Button className="w-full">Sign Up</Button>
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
