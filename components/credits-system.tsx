"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { useToast } from "@/hooks/use-toast"
import { Coins, Gift, Target, Users, Heart, MessageCircle, Share2, Trophy, Zap } from "lucide-react"

interface CreditsSystemProps {
  userCredits: number
  dailyGoals: {
    id: string
    title: string
    description: string
    reward: number
    progress: number
    target: number
    completed: boolean
  }[]
  achievements: {
    id: string
    title: string
    description: string
    reward: number
    unlocked: boolean
    icon: string
  }[]
}

export function CreditsSystem({ userCredits, dailyGoals, achievements }: CreditsSystemProps) {
  const [selectedReward, setSelectedReward] = useState<string | null>(null)
  const { toast } = useToast()

  const redeemableRewards = [
    {
      id: "1",
      title: "Profile Boost",
      description: "Highlight your profile for 24 hours",
      cost: 50,
      icon: "⭐",
      type: "boost",
    },
    {
      id: "2",
      title: "Gig Promotion",
      description: "Promote your gig to more buyers",
      cost: 75,
      icon: "📢",
      type: "promotion",
    },
    {
      id: "3",
      title: "Priority Support",
      description: "Get priority customer support for 7 days",
      cost: 100,
      icon: "🎧",
      type: "support",
    },
    {
      id: "4",
      title: "Cash Withdrawal",
      description: "Convert 200 credits to $5 cash",
      cost: 200,
      icon: "💰",
      type: "cash",
    },
    {
      id: "5",
      title: "Premium Badge",
      description: "Get a premium badge for 30 days",
      cost: 150,
      icon: "👑",
      type: "badge",
    },
  ]

  const handleRedeem = (rewardId: string, cost: number) => {
    if (userCredits >= cost) {
      toast({
        title: "Reward Redeemed! 🎉",
        description: "Your reward has been activated successfully.",
      })
    } else {
      toast({
        title: "Insufficient Credits",
        description: `You need ${cost - userCredits} more credits to redeem this reward.`,
        variant: "destructive",
      })
    }
  }

  const getGoalIcon = (title: string) => {
    if (title.includes("like")) return <Heart className="h-4 w-4" />
    if (title.includes("comment")) return <MessageCircle className="h-4 w-4" />
    if (title.includes("share")) return <Share2 className="h-4 w-4" />
    if (title.includes("follow")) return <Users className="h-4 w-4" />
    return <Target className="h-4 w-4" />
  }

  return (
    <div className="space-y-6">
      {/* Credits Balance */}
      <Card className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Coins className="h-6 w-6" />
                <h3 className="text-lg font-semibold">Giggaz Credits</h3>
              </div>
              <div className="text-3xl font-bold">{userCredits}</div>
              <p className="text-purple-100 mt-1">Available to spend</p>
            </div>
            <div className="text-right">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="secondary" className="mb-2">
                    <Gift className="h-4 w-4 mr-2" />
                    Redeem
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle>Redeem Credits</DialogTitle>
                  </DialogHeader>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {redeemableRewards.map((reward) => (
                      <Card key={reward.id} className="hover:shadow-md transition-shadow">
                        <CardContent className="p-4">
                          <div className="text-center mb-3">
                            <div className="text-2xl mb-2">{reward.icon}</div>
                            <h4 className="font-semibold">{reward.title}</h4>
                            <p className="text-sm text-muted-foreground">{reward.description}</p>
                          </div>
                          <div className="flex items-center justify-between">
                            <Badge variant="outline">
                              <Coins className="h-3 w-3 mr-1" />
                              {reward.cost}
                            </Badge>
                            <Button
                              size="sm"
                              onClick={() => handleRedeem(reward.id, reward.cost)}
                              disabled={userCredits < reward.cost}
                            >
                              Redeem
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </DialogContent>
              </Dialog>
              <br />
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-purple-500 bg-transparent"
              >
                <Zap className="h-4 w-4 mr-2" />
                Earn More
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Daily Goals */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Target className="mr-2 h-5 w-5 text-primary" />
            Daily Engagement Goals
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {dailyGoals.map((goal) => (
            <div key={goal.id} className="space-y-2">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  {getGoalIcon(goal.title)}
                  <span className="font-medium">{goal.title}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant={goal.completed ? "default" : "outline"}>
                    <Coins className="h-3 w-3 mr-1" />+{goal.reward}
                  </Badge>
                  {goal.completed && <Badge className="bg-green-500">✓ Complete</Badge>}
                </div>
              </div>
              <Progress value={(goal.progress / goal.target) * 100} className="h-2" />
              <p className="text-xs text-muted-foreground">
                {goal.description} ({goal.progress}/{goal.target})
              </p>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Achievements */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Trophy className="mr-2 h-5 w-5 text-yellow-500" />
            Achievements
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {achievements.map((achievement) => (
              <div
                key={achievement.id}
                className={`p-4 border rounded-lg ${
                  achievement.unlocked ? "bg-yellow-50 border-yellow-200" : "bg-gray-50 border-gray-200"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`text-2xl ${achievement.unlocked ? "" : "grayscale opacity-50"}`}>
                    {achievement.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className={`font-semibold ${achievement.unlocked ? "text-yellow-700" : "text-gray-500"}`}>
                      {achievement.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">{achievement.description}</p>
                    <Badge variant={achievement.unlocked ? "default" : "outline"} className="mt-1">
                      <Coins className="h-3 w-3 mr-1" />
                      {achievement.reward} credits
                    </Badge>
                  </div>
                  {achievement.unlocked && <Badge className="bg-green-500">✓ Unlocked</Badge>}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* How to Earn Credits */}
      <Card>
        <CardHeader>
          <CardTitle>💡 How to Earn Credits</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div className="space-y-2">
              <h4 className="font-semibold">Engagement Actions:</h4>
              <ul className="space-y-1">
                <li>• Like a gig: +1 credit</li>
                <li>• Comment on gig: +2 credits</li>
                <li>• Share a gig: +3 credits</li>
                <li>• Follow a freelancer: +5 credits</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">Achievements:</h4>
              <ul className="space-y-1">
                <li>• Complete first gig: +50 credits</li>
                <li>• Get 5-star rating: +25 credits</li>
                <li>• Refer a friend: +100 credits</li>
                <li>• Daily login streak: +10 credits</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
