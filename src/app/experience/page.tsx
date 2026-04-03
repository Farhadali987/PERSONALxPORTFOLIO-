'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Briefcase, GraduationCap, MapPin, Calendar } from 'lucide-react'

const experiences = [
  {
    title: 'Full Stack Web Developer',
    company: 'Premium (MERN Stack Program)',
    location: 'Pakistan',
    period: '2023 - Present',
    type: 'work',
    description: 'Specializing in MERN stack development. Building responsive web applications, RESTful APIs, and managing databases. Working with React, Next.js, Node.js, Express, MongoDB, and PostgreSQL.',
    skills: ['React', 'Next.js', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Tailwind CSS'],
  },
  {
    title: 'Generative AI & Chatbot Developer',
    company: 'SMIT (Saylani Mass IT Training)',
    location: 'Pakistan',
    period: '2024 - Present',
    type: 'work',
    description: 'Developing AI-powered chatbots and working with generative AI technologies. Building intelligent applications using OpenAI APIs, LangChain, and modern AI frameworks.',
    skills: ['OpenAI API', 'LangChain', 'Python', 'FastAPI', 'Agentic AI'],
  },
  {
    title: 'Flutter Mobile App Developer',
    company: 'Bano Qabil 2.0',
    location: 'Pakistan',
    period: '2023 - 2024',
    type: 'work',
    description: 'Developed cross-platform mobile applications using Flutter and Dart. Created responsive UIs, integrated REST APIs, and managed app state.',
    skills: ['Flutter', 'Dart', 'Firebase', 'REST APIs', 'Mobile UI/UX'],
  },
  {
    title: 'UI/UX Designer',
    company: 'Freelance',
    location: 'Remote',
    period: '2022 - 2023',
    type: 'work',
    description: 'Designed user interfaces and user experiences for web and mobile applications using Figma. Delivered high-quality mockups and prototypes for clients.',
    skills: ['Figma', 'UI Design', 'UX Research', 'Prototyping', 'Wireframing'],
  },
]

const education = [
  {
    degree: 'Generative AI & Chatbot Development',
    school: 'SMIT - Saylani Mass IT Training',
    period: '2024 - Present',
    description: 'Advanced training in AI technologies, chatbot development, and modern AI frameworks.',
  },
  {
    degree: 'Full Stack Web Development (MERN)',
    school: 'Premium Institute',
    period: '2023 - 2024',
    description: 'Comprehensive training in MERN stack development including React, Node.js, Express, and MongoDB.',
  },
  {
    degree: 'Flutter Mobile App Development',
    school: 'Bano Qabil 2.0',
    period: '2023 - 2024',
    description: 'Mobile application development using Flutter framework and Dart programming language.',
  },
]

export default function ExperiencePage() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 dark:text-white">
          Experience
        </h1>
        <p className="text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto text-lg">
          My professional journey in software development, AI, and design
        </p>
      </motion.section>

      {/* Timeline */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="space-y-6"
      >
        <h2 className="text-3xl font-bold text-secondary-900 dark:text-white flex items-center gap-3">
          <Briefcase className="h-8 w-8 text-primary-600 dark:text-primary-400" />
          Work Experience
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-secondary-200 dark:bg-secondary-700 hidden md:block" />

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title + exp.company}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative md:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 top-6 w-4 h-4 rounded-full bg-primary-600 dark:bg-primary-400 border-4 border-white dark:border-secondary-950 hidden md:block" />

                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                      <div>
                        <h3 className="text-xl font-semibold text-secondary-900 dark:text-white">
                          {exp.title}
                        </h3>
                        <p className="text-primary-600 dark:text-primary-400 font-medium">
                          {exp.company}
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline" className="gap-1 whitespace-nowrap">
                          <Calendar className="h-3 w-3" />
                          {exp.period}
                        </Badge>
                        <Badge variant="secondary" className="gap-1 whitespace-nowrap">
                          <MapPin className="h-3 w-3" />
                          {exp.location}
                        </Badge>
                      </div>
                    </div>
                    <p className="text-secondary-600 dark:text-secondary-400 mb-4">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Education */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-6"
      >
        <h2 className="text-3xl font-bold text-secondary-900 dark:text-white flex items-center gap-3">
          <GraduationCap className="h-8 w-8 text-primary-600 dark:text-primary-400" />
          Education & Training
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {education.map((edu, index) => (
            <motion.div
              key={edu.school}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 space-y-3">
                  <Badge variant="outline">{edu.period}</Badge>
                  <h3 className="text-lg font-semibold text-secondary-900 dark:text-white">
                    {edu.degree}
                  </h3>
                  <p className="text-primary-600 dark:text-primary-400 font-medium text-sm">
                    {edu.school}
                  </p>
                  <p className="text-secondary-600 dark:text-secondary-400 text-sm">
                    {edu.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  )
}
