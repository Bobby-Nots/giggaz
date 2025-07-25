"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Navbar } from "@/components/navbar"
import { GigCard } from "@/components/gig-card"
import {
  DollarSign,
  TrendingUp,
  Clock,
  Target,
  Zap,
  Gift,
  Users,
  CheckCircle,
  Plus,
  Filter,
  Star,
  Link2,
} from "lucide-react"
import { GigChainCard } from "@/components/gig-chain-card"
import { CreditsSystem } from "@/components/credits-system"

export default function DashboardPage() {
  const [userRole] = useState<"worker" | "poster">("worker") // This would come from auth context

  // Mock data for worker dashboard
  const workerStats = {
    totalEarnings: 1250,
    thisMonth: 340,
    activeGigs: 3,
    completedGigs: 28,
    rating: 4.8,
    walletBalance: 125.5,
  }

  const quickMoneyGigs = [
    {
      id: "1",
      title: "Quick Survey - 5 minutes",
      description: "Answer questions about your shopping habits",
      price: 5,
      location: "Online",
      isOnline: true,
      deadline: "1 hour",
      category: "Survey",
      poster: {
        name: "Market Research Co.",
        avatar: "/placeholder.svg?height=32&width=32",
        rating: 4.9,
      },
      isQuickPay: true,
    },
    {
      id: "2",
      title: "App Testing - 10 minutes",
      description: "Test a new mobile app and provide feedback",
      price: 12,
      location: "Online",
      isOnline: true,
      deadline: "2 hours",
      category: "Testing",
      poster: {
        name: "TechStart Inc.",
        avatar: "/placeholder.svg?height=32&width=32",
        rating: 4.7,
      },
      isQuickPay: true,
    },
  ]

  const dailyChallenges = [
    { id: 1, title: "Complete 2 gigs today", reward: 5, progress: 1, target: 2 },
    { id: 2, title: "Earn $50 this week", reward: 10, progress: 34, target: 50 },
    { id: 3, title: "Get 5-star rating", reward: 15, progress: 0, target: 1 },
  ]

  // Mock data for poster dashboard
  const posterStats = {
    activeGigs: 5,
    totalApplications: 23,
    completedProjects: 12,
    totalSpent: 850,
  }

  const postedGigs = [
    {
      id: "1",
      title: "Logo Design for Startup",
      applications: 8,
      budget: 100,
      status: "open",
      deadline: "5 days",
    },
    {
      id: "2",
      title: "Content Writing - Blog Posts",
      applications: 12,
      budget: 75,
      status: "in-progress",
      deadline: "3 days",
    },
  ]

  const gigChains = [
    {
      id: "1",
      mainGig: {
        title: "Complete E-commerce Website Development",
        totalBudget: 500,
        deadline: "2 weeks",
        topFreelancer: {
          name: "Sarah Chen",
          avatar: "/placeholder.svg?height=40&width=40&text=SC",
          rating: 4.9,
          level: "top" as const,
        },
      },
      subTasks: [
        {
          id: "1",
          title: "Product Image Editing",
          description: "Edit 50 product images - remove backgrounds, resize, optimize",
          budget: 75,
          skillsNeeded: ["Photoshop", "Image Editing"],
          difficulty: "easy" as const,
          estimatedTime: "2 days",
          applicants: 3,
          maxApplicants: 5,
        },
        {
          id: "2",
          title: "Content Writing for Product Descriptions",
          description: "Write compelling descriptions for 30 products",
          budget: 100,
          skillsNeeded: ["Copywriting", "SEO"],
          difficulty: "medium" as const,
          estimatedTime: "3 days",
          applicants: 7,
          maxApplicants: 10,
        },
      ],
      benefits: {
        experience: "E-commerce development",
        mentorship: true,
        futureOpportunities: true,
        instantPay: true,
      },
    },
  ]

  const creditsData = {
    userCredits: 245,
    dailyGoals: [
      {
        id: "1",
        title: "Get 10 likes on gigs",
        description: "Like other freelancers' gigs to earn credits",
        reward: 10,
        progress: 7,
        target: 10,
        completed: false,
      },
      {
        id: "2",
        title: "Share 3 gigs",
        description: "Share gigs to help promote other freelancers",
        reward: 15,
        progress: 3,
        target: 3,
        completed: true,
      },
    ],
    achievements: [
      {
        id: "1",
        title: "First Gig Completed",
        description: "Successfully complete your first gig",
        reward: 50,
        unlocked: true,
        icon: "🎉",
      },
      {
        id: "2",
        title: "Social Butterfly",
        description: "Get 100 likes on your gigs",
        reward: 100,
        unlocked: false,
        icon: "🦋",
      },
    ],
  }

  if (userRole === "poster") {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar userRole={userRole} isLoggedIn={true} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Poster Dashboard</h1>
            <p className="text-gray-600">Manage your gigs and find the perfect workers</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Gigs</CardTitle>
                <Target className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{posterStats.activeGigs}</div>
                <p className="text-xs text-muted-foreground">Currently posted</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Applications</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{posterStats.totalApplications}</div>
                <p className="text-xs text-muted-foreground">Pending review</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Completed</CardTitle>
                <CheckCircle className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{posterStats.completedProjects}</div>
                <p className="text-xs text-muted-foreground">Projects finished</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Spent</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">${posterStats.totalSpent}</div>
                <p className="text-xs text-muted-foreground">All time</p>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link href="/post-gig">
                  <Button className="w-full justify-start">
                    <Plus className="mr-2 h-4 w-4" />
                    Post New Gig
                  </Button>
                </Link>
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <Filter className="mr-2 h-4 w-4" />
                  Filter Applications
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">New application received</span>
                    <span className="text-xs text-muted-foreground">2m ago</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Gig completed successfully</span>
                    <span className="text-xs text-muted-foreground">1h ago</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Payment processed</span>
                    <span className="text-xs text-muted-foreground">3h ago</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Posted Gigs */}
          <Card>
            <CardHeader>
              <CardTitle>Your Posted Gigs</CardTitle>
              <CardDescription>Manage your active and completed gigs</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {postedGigs.map((gig) => (
                  <div key={gig.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex-1">
                      <h4 className="font-semibold">{gig.title}</h4>
                      <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                        <span>{gig.applications} applications</span>
                        <span>Budget: ${gig.budget}</span>
                        <span>Deadline: {gig.deadline}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge variant={gig.status === "open" ? "default" : "secondary"}>{gig.status}</Badge>
                      <Button variant="outline" size="sm">
                        Manage
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  // Worker Dashboard
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar userRole={userRole} isLoggedIn={true} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Worker Dashboard</h1>
          <p className="text-gray-600">Welcome back! Ready to earn some money today?</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Earnings</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${workerStats.totalEarnings}</div>
              <p className="text-xs text-muted-foreground">+${workerStats.thisMonth} this month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Gigs</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{workerStats.activeGigs}</div>
              <p className="text-xs text-muted-foreground">In progress</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Completed</CardTitle>
              <CheckCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{workerStats.completedGigs}</div>
              <p className="text-xs text-muted-foreground">Gigs finished</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Rating</CardTitle>
              <Star className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{workerStats.rating}</div>
              <p className="text-xs text-muted-foreground">Average rating</p>
            </CardContent>
          </Card>
        </div>

        {/* Wallet Balance */}
        <Card className="mb-8 bg-gradient-to-r from-primary to-accent text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold mb-2">Wallet Balance</h3>
                <div className="text-3xl font-bold">${workerStats.walletBalance}</div>
                <p className="text-blue-100 mt-1">Available for withdrawal</p>
              </div>
              <div className="text-right">
                <Link href="/wallet">
                  <Button variant="secondary" className="mb-2">
                    View Wallet
                  </Button>
                </Link>
                <br />
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-primary bg-transparent"
                >
                  Withdraw
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Quick Money Section */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Zap className="mr-2 h-5 w-5 text-yellow-500" />
                  Quick Money Gigs
                </CardTitle>
                <CardDescription>Fast-paying gigs you can complete right now</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {quickMoneyGigs.map((gig) => (
                    <GigCard key={gig.id} gig={gig} />
                  ))}
                </div>
                <div className="mt-4">
                  <Link href="/gigs?filter=quick-pay">
                    <Button variant="outline" className="w-full bg-transparent">
                      View All Quick Pay Gigs
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Gig Chain Opportunities */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Link2 className="mr-2 h-5 w-5 text-purple-500" />
                  Gig Chain Opportunities
                </CardTitle>
                <CardDescription>Work with top freelancers and gain experience</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {gigChains.map((chain) => (
                    <GigChainCard key={chain.id} chain={chain} />
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <div>
                        <p className="font-medium">Gig Completed</p>
                        <p className="text-sm text-muted-foreground">Data Entry Task - $25 earned</p>
                      </div>
                    </div>
                    <span className="text-sm text-muted-foreground">2h ago</span>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                    <div className="flex items-center">
                      <TrendingUp className="h-5 w-5 text-blue-500 mr-3" />
                      <div>
                        <p className="font-medium">Application Accepted</p>
                        <p className="text-sm text-muted-foreground">Logo Design Project</p>
                      </div>
                    </div>
                    <span className="text-sm text-muted-foreground">1d ago</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Daily Challenges */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="mr-2 h-5 w-5 text-primary" />
                  Daily Challenges
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {dailyChallenges.map((challenge) => (
                  <div key={challenge.id} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">{challenge.title}</span>
                      <Badge variant="outline">+${challenge.reward}</Badge>
                    </div>
                    <Progress value={(challenge.progress / challenge.target) * 100} className="h-2" />
                    <p className="text-xs text-muted-foreground">
                      {challenge.progress}/{challenge.target}
                    </p>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Credits System */}
            <CreditsSystem
              userCredits={creditsData.userCredits}
              dailyGoals={creditsData.dailyGoals}
              achievements={creditsData.achievements}
            />

            {/* Referral System */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Gift className="mr-2 h-5 w-5 text-accent" />
                  Refer & Earn
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Invite friends and earn $10 for each successful referral!
                </p>
                <div className="space-y-3">
                  <div className="p-3 bg-gray-100 rounded-lg">
                    <p className="text-xs text-muted-foreground mb-1">Your referral code:</p>
                    <p className="font-mono font-bold">GIGGAZ2024</p>
                  </div>
                  <Button className="w-full" size="sm">
                    Share Code
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Quick Tips */}
            <Card>
              <CardHeader>
                <CardTitle>💡 Quick Tips</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-2">
                  <li>• Complete your profile to get more gig opportunities</li>
                  <li>• Respond to applications within 24 hours</li>
                  <li>• Maintain a 4.5+ rating for premium gigs</li>
                  <li>• Check daily for new quick-pay opportunities</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
