"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { useToast } from "@/hooks/use-toast"
import { Heart, MessageCircle, Share2, Users, UserPlus, Gift, Copy, Facebook, Twitter, Linkedin } from "lucide-react"

interface SocialFeaturesProps {
  gigId: string
  freelancerId: string
  initialLikes: number
  initialComments: number
  initialShares: number
  isLiked: boolean
  isFollowing: boolean
  discount?: {
    percentage: number
    condition: string
  }
}

export function SocialFeatures({
  gigId,
  freelancerId,
  initialLikes,
  initialComments,
  initialShares,
  isLiked,
  isFollowing,
  discount,
}: SocialFeaturesProps) {
  const [likes, setLikes] = useState(initialLikes)
  const [comments, setComments] = useState(initialComments)
  const [shares, setShares] = useState(initialShares)
  const [liked, setLiked] = useState(isLiked)
  const [following, setFollowing] = useState(isFollowing)
  const [shareCount, setShareCount] = useState(0)
  const { toast } = useToast()

  const handleLike = () => {
    setLiked(!liked)
    setLikes(liked ? likes - 1 : likes + 1)

    if (!liked) {
      toast({
        title: "Liked! 💖",
        description: "You earned 1 Giggaz Credit for engaging!",
      })
    }
  }

  const handleFollow = () => {
    setFollowing(!following)
    toast({
      title: following ? "Unfollowed" : "Following! 🎉",
      description: following
        ? "You unfollowed this freelancer"
        : "You're now following this freelancer. You earned 5 Giggaz Credits!",
    })
  }

  const handleShare = (platform: string) => {
    const shareUrl = `${window.location.origin}/gig/${gigId}`
    const shareText = "Check out this amazing gig on Giggaz!"

    let url = ""
    switch (platform) {
      case "facebook":
        url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`
        break
      case "twitter":
        url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`
        break
      case "linkedin":
        url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`
        break
      case "copy":
        navigator.clipboard.writeText(shareUrl)
        toast({
          title: "Link Copied! 🔗",
          description: "Share this link to earn discount credits!",
        })
        return
    }

    if (url) {
      window.open(url, "_blank", "width=600,height=400")
      setShares(shares + 1)
      setShareCount(shareCount + 1)

      toast({
        title: "Shared! 🚀",
        description: `You earned 3 Giggaz Credits! ${discount ? `Get ${discount.percentage}% off when this gets 10 views!` : ""}`,
      })
    }
  }

  return (
    <div className="flex items-center gap-4">
      {/* Like Button */}
      <Button variant="ghost" size="sm" onClick={handleLike} className="flex items-center gap-2 hover:bg-red-50">
        <Heart className={`h-4 w-4 ${liked ? "fill-red-500 text-red-500" : "text-gray-500"}`} />
        <span className="text-sm">{likes}</span>
      </Button>

      {/* Comment Button */}
      <Button variant="ghost" size="sm" className="flex items-center gap-2 hover:bg-blue-50">
        <MessageCircle className="h-4 w-4 text-gray-500" />
        <span className="text-sm">{comments}</span>
      </Button>

      {/* Share Button */}
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="ghost" size="sm" className="flex items-center gap-2 hover:bg-green-50">
            <Share2 className="h-4 w-4 text-gray-500" />
            <span className="text-sm">{shares}</span>
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Share This Gig</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            {discount && (
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Gift className="h-5 w-5 text-green-600" />
                  <span className="font-semibold text-green-700">Special Offer!</span>
                </div>
                <p className="text-sm text-green-600">
                  {discount.condition} - Get {discount.percentage}% discount on this gig!
                </p>
              </div>
            )}

            <div className="grid grid-cols-2 gap-3">
              <Button variant="outline" onClick={() => handleShare("facebook")} className="flex items-center gap-2">
                <Facebook className="h-4 w-4 text-blue-600" />
                Facebook
              </Button>
              <Button variant="outline" onClick={() => handleShare("twitter")} className="flex items-center gap-2">
                <Twitter className="h-4 w-4 text-blue-400" />
                Twitter
              </Button>
              <Button variant="outline" onClick={() => handleShare("linkedin")} className="flex items-center gap-2">
                <Linkedin className="h-4 w-4 text-blue-700" />
                LinkedIn
              </Button>
              <Button variant="outline" onClick={() => handleShare("copy")} className="flex items-center gap-2">
                <Copy className="h-4 w-4" />
                Copy Link
              </Button>
            </div>

            {shareCount > 0 && (
              <div className="p-3 bg-blue-50 rounded-lg text-center">
                <p className="text-sm text-blue-700">
                  You've shared this gig {shareCount} time{shareCount > 1 ? "s" : ""}!
                  {discount && shareCount >= 5 && (
                    <span className="block font-semibold">
                      🎉 Discount unlocked! Use code SHARE{discount.percentage}
                    </span>
                  )}
                </p>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>

      {/* Follow Button */}
      <Button
        variant={following ? "default" : "outline"}
        size="sm"
        onClick={handleFollow}
        className="flex items-center gap-2"
      >
        {following ? <Users className="h-4 w-4" /> : <UserPlus className="h-4 w-4" />}
        <span className="text-sm">{following ? "Following" : "Follow"}</span>
      </Button>
    </div>
  )
}
