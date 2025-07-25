"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { useToast } from "@/hooks/use-toast"
import { Share2, Eye, Gift } from "lucide-react"

interface PromotionalDiscountProps {
  gigId: string
  gigTitle: string
  originalPrice: number
  discountTiers: {
    views: number
    discount: number
  }[]
  currentViews: number
  currentShares: number
}

export function PromotionalDiscount({
  gigId,
  gigTitle,
  originalPrice,
  discountTiers,
  currentViews,
  currentShares,
}: PromotionalDiscountProps) {
  const [views, setViews] = useState(currentViews)
  const [shares, setShares] = useState(currentShares)
  const [activeDiscount, setActiveDiscount] = useState(0)
  const { toast } = useToast()

  useEffect(() => {
    // Calculate current discount based on views
    const applicableDiscount = discountTiers
      .filter((tier) => views >= tier.views)
      .reduce((max, tier) => Math.max(max, tier.discount), 0)

    setActiveDiscount(applicableDiscount)
  }, [views, discountTiers])

  const handleShare = () => {
    // Simulate sharing and getting views
    const newShares = shares + 1
    const viewsGained = Math.floor(Math.random() * 20) + 10 // 10-30 views per share
    const newViews = views + viewsGained

    setShares(newShares)
    setViews(newViews)

    toast({
      title: "Shared Successfully! 🚀",
      description: `Your share generated ${viewsGained} views! Keep sharing to unlock bigger discounts.`,
    })
  }

  const getNextTier = () => {
    return discountTiers.find((tier) => views < tier.views)
  }

  const nextTier = getNextTier()
  const discountedPrice = originalPrice * (1 - activeDiscount / 100)

  return (
    <Card className="border-l-4 border-l-green-500">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Gift className="h-5 w-5 text-green-500" />
          Promotional Discount
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Current Discount */}
        <div className="text-center p-4 bg-green-50 rounded-lg">
          <div className="text-2xl font-bold text-green-600 mb-1">{activeDiscount}% OFF</div>
          <div className="text-sm text-muted-foreground">Current discount on this gig</div>
          {activeDiscount > 0 && (
            <div className="mt-2">
              <span className="text-lg line-through text-gray-500">${originalPrice}</span>
              <span className="text-2xl font-bold text-green-600 ml-2">${discountedPrice.toFixed(2)}</span>
            </div>
          )}
        </div>

        {/* Progress to Next Tier */}
        {nextTier && (
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Progress to {nextTier.discount}% discount:</span>
              <span>
                {views}/{nextTier.views} views
              </span>
            </div>
            <Progress value={(views / nextTier.views) * 100} className="h-2" />
            <p className="text-xs text-muted-foreground">
              {nextTier.views - views} more views needed for {nextTier.discount}% discount
            </p>
          </div>
        )}

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center p-3 bg-blue-50 rounded-lg">
            <div className="flex items-center justify-center gap-1 mb-1">
              <Eye className="h-4 w-4 text-blue-500" />
              <span className="font-semibold">{views}</span>
            </div>
            <div className="text-xs text-muted-foreground">Total Views</div>
          </div>
          <div className="text-center p-3 bg-purple-50 rounded-lg">
            <div className="flex items-center justify-center gap-1 mb-1">
              <Share2 className="h-4 w-4 text-purple-500" />
              <span className="font-semibold">{shares}</span>
            </div>
            <div className="text-xs text-muted-foreground">Times Shared</div>
          </div>
        </div>

        {/* Discount Tiers */}
        <div className="space-y-2">
          <h4 className="font-semibold text-sm">Discount Tiers:</h4>
          <div className="space-y-1">
            {discountTiers.map((tier, index) => (
              <div
                key={index}
                className={`flex justify-between items-center p-2 rounded text-sm ${
                  views >= tier.views ? "bg-green-100 text-green-700" : "bg-gray-50 text-gray-600"
                }`}
              >
                <span>{tier.views} views</span>
                <Badge
                  variant={views >= tier.views ? "default" : "outline"}
                  className={views >= tier.views ? "bg-green-500" : ""}
                >
                  {tier.discount}% OFF
                </Badge>
              </div>
            ))}
          </div>
        </div>

        {/* Share Button */}
        <Button
          onClick={handleShare}
          className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600"
        >
          <Share2 className="h-4 w-4 mr-2" />
          Share to Unlock More Discounts
        </Button>

        {/* How it Works */}
        <div className="text-xs text-muted-foreground space-y-1">
          <p className="font-semibold">How it works:</p>
          <p>• Share this gig on social media or with friends</p>
          <p>• Each share generates views from your network</p>
          <p>• More views = bigger discounts for everyone</p>
          <p>• Discounts apply automatically at checkout</p>
        </div>
      </CardContent>
    </Card>
  )
}
