'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Github, Star, ExternalLink, GitFork, Loader2 } from 'lucide-react'
import { useEffect, useState } from 'react'

interface GitHubRepo {
  id: number
  name: string
  full_name: string
  description: string | null
  html_url: string
  stargazers_count: number
  forks_count: number
  language: string | null
  topics: string[]
  updated_at: string
  homepage: string | null
  fork: boolean
}

function getTechStack(language: string | null): string[] {
  const techMap: Record<string, string[]> = {
    TypeScript: ['TypeScript', 'React', 'Node.js'],
    JavaScript: ['JavaScript', 'React', 'Node.js'],
    Python: ['Python', 'Django', 'FastAPI'],
    Dart: ['Dart', 'Flutter'],
    Java: ['Java', 'Spring'],
    HTML: ['HTML', 'CSS', 'JavaScript'],
    CSS: ['CSS', 'Sass', 'Tailwind'],
    Jupyter: ['Python', 'Data Science'],
  }
  return language ? techMap[language] || [language] : ['Various']
}

export default function ProjectsPage() {
  const [repos, setRepos] = useState<GitHubRepo[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://api.github.com/users/Farhadali987/repos?sort=updated&per_page=100')
      .then(res => res.json())
      .then((data: GitHubRepo[]) => {
        const filtered = data
          .filter(r => !r.fork)
          .sort((a, b) => b.stargazers_count - a.stargazers_count)
        setRepos(filtered)
      })
      .catch(() => setRepos([]))
      .finally(() => setLoading(false))
  }, [])

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <Loader2 className="h-8 w-8 animate-spin text-primary-600" />
      </div>
    )
  }

  return (
    <div className="space-y-12">
      {/* Header */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 dark:text-white">
          Projects
        </h1>
        <p className="text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto text-lg">
          Explore my open-source projects and contributions on GitHub
        </p>
      </motion.section>

      {/* GitHub Stats */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid sm:grid-cols-3 gap-6"
      >
        {[
          { label: 'Total Repositories', value: repos.length.toString(), icon: Github },
          { label: 'Total Stars', value: repos.reduce((sum, repo) => sum + repo.stargazers_count, 0).toString(), icon: Star },
          { label: 'Total Forks', value: repos.reduce((sum, repo) => sum + repo.forks_count, 0).toString(), icon: GitFork },
        ].map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
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

      {/* Projects Grid */}
      {repos.length > 0 ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {repos.map((repo, index) => {
            const techStack = getTechStack(repo.language)

            return (
              <motion.div
                key={repo.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <CardTitle className="text-lg">
                        <a
                          href={repo.html_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                        >
                          {repo.name}
                        </a>
                      </CardTitle>
                      <div className="flex items-center gap-1 text-sm text-secondary-600 dark:text-secondary-400">
                        <Star className="h-4 w-4" />
                        {repo.stargazers_count}
                      </div>
                    </div>
                    {repo.description && (
                      <CardDescription>{repo.description}</CardDescription>
                    )}
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      {repo.language && (
                        <div className="flex items-center gap-2 text-sm">
                          <div className="w-3 h-3 rounded-full bg-blue-500" />
                          <span className="text-secondary-600 dark:text-secondary-400">{repo.language}</span>
                        </div>
                      )}
                      {repo.topics && repo.topics.length > 0 && (
                        <div className="flex flex-wrap gap-1">
                          {repo.topics.slice(0, 5).map((topic) => (
                            <Badge key={topic} variant="secondary" className="text-xs">
                              {topic}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="flex flex-wrap gap-1">
                      {techStack.slice(0, 4).map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-2 pt-2">
                      <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="flex-1">
                        <Button variant="outline" size="sm" className="w-full gap-2">
                          <Github className="h-4 w-4" />
                          Code
                        </Button>
                      </a>
                      {repo.homepage && (
                        <a href={repo.homepage} target="_blank" rel="noopener noreferrer">
                          <Button size="sm" className="gap-2">
                            <ExternalLink className="h-4 w-4" />
                            Demo
                          </Button>
                        </a>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      ) : (
        <div className="text-center py-12">
          <Github className="h-16 w-16 mx-auto text-secondary-400 mb-4" />
          <h3 className="text-xl font-semibold text-secondary-900 dark:text-white mb-2">
            No repositories found
          </h3>
          <p className="text-secondary-600 dark:text-secondary-400">
            Unable to fetch repositories from GitHub.
          </p>
        </div>
      )}

      {/* GitHub Profile Link */}
      <div className="text-center">
        <a href="https://github.com/Farhadali987" target="_blank" rel="noopener noreferrer">
          <Button variant="outline" size="lg" className="gap-2">
            <Github className="h-5 w-5" />
            View More on GitHub
          </Button>
        </a>
      </div>
    </div>
  )
}
