import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { serializePrismaObject } from '@/lib/serialize'

export async function GET() {
  try {
    const courses = await prisma.course.findMany({
      include: {
        lessons: {
          orderBy: { order: 'asc' },
        },
      },
      orderBy: { createdAt: 'desc' },
    })

    return NextResponse.json({ courses: serializePrismaObject(courses) })
  } catch (error) {
    console.error('Courses fetch error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
