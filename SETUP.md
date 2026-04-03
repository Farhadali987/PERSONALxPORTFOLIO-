# Portfolio & LMS - Quick Setup Guide

## 🚀 Quick Start (3 Steps)

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Setup Database
```bash
npm run db:generate
npm run db:push
npm run db:seed
```

### Step 3: Start Development Server
```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000)

---

## 📋 Demo Login

- **Email**: `demo@example.com`
- **Password**: `password123`

---

## 🔧 What Each Command Does

### `npm run db:generate`
Generates the Prisma Client from your schema. This creates type-safe database queries.

### `npm run db:push`
Pushes your database schema to the database (creates tables). Uses SQLite by default for easy setup.

### `npm run db:seed`
Populates the database with:
- Demo user account
- 3 complete courses (Python, SQL, Agentic AI)
- 30 lessons total (10 per course)

### `npm run dev`
Starts the Next.js development server with hot reload at http://localhost:3000

---

## 🗄️ Database Configuration

### Using SQLite (Default - Easiest)
Already configured in `.env`:
```env
DATABASE_URL="file:./dev.db"
```

No additional setup needed!

### Using PostgreSQL (Production)
1. Install PostgreSQL locally or use a cloud provider (Supabase, Railway, etc.)
2. Update `.env`:
```env
DATABASE_URL="postgresql://user:password@localhost:5432/portfolio_lms"
```
3. Re-run: `npm run db:push` and `npm run db:seed`

---

## 🌐 GitHub Integration (Optional)

To display your GitHub repositories:

1. Get a Personal Access Token from GitHub:
   - Visit: https://github.com/settings/tokens
   - Create token with `public_repo` scope

2. Update `.env`:
```env
GITHUB_USERNAME="your-github-username"
GITHUB_TOKEN="your-token"
```

3. Restart the dev server

---

## 📁 Your Local Files Integration

### Certificates (PDFs)
Your PDF certificates are already configured in the Certificates page:
- Located in: `D:\My_new_websit\`
- To add more: Copy PDFs to the `public/` folder

### Gallery Images
Your images are already configured in the Gallery page:
- CryptoFleet screenshots
- AI-generated images
- Design mockups

---

## 🛠️ Available Commands

```bash
# Development
npm run dev          # Start dev server at localhost:3000

# Database
npm run db:generate  # Generate Prisma client
npm run db:push      # Sync database schema
npm run db:studio    # Open visual database editor
npm run db:seed      # Seed database with courses

# Production
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npm run lint         # Check code with ESLint
```

---

## 🎨 Customization Tips

### Update Your Name
Edit `src/app/page.tsx` and `src/app/layout.tsx`

### Change Colors
Edit `tailwind.config.ts` - modify the `primary` and `accent` colors

### Add More Courses
Edit `prisma/seed.ts` and add new course data, then run `npm run db:seed`

### Update Skills
Edit `src/data/skills.ts`

---

## 🐛 Troubleshooting

### Port 3000 Already in Use
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Or use a different port
npm run dev -- -p 3001
```

### Database Errors
```bash
# Reset database
rm prisma/dev.db  # or delete the file manually
npm run db:push
npm run db:seed
```

### Module Not Found
```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

---

## 📚 Course Content

All courses are pre-loaded with comprehensive content:

### Python Programming (10 lessons)
From basics to OOP and file handling

### Relational Databases (10 lessons)
SQL fundamentals to advanced concepts

### Agentic AI (10 lessons)
AI agents, LangChain, and autonomous systems

---

## 🎯 Next Steps

1. ✅ Run the setup commands above
2. ✅ Login with demo account
3. ✅ Browse courses and start learning
4. ✅ Customize with your information
5. ✅ Deploy to production (Vercel recommended)

---

## 📧 Need Help?

Check the full README.md for detailed documentation.

**Happy Coding! 🚀**
