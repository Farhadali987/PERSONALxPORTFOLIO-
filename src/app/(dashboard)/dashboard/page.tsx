import { redirect } from 'next/navigation'
import { prisma } from '@/lib/db'
import { getCurrentUser } from '@/lib/auth'
import { DashboardClient } from '@/components/courses/DashboardClient'

export default async function DashboardPage() {
  const user = await getCurrentUser()

  if (!user) {
    redirect('/login')
  }

  const enrollments = await prisma.enrollment.findMany({
    where: { userId: user.id },
    include: {
      course: {
        include: {
          lessons: {
            include: {
              progress: {
                where: { userId: user.id },
              },
            },
          },
        },
      },
    },
  })

  const totalLessons = enrollments.reduce((sum, e) => sum + e.course.lessons.length, 0)
  const completedLessons = enrollments.reduce(
    (sum, e) => sum + e.course.lessons.filter(l => l.progress.some(p => p.completed)).length, 0
  )
  const overallProgress = totalLessons > 0 ? (completedLessons / totalLessons) * 100 : 0

  const recentProgress = await prisma.progress.findMany({
    where: { userId: user.id },
    include: {
      lesson: {
        include: { course: true },
      },
    },
    orderBy: { updatedAt: 'desc' },
    take: 5,
  })

  const courses = enrollments.map(e => ({
    id: e.course.id,
    title: e.course.title,
    totalLessons: e.course.lessons.length,
    completedLessons: e.course.lessons.filter(l => l.progress.some(p => p.completed)).length,
  }))

  const recentActivity = recentProgress.map(p => ({
    id: p.id,
    lessonTitle: p.lesson.title,
    courseTitle: p.lesson.course.title,
    completed: p.completed,
    date: (p.completedAt || p.createdAt).toLocaleDateString(),
  }))

  return (
    <DashboardClient
      userName={user.name}
      courses={courses}
      totalLessons={totalLessons}
      completedLessons={completedLessons}
      overallProgress={overallProgress}
      recentActivity={recentActivity}
    />
  )
}
