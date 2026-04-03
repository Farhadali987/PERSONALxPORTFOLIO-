import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { getSession } from '@/lib/auth'

interface RouteContext {
  params: Promise<{ id: string }>
}

export async function POST(request: Request, context: RouteContext) {
  try {
    const session = await getSession()
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { id: chapterId } = await context.params

    const chapter = await prisma.chapter.findUnique({
      where: { id: chapterId },
      include: { book: true },
    })

    if (!chapter) {
      return NextResponse.json({ error: 'Chapter not found' }, { status: 404 })
    }

    // Toggle completion
    const existing = await prisma.chapterCompletion.findUnique({
      where: {
        userId_chapterId: {
          userId: session.userId,
          chapterId,
        },
      },
    })

    if (existing) {
      await prisma.chapterCompletion.delete({ where: { id: existing.id } })
      return NextResponse.json({ completed: false })
    }

    await prisma.chapterCompletion.create({
      data: {
        userId: session.userId,
        chapterId,
      },
    })

    return NextResponse.json({ completed: true })
  } catch (error) {
    console.error('Chapter completion error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
