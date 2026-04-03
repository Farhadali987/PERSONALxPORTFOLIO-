import { notFound } from 'next/navigation'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import Link from 'next/link'
import { ArrowLeft, Clock, BookOpen, CheckCircle, Circle, PlayCircle, Code2, Database, Brain, BookOpenCheck } from 'lucide-react'
import { prisma } from '@/lib/db'
import { getCurrentUser } from '@/lib/auth'

const courseIcons: Record<string, any> = {
  'python-basics': Code2,
  'relational-databases': Database,
  'agentic-ai': Brain,
}

interface CourseDetailPageProps {
  params: Promise<{ id: string }>
}

export default async function CourseDetailPage({ params }: CourseDetailPageProps) {
  const { id } = await params
  const user = await getCurrentUser()

  const course = await prisma.course.findUnique({
    where: { id },
    include: {
      lessons: {
        orderBy: { order: 'asc' },
      },
      book: {
        include: { chapters: { select: { id: true } } },
      },
    },
  })

  if (!course) {
    notFound()
  }

  const IconComponent = courseIcons[id] || Code2

  let userProgress: { lessonId: string; completed: boolean }[] = []
  let enrolled = false

  if (user) {
    const enrollment = await prisma.enrollment.findUnique({
      where: {
        userId_courseId: {
          userId: user.id,
          courseId: course.id,
        },
      },
    })
    enrolled = !!enrollment

    if (enrolled) {
      const progress = await prisma.progress.findMany({
        where: { userId: user.id },
        select: { lessonId: true, completed: true },
      })
      userProgress = progress
    }
  }

  const completedCount = userProgress.filter(p => p.completed).length
  const progressPercent = course.lessons.length > 0
    ? (completedCount / course.lessons.length) * 100
    : 0

  return (
    <div className="space-y-8">
      <Link href="/courses">
        <Button variant="ghost" className="gap-2 -ml-2">
          <ArrowLeft className="h-4 w-4" />
          Back to Courses
        </Button>
      </Link>

      <section className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-lg bg-gradient-to-br from-primary-500/10 to-accent-500/10">
              <IconComponent className="h-8 w-8 text-primary-600 dark:text-primary-400" />
            </div>
            <Badge variant={course.difficulty === 'beginner' ? 'success' : 'warning'}>
              {course.difficulty}
            </Badge>
          </div>

          <h1 className="text-4xl font-bold text-secondary-900 dark:text-white">
            {course.title}
          </h1>

          <p className="text-lg text-secondary-600 dark:text-secondary-400">
            {course.description}
          </p>

          {user && enrolled && (
            <Card>
              <CardContent className="p-4 space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium text-secondary-900 dark:text-white">Your Progress</span>
                  <span className="text-secondary-600 dark:text-secondary-400">
                    {completedCount} of {course.lessons.length} lessons completed
                  </span>
                </div>
                <Progress value={progressPercent} className="h-2" />
              </CardContent>
            </Card>
          )}
        </div>

        <div>
          <Card>
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center gap-3 text-secondary-600 dark:text-secondary-400">
                <Clock className="h-5 w-5" />
                <span>~8-12 hours</span>
              </div>
              <div className="flex items-center gap-3 text-secondary-600 dark:text-secondary-400">
                <BookOpen className="h-5 w-5" />
                <span>{course.lessons.length} lessons</span>
              </div>

              {course.book && (
                <div className="pt-4 border-t border-secondary-200 dark:border-secondary-800">
                  <Link href={`/courses/${course.id}/book`}>
                    <Button className="w-full gap-2" variant="default">
                      <BookOpenCheck className="h-4 w-4" />
                      Read Book ({course.book.chapters.length} chapters)
                    </Button>
                  </Link>
                </div>
              )}

              {!user && (
                <div className="pt-4 border-t border-secondary-200 dark:border-secondary-800">
                  <p className="text-sm text-secondary-600 dark:text-secondary-400 mb-3">
                    Sign in to track your progress
                  </p>
                  <Link href="/login" className="block">
                    <Button className="w-full">Sign In</Button>
                  </Link>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-secondary-900 dark:text-white">Course Content</h2>

        <div className="space-y-2">
          {course.lessons.map((lesson, index) => {
            const isCompleted = userProgress.find(p => p.lessonId === lesson.id)?.completed
            const isLocked = !user && index > 0

            return (
              <Card key={lesson.id} className={`hover:shadow-md transition-shadow duration-300 ${isLocked ? 'opacity-50' : ''}`}>
                <CardContent className="p-4">
                  <Link
                    href={`/courses/${course.id}?lesson=${lesson.id}`}
                    className="flex items-center gap-4"
                  >
                    <div className="flex-shrink-0">
                      {isCompleted ? (
                        <CheckCircle className="h-6 w-6 text-green-500" />
                      ) : isLocked ? (
                        <Circle className="h-6 w-6 text-secondary-400" />
                      ) : (
                        <div className="w-6 h-6 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-sm font-medium text-primary-600 dark:text-primary-400">
                          {index + 1}
                        </div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-secondary-900 dark:text-white truncate">
                        {lesson.title}
                      </h3>
                      <p className="text-sm text-secondary-600 dark:text-secondary-400 truncate">
                        Lesson {index + 1} • {Math.ceil(lesson.content.length / 1000)} min read
                      </p>
                    </div>
                    <PlayCircle className="h-5 w-5 text-secondary-400 flex-shrink-0" />
                  </Link>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </section>
    </div>
  )
}
