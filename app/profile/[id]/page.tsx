"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { SocialFeatures } from "@/components/social-features"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Star, MapPin, Calendar, Users, MessageCircle, Crown, CheckCircle } from "lucide-react"

export default function ProfilePage({ params }: { params: { id: string } }) {
  const [isFollowing, setIsFollowing] = useState(false)

  // Mock profile data
  const profile = {
    id: params.id,
    name: "Sarah Chen",
    username: "@sarahdesigns",
    avatar: "/placeholder.svg?height=120&width=120&text=SC",
    coverImage: "/placeholder.svg?height=300&width=800&text=Cover+Image",
    bio: "Professional UI/UX designer with 5+ years of experience. I create beautiful, user-friendly designs that convert. Specialized in mobile apps and web interfaces.",
    location: "San Francisco, CA",
    joinDate: "January 2022",
    level: "top" as const,
    rating: 4.9,
    totalReviews: 247,
    completedGigs: 156,
    followers: 2340,
    following: 89,
    totalEarnings: 45600,
    responseTime: "1 hour",
    languages: ["English", "Mandarin", "Spanish"],
    skills: ["UI/UX Design", "Figma", "Adobe XD", "Prototyping", "User Research"],
    badges: [
      { name: "Top Rated", icon: "👑", color: "bg-yellow-500" },
      { name: "Fast Delivery", icon: "⚡", color: "bg-blue-500" },
      { name: "Mentor", icon: "🎓", color: "bg-purple-500" },
      { name: "Rising Talent", icon: "🚀", color: "bg-green-500" },
    ],
    trustBadges: ["Tech Startup Co.", "Design Agency Pro", "Mobile App Inc."],
    stats: {
      gigViews: 15420,
      gigLikes: 3240,
      chainMentorships: 23,
      creditsEarned: 1250,
    },
  }

  const recentGigs = [
    {
      id: "1",
      title: "Mobile App UI Design",
      thumbnail: "/placeholder.svg?height=200&width=300&text=Mobile+UI",
      price: 150,
      likes: 89,
      comments: 12,
      shares: 23,
      isLiked: false,
      deliveryTime: "3 days",
    },
    {
      id: "2",
      title: "Website Redesign",
      thumbnail: "/placeholder.svg?height=200&width=300&text=Website+Design",
      price: 200,
      likes: 156,
      comments: 28,
      shares: 45,
      isLiked: true,
      deliveryTime: "5 days",
    },
  ]

  const reviews = [
    {
      id: "1",
      reviewer: {
        name: "John Smith",
        avatar: "/placeholder.svg?height=40&width=40&text=JS",
      },
      rating: 5,
      comment: "Absolutely amazing work! Sarah delivered exactly what I needed and more. Highly recommend!",
      date: "2 days ago",
      gigTitle: "Logo Design",
    },
    {
      id: "2",
      reviewer: {
        name: "Maria Garcia",
        avatar: "/placeholder.svg?height=40&width=40&text=MG",
      },
      rating: 5,
      comment: "Professional, fast, and creative. Will definitely work with Sarah again!",
      date: "1 week ago",
      gigTitle: "Website UI Design",
    },
  ]

  const getLevelIcon = (level: string) => {
    return level === "top" ? <Crown className="h-4 w-4 text-yellow-500" /> : <Star className="h-4 w-4 text-blue-500" />
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar userRole="worker" isLoggedIn={true} />

      {/* Cover Image */}
      <div className="relative h-64 bg-gradient-to-r from-purple-500 to-blue-600">
        <img
          src={profile.coverImage || "/placeholder.svg"}
          alt="Cover"
          className="w-full h-full object-cover opacity-50"
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Profile Header */}
        <div className="relative -mt-20 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row items-start gap-6">
                {/* Avatar */}
                <div className="relative">
                  <Avatar className="h-32 w-32 border-4 border-white shadow-lg">
                    <AvatarImage src={profile.avatar || "/placeholder.svg"} />
                    <AvatarFallback className="text-2xl">{profile.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="absolute -bottom-2 -right-2">{getLevelIcon(profile.level)}</div>
                </div>

                {/* Profile Info */}
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h1 className="text-2xl font-bold">{profile.name}</h1>
                        <Badge className="bg-green-500 text-white">
                          <CheckCircle className="h-3 w-3 mr-1" />
                          Verified
                        </Badge>
                      </div>
                      <p className="text-muted-foreground mb-2">{profile.username}</p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {profile.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          Joined {profile.joinDate}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Button
                        variant={isFollowing ? "default" : "outline"}
                        onClick={() => setIsFollowing(!isFollowing)}
                      >
                        <Users className="h-4 w-4 mr-2" />
                        {isFollowing ? "Following" : "Follow"}
                      </Button>
                      <Button variant="outline">
                        <MessageCircle className="h-4 w-4 mr-2" />
                        Message
                      </Button>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-4">{profile.bio}</p>

                  {/* Stats */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    <div className="text-center">
                      <div className="text-xl font-bold">{profile.rating}</div>
                      <div className="text-sm text-muted-foreground flex items-center justify-center gap-1">
                        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        Rating
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl font-bold">{profile.completedGigs}</div>
                      <div className="text-sm text-muted-foreground">Gigs Done</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl font-bold">{profile.followers}</div>
                      <div className="text-sm text-muted-foreground">Followers</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl font-bold">{profile.responseTime}</div>
                      <div className="text-sm text-muted-foreground">Response Time</div>
                    </div>
                  </div>

                  {/* Badges */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {profile.badges.map((badge, index) => (
                      <Badge key={index} className={`${badge.color} text-white`}>
                        <span className="mr-1">{badge.icon}</span>
                        {badge.name}
                      </Badge>
                    ))}
                  </div>

                  {/* Trust Badges */}
                  {profile.trustBadges.length > 0 && (
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold mb-2">Trusted by:</h4>
                      <div className="flex flex-wrap gap-2">
                        {profile.trustBadges.map((company, index) => (
                          <Badge key={index} variant="outline">
                            {company}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Profile Content */}
        <Tabs defaultValue="gigs" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="gigs">Active Gigs</TabsTrigger>
            <TabsTrigger value="reviews">Reviews ({profile.totalReviews})</TabsTrigger>
            <TabsTrigger value="stats">Statistics</TabsTrigger>
            <TabsTrigger value="about">About</TabsTrigger>
          </TabsList>

          <TabsContent value="gigs">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recentGigs.map((gig) => (
                <Card key={gig.id} className="hover:shadow-lg transition-shadow">
                  <div className="relative">
                    <img
                      src={gig.thumbnail || "/placeholder.svg"}
                      alt={gig.title}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <Badge className="absolute top-2 right-2 bg-primary">${gig.price}</Badge>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-2">{gig.title}</h3>
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
                      <span>Delivery: {gig.deliveryTime}</span>
                    </div>
                    <SocialFeatures
                      gigId={gig.id}
                      freelancerId={profile.id}
                      initialLikes={gig.likes}
                      initialComments={gig.comments}
                      initialShares={gig.shares}
                      isLiked={gig.isLiked}
                      isFollowing={isFollowing}
                    />
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="reviews">
            <div className="space-y-4">
              {reviews.map((review) => (
                <Card key={review.id}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Avatar>
                        <AvatarImage src={review.reviewer.avatar || "/placeholder.svg"} />
                        <AvatarFallback>{review.reviewer.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <div>
                            <h4 className="font-semibold">{review.reviewer.name}</h4>
                            <p className="text-sm text-muted-foreground">{review.gigTitle}</p>
                          </div>
                          <div className="flex items-center gap-1">
                            {[...Array(review.rating)].map((_, i) => (
                              <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            ))}
                            <span className="text-sm text-muted-foreground ml-2">{review.date}</span>
                          </div>
                        </div>
                        <p className="text-gray-700">{review.comment}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="stats">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Engagement Statistics</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Total Gig Views</span>
                    <span className="font-semibold">{profile.stats.gigViews.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Total Likes Received</span>
                    <span className="font-semibold">{profile.stats.gigLikes.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Chain Mentorships</span>
                    <span className="font-semibold">{profile.stats.chainMentorships}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Credits Earned</span>
                    <span className="font-semibold">{profile.stats.creditsEarned}</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Performance Metrics</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span>Order Completion Rate</span>
                      <span>98%</span>
                    </div>
                    <Progress value={98} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span>On-Time Delivery</span>
                      <span>95%</span>
                    </div>
                    <Progress value={95} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span>Client Satisfaction</span>
                      <span>97%</span>
                    </div>
                    <Progress value={97} className="h-2" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="about">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Skills & Expertise</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {profile.skills.map((skill, index) => (
                      <Badge key={index} variant="outline">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Languages</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {profile.languages.map((language, index) => (
                      <div key={index} className="flex justify-between">
                        <span>{language}</span>
                        <Badge variant="outline">Fluent</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
