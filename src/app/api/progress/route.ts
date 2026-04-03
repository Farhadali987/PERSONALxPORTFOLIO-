import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { getCurrentUser } from '@/lib/auth'
import { serializePrismaObject } from '@/lib/serialize'

export async function POST(request: NextRequest) {
  try {
    const user = await getCurrentUser()

    if (!user) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const formData = await request.formData()
    const lessonId = formData.get('lessonId') as string
    const courseId = formData.get('courseId') as string

    if (!lessonId || !courseId) {
      return NextResponse.json(
        { error: 'Lesson ID and Course ID are required' },
        { status: 400 }
      )
    }

    // Check if enrollment exists
    const enrollment = await prisma.enrollment.findUnique({
      where: {
        userId_courseId: {
          userId: user.id,
          courseId,
        },
      },
    })

    if (!enrollment) {
      // Auto-enroll user
      await prisma.enrollment.create({
        data: {
          userId: user.id,
          courseId,
        },
      })
    }

    // Check if progress exists
    const existingProgress = await prisma.progress.findUnique({
      where: {
        userId_lessonId: {
          userId: user.id,
          lessonId,
        },
      },
    })

    let progress
    if (existingProgress) {
      // Toggle completion status
      progress = await prisma.progress.update({
        where: { id: existingProgress.id },
        data: {
          completed: !existingProgress.completed,
          completedAt: !existingProgress.completed ? new Date() : null,
        },
      })
    } else {
      // Create new progress
      progress = await prisma.progress.create({
        data: {
          userId: user.id,
          lessonId,
          completed: true,
          completedAt: new Date(),
        },
      })
    }

    return NextResponse.json({ success: true, progress: serializePrismaObject(progress) })
  } catch (error) {
    console.error('Progress update error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function GET(request: NextRequest) {
  try {
    const user = await getCurrentUser()

    if (!user) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const { searchParams } = new URL(request.url)
    const courseId = searchParams.get('courseId')

    const progress = await prisma.progress.findMany({
      where: {
        userId: user.id,
        ...(courseId && {
          lesson: {
            courseId,
          },
        }),
      },
      include: {
        lesson: {
          include: {
            course: true,
          },
        },
      },
    })

    return NextResponse.json({ progress: serializePrismaObject(progress) })
  } catch (error) {
    console.error('Progress fetch error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
