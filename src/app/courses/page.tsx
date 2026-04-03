'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRight, Code2, Database, Brain, Clock, BookOpen } from 'lucide-react'

const courses = [
  {
    id: 'python-basics',
    title: 'Python Programming Fundamentals',
    description: 'Master Python from scratch. Learn variables, data types, functions, OOP, and file handling with hands-on examples.',
    difficulty: 'beginner',
    duration: '8 hours',
    lessons: 10,
    icon: Code2,
    color: 'text-yellow-500',
    bgColor: 'bg-yellow-500/10',
    thumbnail: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=800&q=80',
    topics: ['Variables & Data Types', 'Control Flow', 'Functions', 'OOP', 'File Handling'],
  },
  {
    id: 'relational-databases',
    title: 'Relational Databases & SQL',
    description: 'Master SQL and PostgreSQL. Learn database design, queries, joins, indexes, and optimization techniques.',
    difficulty: 'beginner',
    duration: '10 hours',
    lessons: 10,
    icon: Database,
    color: 'text-blue-500',
    bgColor: 'bg-blue-500/10',
    thumbnail: 'https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?w=800&q=80',
    topics: ['SQL Basics', 'Joins', 'Indexes', 'Transactions', 'Database Design'],
  },
  {
    id: 'agentic-ai',
    title: 'Agentic AI & Autonomous Systems',
    description: 'Learn to build AI agents, autonomous systems, and multi-agent architectures. Master LangChain, AutoGen, and agent frameworks.',
    difficulty: 'intermediate',
    duration: '12 hours',
    lessons: 10,
    icon: Brain,
    color: 'text-purple-500',
    bgColor: 'bg-purple-500/10',
    thumbnail: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
    topics: ['AI Agents', 'LangChain', 'Multi-Agent Systems', 'Tool Use', 'Production Deployment'],
  },
]

export default function CoursesPage() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 dark:text-white">
          Courses
        </h1>
        <p className="text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto text-lg">
          Comprehensive, hands-on courses designed to take you from beginner to proficient
        </p>
      </motion.section>

      {/* Stats */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-4 gap-6"
      >
        {[
          { icon: BookOpen, label: 'Total Courses', value: '3' },
          { icon: Code2, label: 'Total Lessons', value: '30' },
          { icon: Clock, label: 'Total Hours', value: '30+' },
          { icon: Database, label: 'Topics Covered', value: '50+' },
        ].map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <Card>
              <CardContent className="p-6 flex items-center gap-4">
                <div className="p-3 rounded-lg bg-primary-50 dark:bg-primary-900/20">
                  <stat.icon className="h-6 w-6 text-primary-600 dark:text-primary-400" />
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

      {/* Courses Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {courses.map((course, index) => (
          <motion.div
            key={course.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <Link href={`/courses/${course.id}`}>
              <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow duration-300 group">
                <div className="aspect-video bg-secondary-100 dark:bg-secondary-800 relative overflow-hidden">
                  <div className={`absolute inset-0 ${course.bgColor} opacity-50`} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <course.icon className={`h-20 w-20 ${course.color} opacity-50 group-hover:scale-110 transition-transform duration-300`} />
                  </div>
                </div>
                <CardHeader>
                  <Badge variant={course.difficulty === 'beginner' ? 'success' : 'warning'} className="w-fit mb-2">
                    {course.difficulty}
                  </Badge>
                  <CardTitle className="group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {course.title}
                  </CardTitle>
                  <CardDescription>{course.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {/* Meta Info */}
                    <div className="flex items-center gap-4 text-sm text-secondary-600 dark:text-secondary-400">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {course.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <BookOpen className="h-4 w-4" />
                        {course.lessons} lessons
                      </div>
                    </div>

                    {/* Topics */}
                    <div className="flex flex-wrap gap-1">
                      {course.topics.slice(0, 3).map((topic) => (
                        <Badge key={topic} variant="outline" className="text-xs">
                          {topic}
                        </Badge>
                      ))}
                      {course.topics.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{course.topics.length - 3}
                        </Badge>
                      )}
                    </div>

                    {/* CTA */}
                    <div className="flex items-center text-sm text-primary-600 dark:text-primary-400 font-medium pt-2">
                      Start Learning
                      <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        ))}
      </motion.div>

      {/* Learning Path */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="rounded-2xl bg-gradient-to-r from-primary-50 to-accent-50 dark:from-primary-900/20 dark:to-accent-900/20 p-8"
      >
        <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-6 text-center">
          Suggested Learning Path
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-4"
            >
              {index > 0 && (
                <ArrowRight className="h-6 w-6 text-secondary-400 hidden md:block" />
              )}
              <div className={`p-3 rounded-lg ${course.bgColor}`}>
                <course.icon className={`h-6 w-6 ${course.color}`} />
              </div>
              <div className="flex-1">
                <div className="text-sm font-medium text-secondary-900 dark:text-white">
                  {course.title.split(' ')[0]}
                </div>
                <div className="text-xs text-secondary-600 dark:text-secondary-400">
                  Step {index + 1}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  )
}
