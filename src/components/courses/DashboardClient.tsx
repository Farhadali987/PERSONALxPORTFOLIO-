'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import Link from 'next/link'
import { BookOpen, CheckCircle, Clock, TrendingUp, Code2, Database, Brain, Award, Circle, BarChart3 } from 'lucide-react'
import { ProgressPieChart, ProgressBarChart } from '@/components/courses/ProgressChart'

interface CourseData {
  id: string
  title: string
  totalLessons: number
  completedLessons: number
}

interface ActivityItem {
  id: string
  lessonTitle: string
  courseTitle: string
  completed: boolean
  date: string
}

interface DashboardProps {
  userName: string
  courses: CourseData[]
  totalLessons: number
  completedLessons: number
  overallProgress: number
  recentActivity: ActivityItem[]
}

const courseIcons: Record<string, any> = {
  'python-basics': Code2,
  'relational-databases': Database,
  'agentic-ai': Brain,
}

export function DashboardClient({ userName, courses, totalLessons, completedLessons, overallProgress, recentActivity }: DashboardProps) {
  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between"
      >
        <div>
          <h1 className="text-4xl font-bold text-secondary-900 dark:text-white">Dashboard</h1>
          <p className="text-secondary-600 dark:text-secondary-400 mt-1">
            Welcome back, {userName}! Track your learning progress.
          </p>
        </div>
        <Link href="/courses">
          <Badge className="gap-2 cursor-pointer">
            <BookOpen className="h-3 w-3" />
            Browse Courses
          </Badge>
        </Link>
      </motion.section>

      {/* Stats */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {[
          { icon: BookOpen, label: 'Enrolled Courses', value: courses.length, color: 'text-blue-500', bgColor: 'bg-blue-500/10' },
          { icon: CheckCircle, label: 'Lessons Completed', value: completedLessons, color: 'text-green-500', bgColor: 'bg-green-500/10' },
          { icon: Clock, label: 'Hours Learning', value: Math.round(completedLessons * 0.5), color: 'text-purple-500', bgColor: 'bg-purple-500/10' },
          { icon: TrendingUp, label: 'Overall Progress', value: `${Math.round(overallProgress)}%`, color: 'text-orange-500', bgColor: 'bg-orange-500/10' },
        ].map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 + index * 0.05 }}
          >
            <Card>
              <CardContent className="p-6 flex items-center gap-4">
                <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                </div>
                <div>
                  <div className="text-2xl font-bold text-secondary-900 dark:text-white">{stat.value}</div>
                  <div className="text-sm text-secondary-600 dark:text-secondary-400">{stat.label}</div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.section>

      {/* Progress Charts */}
      {courses.length > 0 && (
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="grid md:grid-cols-2 gap-6"
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <BarChart3 className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                Course Completion
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ProgressPieChart
                courses={courses.map(c => ({ name: c.title, completed: c.completedLessons, total: c.totalLessons }))}
              />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <TrendingUp className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                Lessons Progress
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ProgressBarChart
                courses={courses.map(c => ({ name: c.title, completed: c.completedLessons, total: c.totalLessons }))}
              />
            </CardContent>
          </Card>
        </motion.section>
      )}

      {/* Main Content */}
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Enrolled Courses */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-2 space-y-6"
        >
          <h2 className="text-2xl font-bold text-secondary-900 dark:text-white">My Courses</h2>

          {courses.length > 0 ? (
            <div className="space-y-4">
              {courses.map((course, index) => {
                const progress = course.totalLessons > 0 ? (course.completedLessons / course.totalLessons) * 100 : 0
                const IconComponent = courseIcons[course.id] || BookOpen

                return (
                  <motion.div
                    key={course.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + index * 0.05 }}
                  >
                    <Link href={`/courses/${course.id}`}>
                      <Card className="hover:shadow-lg transition-shadow duration-300">
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4">
                            <div className="p-3 rounded-lg bg-gradient-to-br from-primary-500/10 to-accent-500/10">
                              <IconComponent className="h-8 w-8 text-primary-600 dark:text-primary-400" />
                            </div>
                            <div className="flex-1 space-y-3">
                              <div className="flex items-start justify-between">
                                <div>
                                  <h3 className="font-semibold text-secondary-900 dark:text-white">{course.title}</h3>
                                  <p className="text-sm text-secondary-600 dark:text-secondary-400">
                                    {course.completedLessons} of {course.totalLessons} lessons completed
                                  </p>
                                </div>
                                <Badge variant={progress === 100 ? 'success' : 'outline'}>
                                  {progress === 100 ? 'Completed' : `${Math.round(progress)}%`}
                                </Badge>
                              </div>
                              <Progress value={progress} className="h-2" />
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  </motion.div>
                )
              })}
            </div>
          ) : (
            <Card>
              <CardContent className="p-12 text-center space-y-4">
                <BookOpen className="h-16 w-16 mx-auto text-secondary-400" />
                <div>
                  <h3 className="text-xl font-semibold text-secondary-900 dark:text-white mb-2">No courses yet</h3>
                  <p className="text-secondary-600 dark:text-secondary-400 mb-4">
                    Start your learning journey by enrolling in a course
                  </p>
                  <Link href="/courses">
                    <Badge className="cursor-pointer gap-2">
                      Browse Courses
                      <BookOpen className="h-3 w-3" />
                    </Badge>
                  </Link>
                </div>
              </CardContent>
            </Card>
          )}
        </motion.div>

        {/* Right Sidebar */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-bold text-secondary-900 dark:text-white">Recent Activity</h2>

          <Card>
            <CardContent className="p-4 space-y-4">
              {recentActivity.length > 0 ? (
                recentActivity.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.05 }}
                    className="flex items-start gap-3 pb-4 border-b border-secondary-200 dark:border-secondary-800 last:border-0 last:pb-0"
                  >
                    {item.completed ? (
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    ) : (
                      <Circle className="h-5 w-5 text-secondary-400 flex-shrink-0 mt-0.5" />
                    )}
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-secondary-900 dark:text-white truncate">{item.lessonTitle}</p>
                      <p className="text-xs text-secondary-600 dark:text-secondary-400">{item.courseTitle}</p>
                      <p className="text-xs text-secondary-500 mt-1">{item.date}</p>
                    </div>
                  </motion.div>
                ))
              ) : (
                <div className="text-center py-8 text-secondary-600 dark:text-secondary-400">
                  <Clock className="h-12 w-12 mx-auto mb-3 opacity-50" />
                  <p>No recent activity</p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Achievements */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                Achievements
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                { name: 'First Lesson', description: 'Complete your first lesson', icon: '🎯', unlocked: completedLessons >= 1 },
                { name: 'Quick Learner', description: 'Complete 5 lessons', icon: '⚡', unlocked: completedLessons >= 5 },
                { name: 'Course Finisher', description: 'Complete a full course', icon: '🏆', unlocked: courses.some(c => c.completedLessons === c.totalLessons && c.totalLessons > 0) },
              ].map((achievement) => (
                <div
                  key={achievement.name}
                  className={`flex items-center gap-3 p-3 rounded-lg ${
                    achievement.unlocked
                      ? 'bg-primary-50 dark:bg-primary-900/20'
                      : 'bg-secondary-50 dark:bg-secondary-800 opacity-50'
                  }`}
                >
                  <span className="text-2xl">{achievement.icon}</span>
                  <div>
                    <p className={`font-medium text-sm ${
                      achievement.unlocked ? 'text-secondary-900 dark:text-white' : 'text-secondary-500 dark:text-secondary-400'
                    }`}>{achievement.name}</p>
                    <p className="text-xs text-secondary-600 dark:text-secondary-400">{achievement.description}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
