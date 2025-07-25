"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { Link2, Users, Clock, DollarSign, Star, Crown, Zap } from "lucide-react"

interface GigChainCardProps {
  chain: {
    id: string
    mainGig: {
      title: string
      totalBudget: number
      deadline: string
      image: string
      topFreelancer: {
        name: string
        avatar: string
        rating: number
        level: "top" | "pro"
      }
    }
    subTasks: {
      id: string
      title: string
      description: string
      budget: number
      skillsNeeded: string[]
      difficulty: "easy" | "medium" | "hard"
      estimatedTime: string
      applicants: number
      maxApplicants: number
      image: string
    }[]
    benefits: {
      experience: string
      mentorship: boolean
      futureOpportunities: boolean
      instantPay: boolean
    }
  }
}

export function GigChainCard({ chain }: GigChainCardProps) {
  const [selectedTask, setSelectedTask] = useState<string | null>(null)
  const [application, setApplication] = useState("")
  const { toast } = useToast()

  const handleApply = (taskId: string) => {
    toast({
      title: "Application Submitted! 🎉",
      description: "The top freelancer will review your application within 24 hours.",
    })
    setApplication("")
    setSelectedTask(null)
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "easy":
        return "bg-green-500"
      case "medium":
        return "bg-yellow-500"
      case "hard":
        return "bg-red-500"
      default:
        return "bg-gray-500"
    }
  }

  const getLevelIcon = (level: string) => {
    return level === "top" ? (
      <Crown className="h-4 w-4 text-yellow-500 animate-pulse-custom" />
    ) : (
      <Star className="h-4 w-4 text-blue-500 animate-glow" />
    )
  }

  return (
    <Card className="border-l-4 border-l-purple-500 hover:shadow-lg transition-all duration-300 card-hover animate-fadeIn">
      {/* Main Gig Image */}
      <div className="image-hover">
        <img
          src={chain.mainGig.image || "/placeholder.svg?height=200&width=400&text=Main+Project&bg=8b5cf6&color=white"}
          alt={chain.mainGig.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-2 left-2">
          <Badge className="bg-purple-500 text-white animate-bounce-custom">
            <Link2 className="w-3 h-3 mr-1" />
            Gig Chain
          </Badge>
        </div>
        <div className="absolute top-2 right-2">
          <Badge variant="outline" className="bg-white bg-opacity-90 animate-pulse-custom">
            {chain.subTasks.length} Sub-tasks
          </Badge>
        </div>
      </div>

      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="text-lg mb-2 animate-slideInLeft">{chain.mainGig.title}</CardTitle>
            <div
              className="flex items-center gap-3 text-sm text-muted-foreground animate-slideInLeft"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="flex items-center gap-1">
                <DollarSign className="w-4 h-4" />
                <span>Total Budget: ${chain.mainGig.totalBudget}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>Deadline: {chain.mainGig.deadline}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Top Freelancer Info */}
        <div
          className="flex items-center gap-3 p-3 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg animate-slideInRight"
          style={{ animationDelay: "0.2s" }}
        >
          <Avatar className="h-10 w-10">
            <AvatarImage src={chain.mainGig.topFreelancer.avatar || "/placeholder.svg"} />
            <AvatarFallback>{chain.mainGig.topFreelancer.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              {getLevelIcon(chain.mainGig.topFreelancer.level)}
              <span className="font-semibold">{chain.mainGig.topFreelancer.name}</span>
              <div className="flex items-center gap-1">
                <Star className="h-3 w-3 fill-yellow-400 text-yellow-400 animate-pulse-custom" />
                <span className="text-sm">{chain.mainGig.topFreelancer.rating}</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">Looking for talented beginners to join this project</p>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Benefits */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 animate-fadeIn" style={{ animationDelay: "0.3s" }}>
          {chain.benefits.experience && (
            <Badge variant="outline" className="justify-center animate-float">
              <Zap className="w-3 h-3 mr-1" />
              Experience
            </Badge>
          )}
          {chain.benefits.mentorship && (
            <Badge variant="outline" className="justify-center animate-bounce-custom">
              <Users className="w-3 h-3 mr-1" />
              Mentorship
            </Badge>
          )}
          {chain.benefits.futureOpportunities && (
            <Badge variant="outline" className="justify-center animate-pulse-custom">
              🚀 Future Gigs
            </Badge>
          )}
          {chain.benefits.instantPay && (
            <Badge variant="outline" className="justify-center animate-glow">
              ⚡ Instant Pay
            </Badge>
          )}
        </div>

        {/* Sub-tasks */}
        <div className="space-y-3">
          <h4 className="font-semibold animate-slideInLeft" style={{ animationDelay: "0.4s" }}>
            Available Sub-tasks:
          </h4>
          {chain.subTasks.map((task, index) => (
            <div
              key={task.id}
              className="border rounded-lg p-4 hover:bg-gray-50 transition-colors card-hover stagger-item"
            >
              {/* Task Image */}
              <div className="image-hover mb-3">
                <img
                  src={
                    task.image ||
                    `/placeholder.svg?height=120&width=200&text=${task.title.replace(/\s+/g, "+")}&bg=6366f1&color=white`
                  }
                  alt={task.title}
                  className="w-full h-24 object-cover rounded"
                />
              </div>

              <div className="flex items-start justify-between mb-2">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h5 className="font-medium">{task.title}</h5>
                    <Badge className={`${getDifficultyColor(task.difficulty)} text-white text-xs animate-pulse-custom`}>
                      {task.difficulty}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{task.description}</p>
                  <div className="flex flex-wrap gap-1 mb-2">
                    {task.skillsNeeded.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="outline"
                        className="text-xs animate-fadeIn"
                        style={{ animationDelay: `${0.1 * skillIndex}s` }}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-primary gradient-text">${task.budget}</div>
                  <div className="text-xs text-muted-foreground">{task.estimatedTime}</div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Progress value={(task.applicants / task.maxApplicants) * 100} className="w-20 h-2 progress-bar" />
                  <span className="text-xs text-muted-foreground">
                    {task.applicants}/{task.maxApplicants} applied
                  </span>
                </div>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      size="sm"
                      onClick={() => setSelectedTask(task.id)}
                      disabled={task.applicants >= task.maxApplicants}
                      className="btn-animate ripple"
                    >
                      {task.applicants >= task.maxApplicants ? "Full" : "Apply"}
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="modal-content">
                    <DialogHeader>
                      <DialogTitle>Apply for: {task.title}</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div className="p-4 bg-muted rounded-lg animate-fadeIn">
                        <h4 className="font-semibold mb-2">Task Details</h4>
                        <p className="text-sm text-muted-foreground mb-2">{task.description}</p>
                        <div className="flex justify-between text-sm">
                          <span>
                            Payment: <span className="font-semibold text-primary">${task.budget}</span>
                          </span>
                          <span>Time: {task.estimatedTime}</span>
                        </div>
                      </div>

                      <div
                        className="p-4 bg-purple-50 rounded-lg animate-slideInLeft"
                        style={{ animationDelay: "0.2s" }}
                      >
                        <h4 className="font-semibold mb-2">Chain Benefits</h4>
                        <ul className="text-sm space-y-1">
                          <li>• Work directly with {chain.mainGig.topFreelancer.name}</li>
                          <li>• Get mentorship and feedback</li>
                          <li>• Build your portfolio with real projects</li>
                          <li>• Potential for future collaborations</li>
                        </ul>
                      </div>

                      <div className="animate-slideInRight" style={{ animationDelay: "0.3s" }}>
                        <label className="text-sm font-medium mb-2 block">
                          Why should you be selected for this sub-task?
                        </label>
                        <Textarea
                          placeholder="Explain your relevant skills and experience..."
                          value={application}
                          onChange={(e) => setApplication(e.target.value)}
                          rows={4}
                        />
                      </div>

                      <Button
                        onClick={() => handleApply(task.id)}
                        disabled={!application.trim()}
                        className="w-full btn-animate"
                      >
                        Submit Application
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
