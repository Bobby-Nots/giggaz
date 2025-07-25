"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Navbar } from "@/components/navbar"
import { useToast } from "@/hooks/use-toast"
import { Upload, DollarSign, Clock, MapPin, Tag } from "lucide-react"

export default function PostGigPage() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    price: "",
    deadline: "",
    skillsNeeded: "",
    mode: "online",
    location: "",
    isUrgent: false,
    image: null as File | null,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const { toast } = useToast()

  const categories = [
    "Data Entry",
    "Delivery",
    "Design",
    "Writing",
    "Survey",
    "Testing",
    "Tutoring",
    "Photography",
    "Social Media",
    "Virtual Assistant",
    "Translation",
    "Research",
    "Customer Service",
    "Marketing",
  ]

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.title.trim()) {
      newErrors.title = "Title is required"
    }

    if (!formData.description.trim()) {
      newErrors.description = "Description is required"
    } else if (formData.description.length < 50) {
      newErrors.description = "Description must be at least 50 characters"
    }

    if (!formData.category) {
      newErrors.category = "Category is required"
    }

    if (!formData.price) {
      newErrors.price = "Price is required"
    } else if (Number.parseFloat(formData.price) < 5) {
      newErrors.price = "Minimum price is $5"
    }

    if (!formData.deadline) {
      newErrors.deadline = "Deadline is required"
    }

    if (formData.mode === "offline" && !formData.location.trim()) {
      newErrors.location = "Location is required for in-person gigs"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    toast({
      title: "Gig Posted Successfully!",
      description: "Your gig is now live and workers can start applying.",
    })

    // Reset form
    setFormData({
      title: "",
      description: "",
      category: "",
      price: "",
      deadline: "",
      skillsNeeded: "",
      mode: "online",
      location: "",
      isUrgent: false,
      image: null,
    })
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setFormData({ ...formData, image: file })
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar userRole="poster" isLoggedIn={true} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Post a New Gig</h1>
          <p className="text-gray-600">Create a task and find the perfect worker to complete it</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Gig Details</CardTitle>
                <CardDescription>
                  Provide clear information about your task to attract the right workers
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Title */}
                  <div>
                    <Label htmlFor="title">Gig Title *</Label>
                    <Input
                      id="title"
                      placeholder="e.g., Data entry for product catalog"
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      className={errors.title ? "border-red-500" : ""}
                    />
                    {errors.title && <p className="text-sm text-red-500 mt-1">{errors.title}</p>}
                  </div>

                  {/* Description */}
                  <div>
                    <Label htmlFor="description">Description *</Label>
                    <Textarea
                      id="description"
                      placeholder="Describe your task in detail. Include requirements, expectations, and any specific instructions..."
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      rows={6}
                      className={errors.description ? "border-red-500" : ""}
                    />
                    <p className="text-sm text-muted-foreground mt-1">
                      {formData.description.length}/500 characters (minimum 50)
                    </p>
                    {errors.description && <p className="text-sm text-red-500 mt-1">{errors.description}</p>}
                  </div>

                  {/* Category and Price */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="category">Category *</Label>
                      <Select
                        value={formData.category}
                        onValueChange={(value) => setFormData({ ...formData, category: value })}
                      >
                        <SelectTrigger className={errors.category ? "border-red-500" : ""}>
                          <Tag className="h-4 w-4 mr-2" />
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          {categories.map((category) => (
                            <SelectItem key={category} value={category}>
                              {category}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {errors.category && <p className="text-sm text-red-500 mt-1">{errors.category}</p>}
                    </div>

                    <div>
                      <Label htmlFor="price">Budget (USD) *</Label>
                      <div className="relative">
                        <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                        <Input
                          id="price"
                          type="number"
                          placeholder="0.00"
                          value={formData.price}
                          onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                          className={`pl-10 ${errors.price ? "border-red-500" : ""}`}
                          min="5"
                          step="0.01"
                        />
                      </div>
                      {errors.price && <p className="text-sm text-red-500 mt-1">{errors.price}</p>}
                    </div>
                  </div>

                  {/* Deadline and Skills */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="deadline">Deadline *</Label>
                      <div className="relative">
                        <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                        <Input
                          id="deadline"
                          type="datetime-local"
                          value={formData.deadline}
                          onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
                          className={`pl-10 ${errors.deadline ? "border-red-500" : ""}`}
                        />
                      </div>
                      {errors.deadline && <p className="text-sm text-red-500 mt-1">{errors.deadline}</p>}
                    </div>

                    <div>
                      <Label htmlFor="skills">Skills Needed</Label>
                      <Input
                        id="skills"
                        placeholder="e.g., Excel, Attention to detail"
                        value={formData.skillsNeeded}
                        onChange={(e) => setFormData({ ...formData, skillsNeeded: e.target.value })}
                      />
                    </div>
                  </div>

                  {/* Mode Selection */}
                  <div>
                    <Label>Work Mode *</Label>
                    <RadioGroup
                      value={formData.mode}
                      onValueChange={(value) => setFormData({ ...formData, mode: value })}
                      className="mt-2"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="online" id="online" />
                        <Label htmlFor="online">Online/Remote</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="offline" id="offline" />
                        <Label htmlFor="offline">In-Person</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  {/* Location (if offline) */}
                  {formData.mode === "offline" && (
                    <div>
                      <Label htmlFor="location">Location *</Label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                        <Input
                          id="location"
                          placeholder="Enter address or area"
                          value={formData.location}
                          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                          className={`pl-10 ${errors.location ? "border-red-500" : ""}`}
                        />
                      </div>
                      {errors.location && <p className="text-sm text-red-500 mt-1">{errors.location}</p>}
                    </div>
                  )}

                  {/* Image Upload */}
                  <div>
                    <Label htmlFor="image">Attach Image (Optional)</Label>
                    <div className="mt-2 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md hover:border-gray-400 transition-colors">
                      <div className="space-y-1 text-center">
                        <Upload className="mx-auto h-12 w-12 text-gray-400" />
                        <div className="flex text-sm text-gray-600">
                          <label
                            htmlFor="image"
                            className="relative cursor-pointer bg-white rounded-md font-medium text-primary hover:text-primary/80 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary"
                          >
                            <span>Upload a file</span>
                            <input
                              id="image"
                              name="image"
                              type="file"
                              className="sr-only"
                              accept="image/*"
                              onChange={handleImageUpload}
                            />
                          </label>
                          <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                        {formData.image && <p className="text-sm text-green-600">✓ {formData.image.name}</p>}
                      </div>
                    </div>
                  </div>

                  {/* Urgent Checkbox */}
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="urgent"
                      checked={formData.isUrgent}
                      onCheckedChange={(checked) => setFormData({ ...formData, isUrgent: checked as boolean })}
                    />
                    <Label htmlFor="urgent" className="text-sm">
                      Mark as urgent (attracts more attention)
                    </Label>
                  </div>

                  {/* Submit Button */}
                  <Button type="submit" disabled={isSubmitting} className="w-full" size="lg">
                    {isSubmitting ? "Posting Gig..." : "Post Gig"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Preview */}
            <Card>
              <CardHeader>
                <CardTitle>Preview</CardTitle>
                <CardDescription>How your gig will appear to workers</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <h4 className="font-semibold line-clamp-2">{formData.title || "Your gig title will appear here"}</h4>
                  <p className="text-sm text-muted-foreground line-clamp-3">
                    {formData.description || "Your gig description will appear here..."}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-primary">${formData.price || "0.00"}</span>
                    {formData.category && (
                      <span className="text-xs bg-gray-100 px-2 py-1 rounded">{formData.category}</span>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Tips */}
            <Card>
              <CardHeader>
                <CardTitle>💡 Tips for Success</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-2">
                  <li>• Write a clear, detailed description</li>
                  <li>• Set a fair price for the work required</li>
                  <li>• Include specific requirements and expectations</li>
                  <li>• Respond to applications quickly</li>
                  <li>• Provide feedback after completion</li>
                </ul>
              </CardContent>
            </Card>

            {/* Pricing Guide */}
            <Card>
              <CardHeader>
                <CardTitle>Pricing Guide</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Data Entry:</span>
                    <span>$5-25</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Design Work:</span>
                    <span>$25-100</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Writing:</span>
                    <span>$15-50</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Delivery:</span>
                    <span>$10-30</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
