import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 })
    }

    // Save message to a local JSON file
    const messagesDir = path.join(process.cwd(), 'data')
    const messagesFile = path.join(messagesDir, 'messages.json')

    if (!fs.existsSync(messagesDir)) {
      fs.mkdirSync(messagesDir, { recursive: true })
    }

    let messages = []
    if (fs.existsSync(messagesFile)) {
      const content = fs.readFileSync(messagesFile, 'utf-8')
      messages = JSON.parse(content)
    }

    messages.push({
      id: Date.now(),
      name,
      email,
      subject,
      message,
      createdAt: new Date().toISOString(),
    })

    fs.writeFileSync(messagesFile, JSON.stringify(messages, null, 2))

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 })
  }
}
