"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { GigChainCard } from "@/components/gig-chain-card"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Link2, Users, TrendingUp } from "lucide-react"

export default function GigChainsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")
  const [difficultyFilter, setDifficultyFilter] = useState("all")

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
          description: "Edit 50 product images - remove backgrounds, resize, optimize for web",
          budget: 75,
          skillsNeeded: ["Photoshop", "Image Editing", "Web Optimization"],
          difficulty: "easy" as const,
          estimatedTime: "2 days",
          applicants: 3,
          maxApplicants: 5,
        },
        {
          id: "2",
          title: "Content Writing for Product Descriptions",
          description: "Write compelling, SEO-optimized descriptions for 30 products",
          budget: 100,
          skillsNeeded: ["Copywriting", "SEO", "E-commerce"],
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
    {
      id: "2",
      mainGig: {
        title: "Mobile App UI/UX Design Project",
        totalBudget: 800,
        deadline: "3 weeks",
        topFreelancer: {
          name: "Alex Rodriguez",
          avatar: "/placeholder.svg?height=40&width=40&text=AR",
          rating: 4.8,
          level: "top" as const,
        },
      },
      subTasks: [
        {
          id: "3",
          title: "Icon Design Set",
          description: "Create 20 custom icons for mobile app interface",
          budget: 120,
          skillsNeeded: ["Illustrator", "Icon Design", "Mobile UI"],
          difficulty: "medium" as const,
          estimatedTime: "4 days",
          applicants: 5,
          maxApplicants: 8,
        },
        {
          id: "4",
          title: "User Research Survey",
          description: "Conduct user interviews and compile research findings",
          budget: 80,
          skillsNeeded: ["User Research", "Survey Design", "Analysis"],
          difficulty: "easy" as const,
          estimatedTime: "3 days",
          applicants: 2,
          maxApplicants: 6,
        },
      ],
      benefits: {
        experience: "Mobile app design",
        mentorship: true,
        futureOpportunities: true,
        instantPay: false,
      },
    },
    {
      id: "3",
      mainGig: {
        title: "Digital Marketing Campaign",
        totalBudget: 600,
        deadline: "10 days",
        topFreelancer: {
          name: "Emma Thompson",
          avatar: "/placeholder.svg?height=40&width=40&text=ET",
          rating: 4.9,
          level: "pro" as const,
        },
      },
      subTasks: [
        {
          id: "5",
          title: "Social Media Graphics",
          description: "Design 15 social media posts for Instagram and Facebook",
          budget: 90,
          skillsNeeded: ["Graphic Design", "Social Media", "Canva"],
          difficulty: "easy" as const,
          estimatedTime: "2 days",
          applicants: 8,
          maxApplicants: 10,
        },
        {
          id: "6",
          title: "Email Newsletter Template",
          description: "Create responsive email template with HTML/CSS",
          budget: 150,
          skillsNeeded: ["HTML", "CSS", "Email Design"],
          difficulty: "hard" as const,
          estimatedTime: "5 days",
          applicants: 1,
          maxApplicants: 4,
        },
      ],
      benefits: {
        experience: "Digital marketing",
        mentorship: true,
        futureOpportunities: false,
        instantPay: true,
      },
    },
  ]

  const stats = {
    totalChains: 24,
    activeSubTasks: 67,
    avgEarnings: 85,
    successRate: 94,
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar userRole="worker" isLoggedIn={true} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-purple-100 rounded-lg">
              <Link2 className="h-8 w-8 text-purple-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Gig Chains</h1>
              <p className="text-gray-600">Work with top freelancers and build your experience</p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-purple-600">{stats.totalChains}</div>
                <div className="text-sm text-muted-foreground">Active Chains</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-blue-600">{stats.activeSubTasks}</div>
                <div className="text-sm text-muted-foreground">Sub-tasks Available</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-green-600">${stats.avgEarnings}</div>
                <div className="text-sm text-muted-foreground">Avg. Earnings</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-yellow-600">{stats.successRate}%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Search and Filters */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search gig chains..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="design">Design</SelectItem>
                  <SelectItem value="development">Development</SelectItem>
                  <SelectItem value="marketing">Marketing</SelectItem>
                  <SelectItem value="writing">Writing</SelectItem>
                </SelectContent>
              </Select>
              <Select value={difficultyFilter} onValueChange={setDifficultyFilter}>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="Difficulty" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Levels</SelectItem>
                  <SelectItem value="easy">Easy</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="hard">Hard</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* How Gig Chains Work */}
        <Card className="mb-8 bg-gradient-to-r from-purple-50 to-blue-50 border-purple-200">
          <CardHeader>
            <CardTitle className="flex items-center text-purple-700">
              <Users className="mr-2 h-5 w-5" />
              How Gig Chains Work
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold">1</span>
                </div>
                <h4 className="font-semibold mb-2">Top Freelancers Post Chains</h4>
                <p className="text-sm text-muted-foreground">
                  Experienced freelancers break down large projects into smaller sub-tasks
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold">2</span>
                </div>
                <h4 className="font-semibold mb-2">Beginners Apply & Learn</h4>
                <p className="text-sm text-muted-foreground">
                  New freelancers apply for sub-tasks and receive mentorship
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold">3</span>
                </div>
                <h4 className="font-semibold mb-2">Everyone Benefits</h4>
                <p className="text-sm text-muted-foreground">
                  Beginners gain experience, top freelancers avoid overwork
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Gig Chains List */}
        <div className="space-y-6">
          {gigChains.map((chain) => (
            <GigChainCard key={chain.id} chain={chain} />
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-8">
          <Button variant="outline" size="lg">
            <TrendingUp className="mr-2 h-4 w-4" />
            Load More Chains
          </Button>
        </div>
      </div>
    </div>
  )
}
