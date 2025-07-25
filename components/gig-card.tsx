"use client"

import { useState } from "react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MapPin, Clock, Star, Zap, Heart, Bookmark } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

interface GigCardProps {
  gig: {
    id: string
    title: string
    description: string
    price: number
    location?: string
    isOnline: boolean
    deadline: string
    category: string
    poster: {
      name: string
      avatar?: string
      rating: number
    }
    isUrgent?: boolean
    isQuickPay?: boolean
  }
}

export function GigCard({ gig }: GigCardProps) {
  const [isApplying, setIsApplying] = useState(false)
  const [application, setApplication] = useState("")
  const [isBookmarked, setIsBookmarked] = useState(false)
  const [isLiked, setIsLiked] = useState(false)
  const { toast } = useToast()

  const handleApply = async () => {
    setIsApplying(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsApplying(false)
    toast({
      title: "Application Sent!",
      description: "Your application has been submitted successfully.",
    })
    setApplication("")
  }

  const toggleBookmark = () => {
    setIsBookmarked(!isBookmarked)
    toast({
      title: isBookmarked ? "Removed from Bookmarks" : "Added to Bookmarks",
      description: isBookmarked ? "Gig removed from your saved list" : "Gig saved for later",
    })
  }

  const toggleLike = () => {
    setIsLiked(!isLiked)
  }

  // Generate category-specific images with better styling
  const getCategoryImage = (category: string) => {
    const categoryImages = {
      "Data Entry": "/placeholder.svg?height=200&width=300&text=Data+Entry&bg=4f46e5&color=white",
      Delivery: "/placeholder.svg?height=200&width=300&text=Delivery&bg=059669&color=white",
      Design: "/placeholder.svg?height=200&width=300&text=Design&bg=dc2626&color=white",
      Writing: "/placeholder.svg?height=200&width=300&text=Writing&bg=7c3aed&color=white",
      Survey: "/placeholder.svg?height=200&width=300&text=Survey&bg=ea580c&color=white",
      Testing: "/placeholder.svg?height=200&width=300&text=Testing&bg=0891b2&color=white",
      Tutoring: "/placeholder.svg?height=200&width=300&text=Tutoring&bg=16a34a&color=white",
      Photography: "/placeholder.svg?height=200&width=300&text=Photography&bg=be185d&color=white",
      "Social Media": "/placeholder.svg?height=200&width=300&text=Social+Media&bg=2563eb&color=white",
      "Virtual Assistant": "/placeholder.svg?height=200&width=300&text=Virtual+Assistant&bg=7c2d12&color=white",
    }
    return categoryImages[category as keyof typeof categoryImages] || "/placeholder.svg?height=200&width=300&text=Gig"
  }

  const getCategoryGradient = (category: string) => {
    const gradients = {
      "Data Entry": "from-indigo-500 to-purple-600",
      Delivery: "from-green-500 to-emerald-600",
      Design: "from-red-500 to-pink-600",
      Writing: "from-purple-500 to-violet-600",
      Survey: "from-orange-500 to-red-600",
      Testing: "from-cyan-500 to-blue-600",
      Tutoring: "from-green-500 to-lime-600",
      Photography: "from-pink-500 to-rose-600",
      "Social Media": "from-blue-500 to-indigo-600",
      "Virtual Assistant": "from-amber-600 to-orange-700",
    }
    return gradients[category as keyof typeof gradients] || "from-gray-500 to-gray-600"
  }

  return (
    <Card className="group glass-card hover:shadow-2xl transition-all duration-500 border-0 overflow-hidden animate-fadeInUp transform hover:-translate-y-2 hover:scale-[1.02]">
      {/* Enhanced Gig Image with Overlay */}
      <div className="relative image-hover h-48 overflow-hidden">
        <img
          src={getCategoryImage(gig.category) || "/placeholder.svg"}
          alt={gig.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Gradient Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-br ${getCategoryGradient(gig.category)} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
        
        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          {gig.isQuickPay && (
            <Badge className="gradient-bg-4 text-white border-0 shadow-lg animate-bounce-custom font-medium">
              <Zap className="w-3 h-3 mr-1" />
              Quick Pay
            </Badge>
          )}
          {gig.isUrgent && (
            <Badge className="gradient-bg-2 text-white border-0 shadow-lg animate-pulse-custom font-medium">
              Urgent
            </Badge>
          )}
        </div>

        {/* Action Buttons */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button
            variant="ghost"
            size="icon"
            className={`w-10 h-10 glass-effect rounded-full hover:scale-110 transition-all duration-300 ${isBookmarked ? 'text-yellow-500' : 'text-white hover:text-yellow-400'}`}
            onClick={toggleBookmark}
          >
            <Bookmark className={`h-4 w-4 ${isBookmarked ? 'fill-current' : ''}`} />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className={`w-10 h-10 glass-effect rounded-full hover:scale-110 transition-all duration-300 ${isLiked ? 'text-red-500' : 'text-white hover:text-red-400'}`}
            onClick={toggleLike}
          >
            <Heart className={`h-4 w-4 ${isLiked ? 'fill-current animate-heartbeat' : ''}`} />
          </Button>
        </div>

        {/* Category Badge at Bottom */}
        <div className="absolute bottom-3 left-3">
          <Badge className="glass-effect border-white/30 text-white font-medium backdrop-blur-md">
            {gig.category}
          </Badge>
        </div>
      </div>

      <CardHeader className="pb-4">
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1 min-w-0">
            <h3 className="font-bold text-lg line-clamp-2 mb-3 text-gray-900 group-hover:gradient-text transition-all duration-300">
              {gig.title}
            </h3>
            <p className="text-muted-foreground text-sm line-clamp-3 leading-relaxed">
              {gig.description}
            </p>
          </div>
          <div className="text-right shrink-0">
            <div className="text-3xl font-bold gradient-text animate-glow">${gig.price}</div>
            <div className="text-xs text-muted-foreground font-medium">per gig</div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="pt-0 pb-4">
        {/* Location and Deadline Info */}
        <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5">
              {gig.isOnline ? (
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse-custom" />
              ) : (
                <MapPin className="w-4 h-4 text-gray-500" />
              )}
              <span className="font-medium">{gig.isOnline ? "Remote" : gig.location}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-gray-500" />
              <span className="font-medium">{gig.deadline}</span>
            </div>
          </div>
        </div>

        {/* Poster Info */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Avatar className="w-8 h-8 ring-2 ring-purple-100 group-hover:ring-purple-300 transition-all duration-300">
              <AvatarImage src={gig.poster.avatar} />
              <AvatarFallback className="gradient-bg text-white text-sm font-bold">
                {gig.poster.name.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <div>
              <span className="text-sm font-medium text-gray-900">{gig.poster.name}</span>
              <div className="flex items-center gap-1">
                <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                <span className="text-xs text-muted-foreground font-medium">{gig.poster.rating}</span>
              </div>
            </div>
          </div>
          
          {/* Trust Indicators */}
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse-custom"></div>
            <span className="text-xs text-green-600 font-medium">Verified</span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="pt-0">
        <Dialog>
          <DialogTrigger asChild>
            <Button className="w-full gradient-bg border-0 font-semibold py-3 btn-animate shadow-lg hover:shadow-xl">
              <Zap className="w-4 h-4 mr-2" />
              Apply for This Gig
            </Button>
          </DialogTrigger>
          <DialogContent className="glass-card border-0 shadow-2xl backdrop-blur-xl">
            <DialogHeader>
              <DialogTitle className="text-xl gradient-text">Apply for: {gig.title}</DialogTitle>
            </DialogHeader>
            <div className="space-y-6">
              {/* Enhanced Gig Details */}
              <div className="glass-card p-6 rounded-xl border border-purple-100">
                <h4 className="font-bold mb-3 gradient-text">Gig Details</h4>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{gig.description}</p>
                <div className="flex justify-between items-center text-sm">
                  <div className="flex items-center gap-2">
                    <span className="text-muted-foreground">Payment:</span>
                    <span className="font-bold text-2xl gradient-text">${gig.price}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    <span className="font-medium">{gig.deadline}</span>
                  </div>
                </div>
              </div>

              {/* Application Form */}
              <div className="space-y-3">
                <label className="text-sm font-bold block gradient-text">
                  Why are you the best fit for this gig?
                </label>
                <Textarea
                  placeholder="Tell the poster why you're perfect for this job. Include your relevant experience and what makes you stand out..."
                  value={application}
                  onChange={(e) => setApplication(e.target.value)}
                  rows={4}
                  className="glass-effect border-purple-200 focus:border-purple-400 transition-all duration-300"
                />
                <div className="text-right">
                  <span className="text-xs text-muted-foreground">
                    {application.length}/500 characters
                  </span>
                </div>
              </div>

              {/* Submit Button */}
              <Button 
                onClick={handleApply} 
                disabled={isApplying || !application.trim()} 
                className="w-full gradient-bg border-0 font-semibold py-3 btn-animate shadow-lg hover:shadow-xl disabled:opacity-50"
              >
                {isApplying ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    Sending Application...
                  </>
                ) : (
                  <>
                    <Zap className="w-4 h-4 mr-2" />
                    Send Application
                  </>
                )}
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  )
}
