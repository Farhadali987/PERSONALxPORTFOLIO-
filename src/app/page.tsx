'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Code2, Database, Brain, Github, Star, ExternalLink, FileText, Image as ImageIcon } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

const stats = [
  { label: 'Years Coding', value: '3+' },
  { label: 'Projects Built', value: '20+' },
  { label: 'Courses Created', value: '3' },
  { label: 'Certificates', value: '8+' },
]

const featuredCourses = [
  {
    id: 'python-basics',
    title: 'Python Programming Fundamentals',
    description: 'Master Python from scratch with hands-on examples',
    difficulty: 'beginner',
    icon: Code2,
    color: 'text-yellow-500',
    bgColor: 'bg-yellow-500/10',
  },
  {
    id: 'relational-databases',
    title: 'Relational Databases & SQL',
    description: 'Learn database design, queries, and optimization',
    difficulty: 'beginner',
    icon: Database,
    color: 'text-blue-500',
    bgColor: 'bg-blue-500/10',
  },
  {
    id: 'agentic-ai',
    title: 'Agentic AI & Autonomous Systems',
    description: 'Build AI agents and multi-agent architectures',
    difficulty: 'intermediate',
    icon: Brain,
    color: 'text-purple-500',
    bgColor: 'bg-purple-500/10',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

export default function HomePage() {
  return (
    <div className="space-y-16 md:space-y-24">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-8 py-12 md:py-20"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 text-sm font-medium"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
          </span>
          Available for new opportunities
        </motion.div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-secondary-900 dark:text-white tracking-tight">
          Hi, I&apos;m{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600 dark:from-primary-400 dark:to-accent-400">
            Farhad Gul
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-secondary-600 dark:text-secondary-400 max-w-3xl mx-auto leading-relaxed">
          Full-stack MERN developer, Generative AI enthusiast, and Flutter developer. I build scalable web &amp; mobile applications and share knowledge through courses.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/projects">
            <Button size="lg" className="gap-2">
              View My Work
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline" size="lg">
              Get In Touch
            </Button>
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-primary-600 dark:text-primary-400">
                {stat.value}
              </div>
              <div className="text-sm text-secondary-600 dark:text-secondary-400 mt-1">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Featured Courses */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="space-y-8"
      >
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 dark:text-white">
            Learn With My Courses
          </h2>
          <p className="text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto">
            Comprehensive, hands-on courses designed to take you from beginner to proficient
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredCourses.map((course) => (
            <motion.div key={course.id} variants={itemVariants}>
              <Link href={`/courses/${course.id}`}>
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 group">
                  <CardHeader>
                    <div className={`w-12 h-12 rounded-lg ${course.bgColor} flex items-center justify-center mb-4`}>
                      <course.icon className={`h-6 w-6 ${course.color}`} />
                    </div>
                    <Badge variant={course.difficulty === 'beginner' ? 'success' : 'warning'} className="w-fit mb-2">
                      {course.difficulty}
                    </Badge>
                    <CardTitle className="group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      {course.title}
                    </CardTitle>
                    <CardDescription>{course.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center text-sm text-primary-600 dark:text-primary-400 font-medium">
                      Start Learning
                      <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/courses">
            <Button variant="outline" size="lg" className="gap-2">
              View All Courses
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </motion.section>

      {/* Quick Links */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-3 gap-6"
      >
        <motion.div variants={itemVariants}>
          <Link href="/projects">
            <Card className="h-full hover:shadow-lg transition-shadow duration-300 group">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4">
                  <Github className="h-6 w-6 text-blue-500" />
                </div>
                <CardTitle className="group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  Projects
                </CardTitle>
                <CardDescription>
                  Explore my GitHub repositories and see real-world applications I&apos;ve built
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-sm text-primary-600 dark:text-primary-400 font-medium">
                  View Projects
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </CardContent>
            </Card>
          </Link>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Link href="/certificates">
            <Card className="h-full hover:shadow-lg transition-shadow duration-300 group">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-green-500" />
                </div>
                <CardTitle className="group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  Certificates
                </CardTitle>
                <CardDescription>
                  View my professional certifications and achievements
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-sm text-primary-600 dark:text-primary-400 font-medium">
                  View Certificates
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </CardContent>
            </Card>
          </Link>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Link href="/gallery">
            <Card className="h-full hover:shadow-lg transition-shadow duration-300 group">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4">
                  <ImageIcon className="h-6 w-6 text-purple-500" />
                </div>
                <CardTitle className="group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  Gallery
                </CardTitle>
                <CardDescription>
                  Browse photos from events, conferences, and projects
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-sm text-primary-600 dark:text-primary-400 font-medium">
                  View Gallery
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </CardContent>
            </Card>
          </Link>
        </motion.div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-primary-600 to-accent-600 dark:from-primary-700 dark:to-accent-700 py-16 px-8 text-center"
      >
        <div className="relative z-10 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Ready to Start Learning?
          </h2>
          <p className="text-white/90 max-w-2xl mx-auto text-lg">
            Join hundreds of students already learning through my courses. Get hands-on experience and build real projects.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/signup">
              <Button size="lg" variant="outline" className="bg-white text-primary-600 hover:bg-white/90 gap-2">
                Get Started Free
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/courses">
              <Button size="lg" variant="ghost" className="bg-white/10 text-white hover:bg-white/20">
                Browse Courses
              </Button>
            </Link>
          </div>
        </div>
      </motion.section>
    </div>
  )
}
