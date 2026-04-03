'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, User, Award, BookOpen, Mail, Code2, Brain, Smartphone } from 'lucide-react'

const highlights = [
  {
    icon: Code2,
    title: 'MERN Stack Developer',
    description: 'Building full-stack web applications with React, Next.js, Node.js, Express, and MongoDB/PostgreSQL.',
  },
  {
    icon: Brain,
    title: 'Generative AI Developer',
    description: 'Creating AI-powered chatbots and intelligent applications using OpenAI APIs, LangChain, and Agentic AI.',
  },
  {
    icon: Smartphone,
    title: 'Flutter Developer',
    description: 'Developing cross-platform mobile applications with Flutter and Dart for iOS and Android.',
  },
]

export default function AboutPage() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid md:grid-cols-2 gap-8 items-center"
      >
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 dark:text-white">
            About Me
          </h1>
          <p className="text-lg text-secondary-600 dark:text-secondary-400 leading-relaxed">
            Ambitious Full Stack Web Developer specializing in the MERN stack,
            with expertise in Generative AI, Chatbot Development, and Flutter
            Mobile App Development.
          </p>
          <p className="text-secondary-600 dark:text-secondary-400 leading-relaxed">
            Skilled in developing responsive web applications, API creation and integration,
            and managing databases. Proficient in delivering high-quality user experiences
            through effective collaboration and leveraging the latest technologies.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact">
              <Button className="gap-2">
                Get In Touch
                <Mail className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/experience">
              <Button variant="outline" className="gap-2">
                View Experience
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="relative"
        >
          <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 p-1">
            <div className="w-full h-full rounded-2xl overflow-hidden relative bg-secondary-100 dark:bg-secondary-800">
              <Image
                src="/gallery/personal-1.jpg"
                alt="Farhad Ali"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* Stats */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-4 gap-6"
      >
        {[
          { icon: Award, label: 'Years Coding', value: '3+' },
          { icon: BookOpen, label: 'Courses Created', value: '3' },
          { icon: User, label: 'Certificates', value: '8+' },
          { icon: Award, label: 'Technologies', value: '15+' },
        ].map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="text-center p-6 rounded-xl bg-white dark:bg-secondary-900 border border-secondary-200 dark:border-secondary-800"
          >
            <stat.icon className="h-8 w-8 mx-auto mb-3 text-primary-600 dark:text-primary-400" />
            <div className="text-3xl font-bold text-secondary-900 dark:text-white">{stat.value}</div>
            <div className="text-sm text-secondary-600 dark:text-secondary-400 mt-1">{stat.label}</div>
          </motion.div>
        ))}
      </motion.section>

      {/* What I Do */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-6"
      >
        <h2 className="text-3xl font-bold text-secondary-900 dark:text-white">What I Do</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-primary-500/10 flex items-center justify-center">
                    <item.icon className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-secondary-900 dark:text-white">{item.title}</h3>
                  <p className="text-secondary-600 dark:text-secondary-400 text-sm">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Core Competencies */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-6"
      >
        <h2 className="text-3xl font-bold text-secondary-900 dark:text-white">Core Competencies</h2>
        <div className="flex flex-wrap gap-3">
          {[
            'MERN Stack', 'Next.js', 'TypeScript', 'Tailwind CSS',
            'Generative AI', 'Chatbot Development', 'OpenAI API',
            'Flutter', 'Dart', 'Firebase',
            'PostgreSQL', 'MongoDB', 'Prisma',
            'API Development', 'UI/UX Design', 'Figma',
            'Python', 'FastAPI', 'Docker',
          ].map((skill) => (
            <Badge key={skill} variant="secondary" className="px-4 py-2 text-sm">
              {skill}
            </Badge>
          ))}
        </div>
      </motion.section>
    </div>
  )
}
