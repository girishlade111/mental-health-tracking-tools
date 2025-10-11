"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Calendar, Heart, Brain, Target, BookOpen, TrendingUp, Plus } from "lucide-react"
import Link from "next/link"

export default function Dashboard() {
  const [currentMood, setCurrentMood] = useState(7)

  const moodData = [
    { day: "Mon", mood: 6 },
    { day: "Tue", mood: 8 },
    { day: "Wed", mood: 5 },
    { day: "Thu", mood: 7 },
    { day: "Fri", mood: 9 },
    { day: "Sat", mood: 8 },
    { day: "Sun", mood: 7 },
  ]

  const goals = [
    { title: "Daily Meditation", progress: 85, streak: 12 },
    { title: "Gratitude Journal", progress: 60, streak: 8 },
    { title: "Exercise", progress: 40, streak: 3 },
  ]

  const recentArticles = [
    { title: "Understanding Anxiety: A Beginner's Guide", category: "Anxiety", readTime: "5 min" },
    { title: "Building Healthy Sleep Habits", category: "Sleep", readTime: "7 min" },
    { title: "Mindfulness in Daily Life", category: "Mindfulness", readTime: "4 min" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-gray-900">TogetherMind</h1>
          <p className="text-gray-600">Your Community, your safe space</p>
        </div>

        {/* Navigation */}
        <div className="flex flex-wrap justify-center gap-2">
          <Button variant="default" asChild>
            <Link href="/">
              <Heart className="w-4 h-4 mr-2" />
              Dashboard
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/mood-tracker">
              <Calendar className="w-4 h-4 mr-2" />
              Mood Tracker
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/journal">
              <Brain className="w-4 h-4 mr-2" />
              Journal
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/goals">
              <Target className="w-4 h-4 mr-2" />
              Goals
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/articles">
              <BookOpen className="w-4 h-4 mr-2" />
              Articles
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/insights">
              <TrendingUp className="w-4 h-4 mr-2" />
              Insights
            </Link>
          </Button>
        </div>

        {/* Quick Mood Check */}
        <Card className="bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-pink-500" />
              How are you feeling today?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">😢 Very Low</span>
                <span className="text-sm text-gray-600">😊 Very High</span>
              </div>
              <input
                type="range"
                min="1"
                max="10"
                value={currentMood}
                onChange={(e) => setCurrentMood(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="text-center">
                <span className="text-2xl font-bold text-indigo-600">{currentMood}/10</span>
                <Button className="ml-4" size="sm">
                  <Plus className="w-4 h-4 mr-2" />
                  Log Mood
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Weekly Mood Trend */}
          <Card className="bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>This Week's Mood</CardTitle>
              <CardDescription>Your emotional journey</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {moodData.map((day, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-sm font-medium">{day.day}</span>
                    <div className="flex items-center gap-2">
                      <Progress value={day.mood * 10} className="w-20" />
                      <span className="text-sm text-gray-600">{day.mood}/10</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Wellness Goals */}
          <Card className="bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Wellness Goals</CardTitle>
              <CardDescription>Your progress this week</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {goals.map((goal, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">{goal.title}</span>
                      <Badge variant="secondary">{goal.streak} day streak</Badge>
                    </div>
                    <Progress value={goal.progress} className="h-2" />
                    <span className="text-xs text-gray-600">{goal.progress}% complete</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Articles */}
          <Card className="bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Recommended Reading</CardTitle>
              <CardDescription>Articles for your wellness journey</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {recentArticles.map((article, index) => (
                  <div
                    key={index}
                    className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors"
                  >
                    <h4 className="font-medium text-sm mb-1">{article.title}</h4>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="text-xs">
                        {article.category}
                      </Badge>
                      <span className="text-xs text-gray-500">{article.readTime}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Button variant="outline" className="h-20 flex-col gap-2" asChild>
            <Link href="/mood-tracker">
              <Calendar className="w-6 h-6" />
              <span className="text-sm">Log Mood</span>
            </Link>
          </Button>
          <Button variant="outline" className="h-20 flex-col gap-2" asChild>
            <Link href="/journal">
              <Brain className="w-6 h-6" />
              <span className="text-sm">Write Journal</span>
            </Link>
          </Button>
          <Button variant="outline" className="h-20 flex-col gap-2" asChild>
            <Link href="/goals">
              <Target className="w-6 h-6" />
              <span className="text-sm">Check Goals</span>
            </Link>
          </Button>
          <Button variant="outline" className="h-20 flex-col gap-2" asChild>
            <Link href="/articles">
              <BookOpen className="w-6 h-6" />
              <span className="text-sm">Read Articles</span>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
