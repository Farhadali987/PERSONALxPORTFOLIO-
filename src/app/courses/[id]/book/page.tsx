'use client'

import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import { ArrowLeft, ArrowRight, BookOpen, CheckCircle, Circle, ChevronLeft, Menu, X } from 'lucide-react'

interface Chapter {
  id: string
  title: string
  content: string
  order: number
  completed: boolean
}

interface Book {
  id: string
  title: string
  description: string
  courseId: string
  chapters: Chapter[]
}

export default function BookReadingPage() {
  const params = useParams()
  const router = useRouter()
  const courseId = params.id as string

  const [book, setBook] = useState<Book | null>(null)
  const [activeChapter, setActiveChapter] = useState(0)
  const [loading, setLoading] = useState(true)
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [completing, setCompleting] = useState(false)

  useEffect(() => {
    fetch(`/api/courses/${courseId}/book`)
      .then(r => r.json())
      .then(data => {
        if (data.book) setBook(data.book)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [courseId])

  const handleComplete = async () => {
    if (!book) return
    const chapter = book.chapters[activeChapter]
    setCompleting(true)
    try {
      const res = await fetch(`/api/chapters/${chapter.id}/complete`, { method: 'POST' })
      const data = await res.json()
      setBook(prev => {
        if (!prev) return prev
        const chapters = [...prev.chapters]
        chapters[activeChapter] = { ...chapters[activeChapter], completed: data.completed }
        return { ...prev, chapters }
      })
    } catch {}
    setCompleting(false)
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600" />
      </div>
    )
  }

  if (!book) {
    return (
      <div className="text-center py-20">
        <BookOpen className="h-16 w-16 mx-auto text-secondary-400 mb-4" />
        <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-2">No Book Available</h2>
        <p className="text-secondary-600 dark:text-secondary-400 mb-6">This course doesn&apos;t have a book yet.</p>
        <Link href={`/courses/${courseId}`} className="text-primary-600 hover:underline">
          Back to Course
        </Link>
      </div>
    )
  }

  const chapter = book.chapters[activeChapter]
  const completedCount = book.chapters.filter(c => c.completed).length
  const progress = (completedCount / book.chapters.length) * 100

  return (
    <div className="flex flex-col h-[calc(100vh-80px)]">
      {/* Top bar */}
      <div className="flex items-center gap-3 px-4 py-3 border-b border-secondary-200 dark:border-secondary-800 bg-white dark:bg-secondary-950">
        <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-1 hover:bg-secondary-100 dark:hover:bg-secondary-800 rounded">
          {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
        <Link href={`/courses/${courseId}`} className="flex items-center gap-1 text-sm text-secondary-600 dark:text-secondary-400 hover:text-primary-600">
          <ChevronLeft className="h-4 w-4" />
          Back to Course
        </Link>
        <div className="flex-1 text-center">
          <span className="text-sm font-medium text-secondary-900 dark:text-white">{book.title}</span>
        </div>
        <span className="text-xs text-secondary-500">{completedCount}/{book.chapters.length} chapters</span>
      </div>

      {/* Progress bar */}
      <div className="h-1 bg-secondary-200 dark:bg-secondary-800">
        <div className="h-full bg-primary-600 transition-all duration-500" style={{ width: `${progress}%` }} />
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        {sidebarOpen && (
          <aside className="w-72 border-r border-secondary-200 dark:border-secondary-800 overflow-y-auto bg-secondary-50 dark:bg-secondary-900/50 flex-shrink-0">
            <div className="p-4">
              <h3 className="text-sm font-semibold text-secondary-500 dark:text-secondary-400 uppercase tracking-wider mb-3">Chapters</h3>
              <div className="space-y-1">
                {book.chapters.map((ch, i) => (
                  <button
                    key={ch.id}
                    onClick={() => setActiveChapter(i)}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left text-sm transition-colors ${
                      i === activeChapter
                        ? 'bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300'
                        : 'hover:bg-secondary-100 dark:hover:bg-secondary-800 text-secondary-700 dark:text-secondary-300'
                    }`}
                  >
                    {ch.completed ? (
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    ) : (
                      <Circle className="h-4 w-4 text-secondary-400 flex-shrink-0" />
                    )}
                    <span className="truncate">{ch.order}. {ch.title}</span>
                  </button>
                ))}
              </div>
            </div>
          </aside>
        )}

        {/* Main content */}
        <main className="flex-1 overflow-y-auto">
          <article className="max-w-3xl mx-auto px-6 py-8">
            <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:text-secondary-900 dark:prose-headings:text-white prose-p:text-secondary-700 dark:prose-p:text-secondary-300 prose-code:text-primary-600 dark:prose-code:text-primary-400 prose-pre:bg-secondary-900 dark:prose-pre:bg-secondary-950 prose-pre:text-secondary-100">
              <ReactMarkdown>{chapter.content}</ReactMarkdown>
            </div>

            {/* Bottom navigation */}
            <div className="flex items-center justify-between mt-12 pt-6 border-t border-secondary-200 dark:border-secondary-800">
              <button
                onClick={() => setActiveChapter(Math.max(0, activeChapter - 1))}
                disabled={activeChapter === 0}
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium disabled:opacity-30 hover:bg-secondary-100 dark:hover:bg-secondary-800 transition-colors text-secondary-700 dark:text-secondary-300"
              >
                <ArrowLeft className="h-4 w-4" />
                Previous
              </button>

              <button
                onClick={handleComplete}
                disabled={completing}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  chapter.completed
                    ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 hover:bg-green-200 dark:hover:bg-green-900/50'
                    : 'bg-primary-600 text-white hover:bg-primary-700'
                }`}
              >
                <CheckCircle className="h-4 w-4" />
                {chapter.completed ? 'Completed' : 'Mark Complete'}
              </button>

              <button
                onClick={() => setActiveChapter(Math.min(book.chapters.length - 1, activeChapter + 1))}
                disabled={activeChapter === book.chapters.length - 1}
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium disabled:opacity-30 hover:bg-secondary-100 dark:hover:bg-secondary-800 transition-colors text-secondary-700 dark:text-secondary-300"
              >
                Next
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </article>
        </main>
      </div>
    </div>
  )
}
