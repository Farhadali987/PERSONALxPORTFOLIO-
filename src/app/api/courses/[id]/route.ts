import { NextResponse } from 'next/server'
import { notFound } from 'next/navigation'
import { prisma } from '@/lib/db'
import { serializePrismaObject } from '@/lib/serialize'

interface RouteContext {
  params: Promise<{ id: string }>
}

export async function GET(request: Request, context: RouteContext) {
  try {
    const { id } = await context.params

    const course = await prisma.course.findUnique({
      where: { id },
      include: {
        lessons: {
          orderBy: { order: 'asc' },
        },
      },
    })

    if (!course) {
      return notFound()
    }

    return NextResponse.json({ course: serializePrismaObject(course) })
  } catch (error) {
    console.error('Course fetch error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
