"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Navbar } from "@/components/navbar"
import { GigCard } from "@/components/gig-card"
import { Search, Filter, MapPin, DollarSign, Clock } from "lucide-react"

export default function GigsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [priceRange, setPriceRange] = useState("")
  const [location, setLocation] = useState("")
  const [gigType, setGigType] = useState("")

  const categories = [
    "Data Entry",
    "Delivery",
    "Design",
    "Writing",
    "Survey",
    "Testing",
    "Tutoring",
    "Photography",
    "Social Media",
    "Virtual Assistant",
  ]

  const gigs = [
    {
      id: "1",
      title: "Data Entry for E-commerce Store",
      description:
        "Need someone to input product information into our database. Simple copy-paste work that requires attention to detail.",
      price: 25,
      location: "Remote",
      isOnline: true,
      deadline: "2 days",
      category: "Data Entry",
      poster: {
        name: "Sarah Johnson",
        avatar: "/placeholder.svg?height=32&width=32",
        rating: 4.8,
      },
      isQuickPay: true,
    },
    {
      id: "2",
      title: "Grocery Delivery Service",
      description:
        "Pick up groceries from local store and deliver to customer. Car required. Easy money for quick delivery.",
      price: 15,
      location: "Downtown",
      isOnline: false,
      deadline: "Today",
      category: "Delivery",
      poster: {
        name: "Mike Chen",
        avatar: "/placeholder.svg?height=32&width=32",
        rating: 4.9,
      },
      isUrgent: true,
    },
    {
      id: "3",
      title: "Social Media Content Creation",
      description:
        "Create 5 Instagram posts for small business. Design skills preferred but templates will be provided.",
      price: 50,
      location: "Remote",
      isOnline: true,
      deadline: "3 days",
      category: "Design",
      poster: {
        name: "Emma Davis",
        avatar: "/placeholder.svg?height=32&width=32",
        rating: 4.7,
      },
    },
    {
      id: "4",
      title: "Online Survey - Consumer Habits",
      description: "Quick 10-minute survey about your shopping preferences. No special skills required.",
      price: 8,
      location: "Online",
      isOnline: true,
      deadline: "1 hour",
      category: "Survey",
      poster: {
        name: "Research Corp",
        avatar: "/placeholder.svg?height=32&width=32",
        rating: 4.6,
      },
      isQuickPay: true,
    },
    {
      id: "5",
      title: "Math Tutoring Session",
      description: "Help high school student with algebra homework. 1-hour online session via video call.",
      price: 30,
      location: "Online",
      isOnline: true,
      deadline: "Tomorrow",
      category: "Tutoring",
      poster: {
        name: "Jennifer Smith",
        avatar: "/placeholder.svg?height=32&width=32",
        rating: 4.9,
      },
    },
    {
      id: "6",
      title: "Product Photography",
      description: "Take professional photos of handmade jewelry for online store. Must have good camera.",
      price: 75,
      location: "Midtown",
      isOnline: false,
      deadline: "5 days",
      category: "Photography",
      poster: {
        name: "Artisan Crafts",
        avatar: "/placeholder.svg?height=32&width=32",
        rating: 4.8,
      },
    },
  ]

  const handleCategoryChange = (category: string, checked: boolean) => {
    if (checked) {
      setSelectedCategories([...selectedCategories, category])
    } else {
      setSelectedCategories(selectedCategories.filter((c) => c !== category))
    }
  }

  const filteredGigs = gigs.filter((gig) => {
    const matchesSearch =
      gig.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      gig.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(gig.category)
    const matchesType = !gigType || (gigType === "online" && gig.isOnline) || (gigType === "offline" && !gig.isOnline)

    return matchesSearch && matchesCategory && matchesType
  })

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar userRole="worker" isLoggedIn={true} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Find Gigs</h1>
          <p className="text-gray-600">Discover opportunities that match your skills and schedule</p>
        </div>

        {/* Search Bar */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search for gigs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={location} onValueChange={setLocation}>
                <SelectTrigger className="w-full md:w-48">
                  <MapPin className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Locations</SelectItem>
                  <SelectItem value="remote">Remote</SelectItem>
                  <SelectItem value="downtown">Downtown</SelectItem>
                  <SelectItem value="midtown">Midtown</SelectItem>
                  <SelectItem value="uptown">Uptown</SelectItem>
                </SelectContent>
              </Select>
              <Button>
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Filter className="mr-2 h-5 w-5" />
                  Filters
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Gig Type */}
                <div>
                  <h4 className="font-medium mb-3">Gig Type</h4>
                  <Select value={gigType} onValueChange={setGigType}>
                    <SelectTrigger>
                      <SelectValue placeholder="All Types" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Types</SelectItem>
                      <SelectItem value="online">Online Only</SelectItem>
                      <SelectItem value="offline">In-Person</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Price Range */}
                <div>
                  <h4 className="font-medium mb-3">Price Range</h4>
                  <Select value={priceRange} onValueChange={setPriceRange}>
                    <SelectTrigger>
                      <DollarSign className="h-4 w-4 mr-2" />
                      <SelectValue placeholder="Any Price" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="any">Any Price</SelectItem>
                      <SelectItem value="0-25">$0 - $25</SelectItem>
                      <SelectItem value="25-50">$25 - $50</SelectItem>
                      <SelectItem value="50-100">$50 - $100</SelectItem>
                      <SelectItem value="100+">$100+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Categories */}
                <div>
                  <h4 className="font-medium mb-3">Categories</h4>
                  <div className="space-y-2 max-h-48 overflow-y-auto">
                    {categories.map((category) => (
                      <div key={category} className="flex items-center space-x-2">
                        <Checkbox
                          id={category}
                          checked={selectedCategories.includes(category)}
                          onCheckedChange={(checked) => handleCategoryChange(category, checked as boolean)}
                        />
                        <label htmlFor={category} className="text-sm cursor-pointer">
                          {category}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Filters */}
                <div>
                  <h4 className="font-medium mb-3">Quick Filters</h4>
                  <div className="space-y-2">
                    <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-white">
                      <Clock className="h-3 w-3 mr-1" />
                      Urgent
                    </Badge>
                    <Badge variant="outline" className="cursor-pointer hover:bg-accent hover:text-white">
                      Quick Pay
                    </Badge>
                    <Badge variant="outline" className="cursor-pointer hover:bg-green-500 hover:text-white">
                      High Rating
                    </Badge>
                  </div>
                </div>

                <Button variant="outline" className="w-full bg-transparent">
                  Clear Filters
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Gigs List */}
          <div className="lg:col-span-3">
            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-600">
                Showing {filteredGigs.length} of {gigs.length} gigs
              </p>
              <Select defaultValue="newest">
                <SelectTrigger className="w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest First</SelectItem>
                  <SelectItem value="price-high">Highest Price</SelectItem>
                  <SelectItem value="price-low">Lowest Price</SelectItem>
                  <SelectItem value="deadline">Deadline</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredGigs.map((gig) => (
                <GigCard key={gig.id} gig={gig} />
              ))}
            </div>

            {filteredGigs.length === 0 && (
              <Card className="text-center py-12">
                <CardContent>
                  <div className="text-gray-400 mb-4">
                    <Search className="h-12 w-12 mx-auto" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">No gigs found</h3>
                  <p className="text-gray-600 mb-4">Try adjusting your filters or search terms</p>
                  <Button variant="outline">Clear All Filters</Button>
                </CardContent>
              </Card>
            )}

            {/* Load More */}
            {filteredGigs.length > 0 && (
              <div className="text-center mt-8">
                <Button variant="outline" size="lg">
                  Load More Gigs
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
