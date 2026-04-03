import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { getSession } from '@/lib/auth'

interface RouteContext {
  params: Promise<{ id: string }>
}

export async function GET(request: Request, context: RouteContext) {
  try {
    const { id } = await context.params

    const book = await prisma.book.findFirst({
      where: { courseId: id },
      include: {
        chapters: {
          orderBy: { order: 'asc' },
        },
      },
    })

    if (!book) {
      return NextResponse.json({ error: 'Book not found' }, { status: 404 })
    }

    // Get user's completions if logged in
    const session = await getSession()
    let completedChapterIds: string[] = []

    if (session) {
      const completions = await prisma.chapterCompletion.findMany({
        where: {
          userId: session.userId,
          chapterId: { in: book.chapters.map(c => c.id) },
        },
        select: { chapterId: true },
      })
      completedChapterIds = completions.map(c => c.chapterId)
    }

    return NextResponse.json({
      book: {
        ...book,
        createdAt: book.createdAt.toISOString(),
        updatedAt: book.updatedAt.toISOString(),
        chapters: book.chapters.map(ch => ({
          ...ch,
          createdAt: ch.createdAt.toISOString(),
          updatedAt: ch.updatedAt.toISOString(),
          completed: completedChapterIds.includes(ch.id),
        })),
      },
    })
  } catch (error) {
    console.error('Book fetch error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
