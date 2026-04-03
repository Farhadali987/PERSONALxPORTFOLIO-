# 🚀 Quick Start Guide

## Get Started in 5 Minutes

### 1️⃣ Install Dependencies
```bash
npm install
```

### 2️⃣ Set Up Database
```bash
# This single command will:
# - Generate Prisma Client
# - Push schema to database
# - Seed courses with content
node scripts/setup.js
```

### 3️⃣ Start Development Server
```bash
npm run dev
```

### 4️⃣ Open Your Browser
Navigate to: **http://localhost:3000**

### 5️⃣ Demo Login
- **Email**: `admin@example.com`
- **Password**: `admin123`

---

## 📋 What You Get

### Portfolio Pages
- ✅ Home with hero section and stats
- ✅ About page with experience timeline
- ✅ Skills page with interactive progress bars
- ✅ Projects page (GitHub integration)
- ✅ Certificates page with PDF previews
- ✅ Gallery page with image filtering
- ✅ Contact page with form

### LMS Features
- ✅ 3 complete courses (Python, SQL, Agentic AI)
- ✅ 28 total lessons with Markdown content
- ✅ User authentication (signup/login)
- ✅ Progress tracking
- ✅ User dashboard
- ✅ Course enrollment system
- ✅ Achievement badges

---

## 🎯 Key URLs

| Page | URL |
|------|-----|
| Home | http://localhost:3000 |
| Courses | http://localhost:3000/courses |
| Python Course | http://localhost:3000/courses/python-basics |
| SQL Course | http://localhost:3000/courses/relational-databases |
| AI Course | http://localhost:3000/courses/agentic-ai |
| Dashboard | http://localhost:3000/dashboard |
| Projects | http://localhost:3000/projects |
| Certificates | http://localhost:3000/certificates |
| Gallery | http://localhost:3000/gallery |
| Contact | http://localhost:3000/contact |

---

## 🔧 Troubleshooting

### Database Issues
```bash
# Reset database
rm dev.db  # or del dev.db on Windows
npx prisma db push
npm run db:seed
```

### Port Already in Use
```bash
# Kill process on port 3000
# Windows:
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Or use a different port:
npm run dev -- -p 3001
```

### Module Not Found
```bash
# Clear cache and reinstall
rm -rf node_modules .next
npm install
npx prisma generate
```

---

## 📚 Adding Your Content

### Update GitHub Username
Edit `.env`:
```env
GITHUB_USERNAME="your-username"
```

### Add Your Certificates
1. Copy PDF files to `public/` folder
2. Edit `src/app/certificates/page.tsx`
3. Add your certificate details

### Add Gallery Images
1. Copy images to `public/` folder
2. Edit `src/app/gallery/page.tsx`
3. Add your image paths

### Update Skills
Edit `src/data/skills.ts`:
```typescript
export const skills: Skill[] = [
  { name: 'Your Skill', category: 'Frontend', level: 85, icon: 'code' },
  // Add more skills
]
```

---

## 🎨 Customization Tips

### Change Theme Colors
Edit `src/app/globals.css`:
```css
:root {
  --primary: 221.2 83.2% 53.3%;  /* Blue */
  /* Change to your color */
}
```

### Update Site Metadata
Edit `src/app/layout.tsx`:
```typescript
export const metadata: Metadata = {
  title: 'Your Name | Portfolio & LMS',
  description: 'Your description',
}
```

### Add More Courses
Edit `prisma/seed.ts` and run:
```bash
npm run db:seed
```

---

## 📞 Need Help?

Check the full README.md for detailed documentation.

**Happy Coding! 🎉**
