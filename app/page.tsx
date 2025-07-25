"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { GigCard } from "@/components/gig-card"
import { Search, DollarSign, Users, Star, ArrowRight, CheckCircle, Zap, Target, Play, Sparkles, TrendingUp, Shield, Clock } from "lucide-react"

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

  const features = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Instant Payments",
      description: "Get paid immediately after completing your gigs with our QuickPay feature."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Secure & Trusted",
      description: "Your data and payments are protected with bank-level security."
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Flexible Schedule",
      description: "Work when you want, where you want. Complete freedom over your time."
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Growing Income",
      description: "Build your reputation and increase your earning potential over time."
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
      <Navbar />

      {/* Enhanced Hero Section */}
      <section className="hero-bg text-white py-24 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full animate-float blur-xl"></div>
          <div
            className="absolute top-32 right-20 w-24 h-24 bg-white/10 rounded-full animate-float blur-xl"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute bottom-20 left-1/4 w-16 h-16 bg-white/10 rounded-full animate-float blur-xl"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute top-1/2 right-1/3 w-20 h-20 bg-white/10 rounded-full animate-float blur-xl"
            style={{ animationDelay: "3s" }}
          ></div>
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-transparent to-blue-900/20"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className={`mb-6 ${isVisible ? "animate-fadeInUp" : "opacity-0"}`}>
              <span className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full text-sm font-medium glass-effect">
                <Sparkles className="w-4 h-4 mr-2 animate-wiggle" />
                Join 50,000+ Active Earners
              </span>
            </div>
            
            <h1 className={`text-5xl md:text-7xl font-bold mb-8 text-shadow-lg ${isVisible ? "animate-fadeInUp" : "opacity-0"}`} style={{ animationDelay: "0.2s" }}>
              Turn Your Free Time into{" "}
              <span className="gradient-text-2 inline-block animate-glow">Cash!</span>
            </h1>
            
            <p
              className={`text-xl md:text-2xl mb-12 text-blue-100 max-w-4xl mx-auto leading-relaxed ${isVisible ? "animate-fadeInUp" : "opacity-0"}`}
              style={{ animationDelay: "0.4s" }}
            >
              Join thousands of people earning money through video gigs, gig chains, and social engagement. 
              Start making money today with our revolutionary platform!
            </p>
            
            <div
              className={`flex flex-col sm:flex-row gap-6 justify-center items-center ${isVisible ? "animate-fadeInUp" : "opacity-0"}`}
              style={{ animationDelay: "0.6s" }}
            >
              <Link href="/gigs">
                <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 px-10 py-4 text-lg font-semibold btn-animate shadow-2xl border-gradient">
                  <Search className="mr-3 h-5 w-5" />
                  Find Gigs Now
                </Button>
              </Link>
              <Link href="/post-gig">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-10 py-4 text-lg font-semibold glass-effect btn-animate"
                >
                  <DollarSign className="mr-3 h-5 w-5" />
                  Post a Gig
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div
              className={`mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 ${isVisible ? "animate-fadeInUp" : "opacity-0"}`}
              style={{ animationDelay: "0.8s" }}
            >
              {features.map((feature, index) => (
                <div key={index} className="text-center glass-card p-6 rounded-2xl stagger-item">
                  <div className="text-white mb-3 flex justify-center animate-bounce-custom" style={{ animationDelay: `${index * 0.2}s` }}>
                    {feature.icon}
                  </div>
                  <h3 className="font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-blue-100 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Video Feed Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full gradient-bg-3 animate-pulse-custom"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text-3 animate-fadeInUp">
              Discover Gigs Like Never Before
            </h2>
            <p
              className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed animate-fadeInUp"
              style={{ animationDelay: "0.2s" }}
            >
              Swipe through video gigs, engage with freelancers, and book services instantly. 
              Experience the future of gig discovery.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="relative group">
              {/* Enhanced Mock Video Preview */}
              <div className="w-96 h-[500px] gradient-bg-6 rounded-3xl overflow-hidden shadow-2xl animate-scaleIn relative">
                <img
                  src="/placeholder.svg?height=500&width=384&text=Video+Feed+Preview&bg=6366f1&color=white"
                  alt="Video Feed Preview"
                  className="w-full h-full object-cover"
                />
                
                {/* Video Overlay Effects */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 glass-effect rounded-full flex items-center justify-center animate-pulse-custom group-hover:scale-110 transition-transform">
                    <Play className="h-10 w-10 text-white ml-1" />
                  </div>
                </div>

                {/* Floating UI Elements */}
                <div className="absolute top-4 right-4 space-y-4">
                  <div className="w-12 h-12 glass-effect rounded-full flex items-center justify-center animate-heartbeat">
                    <Star className="h-6 w-6 text-yellow-400" />
                  </div>
                  <div className="w-12 h-12 glass-effect rounded-full flex items-center justify-center animate-float">
                    <DollarSign className="h-6 w-6 text-green-400" />
                  </div>
                </div>
              </div>

              <Link href="/feed">
                <Button
                  size="lg"
                  className="mt-8 bg-white text-black hover:bg-gray-100 px-10 py-4 text-lg font-semibold btn-animate shadow-2xl border-gradient-2"
                >
                  <Play className="mr-3 h-5 w-5" />
                  Explore Video Feed
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced How It Works */}
      <section className="py-20 bg-gradient-to-br from-white via-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 gradient-text animate-fadeInUp">
              How It Works
            </h2>
            <p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fadeInUp"
              style={{ animationDelay: "0.2s" }}
            >
              Getting started is simple. Follow these three easy steps to start earning money today.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center glass-card hover:shadow-2xl transition-all duration-500 border-0 stagger-item group">
              <CardHeader className="pb-4">
                <div className="w-20 h-20 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce-custom group-hover:animate-wiggle shadow-lg">
                  <Users className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-2xl gradient-text">1. Sign Up</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  Create your free account and choose whether you want to find gigs or post tasks. 
                  Complete verification in minutes.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center glass-card hover:shadow-2xl transition-all duration-500 border-0 stagger-item group">
              <CardHeader className="pb-4">
                <div className="w-20 h-20 gradient-bg-2 rounded-full flex items-center justify-center mx-auto mb-6 animate-float group-hover:animate-heartbeat shadow-lg">
                  <Target className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-2xl gradient-text-2">2. Find & Apply</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  Browse available gigs, apply to ones that match your skills, and get selected. 
                  Video applications preferred!
                </p>
              </CardContent>
            </Card>

            <Card className="text-center glass-card hover:shadow-2xl transition-all duration-500 border-0 stagger-item group">
              <CardHeader className="pb-4">
                <div className="w-20 h-20 gradient-bg-4 rounded-full flex items-center justify-center mx-auto mb-6 animate-glow group-hover:animate-rotate shadow-lg">
                  <Zap className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-2xl gradient-text-3">3. Earn Money</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  Complete the task, get paid instantly, and build your reputation for more opportunities. 
                  Earn up to $1000/week!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Enhanced Featured Gigs */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 gradient-text animate-fadeInUp">
                Featured Gigs
              </h2>
              <p className="text-xl text-gray-600 animate-fadeInUp leading-relaxed" style={{ animationDelay: "0.2s" }}>
                Start earning with these popular opportunities from verified clients
              </p>
            </div>
            <Link href="/gigs">
              <Button variant="outline" className="btn-animate glass-card border-gradient hover:shadow-lg px-8 py-3">
                View All Gigs
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredGigs.map((gig, index) => (
              <div key={gig.id} className="stagger-item">
                <GigCard gig={gig} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Stats Section */}
      <section className="py-20 gradient-bg-3 text-white relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-40 h-40 border-2 border-white rounded-full animate-pulse-custom blur-sm"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 border-2 border-white rounded-full animate-float blur-sm"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-white rounded-full animate-rotate"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fadeInUp text-shadow-lg">
              Join Our Growing Community
            </h2>
            <p className="text-xl text-blue-100 animate-fadeInUp" style={{ animationDelay: "0.2s" }}>
              See why thousands choose Giggaz for their earning needs
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="stagger-item glass-card p-8 rounded-2xl">
              <div className="text-5xl font-bold mb-3 animate-bounce-custom gradient-text-2">50K+</div>
              <div className="text-blue-200 font-medium">Active Users</div>
            </div>
            <div className="stagger-item glass-card p-8 rounded-2xl">
              <div className="text-5xl font-bold mb-3 animate-pulse-custom gradient-text-2">$5M+</div>
              <div className="text-blue-200 font-medium">Paid Out</div>
            </div>
            <div className="stagger-item glass-card p-8 rounded-2xl">
              <div className="text-5xl font-bold mb-3 animate-float gradient-text-2">100K+</div>
              <div className="text-blue-200 font-medium">Gigs Completed</div>
            </div>
            <div className="stagger-item glass-card p-8 rounded-2xl">
              <div className="text-5xl font-bold mb-3 animate-glow gradient-text-2">4.9★</div>
              <div className="text-blue-200 font-medium">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials */}
      <section className="py-20 bg-gradient-to-br from-white via-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 gradient-text animate-fadeInUp">
              Success Stories
            </h2>
            <p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fadeInUp"
              style={{ animationDelay: "0.2s" }}
            >
              See what our community members have to say about their experience earning with Giggaz
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="glass-card hover:shadow-2xl transition-all duration-500 border-0 stagger-item group">
                <CardContent className="pt-8">
                  <div className="flex items-center mb-6">
                    <Avatar className="mr-4 ring-4 ring-purple-200 group-hover:ring-purple-400 transition-all">
                      <AvatarImage src={testimonial.avatar || "/placeholder.svg"} />
                      <AvatarFallback className="gradient-bg text-white font-bold">{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold text-lg">{testimonial.name}</div>
                      <div className="text-sm text-gray-600 font-medium">{testimonial.role}</div>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-yellow-400 text-yellow-400 animate-pulse-custom"
                        style={{ animationDelay: `${i * 0.1}s` }}
                      />
                    ))}
                  </div>
                  <blockquote className="text-gray-700 italic leading-relaxed text-lg">
                    "{testimonial.content}"
                  </blockquote>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 gradient-bg-4 text-white relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-10 left-10 w-6 h-6 bg-white rounded-full animate-bounce-custom blur-sm"></div>
            <div
              className="absolute top-20 right-20 w-8 h-8 bg-white rounded-full animate-float blur-sm"
              style={{ animationDelay: "1s" }}
            ></div>
            <div
              className="absolute bottom-20 left-1/3 w-4 h-4 bg-white rounded-full animate-pulse-custom blur-sm"
              style={{ animationDelay: "2s" }}
            ></div>
            <div
              className="absolute top-1/2 right-1/4 w-10 h-10 bg-white rounded-full animate-wiggle blur-sm"
              style={{ animationDelay: "3s" }}
            ></div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 animate-fadeInUp text-shadow-lg">
            Ready to Start <span className="gradient-text-2">Earning?</span>
          </h2>
          <p className="text-xl md:text-2xl mb-12 text-green-100 leading-relaxed animate-fadeInUp" style={{ animationDelay: "0.2s" }}>
            Join thousands of people who are already making money with Giggaz. Sign up today and start your journey to 
            <strong className="text-white"> financial freedom</strong>.
          </p>
          <div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fadeInUp"
            style={{ animationDelay: "0.4s" }}
          >
            <Link href="/signup">
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 px-10 py-4 text-lg font-semibold btn-animate shadow-2xl border-gradient">
                <CheckCircle className="mr-3 h-5 w-5" />
                Get Started Free
              </Button>
            </Link>
            <Link href="/how-it-works">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-10 py-4 text-lg font-semibold glass-effect btn-animate"
              >
                Learn More
                <ArrowRight className="ml-3 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
