import { notFound } from 'next/navigation'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { CheckCircle, Circle, ChevronLeft, ChevronRight } from 'lucide-react'
import ReactMarkdown from 'react-markdown'
import { prisma } from '@/lib/db'
import { getCurrentUser } from '@/lib/auth'

interface LessonViewerPageProps {
  params: Promise<{ id: string }>
  searchParams: Promise<{ lesson?: string }>
}

export default async function LessonViewerPage({ params, searchParams }: LessonViewerPageProps) {
  const { id: courseId } = await params
  const { lesson: lessonId } = await searchParams
  const user = await getCurrentUser()

  const course = await prisma.course.findUnique({
    where: { id: courseId },
    include: {
      lessons: {
        orderBy: { order: 'asc' },
      },
    },
  })

  if (!course) {
    notFound()
  }

  const currentLessonIndex = course.lessons.findIndex(l => l.id === lessonId)
  const currentLesson = currentLessonIndex >= 0 ? course.lessons[currentLessonIndex] : course.lessons[0]
  const currentIndex = currentLesson ? course.lessons.indexOf(currentLesson) : 0

  if (!currentLesson) {
    notFound()
  }

  let isCompleted = false
  if (user) {
    const progress = await prisma.progress.findUnique({
      where: {
        userId_lessonId: {
          userId: user.id,
          lessonId: currentLesson.id,
        },
      },
    })
    isCompleted = progress?.completed ?? false
  }

  const prevLesson = course.lessons[currentIndex - 1]
  const nextLesson = course.lessons[currentIndex + 1]

  return (
    <div className="grid lg:grid-cols-4 gap-8">
      <div className="lg:col-span-3 space-y-6">
        <div className="flex items-center gap-2 text-sm">
          <Link href="/courses" className="text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400">
            Courses
          </Link>
          <span className="text-secondary-400">/</span>
          <Link href={`/courses/${courseId}`} className="text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400">
            {course.title}
          </Link>
          <span className="text-secondary-400">/</span>
          <span className="text-secondary-900 dark:text-white font-medium">
            {currentLesson.title}
          </span>
        </div>

        <Card>
          <CardContent className="p-6 md:p-8">
            <h1 className="text-3xl font-bold text-secondary-900 dark:text-white mb-6">
              {currentLesson.title}
            </h1>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <ReactMarkdown>{currentLesson.content}</ReactMarkdown>
            </div>
          </CardContent>
        </Card>

        <div className="flex items-center justify-between gap-4">
          {prevLesson ? (
            <Link href={`/courses/${courseId}?lesson=${prevLesson.id}`} className="flex-1">
              <Button variant="outline" className="w-full justify-start gap-2">
                <ChevronLeft className="h-4 w-4" />
                <div className="text-left">
                  <div className="text-xs text-secondary-600 dark:text-secondary-400">Previous</div>
                  <div className="font-medium">{prevLesson.title}</div>
                </div>
              </Button>
            </Link>
          ) : (
            <div className="flex-1" />
          )}

          {nextLesson ? (
            <Link href={`/courses/${courseId}?lesson=${nextLesson.id}`} className="flex-1">
              <Button className="w-full justify-end gap-2">
                <div className="text-right">
                  <div className="text-xs opacity-80">Next</div>
                  <div className="font-medium">{nextLesson.title}</div>
                </div>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </Link>
          ) : (
            <Link href={`/courses/${courseId}`} className="flex-1">
              <Button variant="outline" className="w-full">Back to Course</Button>
            </Link>
          )}
        </div>
      </div>

      <div className="lg:col-span-1">
        <div className="sticky top-24 space-y-4">
          <Card>
            <CardContent className="p-4 space-y-4">
              <h3 className="font-semibold text-secondary-900 dark:text-white">Course Content</h3>
              <div className="space-y-1 max-h-[60vh] overflow-y-auto">
                {course.lessons.map((lesson, index) => {
                  const isActive = lesson.id === currentLesson.id
                  return (
                    <Link
                      key={lesson.id}
                      href={`/courses/${courseId}?lesson=${lesson.id}`}
                      className={`flex items-center gap-3 p-2 rounded-lg text-sm transition-colors ${
                        isActive
                          ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400'
                          : 'hover:bg-secondary-100 dark:hover:bg-secondary-800 text-secondary-600 dark:text-secondary-400'
                      }`}
                    >
                      {index < currentIndex ? (
                        <CheckCircle className="h-4 w-4 flex-shrink-0 text-green-500" />
                      ) : isActive ? (
                        <Circle className="h-4 w-4 flex-shrink-0 fill-primary-600 dark:fill-primary-400 text-primary-600 dark:text-primary-400" />
                      ) : (
                        <div className="w-4 h-4 rounded-full border-2 border-secondary-300 dark:border-secondary-700 flex items-center justify-center text-xs">
                          {index + 1}
                        </div>
                      )}
                      <span className="truncate">{lesson.title}</span>
                    </Link>
                  )
                })}
              </div>
            </CardContent>
          </Card>

          {user && (
            <Card>
              <CardContent className="p-4 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-secondary-900 dark:text-white">Lesson Status</span>
                  <Badge variant={isCompleted ? 'success' : 'outline'}>
                    {isCompleted ? 'Completed' : 'In Progress'}
                  </Badge>
                </div>
                <form action="/api/progress" method="POST">
                  <input type="hidden" name="lessonId" value={currentLesson.id} />
                  <input type="hidden" name="courseId" value={courseId} />
                  <Button
                    type="submit"
                    variant={isCompleted ? 'outline' : 'default'}
                    className="w-full gap-2"
                  >
                    <CheckCircle className="h-4 w-4" />
                    {isCompleted ? 'Mark as Incomplete' : 'Mark as Complete'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
