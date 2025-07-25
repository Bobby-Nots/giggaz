"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { GigCard } from "@/components/gig-card"
import { Search, DollarSign, Users, Star, ArrowRight, CheckCircle, Zap, Target, Play } from "lucide-react"

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const [featuredGigs] = useState([
    {
      id: "1",
      title: "Data Entry for E-commerce Store",
      description: "Need someone to input product information into our database. Simple copy-paste work.",
      price: 25,
      location: "Remote",
      isOnline: true,
      deadline: "2 days",
      category: "Data Entry",
      poster: {
        name: "Sarah Johnson",
        avatar: "/placeholder.svg?height=32&width=32&text=SJ",
        rating: 4.8,
      },
      isQuickPay: true,
    },
    {
      id: "2",
      title: "Grocery Delivery Service",
      description: "Pick up groceries from local store and deliver to customer. Car required.",
      price: 15,
      location: "Downtown",
      isOnline: false,
      deadline: "Today",
      category: "Delivery",
      poster: {
        name: "Mike Chen",
        avatar: "/placeholder.svg?height=32&width=32&text=MC",
        rating: 4.9,
      },
      isUrgent: true,
    },
    {
      id: "3",
      title: "Social Media Content Creation",
      description: "Create 5 Instagram posts for small business. Design skills preferred.",
      price: 50,
      location: "Remote",
      isOnline: true,
      deadline: "3 days",
      category: "Design",
      poster: {
        name: "Emma Davis",
        avatar: "/placeholder.svg?height=32&width=32&text=ED",
        rating: 4.7,
      },
    },
  ])

  const testimonials = [
    {
      name: "Alex Thompson",
      role: "College Student",
      avatar: "/placeholder.svg?height=48&width=48&text=AT",
      content:
        "Giggaz helped me earn $500 last month just by doing simple tasks in my free time. Perfect for students!",
      rating: 5,
    },
    {
      name: "Maria Rodriguez",
      role: "Freelancer",
      avatar: "/placeholder.svg?height=48&width=48&text=MR",
      content: "The quick pay feature is amazing. I get paid instantly after completing gigs. Highly recommend!",
      rating: 5,
    },
    {
      name: "James Wilson",
      role: "Part-time Worker",
      avatar: "/placeholder.svg?height=48&width=48&text=JW",
      content: "Found consistent work through Giggaz. The platform is easy to use and payments are always on time.",
      rating: 5,
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="gradient-bg text-white py-20 relative overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full animate-float"></div>
          <div
            className="absolute top-32 right-20 w-16 h-16 bg-white rounded-full animate-float"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute bottom-20 left-1/4 w-12 h-12 bg-white rounded-full animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className={`text-4xl md:text-6xl font-bold mb-6 ${isVisible ? "animate-fadeIn" : "opacity-0"}`}>
              Turn Your Free Time into <span className="text-yellow-300 gradient-text-2">Cash!</span>
            </h1>
            <p
              className={`text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto ${isVisible ? "animate-slideInLeft" : "opacity-0"}`}
              style={{ animationDelay: "0.2s" }}
            >
              Join thousands of people earning money through video gigs, gig chains, and social engagement. Start making
              money today!
            </p>
            <div
              className={`flex flex-col sm:flex-row gap-4 justify-center ${isVisible ? "animate-slideInRight" : "opacity-0"}`}
              style={{ animationDelay: "0.4s" }}
            >
              <Link href="/gigs">
                <Button size="lg" className="bg-white text-primary hover:bg-gray-100 px-8 py-3 text-lg btn-animate">
                  <Search className="mr-2 h-5 w-5" />
                  Find Gigs
                </Button>
              </Link>
              <Link href="/post-gig">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-primary px-8 py-3 text-lg bg-transparent btn-animate"
                >
                  <DollarSign className="mr-2 h-5 w-5" />
                  Post a Gig
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Video Feed Section */}
      <section className="py-16 bg-black text-white relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-500 to-blue-500 animate-pulse-custom"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fadeIn">Discover Gigs Like Never Before</h2>
            <p
              className="text-xl text-gray-300 max-w-2xl mx-auto animate-slideInLeft"
              style={{ animationDelay: "0.2s" }}
            >
              Swipe through video gigs, engage with freelancers, and book services instantly
            </p>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              {/* Mock Video Preview */}
              <div className="w-80 h-96 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl overflow-hidden shadow-2xl animate-scaleIn">
                <img
                  src="/placeholder.svg?height=400&width=320&text=Video+Feed+Preview&bg=6366f1&color=white"
                  alt="Video Feed Preview"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center animate-pulse-custom">
                    <Play className="h-8 w-8 text-white" />
                  </div>
                </div>
              </div>

              <Link href="/feed">
                <Button
                  size="lg"
                  className="mt-6 bg-white text-black hover:bg-gray-100 px-8 py-3 text-lg btn-animate animate-bounce-custom"
                >
                  <Play className="mr-2 h-5 w-5" />
                  Explore Video Feed
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-fadeIn">How It Works</h2>
            <p
              className="text-xl text-gray-600 max-w-2xl mx-auto animate-slideInLeft"
              style={{ animationDelay: "0.2s" }}
            >
              Getting started is simple. Follow these three easy steps to start earning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow card-hover stagger-item">
              <CardHeader>
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce-custom">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <CardTitle>1. Sign Up</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Create your free account and choose whether you want to find gigs or post tasks.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow card-hover stagger-item">
              <CardHeader>
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 animate-float">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <CardTitle>2. Find & Apply</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Browse available gigs, apply to ones that match your skills, and get selected.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow card-hover stagger-item">
              <CardHeader>
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-glow">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <CardTitle>3. Earn Money</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Complete the task, get paid instantly, and build your reputation for more opportunities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Gigs */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-fadeIn">Featured Gigs</h2>
              <p className="text-xl text-gray-600 animate-slideInLeft" style={{ animationDelay: "0.2s" }}>
                Start earning with these popular opportunities
              </p>
            </div>
            <Link href="/gigs">
              <Button variant="outline" className="btn-animate animate-slideInRight bg-transparent">
                View All Gigs
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredGigs.map((gig, index) => (
              <div key={gig.id} className="stagger-item">
                <GigCard gig={gig} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 gradient-bg-3 text-white relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border border-white rounded-full animate-pulse-custom"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 border border-white rounded-full animate-float"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="stagger-item">
              <div className="text-4xl font-bold mb-2 animate-bounce-custom">10K+</div>
              <div className="text-blue-200">Active Users</div>
            </div>
            <div className="stagger-item">
              <div className="text-4xl font-bold mb-2 animate-pulse-custom">$2M+</div>
              <div className="text-blue-200">Paid Out</div>
            </div>
            <div className="stagger-item">
              <div className="text-4xl font-bold mb-2 animate-float">50K+</div>
              <div className="text-blue-200">Gigs Completed</div>
            </div>
            <div className="stagger-item">
              <div className="text-4xl font-bold mb-2 animate-glow">4.9★</div>
              <div className="text-blue-200">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-fadeIn">Success Stories</h2>
            <p
              className="text-xl text-gray-600 max-w-2xl mx-auto animate-slideInLeft"
              style={{ animationDelay: "0.2s" }}
            >
              See what our community members have to say about their experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow card-hover stagger-item">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <Avatar className="mr-3">
                      <AvatarImage src={testimonial.avatar || "/placeholder.svg"} />
                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.role}</div>
                    </div>
                  </div>
                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400 animate-pulse-custom"
                        style={{ animationDelay: `${i * 0.1}s` }}
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 italic">"{testimonial.content}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 gradient-bg-4 text-white relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-10 left-10 w-4 h-4 bg-white rounded-full animate-bounce-custom"></div>
            <div
              className="absolute top-20 right-20 w-6 h-6 bg-white rounded-full animate-float"
              style={{ animationDelay: "1s" }}
            ></div>
            <div
              className="absolute bottom-20 left-1/3 w-3 h-3 bg-white rounded-full animate-pulse-custom"
              style={{ animationDelay: "2s" }}
            ></div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fadeIn">Ready to Start Earning?</h2>
          <p className="text-xl mb-8 text-green-100 animate-slideInLeft" style={{ animationDelay: "0.2s" }}>
            Join thousands of people who are already making money with Giggaz. Sign up today and start your journey to
            financial freedom.
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center animate-slideInRight"
            style={{ animationDelay: "0.4s" }}
          >
            <Link href="/signup">
              <Button size="lg" className="bg-white text-accent hover:bg-gray-100 px-8 py-3 text-lg btn-animate">
                <CheckCircle className="mr-2 h-5 w-5" />
                Get Started Free
              </Button>
            </Link>
            <Link href="/how-it-works">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-accent px-8 py-3 text-lg bg-transparent btn-animate"
              >
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
