'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { skills, skillCategories } from '@/data/skills'
import { Code2, Server, Brain, Database, Wrench, Users } from 'lucide-react'

const iconMap: Record<string, any> = {
  layout: Code2,
  server: Server,
  brain: Brain,
  database: Database,
  wrench: Wrench,
  users: Users,
}

export default function SkillsPage() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 dark:text-white">
          Skills & Expertise
        </h1>
        <p className="text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto text-lg">
          A comprehensive overview of my technical skills and proficiencies developed over years of professional experience
        </p>
      </motion.section>

      {/* Skills by Category */}
      <div className="space-y-12">
        {skillCategories.map((category, categoryIndex) => {
          const categorySkills = skills.filter((s) => s.category === category.name)
          const IconComponent = iconMap[category.icon] || Code2

          return (
            <motion.section
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-lg bg-secondary-100 dark:bg-secondary-800`}>
                  <IconComponent className={`h-6 w-6 ${category.color}`} />
                </div>
                <h2 className="text-2xl font-bold text-secondary-900 dark:text-white">
                  {category.name}
                </h2>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {categorySkills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: skillIndex * 0.05 }}
                  >
                    <Card>
                      <CardContent className="p-4 space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="font-medium text-secondary-900 dark:text-white">
                            {skill.name}
                          </span>
                          <Badge variant="outline">{skill.level}%</Badge>
                        </div>
                        <div className="h-2 bg-secondary-200 dark:bg-secondary-800 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: skillIndex * 0.1 }}
                            className="h-full bg-gradient-to-r from-primary-600 to-primary-400 rounded-full"
                          />
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          )
        })}
      </div>

      {/* Additional Info */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="rounded-2xl bg-gradient-to-r from-primary-50 to-accent-50 dark:from-primary-900/20 dark:to-accent-900/20 p-8 text-center"
      >
        <h3 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">
          Always Learning
        </h3>
        <p className="text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto">
          Technology evolves rapidly, and I&apos;m committed to continuous learning. 
          Currently exploring advanced topics in AI/ML, cloud architecture, and distributed systems.
        </p>
      </motion.section>
    </div>
  )
}
