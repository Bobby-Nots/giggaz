"use client"

import { useState, useEffect } from "react"
import { VideoGigCard } from "@/components/video-gig-card"
import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, Zap, Crown, Star } from "lucide-react"

export default function FeedPage() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [filter, setFilter] = useState("all")
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const videoGigs = [
    {
      id: "1",
      title: "I'll create stunning logo designs in 24 hours",
      description: "Professional logo design with unlimited revisions. Perfect for startups and small businesses.",
      price: 45,
      deliveryTime: "1 day",
      category: "Design",
      videoUrl: "/placeholder.mp4",
      thumbnail: "/placeholder.svg?height=600&width=400&text=Logo+Design+Video&bg=dc2626&color=white",
      freelancer: {
        name: "Sarah Chen",
        avatar: "/placeholder.svg?height=48&width=48&text=SC",
        rating: 4.9,
        level: "pro" as const,
        followers: 2340,
        isVerified: true,
        trustedBy: ["Mike Johnson", "Tech Startup Co."],
      },
      likes: 1240,
      comments: 89,
      shares: 156,
      isLiked: false,
      isFollowing: false,
      tags: ["logo", "branding", "design"],
      gigChainAvailable: true,
      discount: {
        percentage: 20,
        condition: "Share to get 20% off",
      },
    },
    {
      id: "2",
      title: "I'll write engaging blog posts that convert",
      description: "SEO-optimized blog posts that drive traffic and engagement. Research included!",
      price: 25,
      deliveryTime: "2 days",
      category: "Writing",
      videoUrl: "/placeholder.mp4",
      thumbnail: "/placeholder.svg?height=600&width=400&text=Blog+Writing+Video&bg=7c3aed&color=white",
      freelancer: {
        name: "James Wilson",
        avatar: "/placeholder.svg?height=48&width=48&text=JW",
        rating: 4.8,
        level: "top" as const,
        followers: 5670,
        isVerified: true,
        trustedBy: ["Content Agency", "Marketing Pro"],
      },
      likes: 890,
      comments: 67,
      shares: 234,
      isLiked: true,
      isFollowing: true,
      tags: ["writing", "SEO", "content"],
      gigChainAvailable: true,
    },
    {
      id: "3",
      title: "I'll edit your videos like a pro",
      description: "Professional video editing with motion graphics, color grading, and sound design.",
      price: 75,
      deliveryTime: "3 days",
      category: "Video",
      videoUrl: "/placeholder.mp4",
      thumbnail: "/placeholder.svg?height=600&width=400&text=Video+Editing&bg=0891b2&color=white",
      freelancer: {
        name: "Alex Rodriguez",
        avatar: "/placeholder.svg?height=48&width=48&text=AR",
        rating: 4.7,
        level: "pro" as const,
        followers: 1890,
        isVerified: false,
        trustedBy: ["Creative Studio"],
      },
      likes: 567,
      comments: 43,
      shares: 89,
      isLiked: false,
      isFollowing: false,
      tags: ["video", "editing", "motion"],
      gigChainAvailable: false,
    },
    {
      id: "4",
      title: "I'll build your website in React",
      description: "Modern, responsive websites built with React and Next.js. Mobile-first approach guaranteed!",
      price: 150,
      deliveryTime: "5 days",
      category: "Development",
      videoUrl: "/placeholder.mp4",
      thumbnail: "/placeholder.svg?height=600&width=400&text=Web+Development&bg=16a34a&color=white",
      freelancer: {
        name: "Emma Thompson",
        avatar: "/placeholder.svg?height=48&width=48&text=ET",
        rating: 5.0,
        level: "top" as const,
        followers: 3450,
        isVerified: true,
        trustedBy: ["Tech Solutions", "Startup Hub"],
      },
      likes: 1567,
      comments: 123,
      shares: 345,
      isLiked: false,
      isFollowing: false,
      tags: ["react", "nextjs", "web"],
      gigChainAvailable: true,
      discount: {
        percentage: 15,
        condition: "First-time buyers get 15% off",
      },
    },
    {
      id: "5",
      title: "I'll create viral TikTok content",
      description: "Trending TikTok videos that get views! I know all the latest trends and algorithms.",
      price: 35,
      deliveryTime: "1 day",
      category: "Social Media",
      videoUrl: "/placeholder.mp4",
      thumbnail: "/placeholder.svg?height=600&width=400&text=TikTok+Content&bg=2563eb&color=white",
      freelancer: {
        name: "Zoe Martinez",
        avatar: "/placeholder.svg?height=48&width=48&text=ZM",
        rating: 4.6,
        level: "beginner" as const,
        followers: 890,
        isVerified: false,
        trustedBy: ["Influencer Agency"],
      },
      likes: 234,
      comments: 56,
      shares: 78,
      isLiked: true,
      isFollowing: false,
      tags: ["tiktok", "viral", "social"],
      gigChainAvailable: false,
    },
  ]

  const filteredGigs = videoGigs.filter((gig) => {
    if (filter === "all") return true
    if (filter === "trending") return gig.likes > 1000
    if (filter === "quick") return Number.parseInt(gig.deliveryTime) <= 1
    if (filter === "chain") return gig.gigChainAvailable
    return gig.freelancer.level === filter
  })

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowUp" && currentIndex > 0) {
        setCurrentIndex(currentIndex - 1)
      } else if (e.key === "ArrowDown" && currentIndex < filteredGigs.length - 1) {
        setCurrentIndex(currentIndex + 1)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [currentIndex, filteredGigs.length])

  return (
    <div className="min-h-screen bg-black">
      <Navbar userRole="worker" isLoggedIn={true} />

      {/* Mobile-First Vertical Feed */}
      <div className="relative">
        {/* Filter Bar */}
        <div className="fixed top-16 left-0 right-0 z-20 bg-black bg-opacity-80 backdrop-blur-sm p-4 animate-slideInLeft">
          <div className="flex gap-2 overflow-x-auto pb-2">
            <Button
              size="sm"
              variant={filter === "all" ? "default" : "outline"}
              onClick={() => setFilter("all")}
              className="whitespace-nowrap btn-animate"
            >
              All Gigs
            </Button>
            <Button
              size="sm"
              variant={filter === "trending" ? "default" : "outline"}
              onClick={() => setFilter("trending")}
              className="whitespace-nowrap btn-animate"
            >
              <TrendingUp className="h-4 w-4 mr-1" />
              Trending
            </Button>
            <Button
              size="sm"
              variant={filter === "quick" ? "default" : "outline"}
              onClick={() => setFilter("quick")}
              className="whitespace-nowrap btn-animate"
            >
              <Zap className="h-4 w-4 mr-1" />
              Quick Jobs
            </Button>
            <Button
              size="sm"
              variant={filter === "chain" ? "default" : "outline"}
              onClick={() => setFilter("chain")}
              className="whitespace-nowrap btn-animate"
            >
              🔗 Chain Available
            </Button>
            <Button
              size="sm"
              variant={filter === "top" ? "default" : "outline"}
              onClick={() => setFilter("top")}
              className="whitespace-nowrap btn-animate"
            >
              <Crown className="h-4 w-4 mr-1" />
              Top Sellers
            </Button>
            <Button
              size="sm"
              variant={filter === "pro" ? "default" : "outline"}
              onClick={() => setFilter("pro")}
              className="whitespace-nowrap btn-animate"
            >
              <Star className="h-4 w-4 mr-1" />
              Pro
            </Button>
          </div>
        </div>

        {/* Vertical Video Feed */}
        <div className="pt-32">
          {filteredGigs.map((gig, index) => (
            <div
              key={gig.id}
              className={`feed-item flex items-center justify-center p-4 ${
                index === currentIndex ? "animate-scaleIn" : ""
              }`}
              style={{
                display: index === currentIndex ? "flex" : "none",
              }}
            >
              <VideoGigCard gig={gig} />
            </div>
          ))}
        </div>

        {/* Navigation Indicators */}
        <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-20 animate-slideInRight">
          <div className="flex flex-col gap-2">
            {filteredGigs.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-8 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-white animate-glow" : "bg-white bg-opacity-30"
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>

        {/* Swipe Instructions */}
        {currentIndex === 0 && isLoaded && (
          <div className="fixed bottom-20 left-1/2 transform -translate-x-1/2 z-20 animate-bounce-custom">
            <Card className="bg-black bg-opacity-80 border-white border-opacity-20">
              <CardContent className="p-3 text-center">
                <p className="text-white text-sm">Swipe up/down or use arrow keys to browse gigs</p>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  )
}
