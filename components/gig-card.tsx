"use client"

import { useState } from "react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MapPin, Clock, Star, Zap } from "lucide-react"
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

  // Generate category-specific images
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

  return (
    <Card className="hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary card-hover animate-fadeIn">
      {/* Gig Image */}
      <div className="image-hover">
        <img
          src={getCategoryImage(gig.category) || "/placeholder.svg"}
          alt={gig.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-2 right-2 flex gap-2">
          {gig.isQuickPay && (
            <Badge className="bg-accent text-white animate-bounce-custom">
              <Zap className="w-3 h-3 mr-1" />
              Quick Pay
            </Badge>
          )}
          {gig.isUrgent && (
            <Badge variant="destructive" className="animate-pulse-custom">
              Urgent
            </Badge>
          )}
        </div>
      </div>

      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="font-semibold text-lg line-clamp-1 animate-slideInLeft">{gig.title}</h3>
            </div>
            <p
              className="text-muted-foreground text-sm line-clamp-2 mb-3 animate-slideInLeft"
              style={{ animationDelay: "0.1s" }}
            >
              {gig.description}
            </p>
          </div>
          <div className="text-right animate-slideInRight">
            <div className="text-2xl font-bold text-primary gradient-text">${gig.price}</div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        <div
          className="flex items-center justify-between text-sm text-muted-foreground mb-3 animate-slideInLeft"
          style={{ animationDelay: "0.2s" }}
        >
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              {gig.isOnline ? (
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse-custom" />
              ) : (
                <MapPin className="w-4 h-4" />
              )}
              <span>{gig.isOnline ? "Online" : gig.location}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{gig.deadline}</span>
            </div>
          </div>
          <Badge variant="outline" className="animate-fadeIn" style={{ animationDelay: "0.3s" }}>
            {gig.category}
          </Badge>
        </div>

        <div className="flex items-center gap-2 animate-slideInLeft" style={{ animationDelay: "0.4s" }}>
          <Avatar className="w-6 h-6">
            <AvatarImage src={`/placeholder.svg?height=24&width=24&text=${gig.poster.name.charAt(0)}`} />
            <AvatarFallback>{gig.poster.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <span className="text-sm text-muted-foreground">{gig.poster.name}</span>
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 animate-pulse-custom" />
            <span className="text-sm">{gig.poster.rating}</span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="animate-fadeIn" style={{ animationDelay: "0.5s" }}>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="w-full btn-animate ripple">Apply for This Gig</Button>
          </DialogTrigger>
          <DialogContent className="modal-content">
            <DialogHeader>
              <DialogTitle>Apply for: {gig.title}</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div className="p-4 bg-muted rounded-lg animate-fadeIn">
                <h4 className="font-semibold mb-2">Gig Details</h4>
                <p className="text-sm text-muted-foreground mb-2">{gig.description}</p>
                <div className="flex justify-between text-sm">
                  <span>
                    Payment: <span className="font-semibold text-primary">${gig.price}</span>
                  </span>
                  <span>Deadline: {gig.deadline}</span>
                </div>
              </div>
              <div className="animate-slideInLeft" style={{ animationDelay: "0.2s" }}>
                <label className="text-sm font-medium mb-2 block">Why are you the best fit for this gig?</label>
                <Textarea
                  placeholder="Tell the poster why you're perfect for this job..."
                  value={application}
                  onChange={(e) => setApplication(e.target.value)}
                  rows={4}
                />
              </div>
              <Button onClick={handleApply} disabled={isApplying || !application.trim()} className="w-full btn-animate">
                {isApplying ? <span className="loading-dots">Sending Application</span> : "Send Application"}
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  )
}
