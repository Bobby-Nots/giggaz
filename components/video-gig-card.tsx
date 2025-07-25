"use client"

import { useState, useRef } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Heart, MessageCircle, Share2, Play, Volume2, VolumeX, Star, Zap, Crown } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface VideoGigCardProps {
  gig: {
    id: string
    title: string
    description: string
    price: number
    deliveryTime: string
    category: string
    videoUrl: string
    thumbnail: string
    freelancer: {
      name: string
      avatar: string
      rating: number
      level: "beginner" | "pro" | "top"
      followers: number
      isVerified: boolean
      trustedBy?: string[]
    }
    likes: number
    comments: number
    shares: number
    isLiked: boolean
    isFollowing: boolean
    tags: string[]
    gigChainAvailable?: boolean
    discount?: {
      percentage: number
      condition: string
    }
  }
}

export function VideoGigCard({ gig }: VideoGigCardProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [isLiked, setIsLiked] = useState(gig.isLiked)
  const [isFollowing, setIsFollowing] = useState(gig.isFollowing)
  const [likes, setLikes] = useState(gig.likes)
  const videoRef = useRef<HTMLVideoElement>(null)
  const { toast } = useToast()

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const handleLike = () => {
    setIsLiked(!isLiked)
    setLikes(isLiked ? likes - 1 : likes + 1)

    if (!isLiked) {
      toast({
        title: "Liked! 💖",
        description: "You earned 1 Giggaz Credit for engaging!",
      })
    }
  }

  const handleFollow = () => {
    setIsFollowing(!isFollowing)
    toast({
      title: isFollowing ? "Unfollowed" : "Following! 🎉",
      description: isFollowing
        ? `You unfollowed ${gig.freelancer.name}`
        : `You're now following ${gig.freelancer.name}. You earned 5 Giggaz Credits!`,
    })
  }

  const handleShare = () => {
    navigator
      .share?.({
        title: gig.title,
        text: `Check out this amazing gig by ${gig.freelancer.name}!`,
        url: window.location.href,
      })
      .catch(() => {
        navigator.clipboard.writeText(window.location.href)
        toast({
          title: "Link Copied! 🔗",
          description: "Share this gig to earn discount credits!",
        })
      })
  }

  const handleBookNow = () => {
    toast({
      title: "Booking Initiated! 🚀",
      description: "Redirecting to secure checkout...",
    })
  }

  const getLevelIcon = (level: string) => {
    switch (level) {
      case "top":
        return <Crown className="h-4 w-4 text-yellow-500 animate-pulse-custom" />
      case "pro":
        return <Star className="h-4 w-4 text-blue-500 animate-glow" />
      default:
        return <Zap className="h-4 w-4 text-green-500 animate-bounce-custom" />
    }
  }

  const getLevelColor = (level: string) => {
    switch (level) {
      case "top":
        return "bg-gradient-to-r from-yellow-400 to-orange-500"
      case "pro":
        return "bg-gradient-to-r from-blue-500 to-purple-600"
      default:
        return "bg-gradient-to-r from-green-400 to-blue-500"
    }
  }

  return (
    <Card className="relative overflow-hidden h-[600px] w-full max-w-sm mx-auto bg-black animate-scaleIn card-hover">
      {/* Video */}
      <div className="video-container h-full">
        <video
          ref={videoRef}
          className="gig-video"
          poster={gig.thumbnail}
          loop
          muted={isMuted}
          onClick={togglePlay}
          onLoadedData={() => {
            // Auto-play when video loads
            if (videoRef.current) {
              videoRef.current.play()
              setIsPlaying(true)
            }
          }}
        >
          <source src="/placeholder.mp4" type="video/mp4" />
        </video>

        {/* Play/Pause Overlay */}
        {!isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 animate-fadeIn">
            <Button
              size="icon"
              className="h-16 w-16 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 btn-animate"
              onClick={togglePlay}
            >
              <Play className="h-8 w-8 text-white animate-pulse-custom" />
            </Button>
          </div>
        )}

        {/* Video Controls */}
        <div className="absolute top-4 right-4 flex gap-2 animate-slideInRight">
          <Button
            size="icon"
            variant="ghost"
            className="h-8 w-8 bg-black bg-opacity-50 hover:bg-opacity-70 text-white ripple"
            onClick={toggleMute}
          >
            {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
          </Button>
        </div>

        {/* Floating Action Buttons */}
        <div className="floating-actions">
          {/* Freelancer Avatar */}
          <div className="relative animate-float">
            <Avatar className="h-12 w-12 border-2 border-white shadow-lg">
              <AvatarImage src={`/placeholder.svg?height=48&width=48&text=${gig.freelancer.name.charAt(0)}`} />
              <AvatarFallback>{gig.freelancer.name.charAt(0)}</AvatarFallback>
            </Avatar>
            {!isFollowing && (
              <Button
                size="icon"
                className="absolute -bottom-2 -right-2 h-6 w-6 rounded-full bg-primary animate-bounce-custom"
                onClick={handleFollow}
              >
                <span className="text-xs font-bold">+</span>
              </Button>
            )}
          </div>

          {/* Like Button */}
          <div className="flex flex-col items-center animate-slideInRight" style={{ animationDelay: "0.1s" }}>
            <Button
              size="icon"
              variant="ghost"
              className="h-12 w-12 text-white hover:bg-white hover:bg-opacity-20 ripple"
              onClick={handleLike}
            >
              <Heart
                className={`h-6 w-6 transition-all duration-300 ${isLiked ? "fill-red-500 text-red-500 animate-bounce-custom" : ""}`}
              />
            </Button>
            <span className="text-white text-xs font-semibold animate-pulse-custom">{likes}</span>
          </div>

          {/* Comment Button */}
          <div className="flex flex-col items-center animate-slideInRight" style={{ animationDelay: "0.2s" }}>
            <Button
              size="icon"
              variant="ghost"
              className="h-12 w-12 text-white hover:bg-white hover:bg-opacity-20 ripple"
            >
              <MessageCircle className="h-6 w-6" />
            </Button>
            <span className="text-white text-xs font-semibold">{gig.comments}</span>
          </div>

          {/* Share Button */}
          <div className="flex flex-col items-center animate-slideInRight" style={{ animationDelay: "0.3s" }}>
            <Button
              size="icon"
              variant="ghost"
              className="h-12 w-12 text-white hover:bg-white hover:bg-opacity-20 ripple"
              onClick={handleShare}
            >
              <Share2 className="h-6 w-6" />
            </Button>
            <span className="text-white text-xs font-semibold">{gig.shares}</span>
          </div>
        </div>

        {/* Bottom Overlay with Gig Info */}
        <div className="video-overlay">
          <div className="flex items-center gap-2 mb-2 animate-slideInLeft">
            <Badge className={`${getLevelColor(gig.freelancer.level)} text-white border-0 animate-pulse-custom`}>
              {getLevelIcon(gig.freelancer.level)}
              <span className="ml-1 capitalize">{gig.freelancer.level}</span>
            </Badge>
            {gig.freelancer.isVerified && (
              <Badge variant="secondary" className="bg-blue-500 text-white animate-glow">
                ✓ Verified
              </Badge>
            )}
            {gig.gigChainAvailable && (
              <Badge className="bg-purple-500 text-white animate-bounce-custom">🔗 Chain Available</Badge>
            )}
          </div>

          <div className="flex items-center gap-2 mb-2 animate-slideInLeft" style={{ animationDelay: "0.1s" }}>
            <span className="font-semibold">{gig.freelancer.name}</span>
            <div className="flex items-center gap-1">
              <Star className="h-3 w-3 fill-yellow-400 text-yellow-400 animate-pulse-custom" />
              <span className="text-sm">{gig.freelancer.rating}</span>
            </div>
            <span className="text-sm opacity-75">• {gig.freelancer.followers} followers</span>
          </div>

          {/* Trust Badges */}
          {gig.freelancer.trustedBy && gig.freelancer.trustedBy.length > 0 && (
            <div className="mb-2 animate-slideInLeft" style={{ animationDelay: "0.2s" }}>
              <div className="flex flex-wrap gap-1">
                {gig.freelancer.trustedBy.slice(0, 2).map((name, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="text-xs bg-white bg-opacity-20 border-white border-opacity-30 animate-fadeIn"
                    style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                  >
                    Trusted by {name}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          <h3 className="font-bold text-lg mb-1 line-clamp-2 animate-slideInLeft" style={{ animationDelay: "0.3s" }}>
            {gig.title}
          </h3>
          <p className="text-sm opacity-90 mb-3 line-clamp-2 animate-slideInLeft" style={{ animationDelay: "0.4s" }}>
            {gig.description}
          </p>

          <div className="flex flex-wrap gap-1 mb-3 animate-slideInLeft" style={{ animationDelay: "0.5s" }}>
            {gig.tags.slice(0, 3).map((tag, index) => (
              <Badge
                key={index}
                variant="outline"
                className="text-xs bg-white bg-opacity-10 border-white border-opacity-30 animate-fadeIn"
                style={{ animationDelay: `${0.6 + index * 0.1}s` }}
              >
                #{tag}
              </Badge>
            ))}
          </div>

          <div className="flex items-center justify-between animate-slideInLeft" style={{ animationDelay: "0.6s" }}>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold gradient-text-2">${gig.price}</span>
                {gig.discount && (
                  <Badge className="bg-red-500 text-white animate-bounce-custom">-{gig.discount.percentage}% off</Badge>
                )}
              </div>
              <span className="text-sm opacity-75">Delivery: {gig.deliveryTime}</span>
            </div>

            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-white text-black hover:bg-gray-100 font-semibold px-6 animate-pulse-custom btn-animate">
                  Book Now
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-md modal-content">
                <DialogHeader>
                  <DialogTitle>Book: {gig.title}</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 animate-slideInLeft">
                    <Avatar>
                      <AvatarImage src={`/placeholder.svg?height=40&width=40&text=${gig.freelancer.name.charAt(0)}`} />
                      <AvatarFallback>{gig.freelancer.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{gig.freelancer.name}</p>
                      <div className="flex items-center gap-1">
                        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm">{gig.freelancer.rating}</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-gray-50 rounded-lg animate-fadeIn" style={{ animationDelay: "0.2s" }}>
                    <h4 className="font-semibold mb-2">Order Summary</h4>
                    <div className="flex justify-between mb-2">
                      <span>Gig Price:</span>
                      <span>${gig.price}</span>
                    </div>
                    {gig.discount && (
                      <div className="flex justify-between mb-2 text-green-600">
                        <span>Discount ({gig.discount.percentage}%):</span>
                        <span>-${((gig.price * gig.discount.percentage) / 100).toFixed(2)}</span>
                      </div>
                    )}
                    <div className="flex justify-between font-semibold border-t pt-2">
                      <span>Total:</span>
                      <span>
                        ${gig.discount ? (gig.price * (1 - gig.discount.percentage / 100)).toFixed(2) : gig.price}
                      </span>
                    </div>
                  </div>

                  <Button onClick={handleBookNow} className="w-full btn-animate" size="lg">
                    Confirm Booking
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </Card>
  )
}
